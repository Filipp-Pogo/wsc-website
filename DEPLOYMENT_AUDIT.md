# Deployment Audit

Date: 2026-04-25

## Status

The site builds and serves successfully from the production Express server.

Verified:

- `pnpm verify`
- `pnpm audit --audit-level low`
- Production server smoke test
- SPA routes for all public pages

## Changes Made

- Removed Manus runtime/debug collector from Vite and production public assets.
- Removed broken analytics placeholders from `index.html`.
- Added optional, consent-gated analytics injection.
- Added route-level code splitting for page components.
- Added production cache headers and `/healthz` to the Express server.
- Pruned unused/scaffold dependencies and updated build tooling.
- Added `.env.example`, `README.md`, and `pnpm verify`.

## Remaining Product Decisions

- Add a real form backend or email provider if WSC wants automatic form delivery.
- Decide on a deployment target: static host with SPA fallback, or Node host using `pnpm start`.
- Keep page content, hours, pricing, and external booking links reviewed by WSC before launch.
