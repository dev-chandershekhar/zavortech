export default function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "plain",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  tone?: "plain" | "soft";
}) {
  return (
    <section id={id} className={tone === "soft" ? "bg-accent-soft/30" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
