import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Who we are | ZavorTech",
  description: "The engineers behind ZavorTech.",
};

const team: { name: string; role: string; bio: string; photo?: string }[] = [
  {
    name: "Tushar Sharma",
    role: "Founder and senior Drupal engineer",
    bio: "6 years building and maintaining enterprise Drupal platforms, from custom modules and themes to headless and decoupled setups. Has delivered Surescripts, Hoover.org and Lumentum.com, with a focus on performance, security and mentoring other developers.",
    photo: "/team/profile-1.jpg",
  },
  {
    name: "Chander Shekhar",
    role: "Founder and frontend engineer",
    bio: "6 years building fast, SEO-friendly sites with React, Next.js, Drupal and Contentful. Has shipped 10+ production sites for global SaaS, aviation and telecom clients, including Aviatrix, Everseen and Lumentum, and lifted Lighthouse scores by 20-35%.",
    photo: "/team/profile-2.jpg",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A small team of senior engineers."
        intro="We read the code, own the pull requests and tell you the truth about what we find."
      />
      <Section title="The team">
        <div className="grid gap-4 md:grid-cols-2">
          {team.map((m, i) => (
            <div key={i} className="rounded-xl border border-line bg-card p-6">
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt={`Portrait of ${m.name}`}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />
              ) : (
                <div className="h-16 w-16 rounded-full bg-accent-soft" aria-hidden />
              )}
              <h3 className="mt-4 font-semibold">{m.name}</h3>
              <p className="text-sm text-accent">{m.role}</p>
              <p className="mt-2 text-sm text-muted">{m.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
