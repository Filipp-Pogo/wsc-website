/*
 * Back to Top Button — WCAG 2.4.1 Bypass Blocks
 * Appears after scrolling past the hero section (min-h-[60vh]),
 * smooth entrance/exit with scale + opacity transition.
 * Positioned above the AccessibilityToggle (bottom-20 → this at bottom-4).
 */
import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    // Hero sections are min-h-[60vh] on mobile, min-h-[70vh] on desktop.
    // Trigger once the user has scrolled past roughly 60% of the viewport height,
    // which corresponds to the bottom of the hero on most screens.
    const heroThreshold = window.innerHeight * 0.6;
    setVisible(window.scrollY > heroThreshold);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount in case the page loads already scrolled
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        w-11 h-11 flex items-center justify-center
        bg-dark-bg/90 backdrop-blur-sm border border-parchment/15
        text-volt-bright hover:text-parchment
        hover:bg-dark-mid hover:border-parchment/30
        shadow-[0_4px_20px_rgba(0,0,0,0.3)]
        transition-all duration-500 ease-out
        ${visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }
      `}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={16} strokeWidth={1.5} />
    </button>
  );
}
