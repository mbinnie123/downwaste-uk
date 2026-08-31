import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import binTipper from "../../../assets/images/bin_tipper_lifter.jpg";
import techDrawing1 from "../../../assets/images/downwaste_bin_lifter_tech_drawing_1.png";
import techDrawing2 from "../../../assets/images/downwaste_bin_lifter_tech_drawing_2.png";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Bin Tipper | Waste Bin Emptying Equipment UK",
  description:
    "Downwaste bin tippers provide ergonomic, efficient bin emptying for 120L–1100L bins. Compatible with standard and custom bins; integrates with mobile or static compactors. Manual, electric and battery models available.",
  alternates: {
    canonical: "/products/bin-tipper",
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Bin Tipper | Waste Bin Emptying Equipment UK | Downwaste",
    description:
      "Ergonomic bin tippers for 120L–1100L bins. Integrates with mobile or static compactors. Manual, electric and battery models — available across the UK from Downwaste.",
    url: "/products/bin-tipper",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Downwaste Bin Tipper" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bin Tipper | Waste Bin Emptying Equipment UK | Downwaste",
    description:
      "Ergonomic bin tippers for 120L–1100L bins. Manual, electric and battery models. Compatible with static or mobile compactors.",
  },
};

const models = [
  {
    id: "BT.001",
    name: "Mobile Manual — 240L (Chain Drive)",
    description: "Manual chain-drive bin tipper for 240L bins. No power supply required. Compact and manoeuvrable for tight areas.",
  },
  {
    id: "BT.002",
    name: "Mobile Manual — 240L (Gas Spring)",
    description: "Gas-spring-assisted manual tipper for 240L bins. Smooth, assisted lifting reduces operator effort.",
  },
  {
    id: "BT.003",
    name: "Mobile Manual — 240L (Hydraulic)",
    description: "Hydraulic piston manual tipper for 240L bins. Consistent controlled lift with minimal operator force required.",
  },
  {
    id: "BT.004",
    name: "Mobile Electric — 120/240/360L (Cabled)",
    description: "Electric bin tipper with cable power for 120, 240 and 360L bins. Suitable for fixed or semi-fixed positions within a facility.",
  },
  {
    id: "BT.005",
    name: "Mobile Electric — 120/240/360L (Battery)",
    description: "Battery-powered tipper for 120, 240 and 360L bins. Fully mobile — no trailing cables. Ideal for large sites and multi-area operation.",
  },
  {
    id: "BT.006",
    name: "Mobile Electric — 660/770/1100L, 500kg (Cabled)",
    description: "Heavy-duty electric tipper for large 660–1100L bins with 500kg load capacity. Cable powered for continuous high-volume operation.",
  },
  {
    id: "BT.007",
    name: "Mobile Electric — 660/770/1100L, 500kg (Battery)",
    description: "Battery-powered version of the heavy-duty tipper for 660–1100L bins. Offers full site mobility with 500kg capacity.",
  },
  {
    id: "BT.009",
    name: "Mobile — 1100L & Bulky Material (Cabled)",
    description: "Electric tipper for 1100L bins and bulky material containers. High-reach tip height for direct discharge into compactor hoppers.",
  },
  {
    id: "BT.010",
    name: "High-Lift — 1100L & Bulk (Battery)",
    description: "High-lift battery tipper for 1100L and bulk containers. Extended lift height for connection to compactors and container inlets at height.",
  },
];

const features = [
  {
    title: "Ergonomic bin handling",
    description:
      "Designed to eliminate manual lifting and tipping of heavy bins — protecting staff from musculoskeletal injuries and meeting manual handling regulations.",
  },
  {
    title: "Wide bin compatibility",
    description:
      "Compatible with standard 120, 240, 360, 660, 770 and 1100L bins as well as custom-made containers. Adaptors are available for non-standard configurations.",
  },
  {
    title: "Compactor integration",
    description:
      "Integrates directly with Downwaste mobile and static compactors, or connects to existing waste handling systems. Optional lid-opener for bins with round lids.",
  },
  {
    title: "Manual, electric and battery options",
    description:
      "Nine models spanning manual chain, gas spring, hydraulic piston, electric cabled and battery-powered variants — a solution for every site layout and power availability.",
  },
  {
    title: "Optional mechanical lid opener",
    description:
      "An optional mechanical lid opener is available for large waste bins with round lids, enabling hands-free bin loading and maintaining hygiene during emptying.",
  },
  {
    title: "Standalone or integrated use",
    description:
      "Functions as a standalone bin emptying unit connected to existing systems, or as a dedicated infeed device for Downwaste compactors — flexible to your workflow.",
  },
];

const faqs = [
  {
    q: "What is a bin tipper?",
    a: "A bin tipper (also called a bin lifter) is a mechanical device that lifts and tips waste bins automatically, emptying the contents into a compactor, skip or collection point. It removes the need for manual tipping of heavy bins, protecting staff from injury and improving waste throughput.",
  },
  {
    q: "Which bin sizes are compatible with Downwaste bin tippers?",
    a: "Downwaste bin tippers cover 120L, 240L, 360L, 660L, 770L and 1100L standard bins. The BT.009 and BT.010 models also handle bulky material containers. Custom adaptors are available for non-standard bins.",
  },
  {
    q: "What power options are available?",
    a: "Models are available in three power configurations: manual (chain drive, gas spring or hydraulic piston), electric with cable, and battery-powered. Battery models provide full site mobility with no trailing cables.",
  },
  {
    q: "Can bin tippers connect directly to a compactor?",
    a: "Yes. Downwaste bin tippers are designed to integrate with mobile and static compactors — including Downwaste's own auger, static and press compactor range. The tipper lifts and tips the bin directly into the compactor hopper inlet.",
  },
  {
    q: "What is the maximum load capacity?",
    a: "The BT.006 and BT.007 models are rated to 500kg for 660–1100L bins. For lighter 120–360L bins, capacities vary by model — contact our UK team for specific weight ratings.",
  },
  {
    q: "Is a lid-opener available?",
    a: "Yes. An optional mechanical lid opener is available for bins with round lids. This allows hands-free loading of the bin before tipping, maintaining hygiene and reducing direct contact with waste.",
  },
  {
    q: "How do I choose between cabled and battery models?",
    a: "Cabled (electric) models are ideal where the tipper operates in a fixed or semi-fixed location with access to a 240V supply. Battery models suit mobile operations across large sites, multi-floor buildings or where trailing cables create a hazard.",
  },
];

export default function BinTipperPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://downwaste.co.uk" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://downwaste.co.uk/products" },
          { "@type": "ListItem", position: 3, name: "Handling", item: "https://downwaste.co.uk/products#handling" },
          { "@type": "ListItem", position: 4, name: "Bin Tipper", item: "https://downwaste.co.uk/products/bin-tipper" },
        ],
      },
      {
        "@type": "Product",
        name: "Downwaste Bin Tipper",
        description: "Ergonomic bin tippers for 120L–1100L bins. Compatible with standard and custom bins; integrates with mobile or static compactors. Manual, electric and battery models available.",
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
          <Link href="/products#handling" className="hover:text-sky-700 transition-colors">Handling</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Bin Tipper</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:flex w-[45%] items-center justify-center pointer-events-none select-none px-8 py-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl w-full">
            <Image src={binTipper} alt="Downwaste bin tipper lifter" width={800} height={600} priority className="h-auto w-full object-cover" />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Handling — Bin Tipper
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Bin Tippers &amp; Bin Lift Devices
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Ergonomic bin emptying for 120–1100L bins. Nine models covering manual, electric and battery configurations — for standalone use or direct integration with compactors.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="bin-tipper" name="Bin Tipper" category="Handling" />
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-bold text-slate-300 transition-all hover:border-sky-400 hover:text-sky-400"
                >
                  View quote
                </Link>
                <Link
                  href="/estimator"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 px-6 py-2.5 text-sm font-bold text-sky-400 transition-all hover:border-sky-400 hover:bg-sky-400/10"
                >
                  Estimate cost →
                </Link>
              </div>
              {/* Mobile image */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 lg:hidden">
                <Image src={binTipper} alt="Downwaste bin tipper lifter" width={800} height={600} priority className="h-auto w-full object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Overview */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Ergonomic bin handling for any waste management workflow
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Downwaste bin tippers are designed for ergonomic bin handling, providing efficient and seamless bin emptying for a variety of waste management equipment. Compatible with both standard and custom-made waste bins, these bin-lift devices integrate effortlessly with mobile or static compactors — or function as standalone units connected to existing waste handling systems.
                </p>
                <p>
                  For enhanced usability, our bin emptying systems offer an optional mechanical lid opener, ideal for large waste bins with round lids. Nine models span the full range of bin sizes and power requirements.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            <ScrollReveal variant="scale" delay={80}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <Image src={techDrawing1} alt="Bin tipper technical drawing — side view" width={400} height={500} className="h-auto w-full object-cover bg-white p-2" />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={160}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <Image src={techDrawing2} alt="Bin tipper technical drawing — front view" width={400} height={500} className="h-auto w-full object-cover bg-white p-2" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Models */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Models</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Nine models — BT.001 to BT.010</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">From manual 240L tippers to high-lift battery models for 1100L bins — a configuration for every application and power environment.</p>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((m, i) => (
              <ScrollReveal key={m.id} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full">
                  <div className="border-b border-slate-100 bg-slate-950 px-5 py-3.5">
                    <p className="text-base font-black text-white">{m.id}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm font-semibold text-slate-900">{m.name}</p>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">{m.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Features</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify a Downwaste bin tipper?</h2>
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
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Specify a bin tipper for your site
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us your bin sizes, volumes and site layout — our UK team will recommend the right model. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="bin-tipper" name="Bin Tipper" category="Handling" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
