function responsiveVariant(src: string, width: 900 | 1200, format: "webp" | "avif") {
  const match = src.match(/^\/images\/wsc\/([^/]+)\.webp$/);
  if (!match) return src;
  return `/images/wsc/responsive/${match[1]}-${width}.${format}`;
}

export function responsiveWebpSrcSet(src: string) {
  if (!src.endsWith(".webp")) return undefined;
  return `${responsiveVariant(src, 900, "webp")} 900w, ${responsiveVariant(src, 1200, "webp")} 1200w, ${src} 1800w`;
}

export function responsiveAvifSrcSet(src: string) {
  if (!src.endsWith(".webp")) return undefined;
  return `${responsiveVariant(src, 900, "avif")} 900w, ${responsiveVariant(src, 1200, "avif")} 1200w`;
}
