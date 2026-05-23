# ANAF — English prototype

An English-language design prototype of the Romanian tax administration
(**ANAF — National Agency for Fiscal Administration**) website.

It is a static, mobile-first site built with **Next.js (static export)** and a
**DSFR-inspired institutional design system** (the "Blue France" charter:
sober palette, shared-border grids, 4px-blue header, single dark CTA band).

> Prototype only — not an official service. No data is collected or transmitted.

## Pages

- **Home** — hero + SPV portal panel, search, online services, stats, news, CTA
- **/services** — Virtual Private Space (SPV), RO e-Factura, RO e-Transport, SAF-T, payments, "ANA" assistant
- **/forms** — fiscal declarations by number (212, 300, 100/101, 406, …)
- **/contact** — virtual assistant, Call Center, email, regional offices
- **/about** — mission, what we do, values

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
```

Fonts (Inter, JetBrains Mono) are self-hosted at build time via `next/font`.

## Deploy

### Vercel (recommended)
Import the repo — Vercel auto-detects Next.js. Leave `NEXT_PUBLIC_BASE_PATH`
unset so the site serves at the domain root.

### GitHub Pages
A workflow at `.github/workflows/deploy.yml` builds and publishes `./out`.
Enable **Settings → Pages → Source: GitHub Actions**. For a project page
(`<user>.github.io/<repo>/`) the workflow sets `NEXT_PUBLIC_BASE_PATH` to the
repo name automatically so assets resolve correctly.

## Design

The full visual specification lives in the design charter that this prototype
implements 1:1 (tokens in `app/globals.css`). Key motifs: 4px blue header top
border, 3px blue accents, `--blue-light` hover everywhere, shared-border card
grids, Romanian tricolor in the government identity banner, and exactly one
dark blue CTA band.
