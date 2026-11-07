# Shree Jagannath Construction — Corporate Website

Marketing site for M/s Shree Jagannath Construction (Engineers & Contractors), live at
**https://www.sjcprojects.in**. English, Hindi and Odia.

## Run locally

```bash
npm install
npm run dev
```

Opens at **http://localhost:5174** (separate from the ResourceHub ERP demo on 5173).

## Pages

- **Home** — Hero, stats, services preview, why us, process, active projects, gallery, awards
- **About** — History, mission/vision, timeline, leadership
- **Services** — Full service catalogue and plant areas
- **Projects** — TSK Phase-II jobs, active and legacy portfolio
- **Gallery** — Site photography and award certificates, filterable
- **Capabilities** — Workforce scale, technician categories
- **Awards** — Certifications and recognitions
- **Contact** — Phone, email, location, GSTIN

The Workforce Portal page (`src/pages/PortalPage.tsx`) and the Portal/ResourceHub home banners
are kept in the code but not routed or linked until those products launch. The contact form was
removed until a form service is chosen.

Page list, titles and descriptions live in `src/data/seo.ts`; texts in `src/i18n/`.
Content sourced from the client company profile (September 2026).

## Deploy

Hosted on **GitHub Pages** with the custom domain `www.sjcprojects.in` (DNS at Hostinger).
Merging to `main` runs `.github/workflows/deploy-website.yml`, which builds and publishes `dist/`.
Pull requests run `.github/workflows/ci.yml` (lint + build).

GitHub Pages cannot rewrite URLs for a single-page app, so the build step in
`build/static-pages.ts` writes one HTML file per page (`about/index.html`, …) with its own
title, description and canonical URL, plus `404.html` for unknown URLs and `sitemap.xml`.
When adding a page, add it to the routes in `src/App.tsx` and to `pages` in `src/data/seo.ts`.

DNS records at Hostinger (hPanel → Domains → sjcprojects.in → DNS / Nameservers):

| Type  | Name | Value                                                                  |
| ----- | ---- | ---------------------------------------------------------------------- |
| A     | @    | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 (one record each) |
| CNAME | www  | h-pandey.github.io                                                     |

The MX and TXT records for Google Workspace email must stay as they are.
