/*
 * Back to Top Button — WCAG 2.4.1 Bypass Blocks
 * Appears after scrolling down, smooth-scrolls to top
 */
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 w-11 h-11 flex items-center justify-center bg-dark-bg border border-parchment/20 text-parchment hover:bg-dark-mid transition-colors duration-200 shadow-lg"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
