import Section from "./Section";

const risks = [
  { t: "Code nobody has read", d: "Large parts of the app were generated and accepted without a human review." },
  { t: "Exposed secrets", d: "API keys and tokens sit in the source, one public repo away from a bad day." },
  { t: "No tests", d: "Every change is a gamble because nothing proves the last feature still works." },
  { t: "Deploys that only work on one machine", d: "Shipping depends on a laptop, a manual step, or someone's memory." },
];

export default function Problem() {
  return (
    <Section
      eyebrow="The problem"
      title="The prototype won the client. Now it has to hold up."
    >
      <p className="max-w-2xl text-muted">
        Tools like Cursor, Copilot, Lovable and Claude Code get you to a demo fast. Production asks for more.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {risks.map((r) => (
          <div key={r.t} className="rounded-xl border border-line bg-card p-6">
            <h3 className="font-semibold">{r.t}</h3>
            <p className="mt-2 text-sm text-muted">{r.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
