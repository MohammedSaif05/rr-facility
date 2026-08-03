# Implementation Plan: Refined Radiance Facility Management Website

**Domain:** rrfacilityqatar.com
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
**Purpose:** Marketing + lead-gen + recruitment website for a Qatar-based facility management / cleaning company
**Reference brand:** Sister company RR Cleaning Qatar (rrcleaningqatar.com) — same founder, same services, same service area, new legal entity and domain

---

## 0. Context for the Building Agent

This is a **new company** — Refined Radiance Facility Management — founded by the same person (Babu Abdul Kadar) who runs Refined Radiance Cleaning. The business model, services, service areas, and target customers are the same as the existing site. Do not copy code or assets from the old site verbatim — rebuild from scratch on this stack, but keep messaging and factual details consistent so the two brands feel like credible siblings, not clones.

**Non-negotiables:**
1. Next.js 14 App Router, TypeScript, Tailwind CSS.
2. Fully mobile-responsive (this is a WhatsApp/mobile-first market — most Qatar customers will book from a phone).
3. Aggressive, technically correct local SEO (see Section 5) — this is a stated top priority.
4. Visually distinctive design — not a generic template. Follow the design process in Section 4 before writing any component code.
5. Real content only. Do not invent fake testimonials, fake team headcounts, or fake certifications. Where content is genuinely unknown (e.g. exact team size), use honest, non-specific language ("our trained team," not "50+ employees") until the client supplies real numbers/photos.

---

## 1. Company Facts to Use as Source Content

Use these as the seed content. Placeholder fields marked `[CONFIRM]` must be confirmed with the client before launch — do not invent values.

- **Company name:** Refined Radiance Facility Management
- **Domain:** rrfacilityqatar.com
- **Founder:** Babu Abdul Kadar
- **Sister brand:** Refined Radiance Cleaning (residential/office cleaning, rrcleaningqatar.com) — can be mentioned as "part of the Refined Radiance group" if the client confirms they want that association public. `[CONFIRM]`
- **Positioning shift:** "Cleaning" → "Facility Management" implies a broader B2B scope: not just cleaning, but ongoing facility upkeep contracts (commercial buildings, retail, offices, residential compounds). Recommend the copy lean into: cleaning, maintenance, and facility support as one bundled service — but only list specific services (electrical, MEP, pest control, etc.) if the client confirms they actually offer them. `[CONFIRM SCOPE]`
- **Core services (confirmed, mirrored from sister site):**
  - Home Cleaning (residential)
  - Office / Commercial Cleaning
  - Window & Glass Cleaning
  - Kitchen Deep Cleaning
  - Carpet & Sofa Shampooing
  - **Facility management add-ons to confirm:** AMC (annual maintenance contracts), pest control, MEP/HVAC light maintenance, landscaping, waste management, manpower supply `[CONFIRM]`
- **Service areas:** Doha, Al Wakrah, Al Rayyan, Al Khor, Qatar-wide
- **Office location:** `[CONFIRM new address — do not reuse Hiteen Street if it's the same physical office as the other company, confirm whether they're co-located]`
- **Contact channels:** Phone (Qatar), Phone (India, if applicable), Email, WhatsApp — `[CONFIRM new numbers/email for the new entity; do not reuse old ones unless intentional]`
- **Recruitment:** The old site runs an active hiring funnel (basic salary, allowances, accommodation, transport, health card, contract terms). Confirm whether the new company will also recruit directly, or whether hiring stays under the original entity. `[CONFIRM]`
- **Trust signals to carry over:** Trained & verified staff, eco-friendly products, punctual/reliable, satisfaction guarantee.

**Action item for you (Blaster) before build starts:** get `[CONFIRM]` items answered by the client/founder. The agent should treat unanswered ones as CMS-editable placeholders, not hardcoded guesses.

---

## 2. Information Architecture (Pages)

```
/                      → Home (hero, services overview, why-us, service areas, CTA)
/services              → All services, expandable detail per service
/services/[slug]       → Individual service detail page (SEO landing pages — see Sec.5)
/about                 → Founder story, company mission, team/trust signals
/service-areas         → Doha / Al Wakrah / Al Rayyan / Al Khor — local SEO pages
/service-areas/[slug]  → One page per area (see Sec.5 local SEO strategy)
/careers               → Job openings + application form (if confirmed in scope)
/contact               → Contact form, WhatsApp CTA, map embed, phone/email
/gallery               → Office/work photo gallery (real photos only)
sitemap.xml, robots.txt, /404
```

Why per-service and per-area pages instead of one long homepage: each becomes an independently rankable landing page for a specific search query ("office cleaning Al Wakrah", "facility management Doha") — this is the single highest-leverage SEO move available to a local services business.

---

## 3. Tech Stack & Project Setup

```
Framework:    Next.js 14 (App Router), TypeScript strict mode
Styling:      Tailwind CSS + a small design-token config (see Sec.4)
Fonts:        next/font (self-hosted, zero layout shift) — pair chosen in Sec.4
Forms:        React Server Actions or a lightweight API route → email/webhook
              (no client needs a backend DB for a marketing site; keep it simple)
Images:       next/image everywhere, real photos only, AVIF/WebP output
Icons:        lucide-react
Animation:    Framer Motion (used sparingly — see design section, not decoration for its own sake)
Analytics:    Google Analytics 4 + Google Search Console verification
Deployment:   Vercel (recommended for Next.js) — or any Node host
CMS (optional, recommended): keep service/area content in typed JSON/MDX files
              under /content so the client's copy can be edited without touching
              components. Do not over-engineer with a full headless CMS unless
              requested.
```

**Suggested folder structure:**
```
/app
  /(marketing)
    /page.tsx                → home
    /services/page.tsx
    /services/[slug]/page.tsx
    /service-areas/page.tsx
    /service-areas/[slug]/page.tsx
    /about/page.tsx
    /careers/page.tsx
    /contact/page.tsx
    /gallery/page.tsx
  /api/contact/route.ts
  /api/careers/route.ts
  layout.tsx                 → global shell, header, footer, JSON-LD injection
  sitemap.ts                 → dynamic sitemap generation
  robots.ts
/components
  /ui                        → buttons, cards, form inputs (Tailwind primitives)
  /sections                  → Hero, ServicesGrid, WhyUs, Testimonials, CTASection, etc.
  /layout                    → Header, Footer, MobileNav, WhatsAppFloatingButton
/content
  services.ts                → typed array of service objects (slug, title, description, icon, image)
  areas.ts                   → typed array of service-area objects
  site-config.ts             → phone numbers, email, addresses, social links (single source of truth)
/lib
  seo.ts                     → shared metadata + JSON-LD generator helpers
/public
  /images
  /icons
```

Centralizing contact details in `site-config.ts` is important: phone numbers/WhatsApp links appear in the header, footer, hero, contact page, and JSON-LD — one source prevents drift when the client updates a number.

---

## 4. Design Direction (Instructions for the Agent's Design Pass)

Before writing component code, the agent must go through a brainstorm → critique → build cycle (do not default to a generic SaaS-template look). Concretely:

1. **Ground it in the subject.** This is a Gulf-region, trust-driven, blue-collar-adjacent service business bridging two audiences: (a) homeowners/office managers booking a service, and (b) job-seeking laborers applying for work. The design must feel premium enough to justify "facility management" positioning (a step up from a basic maid-service site) while staying warm and approachable — not corporate-cold.
2. **Avoid the generic AI-template defaults**: no cream-background-plus-terracotta-serif look, no near-black-plus-neon-accent look, no broadsheet hairline-rule look, unless deliberately chosen and justified. Derive the palette from the actual subject: think clean architectural surfaces, glass, water, light — facility management's real materials — rather than a stock "professional business" blue-and-white.
3. **Produce a compact token system before coding:**
   - 4–6 named hex colors (e.g., a deep base, a bright accent, neutrals) tied to an actual rationale (e.g., "polished surface" whites, a confident accent drawn from cleanliness/light imagery — not necessarily blue-just-because-corporate).
   - Two type roles minimum: a characterful display face for headlines used with restraint, and a clean body face for readability at small sizes (Arabic-adjacent legibility matters — many users are non-native English readers).
   - A layout concept sketched as ASCII wireframe for the homepage hero and one interior page.
   - One "signature" element the site will be remembered by (e.g., a distinctive way service cards are presented, an interactive service-area map, a real-photo-driven gallery treatment) — pick one and execute it well rather than decorating everywhere.
4. **Bilingual consideration:** Qatar audiences often read Arabic. Recommend at minimum RTL-safe layout structure (avoid hardcoding left/right assumptions in custom CSS) even if Arabic translation is a phase-2 feature, so it isn't a rebuild later. `[CONFIRM if Arabic version is in scope now or later]`
5. **Motion:** Use sparingly — a homepage load sequence and scroll reveals are enough. No excessive parallax/gimmicks that read as templated AI output.
6. **Accessibility & polish floor (non-optional):** responsive from 320px up, visible keyboard focus states, respects `prefers-reduced-motion`, color contrast passes WCAG AA, all images have descriptive alt text (this also directly helps SEO).
7. **Self-critique step:** After building the homepage, the agent should take a screenshot/render and check it against the brief — cut anything decorative that doesn't serve the message, per the "remove one accessory" principle.

---

## 5. SEO Strategy (High Priority)

### 5.1 Technical SEO foundation
- Server-rendered content via Next.js App Router (no client-only rendering of primary content) — critical for crawlability.
- Auto-generated `sitemap.xml` (via `app/sitemap.ts`) including every service and service-area page.
- `robots.txt` allowing full crawl, pointing to sitemap.
- Canonical URLs on every page.
- Core Web Vitals discipline: `next/image` for all images, font optimization via `next/font`, avoid render-blocking scripts, target LCP < 2.5s and CLS near 0 — Google's local-pack ranking is sensitive to mobile page speed.
- HTTPS + www/non-www redirect consistency, single canonical domain (`rrfacilityqatar.com`, decide www vs non-www and stick to it).

### 5.2 On-page / metadata
- Unique `<title>` and meta description per page, written for humans first, keyword-relevant naturally (mirror the sister site's pattern: service + location combos, e.g. "Office Cleaning & Facility Management in Al Wakrah, Qatar").
- One `<h1>` per page matching page intent; logical heading hierarchy.
- Open Graph + Twitter Card tags per page (reuse the pattern already validated on the sister site).

### 5.3 Structured data (JSON-LD) — high impact for local service businesses
Implement via a shared `lib/seo.ts` helper, injected in `layout.tsx` / page-level:
- `LocalBusiness` (or `HomeAndConstructionBusiness` / `CleaningService` subtype if applicable) schema with name, address, phone, geo coordinates, service area, opening hours.
- `Service` schema on each `/services/[slug]` page.
- `JobPosting` schema on `/careers` if recruitment is in scope (the sister site already validates this pattern works).
- `BreadcrumbList` schema on interior pages.
- `FAQPage` schema if an FAQ section is added (recommended — good for featured snippets, e.g. "How much does office cleaning cost in Doha?").

### 5.4 Local SEO (the highest-leverage lever for this business)
- Dedicated landing page per service area (`/service-areas/doha`, `/al-wakrah`, `/al-rayyan`, `/al-khor`) each with unique, non-duplicate copy referencing local landmarks/neighborhoods where genuinely relevant — never spun/duplicated text across areas (duplicate content actively hurts rankings).
- Google Business Profile setup (separate from the website but should be planned in parallel) with matching NAP (Name, Address, Phone) consistency between GBP and the site's JSON-LD — inconsistent NAP data is one of the most common local-SEO failures.
- Embed a real Google Map on `/contact` and relevant area pages.
- Internal linking: every service page links to relevant area pages and vice versa, plus a homepage services grid linking out — avoid orphan pages.

### 5.5 Content/keyword targets (derived from validated sister-site keyword list, adapted)
Facility management + cleaning + Qatar city-name combinations, e.g.:
"facility management Qatar," "facility management Doha," "commercial cleaning Qatar," "office cleaning Al Rayyan," "AMC cleaning contract Qatar," "cleaning jobs Doha" (if recruitment stays in scope). Build one FAQ block per service page answering the actual questions customers ask (pricing ranges if the client will share them, contract lengths, response time) — FAQ content is both a conversion tool and an SEO asset.

### 5.6 Post-launch checklist (hand this to whoever manages the site after build)
- Submit sitemap to Google Search Console and Bing Webmaster Tools.
- Verify domain ownership, set up GA4 + Search Console linkage.
- Request Google to index priority pages.
- Set up Google Business Profile and keep NAP identical to site footer/JSON-LD.

---

## 6. Key Components to Build

- **Header/Nav** — sticky, mobile hamburger menu, WhatsApp CTA button always visible.
- **Hero** — real photography (or client-provided; do not rely on stock imagery like the sister site currently does — flag this explicitly to the client since it's a known gap on rrcleaningqatar.com), clear one-line value proposition, dual CTA ("Get a Quote" / "View Services").
- **Services Grid** — links out to individual service pages, not just anchor scroll (SEO benefit of real pages vs single-page sections).
- **Why Choose Us** — trust badges (verified staff, eco-friendly, punctual, guarantee).
- **Service Areas Map/Grid** — visually shows coverage across Doha/Al Wakrah/Al Rayyan/Al Khor, links to each area's landing page.
- **Testimonials** — only real client testimonials; leave the section out or use a "coming soon" placeholder rather than fabricate quotes.
- **Careers block** (if in scope) — job details table (salary, allowances, contract, hours) mirroring the validated format from the sister site, plus application form.
- **Contact / Quote form** — name, phone, service needed, area, message → submits via server action to email/WhatsApp handoff.
- **WhatsApp floating action button** — persistent across all pages (this channel is clearly the primary conversion path for this business, per the sister site).
- **Footer** — NAP info, quick links, social, sitemap-style link list for SEO internal linking.

---

## 7. Build Phases (Recommended Order for the Agent)

1. **Phase 0 — Setup:** Next.js + TS + Tailwind scaffold, folder structure, `site-config.ts` with placeholder contact data, font setup.
2. **Phase 1 — Design tokens:** Execute the brainstorm/critique process from Section 4, lock in palette/type/layout tokens in `tailwind.config.ts` before building pages.
3. **Phase 2 — Core layout:** Header, Footer, WhatsApp button, base page shell, mobile nav.
4. **Phase 3 — Home page:** Hero, services grid, why-us, service areas teaser, CTA section.
5. **Phase 4 — Services + Areas content pages:** typed content files, dynamic `[slug]` routes, JSON-LD per page.
6. **Phase 5 — About, Careers, Contact, Gallery pages.**
7. **Phase 6 — SEO pass:** sitemap.ts, robots.ts, metadata audit on every page, JSON-LD validation (test with Google's Rich Results Test), OG image generation.
8. **Phase 7 — Responsiveness & accessibility QA:** test at 320/375/768/1024/1440px, keyboard nav check, Lighthouse pass (target 90+ on Performance/SEO/Accessibility/Best Practices).
9. **Phase 8 — Content review with client:** replace every `[CONFIRM]` placeholder with real client-provided facts before launch.
10. **Phase 9 — Deploy:** Vercel deployment, domain DNS pointed to `rrfacilityqatar.com`, submit to Search Console.

---

## 8. Explicit Guardrails for the Agent

- Do not fabricate: team size, years in business, number of clients served, certifications, or testimonials. Use honest, confident copy that doesn't rely on invented numbers.
- Do not duplicate paragraph-level content between service-area pages — write unique copy per area or the SEO benefit is lost (and can actively penalize the site).
- Do not hardcode phone numbers/emails in multiple components — always read from `site-config.ts`.
- Do not ship stock photography as a permanent solution — flag clearly to the client where real photos are needed (this was a visible gap on the sister site's "Why Choose Us" and service-category images).
- Confirm before publicly linking this new site to the sister brand, in case the client wants them positioned as unrelated/independent for business reasons.

---

*This document is written to be handed directly to a coding agent (e.g. Claude Code) as its build brief. Anything marked `[CONFIRM]` should be resolved with the client before that section is finalized in code.*
