import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <p className="text-sm font-semibold text-accent">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted">That page does not exist or has moved.</p>
      <div className="mt-8"><Button href="/">Back to home</Button></div>
    </div>
  );
}
