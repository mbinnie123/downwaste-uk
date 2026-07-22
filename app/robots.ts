import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/quote", "/estimator", "/api/"],
      },
    ],
    sitemap: "https://downwaste.co.uk/sitemap.xml",
  };
}
