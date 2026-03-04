/**
 * Marketing Banner — Sits between the Caliber top bar and main nav.
 * LIGHT background so it POPS against the dark nav and Caliber bar.
 * Tier 1 Sports by Caliber messaging front and center.
 *
 * TO UPDATE: Change the DEFAULT values below. That's it.
 */
import { useState } from "react";
import { X, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";

/* ─── DEFAULT BANNER CONTENT (edit here to update site-wide) ─── */
const DEFAULTS = {
  badge: "Tier 1 Sports by Caliber",
  headline: "Home to World-Class Programming",
  description:
    "Tier 1 is one of the leading developmental programs in the country — now in tennis, golf, and athletic performance at WSC.",
  ctaLabel: "Explore Programs",
  ctaHref: "https://app.courtreserve.com/Online/Portal/Index/6689",
  external: true,
};

interface MarketingBannerProps {
  badge?: string;
  headline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  external?: boolean;
}

export default function MarketingBanner({
  badge = DEFAULTS.badge,
  headline = DEFAULTS.headline,
  description = DEFAULTS.description,
  ctaLabel = DEFAULTS.ctaLabel,
  ctaHref = DEFAULTS.ctaHref,
  external = DEFAULTS.external,
}: MarketingBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const ctaContent = (
    <span className="inline-flex items-center gap-1.5 bg-[#161310] text-white px-5 py-2 text-[11px] tracking-[0.14em] uppercase font-medium hover:bg-volt-bright hover:text-dark-bg transition-colors duration-200 shrink-0">
      {ctaLabel}
      <ArrowRight size={12} />
    </span>
  );

  return (
    <div className="relative bg-gradient-to-r from-[#e8dfd4] via-[#f2ece4] to-[#e8dfd4]">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-volt-bright to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 py-3 flex items-center justify-between gap-4">
        {/* Left: badge + content */}
        <div className="flex items-center gap-4 lg:gap-6 min-w-0">
          {badge && (
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-volt-bright/20 text-[#161310] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border border-volt/40 shrink-0">
              <Star size={9} className="text-volt fill-volt" />
              {badge}
            </span>
          )}
          <div className="min-w-0">
            <p className="text-[#161310] text-[13px] sm:text-[14px] font-medium tracking-[-0.01em] truncate">
              {headline}
            </p>
            {description && (
              <p className="hidden md:block text-[#161310]/55 text-[11px] tracking-[0.02em] mt-0.5 truncate">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right: CTA + dismiss */}
        <div className="flex items-center gap-3 shrink-0">
          {external ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              {ctaContent}
            </a>
          ) : (
            <Link href={ctaHref} className="no-underline">
              {ctaContent}
            </Link>
          )}
          <button
            onClick={() => setDismissed(true)}
            className="text-[#161310]/30 hover:text-[#161310]/70 transition-colors duration-200 p-1"
            aria-label="Dismiss banner"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#161310]/10" />
    </div>
  );
}
