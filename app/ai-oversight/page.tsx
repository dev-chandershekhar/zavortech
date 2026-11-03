import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "AI oversight | ZavorTech",
  description: "Independent review of the AI systems you already run.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI oversight"
        title="A second pair of eyes on the AI you already run."
        intro="We review live AI features and pipelines, then tell you plainly what is working and what is a risk."
      />
      <Section title="What we review">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Quality">Output accuracy, regressions and edge cases.</Card>
          <Card title="Cost">Token spend, caching and wasteful calls.</Card>
          <Card title="Safety">Prompt injection, data exposure and misuse paths.</Card>
          <Card title="Drift">Behavior changes after model or prompt updates.</Card>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
