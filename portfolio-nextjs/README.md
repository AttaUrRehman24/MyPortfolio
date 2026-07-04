# Jenny Portfolio — Next.js TypeScript

This is the Next.js TypeScript version of `Portfolio Preview.html`, with the same layout, styles, animations, and tweaks panel.

## Setup

1. Copy images from the project root into `public/images` (if not already there):

```bash
xcopy /E /I /Y "..\images" "public\images"
```

2. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

> Stop any other server on port 3000 (e.g. `npx serve`) before running Next.js.

## Project structure

- `app/page.tsx` — main page assembling all sections
- `app/globals.css` — all CSS from the HTML file
- `components/` — one component per section (Navbar, Hero, Services, etc.)
- `hooks/useReveal.ts` — scroll reveal animations
- `components/PortfolioTweaks.tsx` — brand palette / personality / texture panel

## Tweaks panel

Click the gear button (bottom-right) to open the tweaks panel, same as the HTML preview.
