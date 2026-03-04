/**
 * Marketing Banner — Sits between the Caliber top bar and main nav.
 * Easily updatable: just change the props or the defaults below.
 * Supports: headline, description, CTA button, optional badge, dismissible.
 *
 * USAGE (in any page):
 *   <MarketingBanner />                          ← uses defaults below
 *   <MarketingBanner                             ← fully custom
 *     badge="Limited Time"
 *     headline="Summer Early Bird — 10% Off"
 *     description="Register by March 15 for any full-week summer program."
 *     ctaLabel="Register Now"
 *     ctaHref="/summer"
 *     external={false}
 *   />
 *
 * TO UPDATE: Change the DEFAULT values below. That's it.
 */
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/* ─── DEFAULT BANNER CONTENT (edit here to update site-wide) ─── */
const DEFAULTS = {
  badge: "Now Open",
  headline: "Winter Session 3 Registration Is Open!",
  description:
    "New Tier 1 Golf Foundations class, Adult Golf Clinics, and Swing Lab simulators now available.",
  ctaLabel: "Register Now",
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
    <span className="inline-flex items-center gap-1.5 bg-volt-bright text-dark-bg px-5 py-2 text-[11px] tracking-[0.14em] uppercase font-medium hover:bg-volt transition-colors duration-200 shrink-0">
      {ctaLabel}
      <ArrowRight size={12} />
    </span>
  );

  return (
    <div className="relative bg-gradient-to-r from-dark-bg via-dark-mid to-dark-bg border-b border-volt-bright/20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 py-3 flex items-center justify-between gap-4">
        {/* Left: badge + content */}
        <div className="flex items-center gap-4 lg:gap-6 min-w-0">
          {badge && (
            <span className="hidden sm:inline-flex items-center bg-volt-bright/15 text-volt-bright text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border border-volt-bright/25 shrink-0">
              {badge}
            </span>
          )}
          <div className="min-w-0">
            <p className="text-parchment text-[13px] sm:text-[14px] font-medium tracking-[-0.01em] truncate">
              {headline}
            </p>
            {description && (
              <p className="hidden md:block text-parchment/40 text-[11px] tracking-[0.02em] mt-0.5 truncate">
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
            className="text-parchment/25 hover:text-parchment/60 transition-colors duration-200 p-1"
            aria-label="Dismiss banner"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Subtle bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-volt-bright/30 to-transparent" />
    </div>
  );
}
