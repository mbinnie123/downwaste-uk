import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import balerHero from "../../../assets/images/vertical_baler.jpg";
import beforeAfter from "../../../assets/images/downwaste_balers_before_after.jpg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Vertical Baler | Cardboard & Recyclables Baling UK",
  description:
    "Downwaste UK supplies vertical balers for cardboard, plastic, paper and cans. Available in 6 models from 5 to 50 tonnes compaction force — turn recyclable waste into a valuable, revenue-generating asset.",
  alternates: {
    canonical: "/products/vertical-baler",
  },
  openGraph: {
    title: "Vertical Baler | Cardboard & Recyclables Baling UK | Downwaste",
    description:
      "Vertical balers for cardboard, plastic, paper and cans. 6 models from 5 to 50 tonnes compaction force — turn recyclable waste into a revenue-generating asset.",
    url: "/products/vertical-baler",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Downwaste Vertical Baler" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertical Baler | Cardboard & Recyclables Baling UK | Downwaste",
    description:
      "Vertical balers for cardboard, plastic, paper and cans. 6 models from 5–50 tonnes. Turn recyclable waste into a revenue-generating asset.",
  },
};

const models = [
  { model: "DP5",  cycleTime: "45 sec", width: "900 mm", depth: "700 mm", height: "2,250 mm", inlet: "500 × 700 mm", noise: "<40 dB", baleSize: "700×500×800 mm", motor: "2 kW", power: "3×400V/50Hz", maxCompaction: "5 t", baleWeight: "60–80 kg", grossWeight: "500 kg", straps: "2" },
  { model: "DP10", cycleTime: "45 sec", width: "900 mm", depth: "700 mm", height: "2,250 mm", inlet: "500 × 700 mm", noise: "<40 dB", baleSize: "700×500×800 mm", motor: "3 kW", power: "3×400V/50Hz", maxCompaction: "10 t", baleWeight: "80–120 kg", grossWeight: "600 kg", straps: "2" },
  { model: "DP20", cycleTime: "45 sec", width: "1,000 mm", depth: "800 mm", height: "2,400 mm", inlet: "600 × 750 mm", noise: "<40 dB", baleSize: "800×600×900 mm", motor: "4 kW", power: "3×400V/50Hz", maxCompaction: "20 t", baleWeight: "120–160 kg", grossWeight: "750 kg", straps: "3" },
  { model: "DP25", cycleTime: "50 sec", width: "1,100 mm", depth: "900 mm", height: "2,500 mm", inlet: "700 × 800 mm", noise: "<40 dB", baleSize: "850×700×1,000 mm", motor: "5.5 kW", power: "3×400V/50Hz", maxCompaction: "25 t", baleWeight: "160–200 kg", grossWeight: "900 kg", straps: "3" },
  { model: "DP30", cycleTime: "50 sec", width: "1,200 mm", depth: "1,000 mm", height: "2,600 mm", inlet: "750 × 850 mm", noise: "<40 dB", baleSize: "900×750×1,100 mm", motor: "7.5 kW", power: "3×400V/50Hz", maxCompaction: "30 t", baleWeight: "200–250 kg", grossWeight: "1,100 kg", straps: "4" },
  { model: "DP50", cycleTime: "60 sec", width: "1,400 mm", depth: "1,100 mm", height: "2,800 mm", inlet: "900 × 1,000 mm", noise: "<40 dB", baleSize: "1,050×900×1,200 mm", motor: "11 kW", power: "3×400V/50Hz", maxCompaction: "50 t", baleWeight: "300–400 kg", grossWeight: "1,600 kg", straps: "4" },
];

const materials = ["Cardboard", "Plastic foil", "Paper", "PET bottles", "Aluminium cans", "Tin cans", "Mixed plastics"];

const features = [
  {
    title: "Handles all key recyclables",
    description: "Cardboard, plastic foil, paper, PET bottles, aluminium and tin cans — the vertical baler processes all common recyclable streams, enabling efficient in-house sorting and baling.",
  },
  {
    title: "Large and wide feeding inlet",
    description: "A generous feeding inlet makes it fast and easy to load loose materials without pre-cutting or pre-compressing. Reduces the time operatives spend on waste handling.",
  },
  {
    title: "Superior press force with long stroke",
    description: "The combination of high compaction force (5–50 tonnes depending on model) and a long press stroke maximises bale density — producing consistently heavy, high-value bales.",
  },
  {
    title: "Intelligent safety features",
    description: "Interlocked access doors, pressure relief valves and automatic cycle stops protect operatives throughout the baling process. Fully compliant with UK machinery safety regulations.",
  },
  {
    title: "Quick cycles — less time on waste handling",
    description: "Fast 45–60 second automatic cycles mean baling is completed rapidly, freeing staff time. Automatic bale ejection by belt removes the need for manual extraction.",
  },
  {
    title: "Turns waste into revenue",
    description: "Properly baled and stored recyclables are a saleable commodity. Baled cardboard, plastics and metals command positive gate prices — offsetting disposal costs and generating direct revenue.",
  },
  {
    title: "Silent operation — <40 dB",
    description: "All models operate at under 40 dB — quieter than a normal conversation. Suitable for use in noise-sensitive environments including retail, hospitality and residential facilities management.",
  },
  {
    title: "International warranty",
    description: "Every Downwaste baler carries an international warranty, backed by our UK service and support network.",
  },
];

const faqs = [
  {
    q: "What is a vertical baler?",
    a: "A vertical baler is a machine that compresses recyclable materials — cardboard, plastic, paper, cans — into compact, tied bales using a vertical hydraulic ram. The bales are easy to store, handle and transport, and can be sold to recycling merchants for revenue.",
  },
  {
    q: "What is the difference between a baler and a compactor?",
    a: "A compactor reduces waste volume and typically deposits waste into a sealed container or bag for disposal. A baler compresses clean, segregated recyclable materials into tied bales that are sold as a commodity. Balers are used for recyclables; compactors for general waste destined for landfill or energy recovery.",
  },
  {
    q: "Who needs a vertical baler?",
    a: "Vertical balers are ideal for any business that generates significant volumes of cardboard, plastic or other recyclables — including retailers, distribution centres, manufacturers, hotels, supermarkets, schools and waste management operators.",
  },
  {
    q: "What materials can a Downwaste vertical baler process?",
    a: "Cardboard, plastic foil, paper, PET bottles, aluminium cans, tin cans and mixed plastics. The correct model depends on the primary material and the volume generated.",
  },
  {
    q: "How do I choose the right model?",
    a: "Choose based on your daily volume of recyclables and the required bale weight. The DP5 suits lower-volume operations (e.g. small retail), while the DP50 is designed for high-throughput industrial or large commercial sites. Our UK team can advise following a brief site review.",
  },
  {
    q: "Can a baler generate revenue?",
    a: "Yes. Baled cardboard, plastic and metals are saleable commodities. The price varies by material and market conditions, but baling segregated recyclables rather than disposing of them in general waste typically generates a positive return — either as direct income or avoided disposal costs.",
  },
  {
    q: "Can a vertical baler be installed in an existing building?",
    a: "Yes, provided the room has adequate ceiling height and floor loading capacity. All models require a standard 3-phase 400V/50Hz power supply. Our UK installation team conducts a site survey to confirm suitability before installation.",
  },
];

export default function VerticalBalerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://downwaste.co.uk" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://downwaste.co.uk/products" },
          { "@type": "ListItem", position: 3, name: "Balers", item: "https://downwaste.co.uk/products#balers" },
          { "@type": "ListItem", position: 4, name: "Vertical Baler", item: "https://downwaste.co.uk/products/vertical-baler" },
        ],
      },
      {
        "@type": "Product",
        name: "Downwaste Vertical Baler",
        description: "Vertical balers for cardboard, plastic, paper and cans. 6 models from 5 to 50 tonnes compaction force — turn recyclable waste into a valuable, revenue-generating asset.",
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
          <Link href="/products#balers" className="hover:text-sky-700 transition-colors">Balers</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Vertical Baler</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[40%] pointer-events-none select-none">
          <Image
            src={balerHero}
            alt="Downwaste vertical baler unit"
            fill
            priority
            className="object-contain object-center py-6 pr-8 opacity-90"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Balers — Vertical Baler
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Vertical Balers
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Instead of seeing waste, consider it a valuable asset with market potential. Available in 6 models from 5 to 50 tonnes compaction force — baled recyclables save space, reduce handling time and generate revenue.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="vertical-baler" name="Vertical Baler" category="Balers" />
                <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-bold text-slate-300 transition-all hover:border-sky-400 hover:text-sky-400">
                  View quote
                </Link>
                <Link href="/estimator" className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 px-6 py-2.5 text-sm font-bold text-sky-400 transition-all hover:border-sky-400 hover:bg-sky-400/10">
                  Estimate cost →
                </Link>
              </div>
              <div className="mt-8 flex justify-center lg:hidden">
                <Image src={balerHero} alt="Downwaste vertical baler" width={680} height={850} priority className="h-auto w-48 opacity-90" />
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
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Turn recyclables into revenue</h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>Downwaste vertical balers compress and bind recyclable materials — cardboard, plastic foil, paper, PET bottles, aluminium and tin cans — into compact, easy-to-handle bales. Properly baled and stored recyclables save space and time, and generate revenue by creating a saleable commodity from materials that would otherwise go to landfill or general waste.</p>
                <p>Available in six models from DP5 (5 tonnes compaction) to DP50 (50 tonnes), covering everything from small retail operations to large-scale industrial sites. All models feature automatic baling cycles, mechanical belt ejection, and silent operation under 40 dB.</p>
                <p className="font-medium text-slate-800">Materials processed: {materials.join(" · ")}</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image src={beforeAfter} alt="Downwaste baler — before and after baling comparison" width={700} height={800} className="h-auto w-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Model specs */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Models</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Six sizes available — DP5 to DP50</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((m, i) => (
              <ScrollReveal key={m.model} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-100 bg-slate-950 px-6 py-4">
                    <p className="text-lg font-black text-white">{m.model}</p>
                    <p className="text-xs text-sky-400">Max compaction: {m.maxCompaction}</p>
                  </div>
                  <table className="w-full text-xs">
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Cycle time", m.cycleTime],
                        ["W × D × H", `${m.width} × ${m.depth} × ${m.height}`],
                        ["Feeding inlet", m.inlet],
                        ["Bale size", m.baleSize],
                        ["Bale weight", m.baleWeight],
                        ["Motor", m.motor],
                        ["Noise", m.noise],
                        ["Straps", m.straps],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="px-4 py-2 text-slate-500">{label}</td>
                          <td className="px-4 py-2 font-semibold text-slate-900">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify a Downwaste baler?</h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 50}>
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
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Specify a vertical baler for your site</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">Tell us your recyclable volumes and primary materials and our UK team will recommend the right model. Add to your quote or use the estimator for a guide price.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/estimator" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105">Open Estimator</Link>
              <AddToQuoteButton id="vertical-baler" name="Vertical Baler" category="Balers" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
