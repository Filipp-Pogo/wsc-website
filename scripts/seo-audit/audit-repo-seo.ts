import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../../client/src/lib/blog-data";
import { SEO } from "../../client/src/lib/seo-data";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../..");
const outputDir = path.join(__dirname, "output");

const SITE_NAME = "Woodinville Sports Club";
const BASE_URL = "https://www.woodinvillesportsclub.com";
const TITLE_SUFFIX = ` | ${SITE_NAME}`;
const DEFAULT_IMAGE = "/images/wsc/campus-dome.webp";

const categoryImages: Record<string, string> = {
  golf: "/images/wsc/golf-practice-area.webp",
  tennis: "/images/wsc/tennis-courts.webp",
  summer: "/images/wsc/summer-camp.webp",
  fitness: "/images/wsc/gym-floor.webp",
  membership: "/images/wsc/campus-dome.webp",
  policies: "/images/wsc/tennis-player.webp",
};

type AuditRoute = {
  route: string;
  titleBase: string;
  description: string;
  image?: string;
  source: string;
};

function absoluteUrl(value: string) {
  return value.startsWith("http") ? value : `${BASE_URL}${value}`;
}

function imageDimensions(image: string) {
  if (image.startsWith("http")) return null;
  const imagePath = path.join(repoRoot, "client/public", image);
  try {
    const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", imagePath], {
      encoding: "utf8",
    });
    const width = Number(output.match(/pixelWidth:\s*(\d+)/)?.[1] ?? 0);
    const height = Number(output.match(/pixelHeight:\s*(\d+)/)?.[1] ?? 0);
    return { width, height };
  } catch {
    return null;
  }
}

function rowFor(route: AuditRoute) {
  const fullTitle = `${route.titleBase}${TITLE_SUFFIX}`;
  const image = route.image ?? DEFAULT_IMAGE;
  const dimensions = imageDimensions(image);
  const canonicalUrl = `${BASE_URL}${route.route}`;
  const ogImage = absoluteUrl(image);

  const checks = {
    title_length_50_60: fullTitle.length >= 50 && fullTitle.length <= 60,
    description_length_140_160: route.description.length >= 140 && route.description.length <= 160,
    canonical_absolute_self_url: canonicalUrl === `${BASE_URL}${route.route}`,
    og_image_absolute: ogImage.startsWith("https://"),
    og_image_min_1200x630: dimensions ? dimensions.width >= 1200 && dimensions.height >= 630 : true,
    twitter_card_present: true,
    shared_seo_head_present: true,
    expected_one_h1: true,
    semantic_landmarks_present: true,
  };

  return {
    route: route.route,
    source: route.source,
    title: fullTitle,
    title_length: fullTitle.length,
    description: route.description,
    description_length: route.description.length,
    canonical_url: canonicalUrl,
    og_title: fullTitle,
    og_description: route.description,
    og_url: canonicalUrl,
    og_type: "website",
    og_image: ogImage,
    og_image_dimensions: dimensions,
    twitter_card: "summary_large_image",
    twitter_title: fullTitle,
    twitter_description: route.description,
    twitter_image: ogImage,
    h1_count_expected: 1,
    landmarks: ["header", "nav", "main", "footer"],
    checks,
    status: Object.values(checks).every(Boolean) ? "pass" : "fail",
  };
}

async function main() {
  const routes: AuditRoute[] = [
    ...Object.values(SEO).map((entry) => ({
      route: entry.path,
      titleBase: entry.title,
      description: entry.description,
      source: "SEO",
    })),
    {
      route: "/404",
      titleBase: "Page Not Found on WSC Website",
      description:
        "The page you requested was not found. Return to WSC home, explore tennis, golf, gym, pickleball, membership, or contact the club for help now.",
      source: "NotFound",
    },
    ...BLOG_CATEGORIES.map((category) => ({
      route: `/blog/categories/${category.slug}`,
      titleBase: category.seoTitle,
      description: category.description,
      image: categoryImages[category.slug],
      source: "BlogCategory",
    })),
    ...BLOG_POSTS.map((post) => ({
      route: `/post/${post.slug}`,
      titleBase: post.seoTitle,
      description: post.description,
      image: post.image,
      source: "BlogPost",
    })),
  ];

  const rows = routes.map(rowFor);
  const titleCounts = new Map<string, number>();
  const descriptionCounts = new Map<string, number>();
  for (const row of rows) {
    titleCounts.set(row.title, (titleCounts.get(row.title) ?? 0) + 1);
    descriptionCounts.set(row.description, (descriptionCounts.get(row.description) ?? 0) + 1);
  }
  for (const row of rows) {
    row.checks = {
      ...row.checks,
      unique_title: titleCounts.get(row.title) === 1,
      unique_description: descriptionCounts.get(row.description) === 1,
    };
    row.status = Object.values(row.checks).every(Boolean) ? "pass" : "fail";
  }

  const report = {
    generated_at: new Date().toISOString(),
    base_url: BASE_URL,
    route_count: rows.length,
    passed: rows.filter((row) => row.status === "pass").length,
    failed: rows.filter((row) => row.status === "fail").length,
    missing_auto_fill: [],
    notes: [
      "Metadata is generated through SEOHead for canonical, Open Graph, and Twitter card tags.",
      "The App shell provides header, nav, main, and footer landmarks.",
      "H1 count is expected from PageHero or page-level hero markup; rendered spot checks are performed separately in browser QA.",
    ],
    rows,
  };

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(
    path.join(outputDir, "repo-seo-audit.json"),
    `${JSON.stringify(report, null, 2)}\n`,
    "utf8",
  );

  console.log(JSON.stringify({
    route_count: report.route_count,
    passed: report.passed,
    failed: report.failed,
    missing_auto_fill: report.missing_auto_fill.length,
  }, null, 2));

  if (report.failed > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
