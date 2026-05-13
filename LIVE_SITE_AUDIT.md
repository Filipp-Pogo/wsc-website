# Live Site Scrape Audit

Source: `https://www.woodinvillesportsclub.com`

Generated locally with:

```sh
pnpm scrape:live
```

The scraper stores raw snapshots in `.scrape/woodinvillesportsclub.com/`, which is intentionally ignored by Git because the full image archive is large.

## Scrape Summary

- Pages captured: 90
- Images downloaded: 257
- Image download failures: 3 Wix event PNGs returned `application/octet-stream`
- Raw downloaded image size: about 729 MB
- Production image set added: 15 optimized WebP files plus `logo.png`

## Production Changes From The Scrape

- Replaced generated/CloudFront image URLs with local WSC images in `client/public/images/wsc/`.
- Added a local WSC logo at `client/public/logo.png` for structured data.
- Moved legacy Wix URL handling into Vercel-level redirects; see `LEGACY_URL_REDIRECTS.md`.
- Updated footer hours to match the repeated live-site footer:
  - Tennis: weekdays 6AM-11PM, weekends 7AM-10PM
  - Gym: weekdays 6AM-11PM, weekends 7AM-10PM
  - Golf: everyday 9AM-10PM
- Updated the Gym page's body hours to match the live Main Gym page copy:
  - Monday-Friday 6AM-10PM
  - Saturday-Sunday 7AM-10PM
- Added redirects for key Wix-era URLs including `/about-wsc`, `/contact-us`, `/faqs`, `/main-gym`, `/racket-stringing`, summer camp pages, tennis/golf subpages, and blog/course/event patterns.
- Added first-class React pages for current session dates, private events, food trucks, and careers.
- Added the new complimentary fitness assessment content from the refreshed crawl to the Gym/APL page.
- Reworked stale time-sensitive promos so the new site does not advertise expired February or March offers as active.

## Notes

- The live site still contains some time-sensitive references that are expired as of May 13, 2026, including February early-bird language and March simulator wording. The React site avoids presenting those expired offers as active.
- Photo use is technically feasible. The images are first-party files served from the existing WSC Wix site, but final legal/brand approval should come from WSC/Caliber ownership before publishing them on the replacement site.
