# Woodinville Sports Club SEO Launch Runbook

Use this runbook when replacing the live Wix site with the custom Vercel-hosted site.

## Before DNS Cutover

1. Deploy the latest `codex/live-site-content-refresh` branch to Vercel.
2. Confirm the Vercel project has both domains configured:
   - `www.woodinvillesportsclub.com`
   - `woodinvillesportsclub.com`
3. Confirm the canonical host is `https://www.woodinvillesportsclub.com`.
4. Replace placeholder IDs before production launch:
   - `TODO_REPLACE_ME_GA4_MEASUREMENT_ID`
   - `TODO_REPLACE_ME_GOOGLE_SEARCH_CONSOLE_VERIFICATION`
   - `TODO_REPLACE_ME_BING_WEBMASTER_VERIFICATION`
5. Verify Google Search Console ownership for the domain property and URL-prefix properties if available.
6. Run the deployed redirect test against the Vercel preview URL:

   ```sh
   DEPLOY_BASE_URL=https://YOUR-VERCEL-PREVIEW.vercel.app pnpm seo:test-deployed
   ```

7. Confirm the test output has zero failures:
   - `scripts/seo-audit/output/deployed-redirect-test.json`
   - `scripts/seo-audit/output/deployed-redirect-test.csv`
8. Spot-check these preview pages manually:
   - `/`
   - `/membership`
   - `/tennis`
   - `/blog`
   - `/sitemap.xml`
   - `/robots.txt`
   - a fake URL such as `/this-should-404`
9. Do not make broad content, navigation, domain, or design changes during the same launch window.

## DNS Cutover

1. Launch during a lower-traffic period if possible.
2. Point DNS to Vercel using the exact records Vercel provides.
3. Wait for Vercel to show the production domain as valid with HTTPS active.
4. Run the deployed redirect test against the live domain:

   ```sh
   DEPLOY_BASE_URL=https://www.woodinvillesportsclub.com pnpm seo:test-deployed
   ```

5. Confirm these live checks:
   - `https://www.woodinvillesportsclub.com/robots.txt` returns `200`.
   - `https://www.woodinvillesportsclub.com/sitemap.xml` returns `200`.
   - Unknown URLs return a real `404`.
   - Old Wix URLs return permanent redirects.
   - Internal redirect targets return `200`.
6. Confirm the non-`www` domain redirects to the `www` domain without a redirect chain.

## Search Console After Launch

1. Submit `https://www.woodinvillesportsclub.com/sitemap.xml`.
2. Use URL Inspection on:
   - Homepage
   - `/tennis`
   - `/golf`
   - `/membership`
   - `/blog`
3. Monitor the Pages report for:
   - Not found errors
   - Redirect errors
   - Duplicate/canonical warnings
   - Crawled but not indexed pages
4. Export top pages weekly for the first month and compare against the redirect map.

## First 72 Hours

1. Run the deployed redirect test at least once per day.
2. Watch Vercel logs for unexpected `404` URLs.
3. Fix any missing redirects immediately.
4. Check that GA4, Search Console, and Bing verification are collecting data after real IDs are installed.
5. Avoid changing title tags, URL paths, or major page copy unless fixing a launch issue.

## First 4 Weeks

1. Keep all redirects active.
2. Track clicks, impressions, and average position in Search Console.
3. Compare top old Wix URLs against new destination URLs.
4. Improve mobile performance when possible; it is the main remaining technical weakness from the prelaunch audit.
5. Add redirects for any old URLs found in Search Console or logs that were not in the original Wix sitemap.

## Rollback Guidance

Prefer fixing the Vercel deployment or redirect rules over reverting DNS. A DNS rollback can create more crawling confusion if Google sees the old site, then the new site, then the old site again.

Only roll back DNS for a severe outage that cannot be fixed quickly in Vercel.

## Long-Term Rule

Keep old Wix URL redirects for at least one year. Keeping them indefinitely is better for users, backlinks, and search engines.
