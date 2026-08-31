import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import selfTippingSkip from "../../../assets/images/self_tipping_skip.jpg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Self-Tipping Skips | Industrial Waste Handling UK",
  description:
    "Downwaste self-tipping skips engineered for safe, controlled waste disposal in UK industrial settings. Ideal for heavy metal waste, press burrs and abrasive materials including marble, granite and ceramics.",
  alternates: {
    canonical: "/products/self-tipping-skips",
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Self-Tipping Skips | Industrial Waste Handling UK | Downwaste",
    description:
      "Self-tipping skips for UK industrial use. Engineered for safe, controlled disposal of heavy metal waste, press burrs and abrasive materials including marble, granite and ceramics.",
    url: "/products/self-tipping-skips",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Downwaste Self-Tipping Skips" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Tipping Skips | Industrial Waste Handling UK | Downwaste",
    description:
      "Self-tipping skips for UK industrial use. Safe, controlled disposal of heavy metal waste, press burrs and abrasive materials.",
  },
};

const models = [
  {
    id: "ST.001",
    name: "Self-Tipping Skip ST.001",
    description: "Front-opening self-tipping skip for medium-volume industrial waste. Forklift-compatible with manual tipping mechanism.",
  },
  {
    id: "ST.002",
    name: "Self-Tipping Skip ST.002",
    description: "Heavy-duty self-tipping container for high-volume and abrasive waste streams. Reinforced construction with auto-reset latch.",
  },
];

const features = [
  {
    title: "Safe controlled tipping",
    description:
      "A gravity-operated tipping mechanism ensures waste is discharged in a controlled manner, reducing the risk of spillage and injury during unloading.",
  },
  {
    title: "Handles abrasive and heavy waste",
    description:
      "Specifically engineered for heavy metal waste, press burrs and abrasive materials including marble, granite and ceramics — materials that damage standard waste containers.",
  },
  {
    title: "Forklift and crane compatible",
    description:
      "Standard forklift pockets and optional lifting lugs allow safe lifting and transport using standard site handling equipment — no specialist machinery required.",
  },
  {
    title: "Auto-reset latch",
    description:
      "Once tipped and returned to the upright position, the latch automatically re-engages — keeping the container secure during transport and minimising operator steps.",
  },
  {
    title: "Robust steel construction",
    description:
      "Heavy-gauge steel construction with reinforced welds throughout. Powder-coated or hot-dip galvanised finish options available for harsh indoor and outdoor environments.",
  },
  {
    title: "Custom sizes and configurations",
    description:
      "Available in a range of capacities and configurations to suit your specific waste stream, volume and site layout. Bespoke sizes available on request.",
  },
];

const faqs = [
  {
    q: "What is a self-tipping skip?",
    a: "A self-tipping skip (also called a self-dumping hopper) is a metal waste container with a gravity-activated tipping mechanism. When lifted by a forklift or crane, the front gate opens automatically under the weight of the load, discharging the contents into a larger container or skip below — then latches shut when returned to the floor.",
  },
  {
    q: "What materials are self-tipping skips suitable for?",
    a: "Downwaste self-tipping skips are designed for heavy metal waste, press burrs, metal swarf, and abrasive materials including marble chippings, granite offcuts and ceramic waste. They can also handle general industrial waste, cardboard, plastic scrap and construction materials.",
  },
  {
    q: "How are self-tipping skips lifted?",
    a: "They are designed for use with standard forklifts via built-in forklift pockets. Optional crane lifting lugs are also available. Confirm the capacity of your handling equipment against the rated load before use.",
  },
  {
    q: "Are custom sizes available?",
    a: "Yes. We can manufacture self-tipping skips in a wide range of capacities and configurations to suit your site. Contact our UK team with your requirements for a bespoke quotation.",
  },
  {
    q: "What finish options are available?",
    a: "Standard powder-coat finish is supplied as standard in your choice of colour. Hot-dip galvanising is available for applications where corrosion resistance is critical — such as outdoor or wet environments.",
  },
  {
    q: "Can self-tipping skips be used outdoors?",
    a: "Yes, with appropriate finish specification. Hot-dip galvanised or heavy-duty powder coat finishes are suitable for outdoor use. Drainage holes can be added to prevent water pooling.",
  },
  {
    q: "What safety standards do Downwaste self-tipping skips meet?",
    a: "All Downwaste self-tipping containers are manufactured to relevant EN and CE standards. Our UK team can provide full documentation on request.",
  },
];

export default function SelfTippingSkipsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://downwaste.co.uk" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://downwaste.co.uk/products" },
          { "@type": "ListItem", position: 3, name: "Handling", item: "https://downwaste.co.uk/products#handling" },
          { "@type": "ListItem", position: 4, name: "Self-Tipping Skips", item: "https://downwaste.co.uk/products/self-tipping-skips" },
        ],
      },
      {
        "@type": "Product",
        name: "Downwaste Self-Tipping Skips",
        description: "Self-tipping skips for UK industrial use. Engineered for safe, controlled disposal of heavy metal waste, press burrs and abrasive materials including marble, granite and ceramics.",
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
          <span className="font-medium text-slate-700">Self-Tipping Skips</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:flex w-[45%] items-center justify-center pointer-events-none select-none px-8 py-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl w-full">
            <Image src={selfTippingSkip} alt="Downwaste self-tipping skip" width={800} height={600} priority className="h-auto w-full object-cover" />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Handling — Self-Tipping Skips
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Self-Tipping Industrial Skips
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Engineered for safe, controlled unloading of industrial waste. Purpose-built for heavy metal waste, press burrs and abrasive materials such as marble, granite and ceramics — where standard containers fail.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="self-tipping-skips" name="Self-Tipping Skips" category="Handling" />
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
                <Image src={selfTippingSkip} alt="Downwaste self-tipping skip" width={800} height={600} priority className="h-auto w-full object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Overview */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Overview</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Versatile self-dumping containers for demanding waste streams
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
            <p>
              Downwaste self-tipping skips are engineered for safe waste handling, providing versatile and efficient disposal solutions for industrial waste streams. Designed to accommodate heavy metal waste, press burrs and abrasive materials such as marble, granite and ceramics, these self-dumping bins ensure seamless waste management across various industries.
            </p>
            <p>
              Whether used for construction waste, manufacturing scrap or commercial waste, these containers guarantee smooth and controlled unloading — making waste disposal effortless. The gravity-operated tipping mechanism removes the need for manual tipping, reducing manual handling risk and improving throughput.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Models */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Models</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">ST.001 and ST.002</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">Two standard configurations cover the most common industrial applications. Custom sizes and capacities are available — contact our UK team.</p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {models.map((m, i) => (
              <ScrollReveal key={m.id} delay={i * 80}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full">
                  <div className="border-b border-slate-100 bg-slate-950 px-6 py-4">
                    <p className="text-lg font-black text-white">{m.id}</p>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-sm font-semibold text-slate-900">{m.name}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{m.description}</p>
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
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify a Downwaste self-tipping skip?</h2>
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
              Specify self-tipping skips for your site
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us about your waste stream, volumes and site layout — our UK team will recommend the right model and configuration. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="self-tipping-skips" name="Self-Tipping Skips" category="Handling" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
