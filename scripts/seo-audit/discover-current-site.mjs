import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_URL = "https://www.woodinvillesportsclub.com";
const HOSTS = new Set(["www.woodinvillesportsclub.com", "woodinvillesportsclub.com"]);
const OUT_DIR = path.resolve(process.cwd(), "scripts/seo-audit/output");
const USER_AGENT = "Codex WSC SEO audit (+https://github.com/Filipp-Pogo/wsc-website)";
const THROTTLE_MS = 1000;
const MAX_CRAWL_DEPTH = 5;

const SITEMAP_CANDIDATES = [
  "/sitemap.xml",
  "/sitemap-index.xml",
  "/sitemap_index.xml",
  "/pages-sitemap.xml",
  "/blog-posts-sitemap.xml",
  "/sitemap-index.xml.gz",
  "/sitemap_index.xml.gz",
  "/sitemap-pages.xml",
  "/sitemap-posts.xml",
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function decodeEntities(value = "") {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(Number.parseInt(num, 10)));
}

function normalizeUrl(value, base = BASE_URL) {
  try {
    const normalized = decodeEntities(value)
      .replace(/\\u002F/g, "/")
      .replace(/\\\//g, "/")
      .replace(/^\/\//, "https://")
      .trim();
    const url = new URL(normalized, base);
    url.hash = "";
    return url.toString();
  } catch {
    return "";
  }
}

function isSameDomain(url) {
  try {
    return HOSTS.has(new URL(url).hostname);
  } catch {
    return false;
  }
}

function canonicalizeForQueue(url) {
  const parsed = new URL(url);
  parsed.hash = "";
  return parsed.toString();
}

function extractLocs(xml) {
  const locs = [];
  const pattern = /<loc>([\s\S]*?)<\/loc>/gi;
  let match;
  while ((match = pattern.exec(xml))) {
    const url = normalizeUrl(match[1]);
    if (url) locs.push(url);
  }
  return locs;
}

function stripNoise(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ");
}

function textFromHtml(html) {
  return decodeEntities(
    stripNoise(html)
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function mainContentText(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  return textFromHtml(main ?? body);
}

function wordCount(text) {
  if (!text) return 0;
  return text.split(/\s+/).filter((word) => /[A-Za-z0-9]/.test(word)).length;
}

function titleFromHtml(html) {
  return decodeEntities(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() ?? "");
}

function attrValue(tag, attr) {
  const escaped = attr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`${escaped}\\s*=\\s*"([^"]*)"`, "i"),
    new RegExp(`${escaped}\\s*=\\s*'([^']*)'`, "i"),
  ];
  for (const pattern of patterns) {
    const match = tag.match(pattern);
    if (match?.[1] !== undefined) return decodeEntities(match[1].trim());
  }
  return "";
}

function extractMeta(html, key) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  for (const tag of tags) {
    const name = attrValue(tag, "name").toLowerCase();
    const property = attrValue(tag, "property").toLowerCase();
    if (name === key.toLowerCase() || property === key.toLowerCase()) {
      return attrValue(tag, "content");
    }
  }
  return "";
}

function extractOgTags(html) {
  const og = {};
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  for (const tag of tags) {
    const property = attrValue(tag, "property");
    if (property.toLowerCase().startsWith("og:")) {
      og[property] = attrValue(tag, "content");
    }
  }
  return og;
}

function extractCanonical(html, baseUrl) {
  const links = html.match(/<link\b[^>]*>/gi) ?? [];
  for (const link of links) {
    const rel = attrValue(link, "rel").toLowerCase();
    if (rel.split(/\s+/).includes("canonical")) {
      return normalizeUrl(attrValue(link, "href"), baseUrl);
    }
  }
  return "";
}

function extractH1(html) {
  const h1s = [];
  const pattern = /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi;
  let match;
  while ((match = pattern.exec(html))) {
    const text = textFromHtml(match[1]);
    if (text) h1s.push(text);
  }
  return h1s;
}

function extractLinks(html, baseUrl) {
  const links = new Set();
  const pattern = /<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = pattern.exec(html))) {
    const href = match[1];
    if (/^(mailto:|tel:|javascript:|#)/i.test(href)) continue;
    const url = normalizeUrl(href, baseUrl);
    if (url && isSameDomain(url)) links.add(canonicalizeForQueue(url));
  }
  return [...links].sort();
}

function parseRobots(robotsText) {
  const disallows = [];
  let applies = false;
  for (const rawLine of robotsText.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*/, "").trim();
    if (!line) continue;
    const [rawKey, ...rawValue] = line.split(":");
    const key = rawKey.trim().toLowerCase();
    const value = rawValue.join(":").trim();
    if (key === "user-agent") {
      applies = value === "*" || value.toLowerCase().includes("codex");
    } else if (applies && key === "disallow" && value) {
      disallows.push(value);
    }
  }
  return {
    isAllowed(url) {
      const { pathname } = new URL(url);
      return !disallows.some((rule) => rule !== "/" && pathname.startsWith(rule));
    },
  };
}

async function fetchWithMeta(url, accept = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") {
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": USER_AGENT,
      accept,
    },
  });
  const contentType = response.headers.get("content-type") ?? "";
  const text = await response.text();
  return {
    requestedUrl: url,
    finalUrl: response.url,
    status: response.status,
    ok: response.ok,
    contentType,
    text,
  };
}

async function fetchRobots() {
  try {
    const response = await fetchWithMeta(`${BASE_URL}/robots.txt`, "text/plain,*/*;q=0.8");
    await writeFile(path.join(OUT_DIR, "robots.txt"), response.text);
    return response.text;
  } catch (error) {
    const fallback = "";
    await writeFile(path.join(OUT_DIR, "robots.txt"), fallback);
    console.warn(`Failed to fetch robots.txt: ${error.message}`);
    return fallback;
  }
}

async function discoverFromSitemaps() {
  const pageUrls = new Set();
  const sitemapUrls = [];
  const seenSitemaps = new Set();
  const queue = SITEMAP_CANDIDATES.map((candidate) => normalizeUrl(candidate));

  while (queue.length) {
    const sitemapUrl = queue.shift();
    if (!sitemapUrl || seenSitemaps.has(sitemapUrl)) continue;
    seenSitemaps.add(sitemapUrl);

    let fetched;
    try {
      fetched = await fetchWithMeta(sitemapUrl, "application/xml,text/xml,text/html;q=0.9,*/*;q=0.8");
    } catch (error) {
      sitemapUrls.push({ url: sitemapUrl, status: "fetch-error", error: error.message });
      continue;
    }

    sitemapUrls.push({ url: sitemapUrl, finalUrl: fetched.finalUrl, status: fetched.status });
    if (!fetched.ok) continue;

    const locs = extractLocs(fetched.text);
    for (const loc of locs) {
      if (!isSameDomain(loc)) continue;
      const isXml = /\.xml(?:$|[?#])/i.test(new URL(loc).pathname) || loc.includes("sitemap");
      if (isXml) queue.push(loc);
      else pageUrls.add(canonicalizeForQueue(loc));
    }

    await sleep(THROTTLE_MS);
  }

  await writeFile(path.join(OUT_DIR, "sitemaps.json"), JSON.stringify({ sitemapUrls, pageUrls: [...pageUrls].sort() }, null, 2));
  return [...pageUrls].sort();
}

async function discoverByCrawl(robots) {
  const policy = parseRobots(robots);
  const discovered = new Set();
  const seen = new Set();
  const queue = [{ url: BASE_URL, depth: 0 }];

  while (queue.length) {
    const { url, depth } = queue.shift();
    const normalized = canonicalizeForQueue(url);
    if (seen.has(normalized) || depth > MAX_CRAWL_DEPTH || !policy.isAllowed(normalized)) continue;
    seen.add(normalized);

    let fetched;
    try {
      fetched = await fetchWithMeta(normalized);
    } catch {
      continue;
    }

    if (fetched.ok && fetched.contentType.includes("text/html")) {
      discovered.add(canonicalizeForQueue(fetched.finalUrl));
      if (depth < MAX_CRAWL_DEPTH) {
        for (const link of extractLinks(fetched.text, fetched.finalUrl)) {
          if (!seen.has(link)) queue.push({ url: link, depth: depth + 1 });
        }
      }
    }

    await sleep(THROTTLE_MS);
  }

  return [...discovered].sort();
}

function pageRecordFromFetch(sourceUrl, fetched) {
  const html = fetched.text ?? "";
  const contentText = fetched.contentType.includes("text/html") ? mainContentText(html) : "";
  const ogTags = fetched.contentType.includes("text/html") ? extractOgTags(html) : {};
  return {
    source_url: sourceUrl,
    final_url: fetched.finalUrl || "",
    http_status: fetched.status,
    title: fetched.contentType.includes("text/html") ? titleFromHtml(html) : "",
    meta_description: fetched.contentType.includes("text/html") ? extractMeta(html, "description") : "",
    h1_text: fetched.contentType.includes("text/html") ? extractH1(html).join(" | ") : "",
    canonical_url: fetched.contentType.includes("text/html") ? extractCanonical(html, fetched.finalUrl || sourceUrl) : "",
    og_tags: ogTags,
    word_count: wordCount(contentText),
  };
}

function csvEscape(value) {
  const stringValue = typeof value === "string" ? value : JSON.stringify(value ?? "");
  return `"${stringValue.replace(/"/g, '""')}"`;
}

function toCsv(records) {
  const headers = [
    "source_url",
    "final_url",
    "http_status",
    "title",
    "meta_description",
    "h1_text",
    "canonical_url",
    "og_tags",
    "word_count",
  ];
  const rows = [headers.join(",")];
  for (const record of records) {
    rows.push(headers.map((header) => csvEscape(record[header])).join(","));
  }
  return `${rows.join("\n")}\n`;
}

async function auditUrls(urls) {
  const records = [];
  for (const url of urls) {
    try {
      const fetched = await fetchWithMeta(url);
      records.push(pageRecordFromFetch(url, fetched));
    } catch (error) {
      records.push({
        source_url: url,
        final_url: "",
        http_status: "fetch-error",
        title: "",
        meta_description: "",
        h1_text: "",
        canonical_url: "",
        og_tags: {},
        word_count: 0,
        error: error.message,
      });
    }
    await sleep(THROTTLE_MS);
  }
  return records;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const robots = await fetchRobots();
  let discoveredUrls = await discoverFromSitemaps();
  const discoveryMethod = discoveredUrls.length ? "sitemap" : "crawl";

  if (!discoveredUrls.length) {
    discoveredUrls = await discoverByCrawl(robots);
  }

  const records = await auditUrls(discoveredUrls);
  const output = {
    generated_at: new Date().toISOString(),
    base_url: BASE_URL,
    discovery_method: discoveryMethod,
    url_count: records.length,
    records,
  };

  await writeFile(path.join(OUT_DIR, "current-urls.json"), JSON.stringify(output, null, 2));
  await writeFile(path.join(OUT_DIR, "current-urls.csv"), toCsv(records));

  console.log(JSON.stringify({
    discoveryMethod,
    urlCount: records.length,
    outputDir: OUT_DIR,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
