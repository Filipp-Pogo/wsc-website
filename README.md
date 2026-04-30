# Woodinville Sports Club Website

React/Vite single-page site with an Express production server.

## Local Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Deployment Check

```bash
pnpm verify
```

`pnpm build` writes the Vite app to `dist/public` and bundles the server to
`dist/index.js`. Start the production build with:

```bash
pnpm start
```

## Live Site Scrape

```bash
pnpm scrape:live
```

The scraper crawls the current Wix site into `.scrape/` for content and photo
comparison. The raw scrape is ignored by Git; production-ready images live in
`client/public/images/wsc/`.

## Environment

Analytics is optional and consent-gated. Copy `.env.example` to `.env.local`
and set both variables only when Umami is configured:

```bash
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

The contact and golf lesson forms currently validate basic bot/rate-limit checks
client-side and open addressed email drafts. Add a real backend or email provider
before changing those flows to claim automatic delivery.
