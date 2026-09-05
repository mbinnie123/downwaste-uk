import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import { LightboxImageCard } from "../../components/lightbox-image-card";
import chuteOpen from "../../../assets/images/downwaste_chute_door_opened-tall.jpg";
import chuteClosed from "../../../assets/images/garbage_chute_door_closed.jpg";
import trunkDetail from "../../../assets/images/downwaste_structure_detail1.jpg";
import ventCap from "../../../assets/images/downwaste_vent_cap.jpg";
import pendant from "../../../assets/images/downwaste_power_switch-1.png";
import refuseDiagram from "../../../assets/images/downwaste-disposal-chute.svg";
import laundryChute from "../../../assets/images/downwaste_electric_laundry_chute-open.jpg";
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

const applications = [
  {
    title: "Residential towers",
    description:
      "Apartment blocks and high-rise residential schemes use refuse chutes to keep daily waste collection fast, hygienic and staff-efficient.",
  },
  {
    title: "BTR schemes",
    description:
      "Build-to-rent developments benefit from controlled refuse disposal on every floor, helping operators reduce labour and improve resident experience.",
  },
  {
    title: "Hotels and private villas",
    description:
      "Where back-of-house movement needs to be quiet and discreet, refuse chutes can be paired with laundry chutes and odour control equipment for a complete service core.",
  },
  {
    title: "Mixed-use and commercial buildings",
    description:
      "We design refuse chute systems for developments that need safe waste transfer between retail, office, hospitality and residential areas.",
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
                What refuse chute systems do
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Refuse chute systems provide a controlled vertical route for daily waste disposal. A floor intake door opens into a sealed trunk, allowing waste to drop to a central refuse room or collection point at the base of the building.
                </p>
                <p>
                  On UK projects, the same equipment is frequently described as a waste chute system, garbage chute or rubbish chute. The terminology varies, but the specification principles are the same: fire safety, hygienic handling, acoustic control and reliable operation for building management teams.
                </p>
                <p>
                  For hospitality projects, refuse chute systems can sit alongside laundry chutes so refuse and linen move through separate shafts. That keeps service routes cleaner, quieter and easier to manage across the life of the building.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <p className="text-xs font-black uppercase tracking-widest text-sky-600">Best for</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Residential towers, BTR developments, hotels, private villas, mixed-use buildings, student accommodation and any scheme where daily waste handling needs to be fast and discreet.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/products/laundry-chute"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-300 px-4 py-2 text-xs font-bold text-sky-700 transition-colors hover:bg-white"
                  >
                    Laundry chute systems
                  </Link>
                  <Link
                    href="/products/garbage-chute"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-300 px-4 py-2 text-xs font-bold text-sky-700 transition-colors hover:bg-white"
                  >
                    Garbage chute systems
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:rounded-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-700">
                Quick contact
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-950">
                Specifying a refuse chute project?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Talk to our team about the right refuse chute configuration for your building type, fire strategy and service route.
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

      {/* Supporting graphics and diagrams */}
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Supporting graphics and diagrams
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Visual references for refuse chute specification
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <ScrollReveal>
            <LightboxImageCard
              src={refuseDiagram.src}
              alt="Refuse chute system diagram for UK project specification"
              title="Refuse chute diagram"
              description="Concept graphic showing how a refuse chute system routes waste from floor intakes to base-level collection."
            />
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <LightboxImageCard
              src={chuteOpen.src}
              alt="Refuse chute intake door open"
              title="Intake door"
              description="A typical refuse chute floor landing door used on apartment, hotel and BTR projects."
            />
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <LightboxImageCard
              src={trunkDetail.src}
              alt="Refuse chute trunk detail and fire-rated enclosure"
              title="Trunk detail"
              description="Section detail showing the chute trunk, fire-resisting enclosure and acoustic lining strategy."
            />
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <LightboxImageCard
              src={ventCap.src}
              alt="Refuse chute roof vent cap"
              title="Roof vent cap"
              description="Ventilation and odour exhaust detail for a complete refuse chute installation."
            />
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <LightboxImageCard
              src={pendant.src}
              alt="Refuse chute cleaning and flushing pendant control"
              title="Cleaning pendant"
              description="Optional pendant control for brushing and flushing routines on larger refuse chute systems."
            />
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <LightboxImageCard
              src={laundryChute.src}
              alt="Laundry chute image for projects that pair refuse and laundry systems"
              title="Laundry chute pairing"
              description="For hotels and private villas, refuse chutes are often designed alongside laundry chutes as a complete service core."
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Technical specification */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Technical details</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                  Common refuse chute sizes and options
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  The exact refuse chute specification depends on the building height, occupier type, collection strategy and fire plan. These are common intake sizes used on UK schemes:
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {sizes.map((size) => (
                    <div key={size.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-sm font-bold text-slate-950">{size.label}</p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">{size.mm}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-sky-600">Optional system components</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-bold text-slate-950">Cleaning / flushing equipment</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Pendant or timed control can be added to support brushing and flushing routines where maintenance strategy requires it.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-950">Laundry chute integration</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        For hotels and private villas, refuse chutes can be planned alongside laundry chutes so dirty linen and waste remain separate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="scale" delay={100}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:rounded-3xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-700">
                  Popular applications
                </p>
                <div className="mt-4 grid gap-4">
                  {applications.map((app) => (
                    <div key={app.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <h3 className="font-bold text-slate-950">{app.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
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

      {/* Related systems */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 to-blue-900 p-6 text-white sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Related systems</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Planning both refuse and laundry routes?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                If your project is a hotel, private villa or serviced development, we can help you combine refuse chute systems with laundry chute systems and odour control so each service route stays separate and efficient.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/products/laundry-chute" className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
                Laundry chute systems
              </Link>
              <Link href="/products/garbage-chute" className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
                Garbage chute systems
              </Link>
              <Link href="/products/recycling-chute" className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
                Recycling chute systems
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
