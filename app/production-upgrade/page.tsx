import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import { BRAND, SITE_URL } from "@/lib";

export const metadata: Metadata = {
  title: "Production upgrade | ZavorTech",
  description: "Security, tests, deployment and documentation for AI-built software, delivered in your repo.",
};

const areas = [
  ["Security", "Secrets out of code, dependency audit, auth and access review, input validation."],
  ["Reliability", "Error handling, retries, health checks and sane failure behavior."],
  ["Infrastructure", "Repeatable deploys, environments, CI/CD and rollback."],
  ["Performance", "Slow queries, bundle size and the hot paths that hurt users first."],
  ["Testing", "A test suite around the behavior that matters, run on every pull request."],
  ["Documentation", "Setup, architecture notes and runbooks your team can actually follow."],
];

const stages = [
  { t: "Free audit", p: "Free", d: "30-minute screen share. Honest read, no code access needed." },
  { t: "Discovery", p: "[$ price] / [N] hours", d: "Written report with findings ranked by risk, plus a fixed quote for the upgrade." },
  { t: "Pilot", p: "[$ price]", d: "One slice hardened end to end so you can judge quality before committing." },
  { t: "Rollout", p: "[$ price]", d: "The upgrade applied across the project, with handover docs." },
  { t: "Ongoing review", p: "[$ price] / month (optional)", d: "Regular review of new AI-generated changes before they ship." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Production upgrade for AI-built software",
          provider: { "@type": "Organization", name: BRAND, url: SITE_URL },
          serviceType: "Software security, testing, deployment and documentation",
        }}
      />
      <PageHero
        eyebrow="Production upgrade"
        title="From working prototype to software you can stand behind."
        intro="We harden what you have in place. Every change arrives as a reviewed pull request in your repo, under your brand."
      />
      <Section title="What the upgrade covers">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(([t, d]) => (
            <Card key={t} title={t}>{d}</Card>
          ))}
        </div>
      </Section>
      <Section id="prices" tone="soft" eyebrow="Prices" title="Every stage, priced before you commit.">
        <div tabIndex={0} role="region" aria-label="Pricing stages table, scrollable" className="overflow-x-auto glass rounded-2xl">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="border-b border-line text-muted">
              <tr><th className="p-4">Stage</th><th className="p-4">Price</th><th className="p-4">What you get</th></tr>
            </thead>
            <tbody>
              {stages.map((s) => (
                <tr key={s.t} className="border-b border-line last:border-0">
                  <td className="p-4 font-semibold">{s.t}</td>
                  <td className="p-4 text-accent">{s.p}</td>
                  <td className="p-4 text-muted">{s.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted">Replace the bracketed prices with your real numbers.</p>
      </Section>
      <Section title="Questions">
        <Faq
          items={[
            { q: "Do you rewrite my app?", a: "No. We keep the parts that work and harden them. If something cannot be saved, we quote it separately in writing." },
            { q: "Do you need access to my code for the audit?", a: "No. The free audit is a screen share where you show us the project." },
            { q: "Where does the work live?", a: "In your repository, as pull requests your team can review and merge." },
            { q: "Which AI tools do you support?", a: "Projects built with Cursor, Copilot, Lovable, Claude Code and similar tools." },
          ]}
        />
      </Section>
      <FinalCta />
    </>
  );
}
