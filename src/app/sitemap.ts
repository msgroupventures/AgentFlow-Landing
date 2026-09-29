import type { MetadataRoute } from "next";

const BASE = "https://agentflow.casa";

export default function sitemap(): MetadataRoute.Sitemap {
  const legal = (es: string, en: string): MetadataRoute.Sitemap =>
    [es, en].map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: { "es-AR": `${BASE}${es}`, en: `${BASE}${en}` },
      },
    }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legal("/privacy", "/en/privacy"),
    ...legal("/terms", "/en/terms"),
  ];
}
