import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BRAND, SITE_URL } from "@/lib";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const description =
  "ZavorTech secures, tests, deploys and documents software built with AI tools, inside your repo and under your brand.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ZavorTech | Your AI-built project, ready for production", template: "%s" },
  description,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: BRAND,
    title: "ZavorTech | Your AI-built project, ready for production",
    description,
  },
  twitter: { card: "summary_large_image" },
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t)}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd
          data={[
            { "@context": "https://schema.org", "@type": "Organization", name: BRAND, url: SITE_URL, description },
            { "@context": "https://schema.org", "@type": "WebSite", name: BRAND, url: SITE_URL },
          ]}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          Skip to content
        </a>
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="hero-orb -left-24 -top-24 h-96 w-96 bg-accent" />
          <div className="hero-orb -right-20 top-1/4 h-80 w-80 bg-[#e9a9dc]" style={{ animationDelay: "-5s" }} />
          <div className="hero-orb bottom-[-6rem] left-1/3 h-72 w-72 bg-good/50" style={{ animationDelay: "-9s" }} />
        </div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.tagged-events.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
