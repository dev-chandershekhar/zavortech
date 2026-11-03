import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms | ZavorTech" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use" intro="Draft placeholder. Have a lawyer review before launch." />
      <div className="mx-auto max-w-3xl space-y-4 px-5 py-14 text-sm text-muted">
        <p>[Terms for using this website. Engagement terms belong in your service agreements.]</p>
      </div>
    </>
  );
}
