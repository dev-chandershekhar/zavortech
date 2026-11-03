# ZavorTech site

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Before launch

- Replace every `[bracketed]` placeholder (address, prices, team, email, LinkedIn).
- Set `NEXT_PUBLIC_BOOKING_URL` (see `.env.example`) to your scheduler link.
- Subpages are built with placeholder copy, prices and legal text. Replace before launch. The contact page booking widget arrives in Phase 6.

See `website-build-plan.md` for the full phased plan.

## Integrations (Phase 6)

Copy `.env.example` to `.env.local` and fill in:

- **Booking:** `NEXT_PUBLIC_CAL_LINK` embeds your Cal.com page on `/contact`.
- **Contact form:** `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (verified sender in Resend). In dev without keys, submissions are logged to the terminal. In production without keys the form returns a 503 and asks people to email you.
- **Analytics:** `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`. Tracks "Book Audit Click" and "Contact Form Sent". Plausible is cookieless, so no consent banner is needed for it; add one if you add cookie-based tools.
- The form has a honeypot and a small in-memory rate limit. For heavier traffic add Cloudflare Turnstile and a shared rate limiter (Upstash).

## QA results (Phase 7)

Tested against a production build: Lighthouse mobile 92-99 performance, 100 accessibility, 100 SEO; desktop 100 across the board. axe-core found 0 issues in light and dark themes at 390px width. `npm audit` reports 0 vulnerabilities on Next 16.4.3.
Included: canonical URLs, Open Graph/Twitter image, Organization, WebSite, Service and FAQPage structured data, skip link, favicon, security headers.
Still to do by hand: replace placeholders, set real `NEXT_PUBLIC_SITE_URL`, cross-browser check on real Safari/iOS and Android, legal review of privacy and terms.
