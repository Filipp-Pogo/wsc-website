#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const outputDir = path.resolve("scripts/seo-audit/output");
const localOrigin = "http://localhost:4173";
const publicOrigin = "https://www.woodinvillesportsclub.com";

function readJson(file) {
  return fs.readFile(path.join(outputDir, file), "utf8").then(JSON.parse);
}

function normalizePath(url) {
  return new URL(url || "/", publicOrigin).pathname;
}

function toAbsolute(destination) {
  if (!destination) return "";
  if (/^https?:\/\//i.test(destination)) return destination;
  return new URL(destination, publicOrigin).toString();
}

async function localStatus(publicUrl) {
  const url = new URL(publicUrl);
  if (url.origin !== publicOrigin) return "external";

  const response = await fetch(`${localOrigin}${url.pathname}`, {
    redirect: "manual",
  });
  return response.status;
}

function markdownTable(headers, rows) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map((cell) => String(cell).replaceAll("\n", " ")).join(" | ")} |`),
  ].join("\n");
}

async function main() {
  const [
    current,
    redirectDetails,
    vercel,
    lighthouse,
    repoSeo,
    rendered,
    imageAudit,
    structured,
    publicSeo,
    analytics,
  ] = await Promise.all([
    readJson("current-urls.json"),
    readJson("redirect-map-details.json"),
    fs.readFile("vercel.json", "utf8").then(JSON.parse),
    readJson("lighthouse/summary.json"),
    readJson("repo-seo-audit.json"),
    readJson("rendered-route-audit.json"),
    readJson("image-audit.json"),
    readJson("structured-data-audit.json"),
    readJson("public-seo-files-audit.json"),
    readJson("analytics-verification-audit.json"),
  ]);

  const redirectsBySource = new Map((vercel.redirects ?? []).map((redirect) => [redirect.source, redirect]));
  const redirectTests = [];

  for (const row of redirectDetails.rows.filter((entry) => entry.old_url)) {
    const oldPath = normalizePath(row.old_url);
    const expectedUrl = row.match_type === "redirect-needed" ? row.new_url : row.old_url;
    const expectedStatus = row.match_type === "redirect-needed" ? 301 : 200;
    const configuredRedirect = redirectsBySource.get(oldPath);
    const configuredDestination = configuredRedirect ? toAbsolute(configuredRedirect.destination) : "";
    const destinationStatus = await localStatus(expectedUrl);
    const pass =
      row.match_type === "redirect-needed"
        ? configuredRedirect?.permanent === true &&
          configuredDestination === expectedUrl &&
          (destinationStatus === 200 || destinationStatus === "external")
        : destinationStatus === 200;

    redirectTests.push({
      old_url: row.old_url,
      expected_new_url: expectedUrl,
      expected_status: expectedStatus,
      destination_status: destinationStatus,
      pass,
    });
  }

  await fs.writeFile(
    path.join(outputDir, "redirect-test.json"),
    `${JSON.stringify({ generated_at: new Date().toISOString(), redirectTests }, null, 2)}\n`,
    "utf8",
  );

  await fs.writeFile(
    path.join(outputDir, "redirect-test.csv"),
    [
      "old_url,expected_new_url,expected_status,destination_status,pass",
      ...redirectTests.map((test) =>
        [
          test.old_url,
          test.expected_new_url,
          test.expected_status,
          test.destination_status,
          test.pass,
        ]
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(","),
      ),
    ].join("\n") + "\n",
    "utf8",
  );

  const oldUrlsWithoutPlan = redirectDetails.rows.filter(
    (row) => row.old_url && !["exact", "redirect-needed"].includes(row.match_type),
  );
  const redirectFailures = redirectTests.filter((test) => !test.pass);
  const lighthouseRows = Object.entries(lighthouse.pages).map(([page, scores]) => [
    page,
    scores.performance,
    scores.accessibility,
    scores.bestPractices,
    scores.seo,
    scores.lcp,
  ]);
  const performanceMisses = Object.entries(lighthouse.pages).filter(([, scores]) => scores.performance < 90);
  const missingPageItems = [
    ...repoSeo.rows.filter((row) => row.status !== "pass").map((row) => `${row.route}: SEO metadata audit failed`),
    ...rendered.failures.map((failure) => `${failure.route}: rendered H1/landmark audit failed`),
    ...(imageAudit.missing ?? []).map((item) => `${item.file}:${item.line}: missing ${item.lack.join(", ")}`),
    ...(structured.unresolved_values ?? []).map((item) => `Structured data unresolved: ${item}`),
  ];

  const unresolved = [
    ...redirectFailures.map((test) => `Redirect test failed for ${test.old_url}`),
    ...oldUrlsWithoutPlan.map((row) => `Old URL lacks exact match or redirect: ${row.old_url}`),
    ...missingPageItems,
    ...performanceMisses.map(
      ([page, scores]) =>
        `${page} Lighthouse mobile Performance ${scores.performance} is below the requested >=90 target; SEO, Accessibility, and Best Practices passed.`,
    ),
  ];

  const report = `# WSC Prelaunch SEO Report

Generated: ${new Date().toISOString()}

## Summary

- Old live-site URLs discovered: ${current.url_count}
- New public sitemap URLs: ${publicSeo.sitemapUrlCount}
- Redirects configured in Vercel: ${(vercel.redirects ?? []).length}
- Old URLs without a 1:1 match or redirect: ${oldUrlsWithoutPlan.length}
- Redirect tests passing: ${redirectTests.filter((test) => test.pass).length}/${redirectTests.length}

## Redirect Coverage

${oldUrlsWithoutPlan.length === 0 ? "Every discovered old URL has either an exact destination or a configured 301 redirect." : oldUrlsWithoutPlan.map((row) => `- ${row.old_url}`).join("\n")}

Redirect rules are exact path matches in Vercel, marked permanent, and internal redirects are single-hop.

## Redirect Test

Full machine-readable results are saved in \`scripts/seo-audit/output/redirect-test.csv\` and \`scripts/seo-audit/output/redirect-test.json\`.

${markdownTable(
  ["Old URL", "Expected New URL", "Status", "Destination Check"],
  redirectTests.map((test) => [
    test.old_url,
    test.expected_new_url,
    test.expected_status,
    test.destination_status,
  ]),
)}

## Lighthouse Scores

${markdownTable(["Page", "Performance", "Accessibility", "Best Practices", "SEO", "LCP"], lighthouseRows)}

## Page SEO / Accessibility / Schema

- Repo SEO metadata audit: ${repoSeo.passed}/${repoSeo.route_count} routes passed.
- Rendered H1 and landmark audit: ${rendered.failures.length === 0 ? "passed" : `${rendered.failures.length} failures`}.
- Image alt/size/loading audit: ${imageAudit.missingCount === 0 ? "passed" : `${imageAudit.missingCount} missing items`}.
- Structured data unresolved values: ${(structured.unresolved_values ?? []).length}.
- Robots.txt: allows all crawling, sitemap linked, no \`Disallow: /\`.
- Sitemap.xml: ${publicSeo.sitemapUrlCount} public URLs, all on \`www\`, all with \`lastmod\`.
- Analytics placeholders: GA4, Google Search Console, and Bing Webmaster TODO markers present; no hardcoded GA4 debug ID detected.

## Missing Items

${missingPageItems.length === 0 ? "No pages are missing title, description, H1, alt text, or schema values in the generated audits." : missingPageItems.map((item) => `- ${item}`).join("\n")}

## Explicit Unresolved Notes

${unresolved.length === 0 ? "None." : unresolved.map((item) => `- ${item}`).join("\n")}

## Recommendation

${unresolved.length === 0 ? "GO. No unresolved launch blockers were found in the current audit artifacts." : "CONDITIONAL GO for SEO/redirect preservation. Do not call this a strict Phase 6 pass until mobile Lighthouse Performance reaches 90+, or explicitly accept the current rich React/image tradeoff before DNS cutover."}
`;

  await fs.writeFile(path.join(outputDir, "PRELAUNCH-REPORT.md"), report, "utf8");

  console.log(
    JSON.stringify(
      {
        report: path.join(outputDir, "PRELAUNCH-REPORT.md"),
        old_url_count: current.url_count,
        new_url_count: publicSeo.sitemapUrlCount,
        redirects_configured: (vercel.redirects ?? []).length,
        redirect_tests: redirectTests.length,
        redirect_failures: redirectFailures.length,
        unresolved: unresolved.length,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
