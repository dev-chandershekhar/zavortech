import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "What else we do | ZavorTech",
  description: "AI workflows, AI oversight and web development under your brand.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="More ways we help your team ship."
        intro="The production upgrade is where most clients start. These services cover what comes next."
      />
      <Section title="AI workflows in delivery">
        <p className="max-w-2xl text-muted">We design review steps, guardrails and ownership so AI speeds your team up without lowering quality.</p>
        <p className="mt-4"><Link href="/ai-workflow-implementation" className="font-semibold text-accent hover:underline">Details</Link></p>
      </Section>
      <Section tone="soft" title="AI oversight">
        <p className="max-w-2xl text-muted">Independent review of the AI systems you already run, covering quality, cost, safety and drift.</p>
        <p className="mt-4"><Link href="/ai-oversight" className="font-semibold text-accent hover:underline">Details</Link></p>
      </Section>
      <Section id="web-development" title="Web development under your brand">
        <p className="max-w-2xl text-muted">Senior frontend and full-stack engineers who work inside your process and ship as part of your team. Your clients see your brand, not ours.</p>
        <div className="mt-6"><Button href="/contact">Talk to us</Button></div>
      </Section>
      <FinalCta />
    </>
  );
}
