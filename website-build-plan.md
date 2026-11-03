# Build Plan: "Bright Code"-Style Website under a New Brand

**Reference site:** https://www.bright-code.io/
**Goal:** Build a comparable marketing site for a service business that takes AI-built prototypes to production, with a new name, original copy, and original visuals.
**Prepared:** 31 Oct 2026

> Note: Copy, logos, team photos, and mockup content from the reference site must not be reused. This plan copies the *structure and strategy*, not the content. Replace the placeholder brand **"[NewBrand]"** with your chosen name.

---

## 1. What the Reference Site Does (Findings)

**Positioning:** A services company that hardens AI-generated software (Cursor, Copilot, Lovable, Claude Code projects) for production: security, tests, deployment, documentation, delivered in the client's own repo and brand.

**Single-page flow (top to bottom):**

1. Hero: outcome headline, two CTAs, "free 30-min audit" reassurance, mockups of a pull request and a Slack thread as proof-of-work.
2. The problem: prototype won the client, now it must hold up (unread code, exposed secrets, no tests, one-machine deploys).
3. Why we do it: "AI writes code, someone must own it", a chart of shipped code vs. shared understanding, "Not a rewrite. An upgrade."
4. How it starts: staged engagement (Free audit, paid Discovery with fixed quote, Pilot, Rollout, optional ongoing review) with upfront pricing.
5. Team: three senior engineers, link to full team page.
6. Beyond the upgrade: teasers for 3 other services.
7. Final CTA: "Show us the project you're most worried about."
8. Footer: address, link columns, email, phone, LinkedIn, sitemap.

**Subpages:** /production-upgrade (with #prices), /what-else-we-do (with #web-development), /who-we-are, /contact, /ai-workflow-implementation, /ai-oversight, /privacy, /sitemap.xml.

**Tech hints:** Next.js (image optimization paths), Vercel-style hosting, light/dark theme support, SVG icons, gradient backgrounds. No forms on the home page; the primary conversion is a booking link.

**Key conversion mechanic:** a low-friction free audit, then a small paid discovery step, then a larger fixed-price engagement.

---

## 2. Phase Overview

| Phase | Name | Outcome | Est. Duration |
|---|---|---|---|
| 0 | Brand and Strategy | Name, positioning, offer ladder, sitemap | 3-5 days |
| 1 | Content and Messaging | Original copy for all pages | 5-7 days |
| 2 | Design System and UI | Brand kit, wireframes, hi-fi designs | 7-10 days |
| 3 | Technical Setup | Repo, stack, CI/CD, environments | 2-3 days |
| 4 | Build: Home Page | All 8 home sections live in staging | 5-7 days |
| 5 | Build: Subpages | Services, team, contact, legal pages | 7-10 days |
| 6 | Integrations | Booking, forms, analytics, email | 3-4 days |
| 7 | QA, SEO, Performance | Tested, accessible, indexed-ready | 4-5 days |
| 8 | Launch | Production go-live, monitoring | 1-2 days |
| 9 | Post-Launch Growth | Iteration, content, conversion tuning | Ongoing |

Total to launch: roughly 6-8 weeks with one designer and one developer.

---

## Phase 0: Brand and Strategy

**Objective:** Decide who you are and what you sell before designing anything.

**Tasks**
- Choose a new brand name; check domain, social handles, and trademark conflicts.
- Define the niche (e.g., "AI-built app to production", or a differentiated angle such as a specific stack, industry, or agency white-label).
- Define the ideal customer: agencies, founders, or startups with AI-built MVPs.
- Design your own offer ladder: free audit, paid discovery, fixed-price upgrade, retainer. Set real prices.
- Write a unique value proposition that differs from the reference site.
- Finalize the sitemap (see Appendix A).

**Deliverables:** Brand brief, offer ladder, sitemap, competitor notes.
**Exit criteria:** Name and domain secured; offer and pricing approved.

---

## Phase 1: Content and Messaging

**Objective:** Write all original copy before design so layouts fit real content.

**Tasks**
- Hero headline, subhead, CTA labels, reassurance line.
- Problem section: 4-5 concrete risks of unreviewed AI-generated code.
- "Why us" narrative and one original data visual concept.
- Engagement stages with deliverables and price points.
- Team bios (real people, real photos) or a "how we work" section if the team is small.
- Copy for service pages: production upgrade, AI workflow, AI oversight, web development (adapt to your actual services).
- Contact page, privacy policy, terms, cookie notice.
- SEO: target keywords, page titles, meta descriptions.

**Deliverables:** Copy doc per page, SEO sheet.
**Exit criteria:** Stakeholder sign-off on all copy.

---

## Phase 2: Design System and UI

**Objective:** Create an original visual identity and page designs.

**Tasks**
- Logo (light and dark variants), color palette, typography, spacing scale, icon style.
- Light and dark theme tokens.
- Wireframes for home and each subpage (desktop and mobile).
- High-fidelity designs for the home page sections:
  - Hero with a product-proof mockup (e.g., a code-review or chat UI, drawn originally)
  - Problem cards
  - Chart/diagram section
  - Staged-engagement timeline
  - Team cards
  - Services teaser grid
  - Final CTA band
  - Footer
- Component library in Figma: buttons, cards, nav, accordions, forms.

**Deliverables:** Figma file, design tokens, exported assets.
**Exit criteria:** Approved designs for all breakpoints.

---

## Phase 3: Technical Setup

**Objective:** Stand up a production-grade foundation.

**Recommended stack:** Next.js (App Router), TypeScript, Tailwind CSS, deployed on Vercel. Optional CMS: Sanity or MDX for blog and pages.

**Tasks**
- Create repo, branch protection, and PR template.
- Configure ESLint, Prettier, and type checking.
- CI pipeline: lint, type check, build, and tests on every PR.
- Preview deployments per PR; staging and production environments.
- Environment variable management (no secrets in code).
- Implement theme switching (light/dark) with design tokens.

**Deliverables:** Running skeleton site on staging with CI.
**Exit criteria:** Green pipeline and preview deploys working.

---

## Phase 4: Build the Home Page

**Objective:** Implement all home sections from the approved design.

**Tasks**
- Header with nav and a prominent primary CTA button; mobile menu.
- Hero with two CTAs and animated or static proof mockups.
- Problem section.
- "Why us" section with an interactive or SVG chart.
- Engagement stages section with pricing summary.
- Team preview section.
- "Beyond the upgrade" teaser cards linking to subpages.
- Final CTA section.
- Footer with address, link columns, contact details, social links, sitemap link.
- Responsive behavior, subtle scroll animations, image optimization.

**Deliverables:** Complete home page on staging.
**Exit criteria:** Matches designs at mobile, tablet, and desktop.

---

## Phase 5: Build Subpages

**Objective:** Deliver the supporting pages that carry detail and SEO weight.

**Pages**
- Primary service page with pricing anchor section and FAQ.
- "What else we do" page with sections per additional service (including a web development anchor).
- AI workflow service page.
- AI oversight service page.
- Team / About page.
- Contact page with booking.
- Privacy policy, terms, and 404 page.
- Auto-generated sitemap.xml and robots.txt.

**Deliverables:** All pages live on staging.
**Exit criteria:** Every internal link resolves; content reviewed.

---

## Phase 6: Integrations

**Objective:** Make the site capture and track leads.

**Tasks**
- Booking: embed a scheduler (Cal.com or Calendly) behind every "Book the free audit"-style CTA.
- Contact form with spam protection and email delivery (Resend or similar), plus CRM or Slack notification.
- Analytics (Plausible, GA4, or PostHog) with CTA click events and booking conversion goals.
- Cookie consent if required for your audience.
- Optional: newsletter signup and a lightweight blog.

**Deliverables:** Working lead pipeline with tracked conversions.
**Exit criteria:** Test booking and form submission arrive end to end.

---

## Phase 7: QA, SEO, and Performance

**Tasks**
- Cross-browser and device testing (Chrome, Safari, Firefox, iOS, Android).
- Accessibility audit to WCAG 2.2 AA (contrast, keyboard navigation, alt text).
- Lighthouse targets: 90+ on Performance, Accessibility, Best Practices, and SEO.
- On-page SEO: titles, meta, Open Graph images, structured data (Organization, Service, FAQ).
- Security headers, dependency audit, secret scan.
- Legal review of privacy and terms.

**Deliverables:** QA report, fixed issues log.
**Exit criteria:** No critical or high bugs; Lighthouse targets met.

---

## Phase 8: Launch

**Tasks**
- Point DNS, enable HTTPS, set up www/non-www redirects.
- Submit sitemap to Google Search Console and Bing Webmaster Tools.
- Enable uptime and error monitoring (e.g., Sentry, UptimeRobot).
- Smoke test every CTA and form on production.
- Announce on LinkedIn and relevant channels.

**Deliverables:** Live production site.
**Exit criteria:** Monitoring green for 48 hours.

---

## Phase 9: Post-Launch Growth

**Tasks**
- Review analytics weekly; A/B test hero headline and CTA wording.
- Publish case studies and a blog (e.g., "5 security issues we find in AI-built apps").
- Add testimonials and client logos as they become available.
- Refine pricing and offer based on audit conversations.
- Quarterly performance, security, and content review.

---

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Too close to the reference site (legal and brand risk) | Original copy, visuals, team, and offer; differentiate positioning in Phase 0 |
| Scope creep on subpages | Lock sitemap in Phase 0; park extras for Phase 9 |
| No real proof or testimonials at launch | Use process transparency, sample reports, and honest audits instead of invented claims |
| Slow lead response | Automate booking and alerts in Phase 6 |

## Appendix A: Proposed Sitemap

- `/` Home
- `/production-upgrade` (with `#prices`)
- `/what-else-we-do` (with `#web-development`)
- `/ai-workflow-implementation`
- `/ai-oversight`
- `/who-we-are`
- `/contact`
- `/privacy`, `/terms`
- `/blog` (optional, Phase 9)
- `/sitemap.xml`, `/robots.txt`

## Appendix B: Open Decisions

1. Brand name and domain.
2. Exact services you will actually offer and their pricing.
3. Whether you have a real team to feature, or will lead with process instead.
4. CMS or static content.
5. Budget and timeline, which determine whether phases run in parallel.
