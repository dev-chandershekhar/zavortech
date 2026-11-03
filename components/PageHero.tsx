export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>
      </div>
    </section>
  );
}
