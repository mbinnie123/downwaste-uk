import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import trolleysBinsArt from "../../../assets/images/downwaste_hdpe_trolleys_bins_art.jpg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Trash Containers & Trolleys | Handling | Downwaste UK",
  description:
    "Downwaste HDPE trash containers, bins and trolleys for commercial, municipal and industrial waste handling. Available in 80–2500L capacities with ergonomic handlebars and heavy-duty caster wheels.",
};

const binSizes = [
  { size: "80 L", weight: "—", maxLoad: "30 kg", note: "Compact bin for offices and light commercial" },
  { size: "120 L", weight: "—", maxLoad: "36 kg", note: "Standard office and hospitality bin" },
  { size: "240 L", weight: "8.8 kg", maxLoad: "48 kg", note: "Most common commercial wheelie bin size" },
  { size: "360 L", weight: "—", maxLoad: "72 kg", note: "High-volume commercial and retail use" },
];

const trolleySizes = [
  {
    size: "660 L",
    weight: "46 kg",
    maxLoad: "400 kg",
    openHeight: "1,180 mm",
    width: "1,263 mm",
    depth: "785 mm",
    closedHeight: "1,275 mm",
    tyre: "200 mm",
  },
  {
    size: "770 L",
    weight: "—",
    maxLoad: "—",
    openHeight: "—",
    width: "—",
    depth: "—",
    closedHeight: "—",
    tyre: "200 mm",
  },
  {
    size: "1,100 L",
    weight: "—",
    maxLoad: "—",
    openHeight: "870 mm",
    width: "480 mm",
    depth: "540 mm",
    closedHeight: "940 mm",
    tyre: "200 mm",
  },
];

const features = [
  {
    title: "Ergonomic mobility",
    description:
      "Ergonomic handlebars and heavy-duty caster wheels ensure smooth movement within any facility — reducing manual handling strain and improving throughput for waste collection staff.",
  },
  {
    title: "Source segregation ready",
    description:
      "Available in multiple colours to support waste segregation into separate streams: tins, glass, paper, cardboard, organic waste and general refuse — simplifying recycling compliance.",
  },
  {
    title: "HDPE construction",
    description:
      "High-density polyethylene construction is resistant to impacts, chemicals and UV degradation. Bins remain functional in indoor and outdoor environments without rusting or corroding.",
  },
  {
    title: "Full size range 80–2500L",
    description:
      "From 80L office bins to 2500L heavy-duty trolleys — the complete range covers all commercial, municipal and industrial waste collection requirements on a single order.",
  },
  {
    title: "Bin tipper compatible",
    description:
      "All standard bins are compatible with Downwaste bin tipper devices — enabling direct integration with compactors for higher-volume operations.",
  },
  {
    title: "Heavy-duty trolley options",
    description:
      "1100L and 2500L heavy-duty waste trolleys for large-scale operations — rated up to 400kg with reinforced chassis and industrial-grade tyres.",
  },
];

const faqs = [
  {
    q: "What are commercial trash containers?",
    a: "Commercial trash containers are durable waste storage bins designed for efficient waste collection and transport in commercial, municipal and industrial settings. They come in standardised sizes to ensure compatibility with waste collection vehicles and handling equipment such as bin tippers and compactors.",
  },
  {
    q: "What sizes are available?",
    a: "Downwaste supplies bins in 80, 120, 240 and 360L, trolleys in 660, 770 and 1100L, and heavy-duty trolleys in 1100L and 2500L. All are standard EN840 dimensions for compatibility with collection vehicles and bin tippers.",
  },
  {
    q: "What is the difference between a dustbin and a waste bin?",
    a: "The terms are often used interchangeably. 'Dustbin' is a traditional UK term for a household waste container, while 'waste bin' or 'trash container' generally refers to larger commercial or industrial waste storage units. Downwaste supplies commercial and industrial-grade units designed for higher loads and frequent use.",
  },
  {
    q: "Are the bins suitable for outdoor use?",
    a: "Yes. HDPE bins are UV-stable and weather-resistant, making them suitable for both indoor and outdoor use. Lids prevent rainwater ingress and reduce odour escape.",
  },
  {
    q: "Can bins be used for waste segregation and recycling?",
    a: "Yes. Bins are available in multiple colours to support source-segregated collection of tins, glass, paper, cardboard, organic waste and general refuse. This supports compliance with UK commercial waste recycling requirements.",
  },
  {
    q: "Are the bins compatible with bin tippers and compactors?",
    a: "Yes. All standard-size Downwaste bins are compatible with Downwaste bin tipper devices and can be used as the infeed stage for mobile and static compactors — creating a complete waste handling workflow.",
  },
  {
    q: "Do the containers come with a warranty?",
    a: "Yes. Downwaste bins and trolleys are covered by a manufacturer's warranty against defects in materials and workmanship. Contact our UK team for specific warranty terms.",
  },
];

export default function TrashContainersPage() {
  return (
    <div className="text-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5">
          <Link href="/" className="hover:text-sky-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-sky-700 transition-colors">Products</Link>
          <span>/</span>
          <Link href="/products#handling" className="hover:text-sky-700 transition-colors">Handling</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Trash Containers</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:flex w-[45%] items-center justify-center pointer-events-none select-none px-8 py-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl w-full">
            <Image src={trolleysBinsArt} alt="Downwaste HDPE trolleys and bins" width={800} height={600} priority className="h-auto w-full object-cover" />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Handling — Trash Containers
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Commercial Trolleys &amp; Bins
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                HDPE trash containers and trolleys from 80L to 2500L — ergonomic, durable and ready for source segregation. Designed for commercial, municipal and industrial waste management.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="trash-containers" name="Trash Containers" category="Handling" />
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
                <Image src={trolleysBinsArt} alt="Downwaste HDPE trolleys and bins" width={800} height={600} priority className="h-auto w-full object-cover" />
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
            Efficient waste storage for commercial and industrial facilities
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
            <p>
              Efficient waste storage bins play a crucial role in proper waste segregation and recycling. By separating waste into designated trash containers — including tins, glass, paper, organic waste and general waste — waste management becomes more streamlined and effective.
            </p>
            <p>
              Downwaste commercial trash containers are designed for ease of operation, featuring ergonomic handlebars and heavy-duty caster wheels for smooth mobility within any facility. The full range spans 80L office bins through to 2500L heavy-duty industrial trolleys.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Bin sizes */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Bins</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Standard wheelie bins — 80 to 360L</h2>
          </ScrollReveal>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-950">
                  <th className="px-5 py-4 text-left text-xs font-black text-white">Size</th>
                  <th className="px-5 py-4 text-left text-xs font-black text-white">Weight</th>
                  <th className="px-5 py-4 text-left text-xs font-black text-white">Max load</th>
                  <th className="px-5 py-4 text-left text-xs font-black text-white">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {binSizes.map((b) => (
                  <tr key={b.size} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-slate-900">{b.size}</td>
                    <td className="px-5 py-3.5 text-slate-600">{b.weight}</td>
                    <td className="px-5 py-3.5 text-slate-600">{b.maxLoad}</td>
                    <td className="px-5 py-3.5 text-slate-600">{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Trolleys</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Large-format trolleys — 660 to 1100L</h2>
            </ScrollReveal>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-950">
                    <th className="px-5 py-4 text-left text-xs font-black text-white">Size</th>
                    <th className="px-5 py-4 text-left text-xs font-black text-white">Weight</th>
                    <th className="px-5 py-4 text-left text-xs font-black text-white">Max load</th>
                    <th className="px-5 py-4 text-left text-xs font-black text-white">Open H</th>
                    <th className="px-5 py-4 text-left text-xs font-black text-white">Width</th>
                    <th className="px-5 py-4 text-left text-xs font-black text-white">Depth</th>
                    <th className="px-5 py-4 text-left text-xs font-black text-white">Closed H</th>
                    <th className="px-5 py-4 text-left text-xs font-black text-white">Tyre Ø</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {trolleySizes.map((t) => (
                    <tr key={t.size} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3.5 font-semibold text-slate-900">{t.size}</td>
                      <td className="px-5 py-3.5 text-slate-600">{t.weight}</td>
                      <td className="px-5 py-3.5 text-slate-600">{t.maxLoad}</td>
                      <td className="px-5 py-3.5 text-slate-600">{t.openHeight}</td>
                      <td className="px-5 py-3.5 text-slate-600">{t.width}</td>
                      <td className="px-5 py-3.5 text-slate-600">{t.depth}</td>
                      <td className="px-5 py-3.5 text-slate-600">{t.closedHeight}</td>
                      <td className="px-5 py-3.5 text-slate-600">{t.tyre}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Features</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify Downwaste containers?</h2>
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
              Specify waste containers for your site
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us your waste streams, volumes and required bin sizes — our UK team will put together the right specification. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="trash-containers" name="Trash Containers" category="Handling" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
