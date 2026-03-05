/*
 * Accessibility Toggle — High Contrast Mode
 * Floating button that toggles high-contrast CSS class on <html>
 * Persists preference in localStorage
 */
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AccessibilityToggle() {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("wsc-high-contrast");
    if (stored === "true") {
      setHighContrast(true);
      document.documentElement.classList.add("high-contrast");
    }
  }, []);

  const toggle = () => {
    const next = !highContrast;
    setHighContrast(next);
    if (next) {
      document.documentElement.classList.add("high-contrast");
      localStorage.setItem("wsc-high-contrast", "true");
    } else {
      document.documentElement.classList.remove("high-contrast");
      localStorage.setItem("wsc-high-contrast", "false");
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-20 right-4 z-50 w-11 h-11 flex items-center justify-center bg-dark-bg border border-parchment/20 text-parchment hover:bg-dark-mid transition-colors duration-200 shadow-lg"
      aria-label={highContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
      title={highContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
    >
      {highContrast ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  );
}
