# ZavorTech Site

Marketing site for ZavorTech, a service that takes AI-built prototypes to production. The main conversion is a free audit booking.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values (see Configuration)
npm run dev                  # http://localhost:3000
```

| Script              | What it does                 |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start the dev server         |
| `npm run build`     | Production build             |
| `npm start`         | Serve the production build   |
| `npm run lint`      | Lint                         |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

## Project structure

```
app/                 Routes (App Router)
  page.tsx           Home page
  production-upgrade, what-else-we-do, who-we-are,
  ai-workflow-implementation, ai-oversight, contact,
  privacy, terms     Subpages
  api/contact/       Contact form endpoint (POST)
  sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg
components/          Page sections and shared UI (Hero, Stages, Faq, Team, ContactForm, ...)
lib.ts               Brand name, site URL, booking URL
public/team/         Team photos
website-build-plan.md  Phased build plan
```

## Configuration

Copy `.env.example` to `.env.local`.

| Variable                       | Purpose                                                                 |
| ------------------------------ | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Canonical site URL (SEO, sitemap, Open Graph)                           |
| `NEXT_PUBLIC_BOOKING_URL`      | Target of every "Book the free audit" button (default `/contact`)       |
| `NEXT_PUBLIC_CAL_LINK`         | Cal.com link embedded on `/contact`, e.g. `yourname/audit`              |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible analytics domain. Blank disables analytics                    |
| `RESEND_API_KEY`               | Resend API key for contact form email (server-side only)                |
| `CONTACT_TO_EMAIL`             | Where contact form messages are delivered                               |
| `CONTACT_FROM_EMAIL`           | Verified sender address in Resend                                       |

### Integrations

- **Contact form:** In dev without Resend keys, submissions are logged to the terminal. In production without keys, the form returns a 503 and asks visitors to email you. It has a honeypot field and a small in-memory rate limit. For heavier traffic, add Cloudflare Turnstile and a shared rate limiter (e.g. Upstash).
- **Analytics:** Plausible tracks "Book Audit Click" and "Contact Form Sent". It is cookieless, so no consent banner is needed. Add one if you add cookie-based tools.
- **Security headers:** Set in `next.config.ts` (nosniff, frame deny, referrer policy, permissions policy).

## Before launch

- Replace every `[bracketed]` placeholder (address, prices, team, email, LinkedIn).
- Replace placeholder copy, prices and legal text on the subpages. Have privacy and terms reviewed legally.
- Set a real `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BOOKING_URL`.
- Cross-browser check on real Safari/iOS and Android.

## QA status

Tested against a production build:

- Lighthouse mobile: 92-99 performance, 100 accessibility, 100 SEO. Desktop: 100 across the board.
- axe-core: 0 issues in light and dark themes at 390px width.
- `npm audit`: 0 vulnerabilities on Next 16.4.3.

Included: canonical URLs, Open Graph/Twitter image, Organization, WebSite, Service and FAQPage structured data, skip link, favicon, security headers.

## Further reading

See [website-build-plan.md](website-build-plan.md) for the full phased plan.
