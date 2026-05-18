# Dhruv Sharma — Cybersecurity Portfolio

A dark, professional, cybersecurity-inspired personal portfolio built on TanStack Start with Tailwind v4 design tokens. Clean composition, subtle motion, fully responsive, SEO-ready.

## Design system (src/styles.css)

- Background `#0B1120`, Foreground near-white, Card `#111827`, Border subtle slate
- Primary accent `#38BDF8` (cyan-blue), Secondary accent `#22C55E` (green)
- Typography: Inter (headings + body) via Google Fonts; JetBrains Mono for small terminal-style accents (section labels like `> about`, code chips)
- Subtle effects: thin grid background on hero, soft glow on accents, hairline borders, hover lift on cards
- Motion: framer-motion fade/slide on scroll, smooth scroll, hover transforms — restrained, not flashy

## Routes (TanStack Start, file-based)

Single long landing page is the right fit for a portfolio — sections scroll with anchor links in the nav. Each is a component, all composed in `src/routes/index.tsx`.

```
src/routes/
  __root.tsx         (existing — keep)
  index.tsx          (compose all sections + SEO head)
src/components/portfolio/
  Navbar.tsx         (sticky, anchor links, theme toggle, scroll progress bar)
  Hero.tsx
  About.tsx
  Education.tsx
  Skills.tsx
  Certifications.tsx
  Experience.tsx
  Achievements.tsx
  Blog.tsx           (placeholder "Coming soon" cards)
  Contact.tsx        (form + links)
  Footer.tsx
  BackToTop.tsx
  ScrollProgress.tsx
  ThemeToggle.tsx
src/lib/
  portfolio-data.ts  (all content as typed constants)
  theme.ts           (dark/light toggle via class on <html>)
```

## Section details

- **Hero**: Name, headline, subheadline, location chip, intro paragraph, CTA buttons (Contact / Download Resume), social icon row (LinkedIn, GitHub, TryHackMe, HTB, Email). Background: subtle grid + radial glow, mono "whoami" tag.
- **About**: Two-column on desktop — paragraph copy + quick-stat cards (Education, Focus areas, Platforms).
- **Education**: Vertical timeline, 4 entries with institution, degree, dates.
- **Skills**: Category cards (Cybersecurity, Cloud, Programming/OS, AI & Data, Tools, Platforms, Soft Skills) with badge chips.
- **Certifications**: Responsive grid of cards, issuer + date, "In Progress" badge variant for CEH.
- **Hands-on Experience**: Icon list with short descriptions.
- **Achievements**: Compact card grid with numeric/medal highlights.
- **Blog**: Placeholder "Coming soon" cards (3) for future articles.
- **Contact**: Form (name, email, message) with zod validation — opens user's mail client via `mailto:` prefilled (no backend), plus direct email/LinkedIn/GitHub buttons.
- **Footer**: Name, copyright, social row.

## Extra features

- Sticky navbar with smooth-scroll anchor links and active-section highlight
- Top scroll-progress bar (accent gradient)
- Back-to-top floating button (appears after scroll)
- Dark/Light mode toggle (dark default; persists to localStorage)
- Resume download button — links to `/resume.pdf` in `public/` (placeholder file; user can replace)
- SEO via `head()` in index route: title, description, OG tags, JSON-LD `Person` schema with name, jobTitle, address, sameAs (social URLs)

## Validation & accessibility

- Contact form: zod schema (trim, length limits, email format)
- Semantic landmarks (`header`, `main`, `section` with aria-labels, `footer`), single H1 in Hero, H2 per section
- Keyboard-focusable nav, visible focus rings using accent color
- Alt text on all icons, color contrast meets WCAG AA on dark theme

## Technical notes

- Add deps: `framer-motion`, `react-icons` (for TryHackMe/HTB/brand icons not in lucide), `zod`, `react-hook-form`, `@hookform/resolvers`
- Google Fonts loaded via `<link>` in `__root.tsx` head
- All colors via tokens in `src/styles.css` — no hardcoded hex in components
- No backend needed; contact form uses `mailto:` — can upgrade to Lovable Cloud later if user wants real submissions
