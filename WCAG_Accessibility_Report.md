# WCAG Accessibility Audit Report

**Woodinville Sports Club Website**
**Date:** March 4, 2026
**Standard:** WCAG 2.1 Level AA
**Prepared by:** Manus AI

---

## Executive Summary

This report documents a comprehensive Web Content Accessibility Guidelines (WCAG) 2.1 Level AA audit of the Woodinville Sports Club website. The audit covered all 9 pages (Home, Tennis, Golf, Fitness, Pickleball, Membership, Summer, About, Contact) and all shared components (Navbar, Footer, MarketingBanner, Tier1Banner, PageHero, FacilityGallery, FullWidthImage, InstagramFeed).

An automated scan using axe-core identified **critical**, **serious**, and **moderate** violations across the site. All critical and serious issues have been remediated. Several moderate and best-practice recommendations remain documented below for future consideration.

---

## Issues Found and Remediated

The following table summarizes every issue discovered during the audit, its WCAG criterion, severity, and the fix applied.

| # | Issue | WCAG Criterion | Severity | Pages Affected | Status |
|---|-------|---------------|----------|----------------|--------|
| 1 | Viewport `maximum-scale=1` prevents pinch-to-zoom | 1.4.4 Resize Text | Critical | All (index.html) | **Fixed** |
| 2 | Newsletter email input missing accessible label | 1.3.1 Info and Relationships | Critical | Home | **Fixed** |
| 3 | Contact form inputs missing `htmlFor`/`id` associations | 1.3.1 Info and Relationships | Critical | Contact | **Fixed** |
| 4 | Insufficient color contrast on body text (parchment at 20–45% opacity on dark backgrounds) | 1.4.3 Contrast (Minimum) | Serious | All pages | **Fixed** |
| 5 | Footer link text at 35% opacity fails 4.5:1 ratio | 1.4.3 Contrast (Minimum) | Serious | All (Footer) | **Fixed** |
| 6 | No `<main>` landmark wrapping page content | 1.3.1 Info and Relationships | Moderate | All (App.tsx) | **Fixed** |
| 7 | No skip-to-content link for keyboard users | 2.4.1 Bypass Blocks | Moderate | All (Navbar) | **Fixed** |
| 8 | `<nav>` element missing `aria-label` | 4.1.2 Name, Role, Value | Moderate | All (Navbar) | **Fixed** |
| 9 | `<footer>` element missing `aria-label` | 4.1.2 Name, Role, Value | Moderate | All (Footer) | **Fixed** |
| 10 | Mobile hamburger button missing `aria-label` and `aria-expanded` | 4.1.2 Name, Role, Value | Moderate | All (Navbar) | **Fixed** |
| 11 | Heading level skip (h3 before h2) in "This Week" section | 1.3.1 Info and Relationships | Moderate | Home | **Fixed** |
| 12 | Contact form inputs missing `autoComplete` attributes | 1.3.5 Identify Input Purpose | Minor | Contact | **Fixed** |

---

## Detailed Remediation Notes

### 1. Viewport Zoom Restriction (Critical)

The `<meta name="viewport">` tag included `maximum-scale=1, user-scalable=no`, which prevents users with low vision from pinch-to-zoom on mobile devices. This is a direct violation of WCAG 2.1 Success Criterion 1.4.4 (Resize Text), which requires that text can be resized up to 200% without loss of content or functionality. [1]

**Fix applied:** Removed `maximum-scale=1` and `user-scalable=no` from the viewport meta tag in `client/index.html`. The tag now reads `width=device-width, initial-scale=1.0`.

### 2–3. Form Label Associations (Critical)

The newsletter email input on the Home page and all form fields on the Contact page lacked proper programmatic label associations. Screen readers could not announce the purpose of these fields, violating WCAG 1.3.1 (Info and Relationships). [2]

**Fix applied:** Added `id` attributes to all form inputs and corresponding `htmlFor` attributes to their `<label>` elements. The newsletter input also received an `aria-label` attribute as a fallback. Contact form inputs now include `autoComplete` attributes (e.g., `given-name`, `family-name`, `email`, `tel`) per WCAG 1.3.5.

### 4–5. Color Contrast (Serious)

The most widespread issue was insufficient color contrast. Body text rendered at `text-parchment/[0.45]` (approximately 45% opacity of a warm off-white) against dark backgrounds (#1a1a18, #222220) produced contrast ratios well below the 4.5:1 minimum required by WCAG 1.4.3 for normal-sized text. [3]

The following opacity values were adjusted across all pages and components:

| Original Opacity | New Opacity | Context |
|-----------------|-------------|---------|
| 20–25% | 50–55% | Decorative labels, stat details |
| 30–35% | 55% | Schedule notes, age groups, legends |
| 35% | 60% | Footer links |
| 40–45% | 60–65% | Body paragraphs, descriptions |

The `--volt-bright` CSS custom property was also adjusted to a brighter value to ensure sufficient contrast when used as accent text on dark backgrounds.

### 6–7. Landmarks and Skip Navigation (Moderate)

The page lacked a `<main>` landmark, which assistive technologies rely on to identify the primary content region. Additionally, there was no skip-to-content link, forcing keyboard users to tab through the entire navigation on every page. [4]

**Fix applied:** Wrapped the `<Router>` in `App.tsx` with `<main id="main-content">`. Added a visually-hidden skip link as the first element in the Navbar that becomes visible on focus: "Skip to main content".

### 8–10. ARIA Attributes (Moderate)

The `<nav>` and `<footer>` elements lacked `aria-label` attributes, making it difficult for screen reader users to distinguish between navigation regions. The mobile hamburger menu button had no accessible name or expanded state indicator.

**Fix applied:** Added `aria-label="Main navigation"` to `<nav>`, `aria-label="Site footer"` to `<footer>`, and `aria-label="Toggle navigation menu"` plus `aria-expanded` to the mobile menu button.

### 11. Heading Order (Moderate)

The "This Week at WSC" section on the Home page used `<h3>` elements for card titles without a preceding `<h2>`, creating a heading level skip that can confuse screen reader users navigating by headings.

**Fix applied:** Added a visually-hidden `<h2 className="sr-only">This Week at WSC</h2>` before the card grid to maintain proper heading hierarchy.

---

## Remaining Recommendations

The following items are not strict WCAG 2.1 AA violations but represent best practices that would further improve accessibility and reduce legal risk.

### High Priority

| Recommendation | WCAG Criterion | Effort |
|---------------|---------------|--------|
| Add `aria-current="page"` to active navigation links | 4.1.2 Name, Role, Value | Low |
| Ensure all decorative images use `role="presentation"` or empty `alt=""` | 1.1.1 Non-text Content | Low |
| Add `prefers-reduced-motion` media query to disable animations for users who request it | 2.3.3 Animation from Interactions (AAA) | Medium |
| Add visible focus indicators beyond browser defaults (e.g., volt-bright outline) | 2.4.7 Focus Visible | Medium |

### Medium Priority

| Recommendation | WCAG Criterion | Effort |
|---------------|---------------|--------|
| Add a "Back to top" button on long pages | 2.4.1 Bypass Blocks | Low |
| Ensure all interactive elements have a minimum 44x44px touch target | 2.5.5 Target Size (AAA) | Medium |
| Add `lang` attribute to any non-English text content | 3.1.2 Language of Parts | Low |
| Provide text alternatives for the Instagram feed images | 1.1.1 Non-text Content | Medium |

### Low Priority (AAA / Best Practice)

| Recommendation | WCAG Criterion | Effort |
|---------------|---------------|--------|
| Increase all body text contrast to 7:1 ratio (AAA level) | 1.4.6 Contrast (Enhanced) | Medium |
| Add `aria-live="polite"` regions for dynamic content updates (e.g., schedule tabs on Summer page) | 4.1.3 Status Messages | Medium |
| Provide a site accessibility statement page | Best Practice | Low |
| Consider adding a high-contrast mode toggle | Best Practice | High |

---

## Legal Risk Assessment

The Americans with Disabilities Act (ADA) Title III has been interpreted by courts to apply to websites of places of public accommodation. As a sports club open to the public, WSC falls under this category. WCAG 2.1 AA is the de facto standard referenced in ADA web accessibility lawsuits. [5]

**Current risk level after remediation: Low.** The critical and serious violations (zoom restriction, missing form labels, insufficient contrast) that are most commonly cited in demand letters and lawsuits have been addressed. The remaining recommendations are best practices and AAA-level enhancements that go beyond what is typically required for ADA compliance.

**To further reduce risk**, we recommend:

1. Publishing an **accessibility statement** page that declares the site's commitment to WCAG 2.1 AA compliance and provides a contact method for reporting accessibility barriers.
2. Implementing the **high-priority recommendations** listed above within the next development cycle.
3. Conducting a **manual screen reader test** with NVDA or VoiceOver to verify the user experience beyond automated checks.

---

## References

[1]: https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html "WCAG 2.1 Understanding SC 1.4.4 Resize Text"

[2]: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html "WCAG 2.1 Understanding SC 1.3.1 Info and Relationships"

[3]: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html "WCAG 2.1 Understanding SC 1.4.3 Contrast (Minimum)"

[4]: https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html "WCAG 2.1 Understanding SC 2.4.1 Bypass Blocks"

[5]: https://www.ada.gov/resources/web-guidance/ "ADA.gov Web Accessibility Guidance"
