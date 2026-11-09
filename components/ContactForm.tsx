"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("done");
      (window as unknown as { plausible?: (n: string) => void }).plausible?.("Contact Form Sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="glass rounded-2xl p-8">
        <p className="font-semibold">Thanks, we got your message.</p>
        <p className="mt-1 text-sm text-muted">We reply within one business day.</p>
      </div>
    );
  }

  const field = "w-full rounded-lg border border-fg/15 bg-card/50 px-4 py-3 backdrop-blur text-sm";
  return (
    <form onSubmit={onSubmit} className="grid max-w-xl gap-4">
      <label className="grid gap-1 text-sm font-medium">
        Name
        <input name="name" required maxLength={100} autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Email
        <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Tell us about the project
        <textarea name="message" required minLength={10} maxLength={4000} rows={5} className={field} />
      </label>
      {/* Honeypot: hidden from people, bots fill it in. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-fg hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-bad">{error}</p>
      )}
    </form>
  );
}
