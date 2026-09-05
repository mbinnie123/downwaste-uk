import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  cities,
  getCityBySlug,
  typeProductDetails,
  citiesByCountry,
} from "../../lib/cities";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import { LightboxImageCard } from "../../components/lightbox-image-card";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";
import disposalChuteGraphic from "../../../assets/images/locations-disposal-chute.svg";
import laundryChutePhoto from "../../../assets/images/locations-laundry-chute-open.jpg";
import technicalDiagram from "../../../assets/images/locations-technical-drawing.jpg";
import burujApartments from "../../../assets/images/locations-residential-reference.jpg";
import sheratonHotel from "../../../assets/images/locations-hotel-reference.jpg";
import grandTower from "../../../assets/images/locations-premium-tower-reference.jpg";

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const title = `Waste and Laundry Chute Systems in ${city.name} | Downwaste UK`;
  const description = `Downwaste UK supplies and installs waste and laundry chute systems, garbage room equipment and odour control solutions for ${city.buildingContext} in ${city.name}. UK-based specification and installation support.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/locations/${city.slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Downwaste UK — ${city.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const products = typeProductDetails[city.cityType];

  // Up to 4 other cities in the same country for "nearby cities" links
  const nearbyCities = citiesByCountry[city.country]
    .filter((c) => c.slug !== city.slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://downwaste.co.uk" },
          { "@type": "ListItem", position: 2, name: "Locations", item: "https://downwaste.co.uk/locations" },
          { "@type": "ListItem", position: 3, name: city.country, item: `https://downwaste.co.uk/locations#${city.country.toLowerCase().replace(/ /g, "-")}` },
          { "@type": "ListItem", position: 4, name: city.name, item: `https://downwaste.co.uk/locations/${city.slug}` },
        ],
      },
      {
        "@type": "Service",
        "@id": `https://downwaste.co.uk/locations/${city.slug}#service`,
        name: `Waste and Laundry Chute Systems in ${city.name}`,
        provider: {
          "@id": "https://downwaste.co.uk/#organization",
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          addressCountry: "GB",
        },
        description: `Downwaste UK supplies and installs waste and laundry chute systems, garbage room equipment and odour control solutions for ${city.buildingContext} in ${city.name}, ${city.country}.`,
        serviceType: "Waste and Laundry Chute System Supply and Installation",
      },
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
          <Link href="/locations" className="hover:text-sky-700 transition-colors">Locations</Link>
          <span>/</span>
          <Link href={`/locations#${city.country.toLowerCase().replace(/ /g, "-")}`} className="hover:text-sky-700 transition-colors">{city.country}</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">{city.name}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              {city.country} — {city.region}
            </p>
            <h1 className="mt-2 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Waste and laundry chute systems in {city.name}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Downwaste UK supplies and installs waste and laundry chute systems, plus garbage room and odour-control equipment, for {city.buildingContext} in {city.name}. UK-based specification, supply and installation support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:info@downwaste.co.uk"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
              >
                Request a specification
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-bold text-slate-300 transition-all hover:border-sky-400 hover:text-sky-400"
              >
                Browse all products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Key aspects */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Key aspects</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              The different parts of a waste and laundry strategy
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              The job of a good project specification is not just to choose a chute. It is to define the whole system: how waste enters the shaft, how linen is kept separate, how the refuse room is laid out and how the building remains hygienic over time.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Waste chutes / refuse chutes",
                body: "Fire-rated vertical disposal routes for apartments, BTR schemes and mixed-use towers.",
              },
              {
                title: "Laundry chutes",
                body: "Separate linen disposal routes that suit hotels, serviced apartments and private residences.",
              },
              {
                title: "Base-level collection",
                body: "Refuse rooms, bin stores and collection points where the system is managed at ground level.",
              },
              {
                title: "Odour and maintenance",
                body: "Ventilation, cleaning and odour-control measures that keep the system working well after handover.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
                  <h3 className="font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* City context */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Waste and laundry planning in {city.name}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Serving {city.name}&apos;s hotels, residential towers and mixed-use schemes
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>{city.description}</p>
                <p>
                  Downwaste UK works with architects, principal contractors, M&amp;E engineers and facilities managers to specify and install waste and laundry chute systems that fit the exact demands of each project. From initial specification through to commissioning and maintenance, our UK team supports projects in {city.name} and across {city.country}.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:rounded-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-700">
                Quick contact
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-950">
                Specifying for a {city.name} project?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Talk to our team about the right waste system for your building type and programme.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="mailto:info@downwaste.co.uk"
                  className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-sky-300 hover:text-sky-700 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-sky-500 shrink-0">
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                  </svg>
                  info@downwaste.co.uk
                </a>
                <a
                  href="tel:+902362142590"
                  className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-sky-300 hover:text-sky-700 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-sky-500 shrink-0">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                  </svg>
                  +90 236 214 2590
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* About Downwaste */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">About Downwaste UK</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                  Waste and laundry systems designed for the way UK buildings operate
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                  <p>
                    Downwaste UK is a specialist supplier and installer of waste chutes, laundry chutes, garbage room systems and odour control equipment. We work with architects, contractors, engineers and facilities teams to create practical service cores that match the layout, occupancy and fire strategy of each building.
                  </p>
                  <p>
                    The role of Downwaste is broader than simply supplying equipment. We help project teams shape the full waste-management route for a building: how refuse moves down through the shaft, where linen is handled, how bins are collected, and how odour and hygiene are controlled over the life of the scheme.
                  </p>
                  <p>
                    For residential towers, this usually means robust refuse chute systems supported by central collection and management solutions. For hotels and private villas, it often means combining refuse chute and laundry chute systems so waste and linen travel through separate, efficient routes.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="scale" delay={100}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Chute systems",
                    body: "Waste chutes, refuse chutes, garbage chutes, laundry chutes and recycling chutes for modern multi-storey buildings.",
                  },
                  {
                    title: "Garbage room systems",
                    body: "Bin carousels, bin feed press systems and chute-fed compactors to keep service areas efficient and organised.",
                  },
                  {
                    title: "Odour control",
                    body: "Bin washers, scent diffusers and UV-C / ozone / plasma purification equipment to support hygiene and comfort.",
                  },
                  {
                    title: "Specification support",
                    body: "UK-based help for early design, technical compliance, installation planning and handover.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Project references */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Project references</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Example projects that show how Downwaste works
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <ScrollReveal>
            <LightboxImageCard
              src={burujApartments.src}
              alt={`Downwaste project reference for ${city.name}`}
              title="Residential towers"
              description="High-rise residential waste and service cores where chute systems keep daily disposal efficient."
            />
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <LightboxImageCard
              src={sheratonHotel.src}
              alt={`Downwaste hospitality project reference for ${city.name}`}
              title="Hotels"
              description="Hospitality projects where refuse and laundry routes are planned separately for quiet back-of-house operation."
            />
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <LightboxImageCard
              src={grandTower.src}
              alt={`Downwaste premium tower project reference for ${city.name}`}
              title="Premium towers"
              description="Mixed-use and premium residential buildings that need robust, compliant and discreet waste systems.
"
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Supporting graphics and diagrams */}
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Supporting graphics and diagrams
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Waste and laundry chute visuals for {city.name} projects
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <ScrollReveal>
            <LightboxImageCard
              src={disposalChuteGraphic.src}
                alt={`Waste chute flow graphic for projects in ${city.name} and across the UK`}
              title="Waste chute flow"
              description="Visual overview of how floor-level loading connects to base-level discharge and collection."
            />
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <LightboxImageCard
              src={laundryChutePhoto.src}
                alt={`Laundry chute access door detail for hotels and private villas in ${city.name} and across the UK`}
              title="Laundry chute access"
              description="Electric, mechanical and controlled-access options for hotel and private-villa laundry handling."
            />
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <LightboxImageCard
              src={technicalDiagram.src}
                alt={`Technical reference drawing for chute specification teams in ${city.name} and across the UK`}
              title="Technical reference drawing"
              description="Concept diagram to support early-stage planning with consultants, architects and contractors."
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Featured products */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
              Popular in {city.name}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              Recommended for {city.buildingContext}
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {products.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-950">
                    <Link href={product.href} className="hover:text-sky-700 transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{product.tagline}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <AddToQuoteButton id={product.slug} name={product.name} category="General" />
                    <Link
                      href={product.href}
                      className="inline-flex items-center rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-600 hover:border-sky-300 hover:text-sky-700 transition-all"
                    >
                      View product
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-8 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-400 hover:text-sky-700 transition-all"
              >
                Browse the full product range
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 11.78a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Why Downwaste */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Why Downwaste UK</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Specified by UK architects, contractors and developers
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "UK-based specification support",
              body: "Our UK team works alongside architects, M&E engineers and principal contractors from early design stage through to handover.",
            },
            {
              title: "Full range in stock",
              body: "Chutes, compactors, containers, balers and odour solutions — everything needed for a complete building waste system.",
            },
            {
              title: "EN-compliant products",
              body: "All equipment manufactured to relevant EN standards and suitable for use across UK construction and residential applications.",
            },
            {
              title: "Installation & maintenance",
              body: "Full installation service and ongoing maintenance support to keep your building's waste system operating at peak performance.",
            },
          ].map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 60}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="font-bold text-slate-950">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{point.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Other cities in same country */}
      {nearbyCities.length > 0 && (
        <div className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Other cities in {city.country}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {nearbyCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-sky-300 hover:text-sky-700 transition-all"
                  >
                    {c.name}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:border-sky-300 hover:text-sky-700 transition-all"
                >
                  View all cities →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <div className="rounded-2xl bg-gradient-to-br from-slate-950 to-blue-900 p-8 sm:rounded-3xl sm:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                  Downwaste UK — {city.name}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Specifying waste equipment for a {city.name} project?
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  Talk to our UK team about the right system for your building, programme and budget.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-full bg-sky-400 px-7 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300"
                >
                  Build a quote
                </Link>
                <a
                href="mailto:info@downwaste.co.uk"
                  className="inline-flex items-center justify-center rounded-full border-2 border-sky-400 px-7 py-3 text-sm font-bold text-sky-400 transition-all hover:bg-sky-400 hover:text-white"
                >
                  Email our team
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
