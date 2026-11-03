import Link from "next/link";
import { BOOKING_URL } from "@/lib";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-fg hover:opacity-90"
      : "border border-line bg-card text-fg hover:bg-accent-soft";
  // Plausible tagged-events: any link to the booking URL is tracked as a conversion click.
  const track = href === BOOKING_URL ? "plausible-event-name=Book+Audit Click" : "";
  return (
    <Link href={href} className={`${base} ${styles} ${track} ${className}`.trim()}>
      {children}
    </Link>
  );
}
