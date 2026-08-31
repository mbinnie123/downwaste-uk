import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import staticCompactor1 from "../../../assets/images/downwaste_static_compactor_1.jpg";
import staticCompactor2 from "../../../assets/images/downwaste_static_compactor_2.jpg";
import beforeAfter from "../../../assets/images/downwaste_compactors_before_after.jpg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Static Compactor | Hydraulic Waste Compaction UK",
  description:
    "Downwaste UK supplies static hydraulic waste compactors in three models. Maximise waste volume reduction, lower disposal costs and improve site hygiene — for medium to very high-volume commercial and industrial applications.",
  alternates: {
    canonical: "/products/static-compactor",
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Static Compactor | Hydraulic Waste Compaction UK | Downwaste",
    description:
      "Static hydraulic waste compactors for UK commercial and industrial sites. Three models available — maximise volume reduction, lower disposal costs and improve site hygiene.",
    url: "/products/static-compactor",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Downwaste Static Compactor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Static Compactor | Hydraulic Waste Compaction UK | Downwaste",
    description:
      "Static hydraulic compactors for UK commercial and industrial sites. Three models — maximise volume reduction and lower disposal costs.",
  },
};

const models = [
  {
    model: "DWSC-01",
    hopperVol: "1.00 m³",
    capacityCycle: "1.14 m³",
    cycleTime: "30 s",
    throughput: "120 m³/h",
    compactionForce: "200 kN",
    boostForce: "220 kN",
    length: "1,400 mm",
    ramPenetration: "160 mm",
    ramStroke: "1,230 mm",
    weight: "1,850 kg",
    motor: "4.5 kW",
    electric: "400V, 50Hz, 16/32A",
    use: "Medium-volume waste, general office or light industrial",
  },
  {
    model: "DWSC-02",
    hopperVol: "1.50 m³",
    capacityCycle: "1.34 m³",
    cycleTime: "48 s",
    throughput: "162 m³/h",
    compactionForce: "270 kN",
    boostForce: "300 kN",
    length: "1,985 mm",
    ramPenetration: "160 mm",
    ramStroke: "1,190 mm",
    weight: "2,400 kg",
    motor: "5.5 kW",
    electric: "400V, 50Hz, 16/32A",
    use: "High-volume waste, large retail, industrial and packaging materials",
  },
  {
    model: "DWSC-03",
    hopperVol: "3.00 m³",
    capacityCycle: "2.38 m³",
    cycleTime: "56 s",
    throughput: "164 m³/h",
    compactionForce: "290 kN",
    boostForce: "300 kN",
    length: "2,790 mm",
    ramPenetration: "220 mm",
    ramStroke: "1,980 mm",
    weight: "2,865 kg",
    motor: "7.5 kW",
    electric: "400V, 50Hz, 16/32A",
    use: "Very high-volume, large-scale industrial and heavy-duty applications",
  },
];

const features = [
  {
    title: "Innovative design and performance",
    description:
      "A substantial fill opening unmatched in the market allows efficient handling of large volumes of waste. The high compaction force — up to 290 kN — combined with a long ram stroke delivers maximum volume reduction per cycle.",
  },
  {
    title: "Ease of use and efficiency",
    description:
      "The machine's operation is straightforward and safe, making it easy for personnel to use without specialist training. Simple controls and a reliable hydraulic drive ensure a smooth, consistent workflow.",
  },
  {
    title: "Safety, maintenance and customisation",
    description:
      "Built-in safety features include door interlocks, emergency stops and overload protection. Low maintenance requirements and readily available spare parts keep downtime to a minimum. Custom configurations available on request.",
  },
  {
    title: "Significant cost savings",
    description:
      "By maximising waste volume reduction, the static compactor dramatically reduces the number of waste collections required — directly lowering disposal costs. Typical payback periods of 2–4 years for high-volume operations.",
  },
  {
    title: "Improved hygiene",
    description:
      "Sealed compaction units prevent odours escaping and block pest access to waste — maintaining a cleaner, more hygienic working environment compared to open bin storage.",
  },
  {
    title: "Environmental benefits",
    description:
      "Fewer waste collection vehicle movements mean lower carbon emissions. Compacted waste also takes up less landfill space — supporting your business's sustainability targets.",
  },
];

const faqs = [
  {
    q: "What is a static waste compactor?",
    a: "A static hydraulic waste compactor uses a hydraulic ram to compress waste into a sealed container at a fixed location. Waste is loaded through a large hopper opening, compacted by the ram, and stored in the attached container until it is full and ready for collection. Static compactors stay in place — the container is swapped out when full.",
  },
  {
    q: "What are the key benefits of static waste compactors?",
    a: "Static compactors reduce waste disposal costs by maximising volume reduction. They improve space efficiency, reduce pest and odour problems, lower collection frequency and associated carbon emissions, and simplify waste management operations for facilities teams.",
  },
  {
    q: "What types of waste are best suited to static compactors?",
    a: "Static compactors are ideal for general commercial waste, packaging materials, cardboard, plastic bags and light industrial waste. They are not designed for hazardous waste, clinical waste, glass or very hard materials that could damage the ram.",
  },
  {
    q: "What is the difference between DWSC-01, DWSC-02 and DWSC-03?",
    a: "The three models differ primarily in hopper volume, compaction force and throughput capacity. DWSC-01 suits medium-volume operations such as offices and light industry. DWSC-02 handles high-volume retail and industrial applications. DWSC-03 is designed for very high-volume, heavy-duty industrial use.",
  },
  {
    q: "How does compaction force affect performance?",
    a: "Higher compaction force produces denser waste bales, which means more waste fits in each container load and collection frequency is reduced further. The DWSC-03's 290 kN compaction force and 300 kN boost force deliver the maximum volume reduction in the range.",
  },
  {
    q: "What maintenance is required?",
    a: "Routine maintenance is minimal — hydraulic fluid level checks, ram and seal inspection, and periodic lubrication. We recommend an annual service by a Downwaste-trained engineer. Emergency callout support is available across the UK.",
  },
  {
    q: "Can static compactors be customised?",
    a: "Yes. Custom hopper configurations, container sizes, colour finishes and control panel options are available. Contact our UK team to discuss your specific requirements.",
  },
  {
    q: "Can a static compactor be installed in an existing building?",
    a: "Yes. The static compactor connects to the building's waste area and requires a 400V three-phase power supply. Our UK installation team conducts a site survey to confirm suitability and identify any civil requirements before installation.",
  },
];

export default function StaticCompactorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://downwaste.co.uk" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://downwaste.co.uk/products" },
          { "@type": "ListItem", position: 3, name: "Compactors", item: "https://downwaste.co.uk/products#compactors" },
          { "@type": "ListItem", position: 4, name: "Static Compactor", item: "https://downwaste.co.uk/products/static-compactor" },
        ],
      },
      {
        "@type": "Product",
        name: "Downwaste Static Compactor",
        description: "Static hydraulic waste compactors for UK commercial and industrial sites. Three models available — maximise waste volume reduction, lower disposal costs and improve site hygiene.",
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
          <span className="font-medium text-slate-700">Static Compactor</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:flex w-[50%] flex-row gap-4 pointer-events-none select-none px-8 py-10 items-center">
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl flex-1">
            <Image src={staticCompactor2} alt="Downwaste static compactor — side view" width={800} height={800} priority className="h-auto w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl flex-1">
            <Image src={staticCompactor1} alt="Downwaste static compactor — front view" width={800} height={800} priority className="h-auto w-full object-cover" />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Compactors — Static Compactor
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Static Hydraulic Waste Compactors
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Maximise waste volume reduction and lower disposal costs. Downwaste static compactors offer significant savings through high-volume compaction — with a substantial fill opening unmatched in the market and straightforward operation for any facilities team.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="static-compactor" name="Static Compactor" category="Compactors" />
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
              {/* Mobile images */}
              <div className="mt-8 flex flex-row gap-4 lg:hidden">
                <div className="overflow-hidden rounded-xl border border-white/10 flex-1">
                  <Image src={staticCompactor2} alt="Downwaste static compactor — side view" width={800} height={800} priority className="h-auto w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-xl border border-white/10 flex-1">
                  <Image src={staticCompactor1} alt="Downwaste static compactor — front view" width={800} height={800} priority className="h-auto w-full object-cover" />
                </div>
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
                Maximum volume reduction, minimum collections
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Downwaste static hydraulic waste compactors offer significant cost savings by maximising the volume reduction of your waste and recyclables, leading to lower disposal expenses. The machine's operation is straightforward and safe — easy for your personnel to use and ensuring a smooth workflow.
                </p>
                <p>
                  With a substantial fill opening, our static waste compactors are unmatched in the market for efficient handling of large waste volumes. The sealed compaction unit prevents odours and pest infestations — maintaining a hygienic working environment.
                </p>
                <p>
                  Three models cover medium, high and very high-volume applications — from office and light industrial environments through to large retail and heavy-duty industrial operations.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src={beforeAfter}
                alt="Before and after compaction — volume reduction comparison"
                width={660}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Models */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Models</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Three configurations — DWSC-01 to DWSC-03</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {models.map((m, i) => (
              <ScrollReveal key={m.model} delay={i * 80}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col">
                  <div className="border-b border-slate-100 bg-slate-950 px-6 py-4">
                    <p className="text-lg font-black text-white">{m.model}</p>
                    <p className="text-xs text-slate-400">{m.use}</p>
                  </div>
                  <table className="w-full text-sm flex-1">
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Hopper volume", m.hopperVol],
                        ["Capacity/cycle", m.capacityCycle],
                        ["Cycle time", m.cycleTime],
                        ["Max throughput", m.throughput],
                        ["Compaction force", m.compactionForce],
                        ["Boost force", m.boostForce],
                        ["Length", m.length],
                        ["Weight", m.weight],
                        ["Motor", m.motor],
                        ["Power", m.electric],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="px-4 py-2 text-xs text-slate-500">{label}</td>
                          <td className="px-4 py-2 text-xs font-semibold text-slate-900">{value}</td>
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
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify a Downwaste static compactor?</h2>
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
              Specify a static compactor for your site
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us about your waste volumes and site configuration and our UK team will recommend the right model. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="static-compactor" name="Static Compactor" category="Compactors" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
