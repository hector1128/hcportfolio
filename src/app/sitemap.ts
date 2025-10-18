
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  

  const base = "https://hectorcordero.com";
  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date("2025-10-10"), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date("2025-10-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, lastModified: new Date("2025-10-05"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/career`, lastModified: new Date("2025-10-05"), changeFrequency: "yearly", priority: 0.6 },
  ];

  

  return [...staticUrls];
}
