# Shree Jagannath Construction — Corporate Website

Premium marketing site for M/s Shree Jagannath Construction (Engineers & Contractors).

## Run locally

```bash
cd website
npm install
npm run dev
```

Opens at **http://localhost:5174** (separate from the ResourceHub ERP demo on 5173).

## Pages

- **Home** — Hero, stats, services preview, active projects, awards
- **About** — History, mission/vision, timeline, leadership
- **Services** — Full service catalogue and plant areas
- **Projects** — TSK Phase-II jobs, active and legacy portfolio
- **Capabilities** — Workforce scale, technician categories
- **Awards** — Certifications and recognitions
- **Contact** — Email, GSTIN, enquiry form

Content sourced from the client company profile and workmen data (September 2026).

## Deploy

### Vercel (recommended)

```bash
cd website
npx vercel --prod
```

### GitHub Pages

Push to `main` — the workflow at `.github/workflows/deploy-website.yml` builds and deploys automatically when `website/` changes. Enable GitHub Pages (source: GitHub Actions) in repo settings.
