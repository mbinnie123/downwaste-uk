import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import augerHero from "../../../assets/images/auger_compactor.jpg";
import beforeAfter from "../../../assets/images/downwaste_compactors_before_after.jpg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Auger Compactor | Chute-Fed Screw Compactor UK",
  description:
    "Downwaste UK supplies auger screw compactors for commercial buildings. Advanced chute-fed screw drive continuously shreds and compacts waste — cardboard, plastic, timber — reducing disposal costs and collection frequency.",
  alternates: {
    canonical: "/products/auger-compactor",
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Auger Compactor | Chute-Fed Screw Compactor UK | Downwaste",
    description:
      "Chute-fed auger screw compactor for UK commercial buildings. Continuously shreds and compacts waste — reduces disposal costs and collection frequency.",
    url: "/products/auger-compactor",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Downwaste Auger Compactor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auger Compactor | Chute-Fed Screw Compactor UK | Downwaste",
    description:
      "Chute-fed auger screw compactor for UK commercial buildings. Continuously shreds and compacts — reduces disposal costs.",
  },
};

const staticModels = [
  { model: "DW-AU.01", motor: "11.0 kW", loading: "1,400 × 1,400 mm", discharge: "1,900 × 2,050 mm", height: "1,300 mm*", weight: "2,350 kg", power: "400V/50Hz" },
  { model: "DW-AU.02", motor: "15.0 kW", loading: "1,400 × 1,400 mm", discharge: "1,900 × 2,050 mm", height: "1,300 mm*", weight: "2,500 kg", power: "400V/50Hz" },
  { model: "DW-AU.03", motor: "18.5 kW", loading: "1,400 × 1,400 mm", discharge: "1,900 × 2,050 mm", height: "1,300 mm*", weight: "2,600 kg", power: "400V/50Hz" },
  { model: "DW-AU.04", motor: "22.0 kW", loading: "1,400 × 1,400 mm", discharge: "1,900 × 2,050 mm", height: "1,300 mm*", weight: "2,750 kg", power: "400V/50Hz" },
];

const mobileModels = [
  { model: "DWAC-18", motor: "11 kW", container: "18 m³", length: "6,100 × 2,470 mm", height: "2,750 mm", weight: "4,900 kg", bodyHeight: "1,580 mm*", power: "400V/50Hz/32A" },
  { model: "DWAC-20", motor: "11 kW", container: "20 m³", length: "6,400 × 2,470 mm", height: "2,750 mm", weight: "5,100 kg", bodyHeight: "1,580 mm*", power: "400V/50Hz/32A" },
  { model: "DWAC-22", motor: "11 kW", container: "22 m³", length: "6,700 × 2,470 mm", height: "2,750 mm", weight: "5,300 kg", bodyHeight: "1,580 mm*", power: "400V/50Hz/32A" },
  { model: "DWAC-25", motor: "11 kW", container: "25 m³", length: "7,300 × 2,470 mm", height: "2,750 mm", weight: "5,500 kg", bodyHeight: "1,580 mm*", power: "400V/50Hz/32A" },
];

const features = [
  {
    title: "Advanced screw-driven design",
    description: "The innovative auger (screw) mechanism continuously shreds and compresses waste as it is fed in — processing awkward or bulky materials that would cause problems for conventional compactors.",
  },
  {
    title: "Generous 1,400 × 1,400 mm loading aperture",
    description: "The large square loading opening handles bulky waste including pallets, timber, large cardboard and wrapped goods without pre-breaking or manual reduction.",
  },
  {
    title: "Power ratings from 11 to 22 kW",
    description: "Four power configurations suit a wide range of throughput requirements — from medium commercial operations to high-volume industrial sites generating continuous waste streams.",
  },
  {
    title: "Compatible with ground, ramp or wall filling",
    description: "The flexible loading configuration supports ground-level filling, ramp access and through-the-wall installation — making it adaptable to a wide range of site layouts.",
  },
  {
    title: "Mobile auger compactor option",
    description: "The DWAC range provides auger compaction combined with a removable steel container — ideal where waste is generated across a large site or where the collection point needs to move.",
  },
  {
    title: "Cost savings through advanced compaction",
    description: "Continuous shredding and compaction dramatically reduces waste volume — cutting collection frequency, lowering haulage costs and reducing the number of containers required on site.",
  },
];

const faqs = [
  {
    q: "What is an auger (screw) compactor?",
    a: "An auger compactor uses a rotating helical screw (auger) rather than a hydraulic ram to compress waste. As material is fed into the hopper, the rotating screw continuously shreds and compacts it, pushing compacted waste into a sealed container. This design is particularly effective for high-volume, continuous waste streams and materials that resist standard ram compaction.",
  },
  {
    q: "What are the benefits of an auger compactor over a hydraulic press?",
    a: "Auger compactors excel at handling bulky, stringy or awkward materials — timber, plastic wrap, cardboard, food waste — that can jam or resist hydraulic rams. The continuous operation also means there is no cycle downtime; waste can be fed in as it is generated. For high-throughput industrial and commercial sites, this translates directly into operational efficiency.",
  },
  {
    q: "What types of waste can an auger compactor process?",
    a: "Cardboard, plastic, wooden crates and pallets, paper, food waste, light industrial waste and packaging materials. The 1,400 × 1,400 mm loading aperture handles large items that would require manual breaking-down for other compactor types.",
  },
  {
    q: "What power ratings are available?",
    a: "The Downwaste auger range covers 11, 15, 18.5 and 22 kW (static units DW-AU.01 to DW-AU.04). Mobile units (DWAC range) are all 11 kW with containers from 18 to 25 m³.",
  },
  {
    q: "What is a mobile auger compactor?",
    a: "A mobile auger compactor (DWAC range) combines the auger compaction unit with a removable steel container on a hook-lift or roll-on/roll-off configuration. This allows the full unit to be transported off-site for emptying, or repositioned around a large site as operational needs change.",
  },
  {
    q: "How does the automatic feed device work?",
    a: "A sensor detects material in the hopper and automatically activates the auger drive when waste is present. When the hopper is empty or the container is full, the system stops automatically — reducing energy consumption and operator intervention.",
  },
  {
    q: "What maintenance is required?",
    a: "Routine maintenance involves inspection of the auger, drive seals and container connection points — typically at 6-month intervals. The robust drive mechanism is designed for continuous operation and has low wear rates compared to hydraulic ram compactors.",
  },
];

export default function AugerCompactorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://downwaste.co.uk" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://downwaste.co.uk/products" },
          { "@type": "ListItem", position: 3, name: "Compactors", item: "https://downwaste.co.uk/products#compactors" },
          { "@type": "ListItem", position: 4, name: "Auger Compactor", item: "https://downwaste.co.uk/products/auger-compactor" },
        ],
      },
      {
        "@type": "Product",
        name: "Downwaste Auger Compactor",
        description: "Chute-fed auger screw compactor for UK commercial buildings. Advanced screw drive continuously shreds and compacts waste — handling cardboard, plastic and timber.",
        brand: { "@type": "Brand", name: "Downwaste UK" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Downwaste UK", url: "https://downwaste.co.uk" },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
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
          <Link href="/products" className="hover:text-sky-700 transition-colors">Products</Link>
          <span>/</span>
          <Link href="/products#compactors" className="hover:text-sky-700 transition-colors">Compactors</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Auger Compactor</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                  Compactors — Auger Compactor
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Auger (Screw) Compactors
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  An innovative and economical waste management solution. The advanced screw-driven design continuously shreds and compresses materials — significantly reducing waste volume while lowering disposal costs for businesses of all sizes.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <AddToQuoteButton id="auger-compactor" name="Auger Compactor" category="Compactors" />
                  <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-bold text-slate-300 transition-all hover:border-sky-400 hover:text-sky-400">
                    View quote
                  </Link>
                  <Link href="/estimator" className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 px-6 py-2.5 text-sm font-bold text-sky-400 transition-all hover:border-sky-400 hover:bg-sky-400/10">
                    Estimate cost →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={150}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                <Image src={augerHero} alt="Downwaste auger screw compactor" width={1200} height={1200} priority className="h-auto w-full object-contain" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Continuous shredding and compaction</h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>Our auger compactors provide an innovative and economical waste management solution. With an advanced screw-driven design, these continuous waste compactors efficiently shred and compress materials, significantly reducing waste volume while lowering disposal costs.</p>
                <p>Designed to handle a variety of waste materials — from cardboard and plastic to wooden crates — our industrial waste compactors are ideal for businesses of all sizes. Equipped with user-friendly controls and built-in safety features, they ensure seamless and efficient waste management.</p>
                <p>Two ranges are available: static units (DW-AU series, 11–22 kW) for fixed installation with hooklift containers, and mobile units (DWAC series) with integrated 18–25 m³ containers for maximum operational flexibility.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image src={beforeAfter} alt="Downwaste compactor — before and after compaction" width={660} height={800} className="h-auto w-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Static models */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Models — Static units</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">DW-AU series (fixed installation)</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {staticModels.map((m, i) => (
              <ScrollReveal key={m.model} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-100 bg-slate-950 px-5 py-3">
                    <p className="font-black text-white">{m.model}</p>
                    <p className="text-xs text-sky-400">{m.motor}</p>
                  </div>
                  <table className="w-full text-xs">
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Loading", m.loading],
                        ["Discharge", m.discharge],
                        ["Height", m.height],
                        ["Weight", m.weight],
                        ["Power", m.power],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="px-3 py-2 text-slate-500">{label}</td>
                          <td className="px-3 py-2 font-semibold text-slate-900">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">* Without hopper</p>

          <ScrollReveal delay={80}>
            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Models — Mobile units</p>
            <h3 className="mt-2 text-xl font-bold text-slate-950">DWAC series (mobile with container)</h3>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mobileModels.map((m, i) => (
              <ScrollReveal key={m.model} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-100 bg-slate-950 px-5 py-3">
                    <p className="font-black text-white">{m.model}</p>
                    <p className="text-xs text-sky-400">{m.container} container</p>
                  </div>
                  <table className="w-full text-xs">
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Motor", m.motor],
                        ["Footprint", m.length],
                        ["Height", m.height],
                        ["Weight", m.weight],
                        ["Power", m.power],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="px-3 py-2 text-slate-500">{label}</td>
                          <td className="px-3 py-2 font-semibold text-slate-900">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">* Without hopper</p>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Features</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify an auger compactor?</h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sky-600">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-950">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">FAQ</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Common questions</h2>
          </ScrollReveal>
          <div className="mt-10 divide-y divide-slate-100">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="py-6">
                  <h3 className="text-sm font-bold text-slate-950 sm:text-base">{f.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-slate-950 to-blue-900 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Get a quote</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Specify an auger compactor for your site</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">Tell us your waste types, volumes and site configuration and our UK team will recommend the right model. Add to your quote or use the estimator for a guide price.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/estimator" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105">Open Estimator</Link>
              <AddToQuoteButton id="auger-compactor" name="Auger Compactor" category="Compactors" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
