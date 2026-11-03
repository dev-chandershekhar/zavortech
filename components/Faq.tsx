import JsonLd from "./JsonLd";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }}
      />
      <div className="max-w-3xl divide-y divide-line rounded-xl border border-line bg-card">
        {items.map((i) => (
          <details key={i.q} className="group p-5">
            <summary className="cursor-pointer list-none font-semibold marker:hidden">{i.q}</summary>
            <p className="mt-2 text-sm text-muted">{i.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
