import type { MetadataRoute } from "next";

const BASE_URL = "https://downwaste.co.uk";

const productPages = [
  // Containers
  "skip-bins",
  "press-compactors",
  "hooklift-bins",
  // Balers
  "vertical-baler",
  // Compactors
  "auger-compactor",
  "static-compactor",
  // Handling
  "self-tipping-skips",
  "bin-tipper",
  "trash-containers",
  "rolltainers",
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
    ...productEntries,
  ];
}
