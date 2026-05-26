# ANAF — English prototype

An English-language design prototype of the Romanian tax administration
(**ANAF — National Agency for Fiscal Administration**) website.

It is a static, mobile-first site built with **Next.js (static export)** and a
**DSFR-inspired institutional design system** (the "Blue France" charter:
sober palette, shared-border grids, 4px-blue header, single dark CTA band).

> Prototype only — not an official service. No data is collected or transmitted.

## Languages

Bilingual via locale routing under `/[lang]` (`ro`, `en`). **Romanian is the
default** — `/` redirects to `/ro`. The RO/EN buttons in the government banner
switch between the equivalent page in the other language. All copy lives in
typed dictionaries (`lib/dictionaries.ts`); RO uses familiar ANAF terminology
(*Spațiul Privat Virtual*, *Declarația unică*, *Decont de TVA*, *Fișierul
standard de control fiscal*). To make English the default, change
`defaultLocale` in `lib/i18n.ts`.

## Pages (per language)

- **`/{lang}`** — hero + SPV portal panel, search, online services, stats, news, CTA
- **`/{lang}/services`** — SPV, RO e-Factura, RO e-Transport, SAF-T, payments, "ANA" assistant
- **`/{lang}/forms`** — fiscal declarations by number (212, 300, 100/101, 406, …)
- **`/{lang}/contact`** — virtual assistant, Call Center, email, regional offices
- **`/{lang}/about`** — mission, what we do, values

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
