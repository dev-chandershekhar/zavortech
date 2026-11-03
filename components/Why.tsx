import Section from "./Section";

export default function Why() {
  return (
    <Section
      tone="soft"
      eyebrow="Why we do it"
      title="AI can write the code. Someone still has to own it."
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-muted">
            Output grows faster than understanding. The more code a team ships with AI, the less of it anyone
            on the team can explain, debug, or safely change.
          </p>
          <h3 className="mt-8 text-xl font-semibold">Not a rewrite. An upgrade.</h3>
          <p className="mt-2 text-muted">
            We keep what works and harden it in place. If a part cannot be saved, we say so and quote it
            separately, in writing.
          </p>
        </div>
        <figure className="rounded-xl border border-line bg-card p-5">
          <svg viewBox="0 0 400 220" role="img" aria-label="Chart: shipped code rises over time while shared team understanding falls" className="w-full">
            <line x1="30" y1="190" x2="380" y2="190" stroke="var(--line)" />
            <line x1="30" y1="20" x2="30" y2="190" stroke="var(--line)" />
            <path d="M30 175 C120 160, 220 90, 380 30" fill="none" stroke="var(--accent)" strokeWidth="3" />
            <path d="M30 60 C120 70, 240 130, 380 175" fill="none" stroke="var(--bad)" strokeWidth="3" strokeDasharray="6 4" />
            <text x="250" y="48" fontSize="11" fill="var(--accent)">Code shipped</text>
            <text x="230" y="168" fontSize="11" fill="var(--bad)">Shared understanding</text>
            <text x="205" y="210" fontSize="10" fill="var(--muted)" textAnchor="middle">Time</text>
          </svg>
          <figcaption className="mt-2 text-xs text-muted">Illustrative, not measured data.</figcaption>
        </figure>
      </div>
    </Section>
  );
}
