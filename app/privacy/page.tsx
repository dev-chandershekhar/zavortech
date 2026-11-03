import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy | ZavorTech" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" intro="Draft placeholder. Have a lawyer review before launch." />
      <div className="mx-auto max-w-3xl space-y-4 px-5 py-14 text-sm text-muted">
        <p>[Describe what data you collect (contact form, booking, analytics), why, how long you keep it, and who processes it.]</p>
        <p>[Explain cookies and analytics, user rights (access, deletion), and how to contact you about privacy.]</p>
      </div>
    </>
  );
}
