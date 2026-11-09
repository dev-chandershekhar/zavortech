export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{children}</p>
    </div>
  );
}
