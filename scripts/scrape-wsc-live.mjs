import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_URL = "https://www.woodinvillesportsclub.com";
const OUT_DIR = path.resolve(process.cwd(), ".scrape", "woodinvillesportsclub.com");
const PAGE_DIR = path.join(OUT_DIR, "pages");
const IMAGE_DIR = path.join(OUT_DIR, "images");
const USER_AGENT = "Codex WSC deployment audit (+https://github.com/Filipp-Pogo/wsc-website)";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function decodeEntities(value) {
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

function textContent(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  return decodeEntities(
    body
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function extractTags(html, tagName) {
  const tags = [];
  const pattern = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "gi");
  let match;
  while ((match = pattern.exec(html))) {
    const text = decodeEntities(match[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
    if (text) tags.push(text);
  }
  return tags;
}

function extractMeta(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`<meta\\b(?=[^>]*(?:name|property)=["']${escaped}["'])(?=[^>]*content=["']([^"']*)["'])[^>]*>`, "i"),
    new RegExp(`<meta\\b(?=[^>]*content=["']([^"']*)["'])(?=[^>]*(?:name|property)=["']${escaped}["'])[^>]*>`, "i"),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return decodeEntities(match[1].trim());
  }
  return "";
}

function normalizeUrl(value, base = BASE_URL) {
  try {
    const normalized = decodeEntities(value)
      .replace(/\\u002F/g, "/")
      .replace(/\\\//g, "/")
      .replace(/^\/\//, "https://")
      .trim();
    return new URL(normalized, base).toString();
  } catch {
    return "";
  }
}

function normalizeWixImage(url) {
  const normalized = normalizeUrl(url);
  if (!normalized) return "";

  const parsed = new URL(normalized);
  if (parsed.hostname !== "static.wixstatic.com") return normalized;

  const parts = parsed.pathname.split("/");
  const mediaIndex = parts.indexOf("media");
  if (mediaIndex === -1 || !parts[mediaIndex + 1]) return normalized;

  parsed.pathname = `/media/${parts[mediaIndex + 1]}`;
  parsed.search = "";
  parsed.hash = "";
  return parsed.toString();
}

function slugForUrl(url) {
  const parsed = new URL(url);
  const slug = parsed.pathname.replace(/^\/+|\/+$/g, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
  return slug || "home";
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

function extractLinks(html, baseUrl) {
  const links = new Set();
  const pattern = /<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = pattern.exec(html))) {
    const url = normalizeUrl(match[1], baseUrl);
    if (!url) continue;
    const parsed = new URL(url);
    if (parsed.hostname === "www.woodinvillesportsclub.com" || parsed.hostname === "woodinvillesportsclub.com") {
      parsed.hash = "";
      links.add(parsed.toString());
    }
  }
  return [...links].sort();
}

function extractImages(html) {
  const images = new Set();
  const expanded = decodeEntities(html)
    .replace(/\\u002F/g, "/")
    .replace(/\\\//g, "/");
  const patterns = [
    /https?:\/\/static\.wixstatic\.com\/[^\s"'<>\\)]+/gi,
    /\/\/static\.wixstatic\.com\/[^\s"'<>\\)]+/gi,
    /https?:\/\/static\.parastorage\.com\/[^\s"'<>\\)]+/gi,
    /https?:\/\/static\.wixstatic\.com\/media\/[^"'<>\\)]+/gi,
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(expanded))) {
      const url = normalizeWixImage(match[0]);
      if (!url) continue;
      if (!/\.(jpe?g|png|webp|gif|avif)(?:$|[?#/])/i.test(url)) continue;
      if (url.includes("static.parastorage.com") && !/site|logo|media/i.test(url)) continue;
      images.add(url);
    }
  }

  return [...images].sort();
}

function titleFromHtml(html) {
  return decodeEntities(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "");
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": USER_AGENT, accept: "text/html,application/xml;q=0.9,*/*;q=0.8" },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
}

async function fetchBinary(url) {
  const response = await fetch(url, {
    headers: { "user-agent": USER_AGENT, accept: "image/avif,image/webp,image/png,image/jpeg,image/*,*/*;q=0.8" },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  const contentType = response.headers.get("content-type") ?? "";
  const bytes = Buffer.from(await response.arrayBuffer());
  return { bytes, contentType };
}

function imageFilename(url, contentType) {
  const parsed = new URL(url);
  const sourceName = decodeURIComponent(path.basename(parsed.pathname)).replace(/[^a-z0-9_.~-]+/gi, "-");
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 8);
  const contentExt = contentType.includes("webp")
    ? ".webp"
    : contentType.includes("png")
      ? ".png"
      : contentType.includes("jpeg") || contentType.includes("jpg")
        ? ".jpg"
        : contentType.includes("gif")
          ? ".gif"
          : "";
  const ext = path.extname(sourceName) || contentExt || ".img";
  const stem = path.basename(sourceName, path.extname(sourceName)).slice(0, 72) || "image";
  return `${stem}-${hash}${ext}`;
}

async function main() {
  await mkdir(PAGE_DIR, { recursive: true });
  await mkdir(IMAGE_DIR, { recursive: true });

  const robots = await fetchText(`${BASE_URL}/robots.txt`);
  await writeFile(path.join(OUT_DIR, "robots.txt"), robots);

  const sitemapIndex = await fetchText(`${BASE_URL}/sitemap.xml`);
  await writeFile(path.join(OUT_DIR, "sitemap.xml"), sitemapIndex);

  const sitemapUrls = extractLocs(sitemapIndex).filter((url) => url.endsWith(".xml"));
  const pageUrls = new Set();
  const sitemapImageUrls = new Map();

  for (const sitemapUrl of sitemapUrls) {
    await sleep(150);
    const xml = await fetchText(sitemapUrl);
    await writeFile(path.join(OUT_DIR, path.basename(new URL(sitemapUrl).pathname)), xml);
    for (const loc of extractLocs(xml)) {
      if (loc.endsWith(".xml")) continue;
      pageUrls.add(loc);
    }
    const imagePattern = /<url>([\s\S]*?)<\/url>/gi;
    let urlBlock;
    while ((urlBlock = imagePattern.exec(xml))) {
      const page = urlBlock[1].match(/<loc>([\s\S]*?)<\/loc>/i)?.[1];
      if (!page) continue;
      const pageUrl = normalizeUrl(page);
      const urls = extractImages(urlBlock[1]);
      if (urls.length) sitemapImageUrls.set(pageUrl, urls);
    }
  }

  const pages = [];
  const allImages = new Map();

  for (const pageUrl of [...pageUrls].sort()) {
    await sleep(150);
    const slug = slugForUrl(pageUrl);
    const html = await fetchText(pageUrl);
    const text = textContent(html);
    const images = new Set([...(sitemapImageUrls.get(pageUrl) ?? []), ...extractImages(html)]);

    for (const imageUrl of images) {
      if (!allImages.has(imageUrl)) allImages.set(imageUrl, new Set());
      allImages.get(imageUrl).add(pageUrl);
    }

    const page = {
      url: pageUrl,
      slug,
      title: titleFromHtml(html),
      description: extractMeta(html, "description"),
      ogImage: normalizeWixImage(extractMeta(html, "og:image")),
      h1: extractTags(html, "h1"),
      h2: extractTags(html, "h2"),
      imageCount: images.size,
      images: [...images].sort(),
      links: extractLinks(html, pageUrl),
      textFile: `pages/${slug}.txt`,
      htmlFile: `pages/${slug}.html`,
      characterCount: text.length,
    };

    await writeFile(path.join(PAGE_DIR, `${slug}.html`), html);
    await writeFile(path.join(PAGE_DIR, `${slug}.txt`), `${page.title}\n${page.url}\n\n${text}\n`);
    pages.push(page);
  }

  const imageManifest = [];
  for (const [imageUrl, seenOn] of allImages) {
    await sleep(100);
    try {
      const { bytes, contentType } = await fetchBinary(imageUrl);
      if (!contentType.startsWith("image/")) throw new Error(`unexpected content-type ${contentType}`);
      const filename = imageFilename(imageUrl, contentType);
      await writeFile(path.join(IMAGE_DIR, filename), bytes);
      imageManifest.push({
        url: imageUrl,
        filename: `images/${filename}`,
        contentType,
        bytes: bytes.length,
        pages: [...seenOn].sort(),
      });
    } catch (error) {
      imageManifest.push({
        url: imageUrl,
        error: error.message,
        pages: [...seenOn].sort(),
      });
    }
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    sitemapCount: sitemapUrls.length,
    pageCount: pages.length,
    imageCount: imageManifest.filter((image) => !image.error).length,
    failedImageCount: imageManifest.filter((image) => image.error).length,
    pages,
    images: imageManifest.sort((a, b) => a.url.localeCompare(b.url)),
  };

  await writeFile(path.join(OUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));

  const report = [
    "# WoodinvilleSportsClub.com Scrape Inventory",
    "",
    `Generated: ${manifest.generatedAt}`,
    `Pages found: ${manifest.pageCount}`,
    `Images downloaded: ${manifest.imageCount}`,
    manifest.failedImageCount ? `Images failed: ${manifest.failedImageCount}` : "Images failed: 0",
    "",
    "## Pages",
    "",
    ...pages.map((page) => `- ${page.title || page.slug} — ${page.url} (${page.imageCount} images, ${page.characterCount} chars)`),
    "",
    "## Image Candidates",
    "",
    ...manifest.images.map((image) => {
      if (image.error) return `- FAILED ${image.url} — ${image.error}`;
      return `- ${image.filename} — ${image.contentType}, ${Math.round(image.bytes / 1024)} KB, used on ${image.pages.length} page(s)`;
    }),
    "",
  ].join("\n");

  await writeFile(path.join(OUT_DIR, "inventory.md"), report);
  console.log(JSON.stringify({
    outDir: OUT_DIR,
    pageCount: manifest.pageCount,
    imageCount: manifest.imageCount,
    failedImageCount: manifest.failedImageCount,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
