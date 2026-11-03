import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "AI workflow implementation | ZavorTech",
  description: "Put AI into your delivery process with guardrails and clear ownership.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI workflows"
        title="Use AI in delivery without losing control of the code."
        intro="We set up the tools, review gates and habits that keep AI-assisted work safe to ship."
      />
      <Section title="What we set up">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Review gates">Pull request rules, required checks and human sign-off for AI-written changes.</Card>
          <Card title="Tooling and prompts">Shared project context, conventions and templates so output stays consistent.</Card>
          <Card title="Team training">Hands-on sessions so every developer knows when to trust, verify or reject AI output.</Card>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
