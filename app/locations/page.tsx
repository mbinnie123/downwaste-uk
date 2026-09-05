import Image from "next/image";
import Link from "next/link";
import { citiesByCountry, cities } from "../lib/cities";
import { ScrollReveal } from "../components/scroll-reveal";
import { LightboxImageCard } from "../components/lightbox-image-card";
import type { Metadata } from "next";
import managementPlan from "../../assets/images/downwaste_management_plan_sil.svg";
import disposalChute from "../../assets/images/downwaste-disposal-chute.svg";
import baseManagement from "../../assets/images/downwaste-base-management.svg";

export const metadata: Metadata = {
  title: "Locations | Waste and Laundry Chute Systems Across the UK",
  description:
    "Downwaste UK supplies and installs waste and laundry chute systems, plus garbage room equipment and odour control solutions, for buildings across England, Scotland, Wales and Northern Ireland. Find your city.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Locations | Waste and Laundry Chute Systems Across the UK | Downwaste",
    description:
      "Downwaste UK supplies waste and laundry chute systems, garbage room equipment and odour control solutions for buildings across the UK. Find your city.",
    url: "/locations",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Downwaste UK Locations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locations | Waste and Laundry Chute Systems Across the UK | Downwaste",
    description:
      "Waste and laundry chute systems, garbage room equipment and odour control solutions for UK buildings. Find your city.",
  },
};

const countries = ["England", "Scotland", "Wales", "Northern Ireland"] as const;

const flagMap: Record<string, string> = {
  England: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  Wales: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
  "Northern Ireland": "🇬🇧",
};

export default function LocationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://downwaste.co.uk" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://downwaste.co.uk/locations" },
    ],
  };

  return (
    <div className="text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5">
          <Link href="/" className="hover:text-sky-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Locations</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 to-blue-900 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              UK-wide supply & installation
            </p>
            <h1 className="mt-2 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Waste and laundry chute systems across the UK
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Downwaste UK supplies and installs waste and laundry chute systems, plus garbage room equipment and odour control solutions, for residential towers, BTR schemes, hotels, private villas and commercial developments in cities across England, Scotland, Wales and Northern Ireland.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-2.5 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Browse all products
              </Link>
              <a
                href="mailto:info@downwaste.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-bold text-slate-300 transition-all hover:border-sky-400 hover:text-sky-400"
              >
                Speak to the team
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* About Downwaste */}
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
              About Downwaste UK
            </p>
            <h2 className="mt-2 max-w-3xl text-2xl font-bold text-slate-950 sm:text-3xl">
              What we do across UK projects
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Downwaste UK is a specialist supplier and installer of waste chutes, laundry chutes, garbage room systems and odour control solutions. We help architects, contractors, engineers and facilities teams plan the full waste route for a building, from floor-level disposal to base-level collection and ongoing maintenance.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Waste and refuse chutes",
                body: "Fire-rated chute systems for apartments, BTR schemes, hotels, private villas and mixed-use developments.",
              },
              {
                title: "Laundry chutes",
                body: "Quiet, fire-rated linen chute systems for hospitality and serviced residential projects.",
              },
              {
                title: "Garbage room equipment",
                body: "Bin carousels, chute-fed compactors and bin feed press systems for efficient waste collection rooms.",
              },
              {
                title: "Odour control",
                body: "Bin washing, scent diffusion and purification solutions that keep waste areas cleaner and more pleasant.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Visual overview */}
      <div className="border-b border-slate-100 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
              Visual overview
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              What Downwaste looks like in practice
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ScrollReveal>
              <LightboxImageCard
                src={disposalChute.src}
                alt="Downwaste chute system illustration"
                title="Chute systems"
                description="A visual reference for the chute systems we specify into residential, hospitality and mixed-use buildings."
              />
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <LightboxImageCard
                src={baseManagement.src}
                alt="Downwaste base management visual"
                title="Base management"
                description="How waste handling, bin collection and back-of-house flow come together at ground level."
              />
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <LightboxImageCard
                src={managementPlan.src}
                alt="Downwaste management plan visual"
                title="Management planning"
                description="Support for the wider waste strategy, from specification through to ongoing operation."
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* What Downwaste covers */}
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
              Product families
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              The various chute and waste systems we work with
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Downwaste UK covers the full route of building waste management. That includes refuse chute systems for daily waste disposal, laundry chutes for linen handling, garbage room products for collection and compaction, and odour control systems that keep service areas cleaner and more comfortable.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Refuse / waste chutes",
                body: "Vertical chute systems that move waste safely from upper floors to a central collection point or refuse room.",
              },
              {
                title: "Laundry chutes",
                body: "Separate linen routes for hotels, private villas and serviced developments where quiet back-of-house flow matters.",
              },
              {
                title: "Garbage room products",
                body: "Bin carousels, bin feed presses and chute-fed compactors that help manage the base of the system.",
              },
              {
                title: "Odour control solutions",
                body: "Bin washers, scent diffusers and purification equipment that support hygiene and comfort around waste areas.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* City count */}
      <div className="border-b border-slate-100 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {countries.map((country) => (
              <ScrollReveal key={country}>
                <a href={`#${country.toLowerCase().replace(/ /g, "-")}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:border-sky-300 hover:bg-sky-50 transition-all">
                  <span className="text-2xl">{flagMap[country]}</span>
                  <span className="mt-2 text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">{country}</span>
                  <span className="text-xs text-slate-500">{citiesByCountry[country].length} cities</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Cities by country */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="space-y-16">
          {countries.map((country) => (
            <section
              key={country}
              id={country.toLowerCase().replace(/ /g, "-")}
              className="scroll-mt-20"
            >
              <ScrollReveal>
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <span className="text-3xl">{flagMap[country]}</span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
                      {citiesByCountry[country].length} cities
                    </p>
                    <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{country}</h2>
                  </div>
                </div>
              </ScrollReveal>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {citiesByCountry[country].map((city, i) => (
                  <ScrollReveal key={city.slug} delay={i * 30}>
                    <Link
                      href={`/locations/${city.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm hover:border-sky-300 hover:bg-sky-50 hover:shadow-md transition-all"
                    >
                      <div>
                        <p className="font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                          {city.name}
                        </p>
                        <p className="text-xs text-slate-500">{city.region}</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-sky-500 transition-colors">
                        <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 11.78a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-slate-100 bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
              Can&apos;t find your city?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              We supply across the whole of the UK
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              If your city isn&apos;t listed, contact our team directly. We supply and install waste and laundry chute systems, garbage room equipment and odour control solutions for projects throughout the United Kingdom.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:info@downwaste.co.uk"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-950 to-blue-900 px-7 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform"
              >
                Email our team
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border-2 border-sky-400 px-7 py-3 text-sm font-bold text-sky-700 hover:bg-sky-50 transition-colors"
              >
                Browse products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
