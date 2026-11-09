"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const iso = (y: number, m: number, d: number) =>
  `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

export default function BookingCalendar() {
  const today = new Date();
  const todayIso = iso(today.getFullYear(), today.getMonth(), today.getDate());
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const first = new Date(view.y, view.m, 1).getDay();
  const count = new Date(view.y, view.m + 1, 0).getDate();
  const label = new Date(view.y, view.m, 1).toLocaleString("en-US", { month: "long", year: "numeric" });
  const atCurrentMonth = view.y === today.getFullYear() && view.m === today.getMonth();

  function shift(delta: number) {
    const d = new Date(view.y, view.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, date }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("done");
      (window as unknown as { plausible?: (n: string) => void }).plausible?.("Audit Requested");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="glass rounded-2xl p-8">
        <p className="font-semibold">Request received for {date}.</p>
        <p className="mt-1 text-sm text-muted">We confirm your time by email within one business day.</p>
      </div>
    );
  }

  const field = "w-full rounded-lg border border-fg/15 bg-card/50 px-4 py-3 backdrop-blur text-sm";
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="max-w-md glass rounded-2xl p-5">
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => shift(-1)}
            disabled={atCurrentMonth}
            aria-label="Previous month"
            className="rounded-lg px-3 py-1 hover:bg-accent-soft disabled:opacity-30"
          >
            ‹
          </button>
          <p className="font-semibold" aria-live="polite">{label}</p>
          <button
            type="button"
            onClick={() => shift(1)}
            aria-label="Next month"
            className="rounded-lg px-3 py-1 hover:bg-accent-soft"
          >
            ›
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted">
          {DAYS.map((d) => (
            <div key={d} className="py-1">{d}</div>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {Array.from({ length: first }, (_, i) => (
            <div key={`b${i}`} />
          ))}
          {Array.from({ length: count }, (_, i) => {
            const d = i + 1;
            const value = iso(view.y, view.m, d);
            const dow = (first + i) % 7;
            const disabled = value < todayIso || dow === 0 || dow === 6;
            const selected = value === date;
            return (
              <button
                key={d}
                type="button"
                disabled={disabled}
                aria-pressed={selected}
                onClick={() => setDate(value)}
                className={`aspect-square rounded-lg text-sm ${
                  selected
                    ? "bg-accent font-semibold text-accent-fg"
                    : "hover:bg-accent-soft disabled:text-muted disabled:opacity-40 disabled:hover:bg-transparent"
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>

      <form onSubmit={onSubmit} className="grid max-w-md content-start gap-4">
        <p className="text-sm text-muted">
          {date ? `Selected: ${date}` : "Pick a weekday to request a 30-minute slot."}
        </p>
        <label className="grid gap-1 text-sm font-medium">
          Name
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
        <button
          type="submit"
          disabled={!date || status === "sending"}
          className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-fg hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Request this day"}
        </button>
        {status === "error" && <p role="alert" className="text-sm text-bad">{error}</p>}
      </form>
    </div>
  );
}
