import type { MetadataRoute } from "next";
import { cities } from "./lib/cities";

const BASE_URL = "https://downwaste.co.uk";

// Active product pages only — Chutes, Garbage Room, Odour Solutions.
// Inactive pages (Containers, Balers, Compactors, Handling) are noindexed
// and excluded from the sitemap. Re-add slugs here when re-enabled.
const productPages = [
  // Chutes
  "garbage-chute",
  "laundry-chute",
  "recycling-chute",
  "pneumatic-chute",
  "construction-chute",
  // Garbage Room
  "bin-feed-press",
  "bin-carousel",
  "chute-compactor",
  // Odour Solutions
  "trash-bin-washer",
  "scent-diffuser",
  "uv-ozone-plasma",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productEntries: MetadataRoute.Sitemap = productPages.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/locations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...productEntries,
    ...locationEntries,
  ];
}
