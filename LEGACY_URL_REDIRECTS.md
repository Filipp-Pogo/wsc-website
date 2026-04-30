# Legacy URL Redirect Plan

Source inventory: `.scrape/woodinvillesportsclub.com/manifest.json`

The live Wix crawl found 87 public pages. The production site keeps the current React routes lean, then handles old Wix URLs with Vercel-level redirects in `vercel.json` before the SPA fallback runs.

## Kept As Current Pages

These scraped URLs already have first-class pages and do not redirect:

- `/`
- `/tennis`
- `/golf`
- `/pickleball`
- `/membership`

## Redirect Strategy

- Core Wix aliases redirect to the closest current page with permanent redirects.
- Booking URLs redirect directly to CourtReserve with temporary redirects.
- Blog posts redirect to the most relevant service page instead of the homepage when possible.
- Old Wix form pages redirect to the relevant contact or service page until real form endpoints exist.
- Template-looking course/event pages redirect to `/summer` or `/contact` instead of being recreated as stale pages.

## Destination Buckets

### About

- `/about-1`
- `/about-3`
- `/about-wsc`
- `/areasweserve`
- `/testimonials`

### Contact

- `/contact-us`
- `/careers`
- `/coaching-conference`
- `/events-1`
- `/food-trucks`
- `/fta-parent-meeting-4-21`
- `/member-request`
- `/newsletter-signup`
- `/upcoming-session-dates`
- `/event-details-registration/:slug`

### Gym

- `/fitness`
- `/main-gym`
- `/apl-training-center`
- `/strength-and-conditioning`
- `/tier-1-performance`
- `/performance-training-team`
- `/personal-training-interest-form`
- `/matpilates`
- `/post/elevate-your-fitness-game-at-woodinville-sports-club`

### Tennis

- `/adult-wsc-tennis`
- `/copy-of-tennis`
- `/tier1coreitennis`
- `/usta`
- `/sact`
- `/rpm-elite-application`
- `/tier-1-classes-application-form`
- `/adult-rpm-classes/:slug`
- `/courses/tennis`
- `/blog/categories/tennis`
- Tennis-related blog posts

### Golf

- `/tier1golfacademy`
- `/golf-coaching`
- `/tier1golfftaform`
- `/blog/categories/golf`
- Golf-related blog posts

### Summer

- `/camps`
- `/copy-of-camps`
- `/summer-camps-tennis`
- `/summer-camps-golf`
- `/summer-camps-adventureclub`
- `/pickleball-camp`
- `/copy-of-adventure-camp`
- `/copy-of-tennis-camp`
- `/copy-of-golf-camp`
- `/copy-of-2025-summer-camp-sign-up`
- `/registration-instructions`
- `/summer-camp-signup`
- `/courses`
- `/courses/:slug`
- Summer-camp blog posts

### Policies

- `/membership-agreement`
- `/membership-policies`
- `/tier1-auto-enroll-policy`
- `/terms`
- `/post/wsc-updated-court-booking-guide`

### Other

- `/faqs` redirects to `/faq`
- `/racket-stringing` redirects to `/pro-shop`
- `/blog` and unclassified blog category paths redirect to `/`
- `/book` and `/book-online` redirect to CourtReserve

## Coverage Check

All 87 scraped pages are now either a current page or matched by a Vercel redirect rule.
