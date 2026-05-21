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
and set both analytics variables only when Umami is configured:

```bash
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

Website forms post to `/api/forms`, write submissions to JSONL, and send
notifications through Resend:

```bash
RESEND_API_KEY=your-resend-api-key
FORM_EMAIL_TO=Info@woodinvillesportsclub.com
FORM_EMAIL_FROM="WSC Website <forms@woodinvillesportsclub.com>"
FORM_SUBMISSIONS_DIR=./data/form-submissions
FORM_WEBHOOK_URL=
```

`FORM_EMAIL_FROM` must use a sender domain verified in Resend. `FORM_WEBHOOK_URL`
is optional; set it to a CRM, Zapier, Make, or sheet webhook when you want a
durable off-site record in addition to the JSONL file. For serverless
deployments, use the webhook for durable records because local JSONL storage may
be temporary.
