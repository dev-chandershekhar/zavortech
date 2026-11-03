import Link from "next/link";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { BOOKING_URL, BRAND } from "@/lib";

const links = [
  { href: "/production-upgrade", label: "Production upgrade" },
  { href: "/what-else-we-do", label: "What else we do" },
  { href: "/who-we-are", label: "Who we are" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent font-mono text-sm text-accent-fg">
            {"{}"}
          </span>
          {BRAND}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-fg">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href={BOOKING_URL} className="hidden sm:inline-flex">
            Book the free audit
          </Button>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-line px-5 py-2 text-sm text-muted md:hidden" aria-label="Mobile">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="whitespace-nowrap hover:text-fg">
            {l.label}
          </Link>
        ))}
        <Link href={BOOKING_URL} className="whitespace-nowrap font-semibold text-accent">
          Book the free audit
        </Link>
      </nav>
    </header>
  );
}
