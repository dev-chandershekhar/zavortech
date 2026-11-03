import Section from "./Section";
import Button from "./Button";

const stages = [
  { n: "1", t: "Free audit", p: "Free", d: "A 30-minute screen share. We look at your project and give an honest read." },
  { n: "2", t: "Discovery", p: "[$ price]", d: "A fixed block of senior-engineer hours. You get a written report and a fixed quote for the upgrade." },
  { n: "3", t: "Pilot", p: "Quoted upfront", d: "We harden one slice of the project end to end so you can judge the work." },
  { n: "4", t: "Rollout", p: "Quoted upfront", d: "We apply the same upgrade across the rest, then hand over docs and runbooks." },
];

export default function Stages() {
  return (
    <Section eyebrow="How it starts" title="Small first step. Prices before commitment.">
      <ol className="grid gap-4 md:grid-cols-4">
        {stages.map((s) => (
          <li key={s.n} className="rounded-xl border border-line bg-card p-6">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-soft text-sm font-bold text-accent">{s.n}</span>
            <h3 className="mt-4 font-semibold">{s.t}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{s.p}</p>
            <p className="mt-2 text-sm text-muted">{s.d}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-muted">Optional ongoing review after rollout.</p>
      <div className="mt-6">
        <Button href="/production-upgrade#prices" variant="secondary">See every stage and price</Button>
      </div>
    </Section>
  );
}
