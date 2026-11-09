import Link from "next/link";
import Section from "./Section";

// Replace with your real team. Do not invent people or credentials.
const team = [
  { name: "[Founder name]", role: "Founder and engineer" },
  { name: "[Founder name]", role: "Founder and engineer" },
  { name: "[Team member]", role: "Senior developer" },
];

export default function Team() {
  return (
    <Section tone="soft" eyebrow="Team" title="Senior engineers who read every line.">
      <p className="max-w-2xl text-muted">
        Replace this copy with your real experience, for example the years each person has shipped production software.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {team.map((m, i) => (
          <div key={i} className="glass rounded-2xl p-6">
            <div className="h-14 w-14 rounded-full bg-accent-soft" aria-hidden />
            <p className="mt-4 font-semibold">{m.name}</p>
            <p className="text-sm text-muted">{m.role}</p>
          </div>
        ))}
      </div>
      <p className="mt-6">
        <Link href="/who-we-are" className="text-sm font-semibold text-accent hover:underline">Meet the whole team</Link>
      </p>
    </Section>
  );
}
