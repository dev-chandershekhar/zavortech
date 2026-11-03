import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import BookingEmbed from "@/components/BookingEmbed";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | ZavorTech",
  description: "Book a free 30-minute audit or send us a message.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book the free audit."
        intro="A 30-minute screen share. No code access, no commitment."
      />
      <Section title="Pick a time">
        <BookingEmbed />
      </Section>
      <Section tone="soft" title="Or send a message">
        <ContactForm />
        <p className="mt-8 text-sm text-muted">
          Prefer email? Write to <a className="font-semibold text-accent hover:underline" href="mailto:hello@example.com">hello@example.com</a>.
        </p>
      </Section>
    </>
  );
}
