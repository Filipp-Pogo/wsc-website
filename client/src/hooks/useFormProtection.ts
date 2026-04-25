import { useState, useRef, useCallback } from "react";

/**
 * Anti-spam hook for client-side forms.
 *
 * Provides:
 * 1. Honeypot field — hidden input that bots fill but humans don't
 * 2. Time gate — rejects submissions faster than `minSeconds` (bots submit instantly)
 * 3. Rate limit — prevents rapid-fire submissions
 *
 * Usage:
 *   const { honeypotProps, validateSubmission } = useFormProtection();
 *   // Add <input {...honeypotProps} /> inside the form (hidden via CSS)
 *   // Call validateSubmission() in onSubmit — returns true if legit
 */
export function useFormProtection(minSeconds = 3) {
  const [honeypot, setHoneypot] = useState("");
  const mountTime = useRef(Date.now());
  const lastSubmit = useRef(0);

  const honeypotProps = {
    // Styled to be invisible but still in the DOM (bots fill it)
    "aria-hidden": true as const,
    tabIndex: -1,
    autoComplete: "off" as const,
    name: "website_url", // Attractive name for bots
    value: honeypot,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setHoneypot(e.target.value),
    style: {
      position: "absolute" as const,
      left: "-9999px",
      top: "-9999px",
      width: "1px",
      height: "1px",
      overflow: "hidden" as const,
      opacity: 0,
    },
  };

  const validateSubmission = useCallback((): { valid: boolean; reason?: string } => {
    // 1. Honeypot check
    if (honeypot.length > 0) {
      return { valid: false, reason: "honeypot" };
    }

    // 2. Time gate — too fast means bot
    const elapsed = (Date.now() - mountTime.current) / 1000;
    if (elapsed < minSeconds) {
      return { valid: false, reason: "too_fast" };
    }

    // 3. Rate limit — no more than 1 submission per 10 seconds
    const now = Date.now();
    if (lastSubmit.current && now - lastSubmit.current < 10_000) {
      return { valid: false, reason: "rate_limited" };
    }
    lastSubmit.current = now;

    return { valid: true };
  }, [honeypot, minSeconds]);

  return { honeypotProps, validateSubmission };
}
