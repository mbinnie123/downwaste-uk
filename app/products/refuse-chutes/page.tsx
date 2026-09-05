import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import chuteOpen from "../../../assets/images/downwaste_chute_door_opened-tall.jpg";
import chuteClosed from "../../../assets/images/garbage_chute_door_closed.jpg";
import trunkDetail from "../../../assets/images/downwaste_structure_detail1.jpg";
import ventCap from "../../../assets/images/downwaste_vent_cap.jpg";
import pendant from "../../../assets/images/downwaste_power_switch-1.png";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata: Metadata = {
  title: "Refuse Chute Systems | UK Buildings | Downwaste",
  description:
    "Downwaste UK supplies and installs refuse chute systems for apartments, BTR schemes, hotels, private villas and mixed-use buildings. Fire-rated, hygienic and quiet. Also known as waste chutes and garbage chutes.",
  alternates: {
    canonical: "/products/refuse-chutes",
  },
  openGraph: {
    title: "Refuse Chute Systems | UK Buildings | Downwaste",
    description:
      "Refuse chute systems for UK apartments, BTR schemes, hotels and mixed-use developments. Hygienic, fire-rated and odour-controlled.",
    url: "/products/refuse-chutes",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Downwaste Refuse Chute System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refuse Chute Systems | UK Buildings | Downwaste",
    description:
      "Refuse chute systems for UK apartments, BTR schemes, hotels and mixed-use developments. Hygienic, fire-rated and odour-controlled.",
  },
};

const sizes = [
  { label: '12" × 12"', mm: "300 × 300 mm" },
  { label: '15" × 15"', mm: "395 × 395 mm" },
  { label: '15" × 18"', mm: "395 × 450 mm" },
  { label: '15" × 24"', mm: "395 × 600 mm" },
  { label: '18" × 18"', mm: "450 × 450 mm" },
];

const components = [
  {
    title: "Fire-rated chute doors",
    description:
      "Each refuse chute floor intake is fitted with a self-closing, fire-rated door tested to project-specific standards. It provides safe, controlled disposal from every landing.",
    image: chuteOpen,
    imageAlt: "Refuse chute door — open",
  },
  {
    title: "Galvanised steel trunk",
    description:
      "The refuse chute trunk is fabricated from durable galvanised steel with acoustic and fire-resisting details selected for the building strategy.",
    image: trunkDetail,
    imageAlt: "Refuse chute trunk cross-section detail",
  },
  {
    title: "Roof vent cap",
    description:
      "A roof-level vent cap helps exhaust odours and maintain continuous airflow through the refuse chute shaft.",
    image: ventCap,
    imageAlt: "Refuse chute roof vent cap",
  },
  {
    title: "Cleaning pendant control",
    description:
      "Where specified, a pendant control operates automated brushing and flushing equipment for easier chute cleaning and maintenance.",
    image: pendant,
    imageAlt: "Refuse chute cleaning pendant control",
  },
];

const benefits = [
  {
    title: "Refuse collection from every floor",
    description:
      "Refuse chute systems let residents and staff deposit waste directly from each landing, removing the need to carry bags through corridors, lifts or stairwells.",
  },
  {
    title: "Also known as waste chutes",
    description:
      "In UK project briefs, refuse chute systems are commonly called waste chutes, garbage chutes or rubbish chutes. The system is the same: a fire-rated vertical trunk with controlled floor intake doors.",
  },
  {
    title: "Hygienic and odour-controlled",
    description:
      "Passive roof ventilation, sealed intake doors and optional brushing / flushing keep the chute clean, reduce odour transfer and improve everyday building hygiene.",
  },
  {
    title: "Built for new build and retrofit",
    description:
      "We specify refuse chute systems into new shafts at design stage or retrofit them into existing service risers where a suitable vertical route already exists.",
  },
  {
    title: "Fire-rated to UK requirements",
    description:
      "Self-closing doors, fire-rated trunk construction and tested details are selected to align with UK Building Regulations and project fire strategies.",
  },
  {
    title: "Often paired with laundry chutes",
    description:
      "For hotels, private villas and serviced residences, refuse chutes are frequently specified alongside laundry chutes so waste and linen follow separate, efficient service routes.",
  },
];

const faqs = [
  {
    q: "What is a refuse chute system?",
    a: "A refuse chute system is a vertical waste disposal route that allows users on upper floors to deposit waste through fire-rated intake doors into a central collection point at ground level or in a refuse room. It is the same type of system often referred to as a waste chute or garbage chute.",
  },
  {
    q: "Is refuse chute the same as waste chute or garbage chute?",
    a: "Yes. In UK search language, refuse chute, waste chute and garbage chute are commonly used interchangeably. The exact term varies by project brief, consultant preference and regional wording, but the underlying system is the same.",
  },
  {
    q: "Can refuse chutes be installed in existing buildings?",
    a: "Yes, provided there is a suitable shaft or service riser. We regularly specify refuse chute systems into occupied buildings during retrofit programmes, with phased installation to minimise disruption.",
  },
  {
    q: "Are refuse chute doors fire rated?",
    a: "Downwaste intake doors and enclosure details are selected for fire performance and building compliance. The exact specification depends on your project fire strategy and the building regulations being applied.",
  },
  {
    q: "How do you keep a refuse chute clean?",
    a: "Ventilation, sealed doors and optional brushing / flushing equipment help reduce odour and maintain hygiene. For some projects, a central cleaning routine is specified as part of the building management plan.",
  },
  {
    q: "Can a refuse chute project also include laundry chutes?",
    a: "Yes. Hotels, private villas and serviced developments often need both refuse chutes and laundry chutes. We can help plan both systems so waste and linen follow separate, efficient routes.",
  },
];

export default function RefuseChutesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://downwaste.co.uk" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://downwaste.co.uk/products" },
          { "@type": "ListItem", position: 3, name: "Chutes", item: "https://downwaste.co.uk/products#chutes" },
          { "@type": "ListItem", position: 4, name: "Refuse Chute Systems", item: "https://downwaste.co.uk/products/refuse-chutes" },
        ],
      },
      {
        "@type": "Product",
        name: "Downwaste Refuse Chute System",
        description:
          "Refuse chute systems for UK apartments, BTR schemes, hotels, private villas and mixed-use developments. Also known as waste chutes and garbage chutes.",
        brand: { "@type": "Brand", name: "Downwaste UK" },
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
          <Link href="/products#chutes" className="hover:text-sky-700 transition-colors">Chutes</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Refuse Chutes</span>
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
                  Chutes — Refuse Chute Systems
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Refuse chute systems for UK buildings
                </h1>
                <p className="mt-4 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Downwaste supplies and installs refuse chute systems for apartment towers, BTR schemes, hotels, private villas and mixed-use developments. In most project briefs, the term refuse chute is used interchangeably with waste chute or garbage chute — and the system we specify is designed to be hygienic, fire-rated and quiet.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <AddToQuoteButton id="garbage-chute" name="Refuse Chute System" category="Chutes" />
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
              </div>
            </ScrollReveal>

            <ScrollReveal variant="scale" delay={150}>
              <div className="flex justify-center gap-4">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl max-w-[220px]">
                  <Image
                    src={chuteClosed}
                    alt="Refuse chute door — closed"
                    width={440}
                    height={640}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl max-w-[220px] self-end">
                  <Image
                    src={chuteOpen}
                    alt="Refuse chute door — open"
                    width={440}
                    height={680}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                The most efficient solution for multi-storey refuse disposal
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Downwaste offers refuse chute systems designed for hygienic and efficient waste disposal in apartments, hotels, private villas and commercial buildings. Our refuse chutes ensure safe, odour-controlled disposal from every floor — making them the preferred choice for high-density residential and mixed-use developments across the UK.
                </p>
                <p>
                  Each refuse chute system is supplied with fire-rated intake doors on every served floor, a galvanised or stainless steel trunk running the full building height, and a weatherproof roof vent cap. The chute discharges directly into a refuse room or wheeled bin at ground level.
                </p>
                <p>
                  By eliminating manual waste carrying, refuse chutes reduce the risk of pest attraction in corridors and lift lobbies, improve resident satisfaction and simplify waste management operations across the building.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow">
                <Image src={trunkDetail} alt="Refuse chute trunk detail" width={400} height={560} className="h-auto w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow self-start mt-8">
                <Image src={ventCap} alt="Refuse chute roof vent cap" width={400} height={340} className="h-auto w-full object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Available sizes */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Specifications</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Available door sizes</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Five standard opening sizes cover the full range of UK residential and commercial refuse chute projects. Custom sizes are available on request.
            </p>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-[380px] w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                    <th className="px-5 py-3.5">Door opening (imperial)</th>
                    <th className="px-5 py-3.5">Door opening (metric)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sizes.map((s) => (
                    <tr key={s.label} className="hover:bg-sky-50/50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-950">{s.label}</td>
                      <td className="px-5 py-4 text-slate-600">{s.mm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* System components */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">System components</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Main components of a refuse chute system</h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {components.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex h-52 items-center justify-center bg-slate-50 p-6">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    width={300}
                    height={200}
                    className="h-full w-auto max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-950">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{c.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Why Downwaste</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Why specifiers choose our refuse chute systems
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 60}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="font-bold text-slate-950">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">FAQ</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              Refuse chute questions answered
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 40}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-bold text-slate-950">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{faq.a}</p>
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
              Ready to specify a refuse chute system?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Use our estimator to get a guide price based on your building height, floor count and specification — or add the system to your quote and our UK team will be in touch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="garbage-chute" name="Refuse Chute System" category="Chutes" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
