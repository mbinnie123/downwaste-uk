import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Estimator | Downwaste UK",
  robots: { index: true, follow: true },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://downwaste.co.uk" },
    { "@type": "ListItem", position: 2, name: "Project Estimator", item: "https://downwaste.co.uk/estimator" },
  ],
};

export default function EstimatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
