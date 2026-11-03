import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const paths = ["", "/production-upgrade", "/what-else-we-do", "/ai-workflow-implementation", "/ai-oversight", "/who-we-are", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
