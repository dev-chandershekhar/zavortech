import Link from "next/link";
import Section from "./Section";

const items = [
  { t: "AI workflows in delivery", d: "Put AI into your delivery process with guardrails, review steps and clear ownership.", href: "/ai-workflow-implementation" },
  { t: "AI oversight", d: "Independent review of AI systems you already run: quality, cost, safety and drift.", href: "/ai-oversight" },
  { t: "Web development under your brand", d: "Senior frontend and full-stack capacity that ships as your team.", href: "/what-else-we-do#web-development" },
];

export default function Beyond() {
  return (
    <Section eyebrow="Beyond the upgrade" title="What else we do.">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((i) => (
          <Link key={i.t} href={i.href} className="group rounded-xl border border-line bg-card p-6 transition-colors hover:bg-accent-soft">
            <h3 className="font-semibold">{i.t}</h3>
            <p className="mt-2 text-sm text-muted">{i.d}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-accent group-hover:underline">Learn more</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
