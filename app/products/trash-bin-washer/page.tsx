import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import washerHero from "../../../assets/images/trash_bin_washer.jpg";
import washingDiagram from "../../../assets/images/downwaste_bin_washing_diagram.png";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Automatic Trash Bin Washer | Odour Solutions | Downwaste UK",
  description:
    "Downwaste UK supplies automatic trash bin washers for commercial and residential waste rooms. A deep clean that eliminates odours at source — restoring waste containers and enhancing garbage room hygiene.",
};

const features = [
  {
    title: "Technical precision for impeccable results",
    description:
      "High-pressure hot water jets reach every internal surface of the bin — including the base, walls and lid — removing residue, bacteria and odour-causing compounds that manual cleaning cannot eliminate.",
  },
  {
    title: "Robust design and optimal performance",
    description:
      "Built from corrosion-resistant materials for continuous use in demanding waste room environments. The washer is engineered to handle high throughput without performance degradation over time.",
  },
  {
    title: "Swift and efficient cleaning cycles",
    description:
      "A full wash cycle completes in a fraction of the time required for manual cleaning — minimising downtime and allowing high bin throughput for buildings with large numbers of containers.",
  },
  {
    title: "Built to last",
    description:
      "Downwaste bin washers are designed for long service life with minimal maintenance. Robust components and a simple, reliable drive mechanism keep running costs low across the equipment's lifetime.",
  },
  {
    title: "Safety and control at your fingertips",
    description:
      "An integrated control panel provides easy operation and monitoring. Safety interlocks prevent operation when the access door is open, protecting operatives throughout the cleaning cycle.",
  },
  {
    title: "Eliminates odours at source",
    description:
      "Rather than masking bin odours with fragrance, the washer physically removes the organic residues that cause them. The result is genuinely odour-free bins — improving the overall hygiene of the waste room environment.",
  },
];

const faqs = [
  {
    q: "What is a waste odour solution?",
    a: "A waste odour solution is a combination of technologies that neutralise, eliminate or control odours from waste collection and disposal areas, improving air quality and waste bin hygiene. Automatic bin washing is one of the most effective approaches — removing the organic residues that cause odours rather than simply masking them.",
  },
  {
    q: "Who needs an automatic trash bin washer?",
    a: "Automatic bin washers are ideal for any building with a large number of waste bins that require regular cleaning — including high-rise residential towers, BTR developments, hotels, hospitals, student accommodation and commercial premises. They are particularly valuable where bin odour is a persistent problem despite regular bag changes.",
  },
  {
    q: "How does an automatic trash bin washer work?",
    a: "The bin is placed inside the washer and the door is closed. High-pressure hot water jets are then directed at all internal surfaces — the base, walls and lid — combined with a cleaning agent. The wash cycle removes residue, bacteria and odour-causing compounds in a matter of minutes. Waste water is drained and the bin is ready for reuse.",
  },
  {
    q: "How long does a wash cycle take?",
    a: "A standard wash cycle typically takes 3–5 minutes depending on the model and level of soiling. This allows a high daily throughput even in buildings with a large number of bins.",
  },
  {
    q: "Can the bin washer be connected to the building's drainage?",
    a: "Yes. The bin washer connects to the building's mains water supply and waste drainage — no specialist infrastructure is required beyond a standard cold water connection, hot water supply (or on-board heater) and a trapped floor drain.",
  },
  {
    q: "What bin sizes are compatible?",
    a: "Our bin washers accommodate standard 120 L, 240 L and 360 L wheeled bins. Contact us if you have requirements for larger containers — we can advise on the appropriate model.",
  },
  {
    q: "Can a bin washer be retrofitted into an existing waste room?",
    a: "Yes. Provided the waste room has adequate floor space and access to water and drainage, the bin washer can be installed in an existing building. Our UK installation team conducts a site survey prior to works to confirm suitability.",
  },
];

export default function TrashBinWasherPage() {
  return (
    <div className="text-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5">
          <Link href="/" className="hover:text-sky-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-sky-700 transition-colors">Products</Link>
          <span>/</span>
          <Link href="/products#odour-solutions" className="hover:text-sky-700 transition-colors">Odour Solutions</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Trash Bin Washer</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[44%] pointer-events-none select-none">
          <Image
            src={washerHero}
            alt="Downwaste automatic trash bin washer unit"
            fill
            priority
            className="object-contain object-center p-8 opacity-90"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Odour Solutions — Trash Bin Washer
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Automatic Trash Bin Washer
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Your frontline defence against persistent bin odours. The Downwaste automatic trash bin washer delivers a deep clean that restores waste containers and enhances garbage room hygiene — eliminating odours at source rather than masking them.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="trash-bin-washer" name="Automatic Trash Bin Washer" category="Odour Solutions" />
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
              <div className="mt-8 flex justify-center lg:hidden">
                <Image
                  src={washerHero}
                  alt="Downwaste automatic trash bin washer"
                  width={800}
                  height={800}
                  priority
                  className="h-auto w-full max-w-xs opacity-90"
                />
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
                Deep clean that restores bins and eliminates odours
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  The Downwaste automatic trash bin washer is designed to improve waste bin hygiene, ensuring odour-free bins and a cleaner waste disposal environment. High-pressure hot water jets reach every internal surface of the bin — removing the organic residues, bacteria and odour-causing compounds that accumulate over time and that manual cleaning cannot effectively eliminate.
                </p>
                <p>
                  Swift cleaning cycles minimise downtime while robust construction ensures long service life in demanding waste room environments. An integrated control panel and safety interlocks make operation straightforward and safe for facilities staff.
                </p>
                <p>
                  Genuinely odour-free bins improve the overall hygiene of the waste room — complementing other odour control measures such as scent diffusers and UV-C purification systems.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <Image
                src={washingDiagram}
                alt="Downwaste bin washing process diagram"
                width={900}
                height={900}
                className="h-auto w-full object-contain"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Features */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Features</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Built for performance and hygiene</h2>
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
      </div>

      {/* FAQ */}
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

      {/* CTA */}
      <div className="bg-gradient-to-br from-slate-950 to-blue-900 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Get a quote</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Specify a trash bin washer for your building
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us about your bin volumes and waste room dimensions and our UK team will recommend the right model. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="trash-bin-washer" name="Automatic Trash Bin Washer" category="Odour Solutions" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
