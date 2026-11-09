import Button from "./Button";
import { BOOKING_URL } from "@/lib";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Your AI-built project, ready for production.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            We secure, test, deploy and document the software you built with AI. Everything lands in your
            repo, under your brand, reviewed by senior engineers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={BOOKING_URL}>Book the free audit</Button>
            <Button href="/production-upgrade" variant="secondary">See the production upgrade</Button>
          </div>
          <p className="mt-4 text-sm text-muted">
            Free 30-minute screen share. No code access needed. No commitment.
          </p>
        </div>

        <div className="space-y-4" aria-hidden>
          <div className="glass rounded-2xl p-5 font-mono text-xs">
            <p className="font-sans text-sm font-semibold">Pull request: Move secrets out of the code</p>
            <p className="mt-3 text-bad">- const key = "sk_live_51H...";</p>
            <p className="text-good">+ const key = process.env.PAYMENT_KEY;</p>
            <div className="mt-4 flex flex-wrap gap-2 font-sans text-[11px] text-muted">
              <span className="rounded-full border border-fg/15 bg-fg/5 px-2 py-1">tests: running</span>
              <span className="rounded-full border border-fg/15 bg-fg/5 px-2 py-1">build: running</span>
              <span className="rounded-full border border-fg/15 bg-fg/5 px-2 py-1">security scan: running</span>
              <span className="rounded-full bg-accent/15 px-2 py-1 text-accent">approved by reviewer</span>
            </div>
          </div>
          <div className="glass ml-6 rounded-2xl p-5 text-sm">
            <p><span className="font-semibold">client-dev</span> <span className="text-muted">staging checkout feels slow</span></p>
            <p className="mt-2"><span className="font-semibold">ZavorTech</span> <span className="text-muted">Found it: a query ran once per cart item. Fixed and merged.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
