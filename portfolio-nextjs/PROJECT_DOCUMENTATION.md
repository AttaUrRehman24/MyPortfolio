# Atta Ur Rehman Portfolio — Project Documentation

Complete reference for the Next.js portfolio website: structure, sections, components, styling, animations, and deployment.

---

## 1. Overview

This is a **sales-focused portfolio website** built to attract recruiters, founders, and clients. It presents Atta Ur Rehman as a senior full-stack engineer who owns architecture, delivery, and product outcomes end-to-end.

**Live stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · GSAP

**Design direction:** Professional dark blue theme, glass-morphism buttons, recruiter/founder pitch copy, and compact responsive scaling for 80–90% browser zoom.

---

## 2. Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14.2.3 (App Router) |
| Language | TypeScript |
| UI | React 18 |
| Styling | Tailwind CSS + custom CSS in `app/globals.css` |
| Animation | Framer Motion, GSAP (`@gsap/react`) |
| Icons | `react-icons` (Simple Icons for tech stack) |
| Fonts | Urbanist (display), Plus Jakarta Sans (body) via `@fontsource` |
| 3D (optional) | Three.js (used in some UI experiments) |
| Buttons | Custom `SiteGlassButton` (CVA + glass morphism) |

---

## 3. Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, JSON-LD schema
│   ├── page.tsx            # Entry → renders HomePage
│   ├── globals.css         # All global styles, theme variables, section CSS
│   └── case-studies/
│       └── page.tsx        # /case-studies route
├── components/
│   ├── HomePage.tsx        # Main page composition (section order)
│   ├── Navbar.tsx          # Fixed nav + scroll spy + mobile BubbleMenu
│   ├── Hero.tsx            # Hero with portrait, proofs, founder cards
│   ├── SoftwareRiskSection.tsx
│   ├── ContactCTA.tsx      # Contact pitch + Calendly embed
│   ├── ConversionSections.tsx
│   ├── WhyHireMe.tsx
│   ├── WorkExperience.tsx
│   ├── Portfolio.tsx
│   ├── Testimonials.tsx
│   ├── Services.tsx
│   ├── MarqueeSection.tsx
│   ├── Footer.tsx
│   ├── BlogSection.tsx     # Exists but not on main page currently
│   ├── About.tsx           # Exists but not on main page currently
│   ├── CaseStudies.tsx     # Used on /case-studies
│   ├── hero/               # Hero sub-components
│   ├── navigation/         # BubbleMenu, PillNav
│   └── ui/                 # SiteGlassButton, SplitText, etc.
├── hooks/
│   └── useReveal.ts        # Scroll reveal animation hook
├── lib/
│   └── projects.ts         # Case study / project data
├── public/
│   ├── images/             # Hero, portfolio, backgrounds
│   └── site.css            # Copied build CSS (see scripts/copy-css.js)
├── scripts/
│   └── copy-css.js         # Post-build CSS copy for layout fallback
├── package.json
├── next.config.mjs
└── tailwind.config.ts
```

**Important:** The real app lives in `portfolio-nextjs/`. The parent folder (`Atta's portfolio web`) is not the Next.js root.

---

## 4. Running & Deploying

### Local development

```bash
cd portfolio-nextjs
npm install
npm run dev
```

Open: `http://localhost:3000`

### Production build

```bash
npm run build
npm start
```

Build runs `next build` then `scripts/copy-css.js` to copy compiled CSS to `public/site.css`.

### Vercel deployment

Set **Root Directory** to:

```
portfolio-nextjs
```

Framework preset: **Next.js**

---

## 5. Page Architecture

### Entry flow

```
app/page.tsx
  └── components/HomePage.tsx
        ├── useReveal() hook (scroll animations)
        └── renders all sections in order
```

### Current section order (top → bottom)

| # | Component | Section ID | Purpose |
|---|-----------|------------|---------|
| 1 | `Navbar` | — | Fixed navigation, scroll spy, Hire Me CTA |
| 2 | `Hero` | `#home` | Main intro, portrait, proofs, founder pitch |
| 3 | `SoftwareRiskSection` | — | Custom software risk + senior proof points |
| 4 | `ContactCTA` | `#contact` | "Ready when the work matters" + Book Call |
| 5 | `ConversionSections` | — | Main sales pitch (AI, product, scale, security) |
| 6 | `WhyHireMe` | `#about` | Why hire me + recruiter pitch |
| 7 | `WorkExperience` | `#experience` | Timeline of work history |
| 8 | `Portfolio` | `#portfolio` | Project carousel/cards |
| 9 | `Testimonials` | — | Continuous marquee testimonials |
| 10 | `CalendlyInlineWidget` | — | Standalone Calendly scheduler (before Services) |
| 11 | `Services` | `#services` | Skills marquee + floating tech icons |
| 12 | `MarqueeSection` | — | Animated skewed skill band |
| 13 | `Footer` | — | Links, contact, social |

---

## 6. Section Details

### 6.1 Navbar (`components/Navbar.tsx`)

**Type:** Client component (`'use client'`)

**Features:**
- Fixed top navigation with glass/chroma styling
- **Scroll spy:** Highlights active nav link based on `section[id]` position
- **Active pill:** Animated pill slides under active link (does not jump on click — only on scroll)
- **Desktop:** Horizontal link list + Hire Me button
- **Mobile:** `BubbleMenu` component with animated bubble navigation

**Nav links:**
- Home → `#home`
- About → `#about`
- Service → `#services`
- Resume → `#experience`
- Project → `#portfolio`
- Contact → `#contact`

---

### 6.2 Hero (`components/Hero.tsx`)

**Type:** Client component

**Purpose:** Primary first impression — senior engineer positioning for recruiters and founders.

**Key content blocks:**
- **Portrait:** `/images/unnamed-removebg-preview.png`
- **Orbiting tech icons:** 12 tech logos (React, Next.js, TypeScript, etc.) via `OrbitingTechIcons`
- **Split text animation:** Name/title via `SplitText` + Framer Motion
- **Proof stats:** 500+ Projects, 300+ Clients, 10+ Years
- **Floating proof chips:** Mindset, Working style, Specialty, Available for (no blur)
- **Social links:** GitHub, Gmail, LinkedIn (above founder cards)
- **Founder pain points:** 3 recruiter/founder pain questions
- **Work with me points:** 6 value propositions

**Sub-components:**
- `components/hero/OrbitingTechIcons.tsx` — circular tech icon orbit
- `components/hero/HeroLiquidCTA.tsx` — animated CTA area
- `components/ui/SplitText.tsx` — character/word split animation

---

### 6.3 Software Risk Section (`components/SoftwareRiskSection.tsx`)

**Purpose:** Sales section explaining why custom software fails and how senior ownership de-risks projects.

**Structure:**
1. **Header:** "Custom software is expensive to get wrong"
2. **Metrics:** `$75k - $350k` cost, `50-80%` failure rate
3. **Proof under pressure grid:** 6 proof cards (Millions, 100k+ rps, Gov scale, Days, Shipped, UX)
4. **Closing line:** Senior-ownership problem statement

**Styling:** `.software-risk-*` classes in `globals.css` — dark blue gradient card, compact metrics, visible proof pills.

---

### 6.4 Contact CTA (`components/ContactCTA.tsx`)

**Type:** Client component

**Purpose:** Primary conversion section — book a strategy call.

**Exports:**
- `ContactCTA` (default) — pitch card with Book Call button
- `CalendlyInlineWidget` — standalone Calendly embed (used separately in HomePage)

**Contact CTA card includes:**
- Eyebrow: "Ready when the work matters"
- Headline + description
- **Book Call** button → `https://calendly.com/hello-attarehman/30min?text_color=0f172a`
- Trust badges: Senior ownership, Scale-ready architecture, Production-grade delivery

**Calendly embed:**
- Loaded client-side only (avoids React hydration errors)
- Uses `useEffect` to inject Calendly script and call `Calendly.initInlineWidget()`
- Rendered in standalone section before Services

**Note:** Email input field was removed — only Book Call remains.

---

### 6.5 Conversion Sections (`components/ConversionSections.tsx`)

**Purpose:** Main sales pitch — four equal editorial rows (not steps, not boxes).

**Layout:** Premium charcoal editorial style — full-width rows with label, headline, description.

**Four pitches (text unchanged):**

| Label | Headline |
|-------|----------|
| AI Services | AI Isn't Working the Way You Expected? |
| Product Development | Have a Great Idea but Don't Know Where to Start? |
| Scalability | Afraid Your App Won't Handle Growth? |
| Security | Security Concerns Delaying Your Launch? |

**Styling:** `.conversion-pitch-*` classes — neutral charcoal, no blue card boxes, no step numbers.

---

### 6.6 Why Hire Me (`components/WhyHireMe.tsx`)

**Section ID:** `#about`

**Purpose:** Recruiter-focused pitch — what you get when hiring Atta.

**Content:**
- Portrait with animated background (orbs, rings, dashed ring)
- "Available for Projects" badge
- `hiringSignals` array — 4 recruiter pitch points
- **Hire Me** button (`SiteGlassButton`, size `md`) → `#contact`

**Replaced:** Old stat cards (10+ years, 20M+ users, etc.) with narrative pitch content.

---

### 6.7 Work Experience (`components/WorkExperience.tsx`)

**Section ID:** `#experience`

**Purpose:** Vertical timeline of career history.

**Data:** `experiences` array with `company`, `period`, `role`, `desc`

**Current entries (newest first):**
1. TransData — Principal Software Engineer (Feb 2023 – Present)
2. CloudMedx (US, Remote) — Lead Full-Stack / Implementation Engineer
3. Qlu.ai (US, Remote) — Senior Full-Stack Engineer (Founding Team)
4. Codility Solutions — Software Engineer
5. Thingtrax · Full-time — Software Engineer (Jan 2017 - Nov 2017) — replaced ZeroOneLogix

**Layout:** Center dashed timeline with alternating left (company/period) and right (role/description).

---

### 6.8 Portfolio (`components/Portfolio.tsx`)

**Section ID:** `#portfolio`

**Type:** Client component

**Purpose:** Showcase production projects with filterable carousel/cards.

**Projects include:** Nucleos, RentAHuman.AI, HealthHavenRx, Mainstay Digital, TAMM Abu Dhabi, and more.

**Features:**
- Category filter tags
- Project cards with image, description, tags, accent color
- External links to live projects
- Uses `next/image` (unoptimized per `next.config.mjs`)

**Extended data:** `lib/projects.ts` has detailed case study data used on `/case-studies`.

---

### 6.9 Testimonials (`components/Testimonials.tsx`)

**Purpose:** Social proof via continuous left-moving marquee.

**Features:**
- Duplicated testimonial array for seamless loop
- CSS animation: `.testimonials-marquee` / `.testimonials-track`
- Company-based identities (not generic roles):
  - CloudMedx, Qlu.ai, TransData, Dubai Government, Codility Solutions, Thingtrax / TechHub Connect

**Removed:** Decorative star SVG near section heading.

---

### 6.10 Services (`components/Services.tsx`)

**Section ID:** `#services`

**Purpose:** Technical skills showcase via animated skill marquees.

**Features:**
- Dark background (`bg-dark.jpg` + overlay)
- Floating tech icons (PostgreSQL, Kubernetes, Elasticsearch)
- 7 rows of skill pills in infinite horizontal scroll
- Skills: React, Next.js, AWS, Docker, AI/LLM, etc.

**Styling:** Compact section — reduced padding, smaller pills and headings.

---

### 6.11 Marquee Section (`components/MarqueeSection.tsx`)

**Purpose:** Decorative skewed blue marquee band with repeating skill/text animation.

**Styling:** Blue gradient band, `margin-bottom: 30px` for spacing before footer.

---

### 6.12 Footer (`components/Footer.tsx`)

**Type:** Client component

**Purpose:** Site footer with navigation, contact, social, and email CTA.

**Features:**
- 4-column layout (modern dark theme)
- Nav links, contact links, social icons
- Glass button for email
- **Removed:** User Terms & Conditions, Privacy Policy links

---

## 7. Additional Routes

### `/case-studies`

- **File:** `app/case-studies/page.tsx`
- **Component:** `components/CaseStudies.tsx`
- **Data:** `lib/projects.ts` — full project case studies with challenge, built, result, metrics

---

## 8. Shared Systems

### 8.1 SiteGlassButton (`components/ui/site-glass-button.tsx`)

Central button component used across Navbar, Hero, Contact, Footer, Why Hire Me, Portfolio.

**Features:**
- Glass morphism styling (`.glass-btn` in CSS)
- Framer Motion hover/glow effects
- Variants: `primary`, `ghost`, `outline`
- Sizes: `sm`, `md`, `lg`
- Can render as `<button>` or `<a>` via `as="a"`

**Border radius:** `8px` (globally reduced from pill shape)

---

### 8.2 Scroll Reveal (`hooks/useReveal.ts`)

**How it works:**
1. On mount, finds all `.reveal`, `.reveal-left`, `.reveal-right` elements
2. Adds `.reveal-pending` initially
3. Uses `IntersectionObserver` + scroll/resize listeners
4. Adds `.visible` when element enters viewport
5. Fallback: all elements visible after 400ms

**Usage:** Add `className="reveal"` (or `reveal-left` / `reveal-right`) to any section/element. Optional delay classes: `d1`, `d2`, etc.

---

### 8.3 Navbar Scroll Spy

- Listens to `window.scroll`
- Finds all `section[id]` elements
- Sets active nav link when `scrollY >= sectionTop - 120`
- Updates animated pill position via `updatePill()`

---

### 8.4 Calendly Integration

**Safe client-side pattern (no hydration errors):**

```tsx
// ContactCTA.tsx — CalendlyInlineWidget
1. useState showCalendly = false
2. useEffect → setShowCalendly(true) after mount
3. useEffect → load script, call Calendly.initInlineWidget()
4. Render widget div only when showCalendly is true
```

---

## 9. Styling System

### 9.1 Theme Variables (`app/globals.css`)

```css
--dark: #0F172A        /* Charcoal / slate-900 */
--primary: #2563EB     /* Blue-600 */
--secondary: #1E40AF   /* Blue-800 */
--accent: #38BDF8      /* Sky-400 */
--primary-d: #1D4ED8   /* Blue-700 */
--light: #F8FAFC       /* Slate-50 */
--font-display: Urbanist
--font-body: Plus Jakarta Sans
```

### 9.2 Styling approach

- **Primary:** Custom CSS classes in `globals.css` (most section styling)
- **Secondary:** Tailwind utilities (used in some components)
- **Inline styles:** Used in several components for one-off layout values
- **Responsive:** `clamp()` for fluid typography, media queries at 1050px, 900px, 640px

### 9.3 Key CSS sections in globals.css

| Section | Classes |
|---------|---------|
| Hero | `.hero-*`, `.hero-floating-proof-*` |
| Software Risk | `.software-risk-*` |
| Contact | `.contact-modern-*`, `.calendly-standalone-section` |
| Conversion | `.conversion-*`, `.conversion-pitch-*` |
| Why Hire Me | `.why-*`, `.why-hire-pitch-*` |
| Testimonials | `.testimonials-marquee`, `.tcard` |
| Services | `.skills-*`, `.services-tech-float` |
| Navbar | `.nav-chroma-*` |
| Buttons | `.glass-btn`, `.glass-btn--*` |

### 9.4 Global scaling

Font sizes, padding, and component dimensions were reduced globally to look correct at 80–90% browser zoom.

### 9.5 Border radius

Buttons and pills use `8px` radius (reduced from `9999px` pill shape). Decorative circles (avatars, dots) remain circular.

---

## 10. Data Sources

| Data | Location | Used by |
|------|----------|---------|
| Work experience | `WorkExperience.tsx` → `experiences` array | Work Experience section |
| Sales pitches | `ConversionSections.tsx` → `problemCards` | Conversion section |
| Senior proof points | `SoftwareRiskSection.tsx` → `SENIOR_PROOF_POINTS` | Software Risk section |
| Hiring signals | `WhyHireMe.tsx` → `hiringSignals` | Why Hire Me section |
| Testimonials | `Testimonials.tsx` → `testimonials` array | Testimonials marquee |
| Portfolio (home) | `Portfolio.tsx` → `PROJECTS` array | Portfolio section |
| Case studies (detail) | `lib/projects.ts` → `projects` array | /case-studies page |
| Skill rows | `Services.tsx` → `ROWS` array | Services marquees |
| Hero content | `Hero.tsx` → constants (FOUNDER_PAIN_POINTS, etc.) | Hero section |

---

## 11. SEO & Metadata

**File:** `app/layout.tsx`

- Title, description, keywords
- Open Graph + Twitter cards
- Canonical URL
- JSON-LD `Person` schema (name, jobTitle, skills, worksFor)
- `themeColor: #0F172A`
- `metadataBase` from `NEXT_PUBLIC_SITE_URL` env var (default: `https://attaurrehman.dev`)

---

## 12. Build Pipeline

```
npm run build
  ├── next build          → compiles app to .next/
  └── node scripts/copy-css.js
        └── copies largest .next/static/css/*.css → public/site.css
```

**Why copy CSS?** `layout.tsx` links `/site.css` as a fallback when Next.js omits stylesheet tags from SSR payload.

---

## 13. Images & Assets

**Hero image (keep):** `public/images/unnamed-removebg-preview.png`

**Removed everywhere:** `blog-2.jpg` (replaced with project images)

**Portfolio images:** `public/images/portfolio/*.png`

**Backgrounds:** `public/images/bg-dark.jpg`

---

## 14. Components Not on Main Page

These exist in the codebase but are **not** rendered in `HomePage.tsx`:

- `About.tsx`
- `BlogSection.tsx`
- `TechnicalExpertise.tsx`
- `Process.tsx`
- `Industries.tsx`
- `Stats.tsx`
- `Skills.tsx`
- `TweaksPanel.tsx` / `PortfolioTweaks.tsx`

They can be re-enabled by importing into `HomePage.tsx` or used on separate routes.

---

## 15. Environment Variables

| Variable | Purpose | Default |
|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO/metadata | `https://attaurrehman.dev` |

---

## 16. Key Files Quick Reference

| Task | File to edit |
|------|--------------|
| Change section order | `components/HomePage.tsx` |
| Update work history | `components/WorkExperience.tsx` |
| Change sales pitch copy | `components/ConversionSections.tsx` |
| Update testimonials | `components/Testimonials.tsx` |
| Change contact/Calendly | `components/ContactCTA.tsx` |
| Update projects | `components/Portfolio.tsx` or `lib/projects.ts` |
| Global styles/theme | `app/globals.css` |
| SEO metadata | `app/layout.tsx` |
| Nav links | `components/Navbar.tsx` |
| Button styling | `components/ui/site-glass-button.tsx` + `.glass-btn` in CSS |

---

## 17. Contact & Links

- **Email:** iamatta24@gmail.com
- **GitHub:** https://github.com/AttaUrRehman24
- **LinkedIn:** https://www.linkedin.com/in/AttaUrRehman24
- **Calendly:** https://calendly.com/hello-attarehman/30min

---

*Last updated: July 2026 — reflects current HomePage section order and component structure.*
