# Live Site Scrape Audit

Source: `https://www.woodinvillesportsclub.com`

Generated locally with:

```sh
pnpm scrape:live
```

The scraper stores raw snapshots in `.scrape/woodinvillesportsclub.com/`, which is intentionally ignored by Git because the full image archive is large.

## Scrape Summary

- Pages captured: 87
- Images downloaded: 256
- Image download failures: 3 Wix event PNGs returned `application/octet-stream`
- Raw downloaded image size: about 729 MB
- Production image set added: 15 optimized WebP files plus `logo.png`

## Production Changes From The Scrape

- Replaced generated/CloudFront image URLs with local WSC images in `client/public/images/wsc/`.
- Added a local WSC logo at `client/public/logo.png` for structured data.
- Updated footer hours to match the repeated live-site footer:
  - Tennis: weekdays 6AM-11PM, weekends 7AM-10PM
  - Gym: weekdays 6AM-11PM, weekends 7AM-10PM
  - Golf: everyday 9AM-10PM
- Updated the Gym page's body hours to match the live Main Gym page copy:
  - Monday-Friday 6AM-10PM
  - Saturday-Sunday 7AM-10PM
- Added redirects for key Wix-era URLs including `/about-wsc`, `/contact-us`, `/faqs`, `/main-gym`, `/racket-stringing`, summer camp pages, tennis/golf subpages, and blog/course/event patterns.

## Notes

- The live site still contains time-sensitive references that appear expired as of April 29, 2026, including the Golf Simulator trial wording through March 31, 2026. The React site currently preserves that live-site wording where it already existed; WSC should confirm whether to remove or revise it before launch.
- Photo use is technically feasible. The images are first-party files served from the existing WSC Wix site, but final legal/brand approval should come from WSC/Caliber ownership before publishing them on the replacement site.
