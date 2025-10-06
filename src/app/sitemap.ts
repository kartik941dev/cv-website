import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return [
    {
      url: `${base}/`,
      changeFrequency: "monthly",
      priority: 1,
      lastModified: new Date(),
    },
  ];
}


