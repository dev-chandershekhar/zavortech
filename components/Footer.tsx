import Link from "next/link";
import { BRAND } from "@/lib";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-bold">{BRAND}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            We take AI-built software the last mile to production, inside your repo and under your brand.
          </p>
          <p className="mt-4 text-sm text-muted">[Your street address], [City, State]</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/production-upgrade" className="hover:text-fg">Production upgrade</Link></li>
            <li><Link href="/ai-workflow-implementation" className="hover:text-fg">AI workflows</Link></li>
            <li><Link href="/ai-oversight" className="hover:text-fg">AI oversight</Link></li>
            <li><Link href="/what-else-we-do#web-development" className="hover:text-fg">Web development</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/who-we-are" className="hover:text-fg">Who we are</Link></li>
            <li><Link href="/contact" className="hover:text-fg">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-fg">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-fg">Terms</Link></li>
            <li><a href="mailto:hello@example.com" className="hover:text-fg">hello@example.com</a></li>
            <li><a href="https://www.linkedin.com/" className="hover:text-fg">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {BRAND}. All rights reserved.
      </div>
    </footer>
  );
}
