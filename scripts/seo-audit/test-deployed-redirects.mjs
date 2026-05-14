#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const PUBLIC_ORIGIN = "https://www.woodinvillesportsclub.com";
const OUTPUT_DIR = path.resolve("scripts/seo-audit/output");
const REDIRECT_DETAILS_PATH = path.join(OUTPUT_DIR, "redirect-map-details.json");
const VERCEL_CONFIG_PATH = path.resolve("vercel.json");
const SITEMAP_PATH = path.resolve("client/public/sitemap.xml");

function parseArgs(argv) {
  const args = {
    baseUrl: process.env.DEPLOY_BASE_URL || PUBLIC_ORIGIN,
    timeoutMs: Number(process.env.SEO_TEST_TIMEOUT_MS || 15_000),
    concurrency: Number(process.env.SEO_TEST_CONCURRENCY || 6),
    localSimulate: false,
    outputPrefix: "deployed-redirect-test",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--base-url") args.baseUrl = argv[++index];
    else if (arg.startsWith("--base-url=")) args.baseUrl = arg.slice("--base-url=".length);
    else if (arg === "--timeout-ms") args.timeoutMs = Number(argv[++index]);
    else if (arg.startsWith("--timeout-ms=")) args.timeoutMs = Number(arg.slice("--timeout-ms=".length));
    else if (arg === "--concurrency") args.concurrency = Number(argv[++index]);
    else if (arg.startsWith("--concurrency=")) args.concurrency = Number(arg.slice("--concurrency=".length));
    else if (arg === "--local-simulate") args.localSimulate = true;
    else if (arg === "--output-prefix") args.outputPrefix = argv[++index];
    else if (arg.startsWith("--output-prefix=")) args.outputPrefix = arg.slice("--output-prefix=".length);
    else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }
  }

  args.baseUrl = normalizeOrigin(args.baseUrl);
  if (!Number.isFinite(args.timeoutMs) || args.timeoutMs < 1_000) args.timeoutMs = 15_000;
  if (!Number.isFinite(args.concurrency) || args.concurrency < 1) args.concurrency = 6;
  return args;
}

function printHelp() {
  console.log(`Usage:
  DEPLOY_BASE_URL=https://your-vercel-preview.vercel.app pnpm seo:test-deployed
  DEPLOY_BASE_URL=https://www.woodinvillesportsclub.com pnpm seo:test-deployed
  DEPLOY_BASE_URL=http://localhost:4173 pnpm seo:test-deployed -- --local-simulate

Options:
  --base-url <url>       Deployed origin to test. Defaults to ${PUBLIC_ORIGIN}
  --local-simulate       Do not expect local Express to perform Vercel redirects; validate redirect config and destination pages instead.
  --timeout-ms <number>  Per-request timeout. Default 15000.
  --concurrency <num>    Concurrent request count. Default 6.
  --output-prefix <name> Output file prefix under scripts/seo-audit/output/.
`);
}

function normalizeOrigin(value) {
  const url = new URL(value);
  return url.origin;
}

function toBaseUrl(publicUrl, baseOrigin) {
  if (!publicUrl) return "";
  const url = new URL(publicUrl, PUBLIC_ORIGIN);
  if (url.origin === PUBLIC_ORIGIN) return `${baseOrigin}${url.pathname}${url.search}${url.hash}`;
  return url.toString();
}

function requestUrlForOldUrl(oldUrl, baseOrigin) {
  const url = new URL(oldUrl);
  return `${baseOrigin}${url.pathname}${url.search}`;
}

function normalizeComparableUrl(value) {
  if (!value) return "";
  const url = new URL(value);
  url.hash = "";
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
  }
  return url.toString();
}

function isInternal(url) {
  try {
    return new URL(url).origin === PUBLIC_ORIGIN;
  } catch {
    return false;
  }
}

async function fetchHeaders(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "manual",
      signal: controller.signal,
      headers: {
        "User-Agent": "WSC SEO deployed redirect tester",
        "Cache-Control": "no-cache",
      },
    });

    return {
      ok: true,
      status: response.status,
      location: response.headers.get("location")
        ? new URL(response.headers.get("location"), url).toString()
        : "",
      contentType: response.headers.get("content-type") || "",
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      location: "",
      contentType: "",
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function runPool(items, concurrency, task) {
  const results = [];
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await task(items[currentIndex], currentIndex);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  );
  return results;
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function loadSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

function vercelRedirectBySource(vercelConfig) {
  return new Map((vercelConfig.redirects ?? []).map((redirect) => [redirect.source, redirect]));
}

async function testRedirectRow(row, context) {
  const requestUrl = requestUrlForOldUrl(row.old_url, context.baseUrl);
  const publicExpectedUrl = row.match_type === "redirect-needed" ? row.new_url : row.old_url;
  const expectedUrl = toBaseUrl(publicExpectedUrl, context.baseUrl);
  const isRedirect = row.match_type === "redirect-needed";
  const expectedStatus = isRedirect ? "301/308" : "200";
  let actual;
  let configRedirect = null;
  let notes = "";

  if (context.localSimulate && isRedirect) {
    const sourcePath = new URL(row.old_url).pathname;
    configRedirect = context.redirectsBySource.get(sourcePath);
    actual = {
      ok: Boolean(configRedirect),
      status: configRedirect ? 301 : 0,
      location: configRedirect
        ? toBaseUrl(configRedirect.destination, context.baseUrl)
        : "",
      contentType: "simulated/local",
    };
    notes = "local simulated Vercel redirect";
  } else {
    actual = await fetchHeaders(requestUrl, context.timeoutMs);
  }

  const actualLocation = actual.location;
  let destinationStatus = "";

  if (isRedirect) {
    if (isInternal(publicExpectedUrl)) {
      const target = await fetchHeaders(expectedUrl, context.timeoutMs);
      destinationStatus = target.status;
    } else {
      destinationStatus = "external";
    }
  } else {
    destinationStatus = actual.status;
  }

  const statusPass = isRedirect
    ? [301, 308].includes(actual.status)
    : actual.status === 200;
  const locationPass = isRedirect
    ? normalizeComparableUrl(actualLocation) === normalizeComparableUrl(expectedUrl)
    : true;
  const destinationPass = isRedirect
    ? destinationStatus === 200 || destinationStatus === "external"
    : destinationStatus === 200;
  const configPass = !context.localSimulate || !isRedirect || configRedirect?.permanent === true;
  const pass = statusPass && locationPass && destinationPass && configPass;

  return {
    old_url: row.old_url,
    request_url: requestUrl,
    match_type: row.match_type,
    expected_status: expectedStatus,
    actual_status: actual.status,
    expected_location: isRedirect ? expectedUrl : "",
    actual_location: actualLocation,
    destination_status: destinationStatus,
    pass,
    notes: actual.error || notes,
  };
}

async function testPublicUrl(publicUrl, context) {
  const requestUrl = toBaseUrl(publicUrl, context.baseUrl);
  const response = await fetchHeaders(requestUrl, context.timeoutMs);
  return {
    public_url: publicUrl,
    request_url: requestUrl,
    expected_status: 200,
    actual_status: response.status,
    pass: response.status === 200,
    notes: response.error || "",
  };
}

async function testSpecialChecks(context) {
  const checks = [];

  const robotsUrl = `${context.baseUrl}/robots.txt`;
  const robots = await fetch(robotsUrl, {
    redirect: "manual",
    headers: { "User-Agent": "WSC SEO deployed redirect tester" },
  })
    .then(async (response) => ({
      status: response.status,
      text: await response.text(),
    }))
    .catch((error) => ({ status: 0, text: "", error: error.message }));
  checks.push({
    name: "robots.txt",
    request_url: robotsUrl,
    expected: "200, Allow: /, no Disallow: /",
    actual: robots.status,
    pass:
      robots.status === 200 &&
      /Allow:\s*\//.test(robots.text) &&
      !/Disallow:\s*\//.test(robots.text),
    notes: robots.error || "",
  });

  const sitemapUrl = `${context.baseUrl}/sitemap.xml`;
  const sitemap = await fetchHeaders(sitemapUrl, context.timeoutMs);
  checks.push({
    name: "sitemap.xml",
    request_url: sitemapUrl,
    expected: "200",
    actual: sitemap.status,
    pass: sitemap.status === 200,
    notes: sitemap.error || "",
  });

  const notFoundPath = `/__wsc-seo-404-check-${Date.now()}`;
  const notFound = await fetchHeaders(`${context.baseUrl}${notFoundPath}`, context.timeoutMs);
  checks.push({
    name: "404 status",
    request_url: `${context.baseUrl}${notFoundPath}`,
    expected: "404",
    actual: notFound.status,
    pass: notFound.status === 404,
    notes: notFound.error || "",
  });

  return checks;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const [redirectDetails, vercelConfig, sitemapXml] = await Promise.all([
    fs.readFile(REDIRECT_DETAILS_PATH, "utf8").then(JSON.parse),
    fs.readFile(VERCEL_CONFIG_PATH, "utf8").then(JSON.parse),
    fs.readFile(SITEMAP_PATH, "utf8"),
  ]);

  const context = {
    ...args,
    redirectsBySource: vercelRedirectBySource(vercelConfig),
  };

  const oldRows = redirectDetails.rows.filter((row) => row.old_url);
  const publicUrls = loadSitemapUrls(sitemapXml);

  const redirectTests = await runPool(oldRows, args.concurrency, (row) =>
    testRedirectRow(row, context),
  );
  const publicUrlTests = await runPool(publicUrls, args.concurrency, (url) =>
    testPublicUrl(url, context),
  );
  const specialChecks = await testSpecialChecks(context);

  const failures = [
    ...redirectTests.filter((test) => !test.pass).map((test) => ({
      type: "redirect",
      url: test.request_url,
      expected: `${test.expected_status} ${test.expected_location}`.trim(),
      actual: `${test.actual_status} ${test.actual_location}`.trim(),
      notes: test.notes,
    })),
    ...publicUrlTests.filter((test) => !test.pass).map((test) => ({
      type: "public-url",
      url: test.request_url,
      expected: test.expected_status,
      actual: test.actual_status,
      notes: test.notes,
    })),
    ...specialChecks.filter((test) => !test.pass).map((test) => ({
      type: "special",
      url: test.request_url,
      expected: test.expected,
      actual: test.actual,
      notes: test.notes,
    })),
  ];

  const result = {
    generated_at: new Date().toISOString(),
    mode: args.localSimulate ? "local-simulate" : "deployed-http",
    base_url: args.baseUrl,
    counts: {
      redirect_tests: redirectTests.length,
      public_url_tests: publicUrlTests.length,
      special_checks: specialChecks.length,
      failures: failures.length,
    },
    failures,
    redirect_tests: redirectTests,
    public_url_tests: publicUrlTests,
    special_checks: specialChecks,
  };

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUTPUT_DIR, `${args.outputPrefix}.json`),
    `${JSON.stringify(result, null, 2)}\n`,
    "utf8",
  );

  await fs.writeFile(
    path.join(OUTPUT_DIR, `${args.outputPrefix}.csv`),
    [
      "type,url,expected_status,actual_status,expected_location,actual_location,destination_status,pass,notes",
      ...redirectTests.map((test) =>
        [
          "redirect",
          test.request_url,
          test.expected_status,
          test.actual_status,
          test.expected_location,
          test.actual_location,
          test.destination_status,
          test.pass,
          test.notes,
        ]
          .map(csvEscape)
          .join(","),
      ),
      ...publicUrlTests.map((test) =>
        [
          "public-url",
          test.request_url,
          test.expected_status,
          test.actual_status,
          "",
          "",
          "",
          test.pass,
          test.notes,
        ]
          .map(csvEscape)
          .join(","),
      ),
      ...specialChecks.map((test) =>
        [
          "special",
          test.request_url,
          test.expected,
          test.actual,
          "",
          "",
          "",
          test.pass,
          test.notes,
        ]
          .map(csvEscape)
          .join(","),
      ),
    ].join("\n") + "\n",
    "utf8",
  );

  console.log(
    JSON.stringify(
      {
        mode: result.mode,
        base_url: result.base_url,
        redirect_tests: result.counts.redirect_tests,
        public_url_tests: result.counts.public_url_tests,
        special_checks: result.counts.special_checks,
        failures: result.counts.failures,
        json: path.join(OUTPUT_DIR, `${args.outputPrefix}.json`),
        csv: path.join(OUTPUT_DIR, `${args.outputPrefix}.csv`),
      },
      null,
      2,
    ),
  );

  if (failures.length > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
