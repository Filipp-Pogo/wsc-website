import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

const BASE_URL = "https://woodinvillesportsclub.com";
const DEFAULT_IMAGE = "/images/wsc/campus-dome.webp";
const SITE_NAME = "Woodinville Sports Club";

function absoluteUrl(value: string) {
  return value.startsWith("http") ? value : `${BASE_URL}${value}`;
}

/**
 * Sets per-page <title>, meta description, canonical URL, and OG/Twitter tags.
 * Cleans up on unmount by restoring defaults.
 */
export default function SEOHead({ title, description, path, image }: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${BASE_URL}${path}`;
    const ogImage = absoluteUrl(image || DEFAULT_IMAGE);

    // Title
    document.title = fullTitle;

    // Helper to set or create a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Meta description
    setMeta("name", "description", description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);

    // Twitter
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setMeta("name", "twitter:card", "summary_large_image");

    // Cleanup: restore homepage defaults on unmount
    return () => {
      document.title = `${SITE_NAME} | Tennis, Golf, Pickleball & Athletic Performance | Woodinville, WA`;
      setMeta("name", "description", "Woodinville Sports Club is a 67-acre hybrid performance campus in Woodinville, WA. Home to Tier 1 Sports by Caliber — world-class tennis, golf, pickleball, and athletic performance training.");
      if (canonical) canonical.setAttribute("href", `${BASE_URL}/`);
      setMeta("property", "og:url", `${BASE_URL}/`);
      setMeta("property", "og:title", `${SITE_NAME} | World-Class Sports Training`);
      setMeta("property", "og:description", "A 67-acre performance campus featuring tennis, golf, pickleball, and athletic performance training. Home to Tier 1 Sports by Caliber.");
      setMeta("property", "og:image", absoluteUrl(DEFAULT_IMAGE));
      setMeta("name", "twitter:title", `${SITE_NAME} | World-Class Sports Training`);
      setMeta("name", "twitter:description", "A 67-acre performance campus featuring tennis, golf, pickleball, and athletic performance training. Home to Tier 1 Sports by Caliber.");
      setMeta("name", "twitter:image", absoluteUrl(DEFAULT_IMAGE));
    };
  }, [title, description, path, image]);

  return null;
}
