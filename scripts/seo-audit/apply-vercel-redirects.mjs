#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../..");
const outputDir = path.join(__dirname, "output");
const siteOrigin = "https://www.woodinvillesportsclub.com";

function pathnameFromUrl(value) {
  const url = new URL(value);
  return `${url.pathname}${url.search}`;
}

function destinationForVercel(value) {
  const url = new URL(value);
  if (url.origin === siteOrigin) {
    return `${url.pathname}${url.search}`;
  }
  return value;
}

function assertExactSource(source) {
  if (!source.startsWith("/")) {
    throw new Error(`Redirect source must start with /: ${source}`);
  }
  if (source.includes(":") || source.includes("*") || source.includes("(")) {
    throw new Error(`Redirect source must be exact-path only: ${source}`);
  }
}

async function detectHost() {
  const files = await fs.readdir(repoRoot);
  if (files.includes("vercel.json")) return "vercel";
  if (files.includes("netlify.toml") || files.includes("_redirects")) return "netlify";
  if (files.some((file) => /^next\.config\.(js|mjs|ts)$/.test(file))) return "next";
  if (files.some((file) => /^astro\.config\.(js|mjs|ts)$/.test(file))) return "astro";
  if (files.includes("nginx.conf")) return "nginx";
  return "unknown";
}

async function main() {
  const host = await detectHost();
  if (host !== "vercel") {
    throw new Error(`Detected host "${host}". This script only writes Vercel native redirects.`);
  }

  const redirectMap = JSON.parse(
    await fs.readFile(path.join(outputDir, "redirect-map-details.json"), "utf8"),
  );
  if (redirectMap.missing_content?.length) {
    throw new Error("Cannot apply redirects while missing-content rows remain.");
  }

  const redirectRows = redirectMap.rows.filter((row) => row.match_type === "redirect-needed");
  const bySource = new Map();

  for (const row of redirectRows) {
    const source = pathnameFromUrl(row.old_url);
    const destination = destinationForVercel(row.new_url);
    assertExactSource(source);
    if (!destination) throw new Error(`Missing redirect destination for ${source}`);
    if (source === destination) throw new Error(`Self redirect detected for ${source}`);

    const existing = bySource.get(source);
    if (existing && existing.destination !== destination) {
      throw new Error(`Conflicting redirect destinations for ${source}`);
    }
    bySource.set(source, { source, destination, permanent: true });
  }

  const redirects = [...bySource.values()];
  const redirectSources = new Set(redirects.map((redirect) => redirect.source));
  for (const redirect of redirects) {
    if (redirect.destination.startsWith("/") && redirectSources.has(redirect.destination)) {
      throw new Error(`Redirect chain detected: ${redirect.source} -> ${redirect.destination}`);
    }
  }

  const vercelPath = path.join(repoRoot, "vercel.json");
  const vercel = JSON.parse(await fs.readFile(vercelPath, "utf8"));
  vercel.redirects = redirects;
  await fs.writeFile(vercelPath, `${JSON.stringify(vercel, null, 2)}\n`, "utf8");

  const report = {
    generated_at: new Date().toISOString(),
    detected_host: host,
    redirect_count: redirects.length,
    all_permanent_301: redirects.every((redirect) => redirect.permanent === true),
    exact_path_sources: redirects.every((redirect) => {
      try {
        assertExactSource(redirect.source);
        return true;
      } catch {
        return false;
      }
    }),
    single_hop_internal: redirects.every(
      (redirect) => !redirect.destination.startsWith("/") || !redirectSources.has(redirect.destination),
    ),
    redirects,
  };

  await fs.writeFile(
    path.join(outputDir, "vercel-redirect-rules.json"),
    `${JSON.stringify(report, null, 2)}\n`,
    "utf8",
  );

  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
