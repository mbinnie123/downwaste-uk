import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import binFeedRender from "../../../assets/images/downwaste_bin_feed_render.png";
import binFeedSlide1 from "../../../assets/images/downwaste_bin_feed_slide1.png";
import binFeedSlide2 from "../../../assets/images/downwaste_bin_feed_slide2.png";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Bin Feed Press Systems | Garbage Room | Downwaste UK",
  description:
    "Downwaste UK supplies and installs bin feed press systems for commercial and residential garbage rooms. Automatic bin cycling and compaction — reducing labour, trolley usage and the frequency of bin replacements.",
};

const models = [
  {
    model: "FNP 03",
    binSize: "240 L",
    bins: "3",
    length: "3,120 mm",
    width: "1,060 mm",
    height: "3,000 mm",
    motor: "0.75 kW",
    power: "380 V",
  },
  {
    model: "FNP 04",
    binSize: "240 L",
    bins: "4",
    length: "3,900 mm",
    width: "1,060 mm",
    height: "3,000 mm",
    motor: "0.75 kW",
    power: "380 V",
  },
  {
    model: "FNP 05",
    binSize: "240 L",
    bins: "5",
    length: "4,680 mm",
    width: "1,060 mm",
    height: "3,000 mm",
    motor: "0.75 kW",
    power: "380 V",
  },
];

const features = [
  {
    title: "Automatic bin cycling",
    description:
      "The system automatically cycles through all waste bins in sequence, feeding each one under the press head in turn. Staff intervention is only required when all bins are fully compacted — greatly reducing the frequency of waste room visits.",
  },
  {
    title: "Reduces bin replacement frequency",
    description:
      "By compacting waste as each bin fills, the bin feed press dramatically extends the time between bin changes — cutting labour and the wear on replacement equipment.",
  },
  {
    title: "Minimises trolley usage",
    description:
      "With bins cycled and compacted in-situ, the need to move individual bins around the waste room by trolley is significantly reduced — lowering the risk of manual handling injuries and equipment damage.",
  },
  {
    title: "Optimises garbage room space",
    description:
      "Multiple bins are held in a compact linear or carousel configuration, making efficient use of the garbage room footprint while maximising the total waste capacity available at any one time.",
  },
  {
    title: "Low power consumption",
    description:
      "The 0.75 kW electric motor keeps running costs low. The system operates on standard 380 V three-phase supply and can be integrated into the building's BMS for automated scheduling.",
  },
  {
    title: "Minimal maintenance",
    description:
      "Robust steel construction and a simple electro-mechanical drive mean the bin feed press requires minimal routine maintenance. Service intervals are typically annual.",
  },
];

const faqs = [
  {
    q: "What is a bin feed press system?",
    a: "A bin feed press is a waste compaction system designed to automatically cycle and compress multiple waste bins in sequence. The press head compacts waste in each bin as it fills, then advances to the next bin automatically — so staff only need to attend the waste room when all bins have been fully compacted and need to be removed.",
  },
  {
    q: "Who needs a bin feed press?",
    a: "Bin feed press systems are ideal for any building that generates a high volume of bagged waste and requires frequent bin changes — including large residential developments, hotels, hospitals, student accommodation, shopping centres and office buildings with centralised waste rooms.",
  },
  {
    q: "How does a bin feed press reduce labour?",
    a: "Rather than requiring staff to monitor and change individual bins as each one fills, the automatic cycling system consolidates waste across multiple bins and only requires attention once all bins in the system are full. This can reduce waste room visits from multiple times daily to once or twice per shift.",
  },
  {
    q: "How many bins does the system hold?",
    a: "The Downwaste bin feed press range includes 3-bin (FNP 03), 4-bin (FNP 04) and 5-bin (FNP 05) configurations, all using standard 240 L bins. The correct model for your building depends on daily waste volume and the size of the available garbage room.",
  },
  {
    q: "What bin sizes are compatible?",
    a: "The standard range is designed for 240 L wheeled bins. Contact us if you require compatibility with other bin sizes — we can advise on custom configurations.",
  },
  {
    q: "Can a bin feed press be installed in an existing building?",
    a: "Yes. Provided the garbage room has adequate floor space and a 380 V three-phase power supply, the bin feed press can be retrofitted into an existing waste room. Our installation team carries out a site survey prior to installation to confirm suitability.",
  },
  {
    q: "What is the power requirement?",
    a: "All models in the range run on a 0.75 kW electric motor with a 380 V three-phase power supply. Energy consumption is low and the system can be scheduled via BMS or a simple timer.",
  },
];

export default function BinFeedPressPage() {
  return (
    <div className="text-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5">
          <Link href="/" className="hover:text-sky-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-sky-700 transition-colors">Products</Link>
          <span>/</span>
          <Link href="/products#garbage-room" className="hover:text-sky-700 transition-colors">Garbage Room</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Bin Feed Press</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        {/* Absolute hero image — right side, desktop only */}
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[38%] pointer-events-none select-none">
          <Image
            src={binFeedRender}
            alt="Downwaste bin feed press system render"
            fill
            priority
            className="object-contain object-center py-4 pr-6 opacity-90"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Garbage Room — Bin Feed Press
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Bin Feed Press Systems
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                The ultimate solution for reducing frequent waste handling and bin replacements. The automatic system cycles all bins in sequence, compacting waste as it goes — staff only intervene when all bins are fully pressed.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="bin-feed-press" name="Bin Feed Press" category="Garbage Room" />
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
              {/* Mobile render image */}
              <div className="mt-10 flex justify-center lg:hidden">
                <Image
                  src={binFeedRender}
                  alt="Downwaste bin feed press system"
                  width={260}
                  height={620}
                  priority
                  className="h-auto w-44 opacity-90"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Overview + slide images */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Automatic bin cycling and compaction
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  The Downwaste Bin Feed Press is the ultimate solution for reducing frequent waste handling and equipment replacements in commercial and residential garbage rooms. The automatic system cycles through all waste bins in sequence, compacting the contents of each bin before advancing to the next.
                </p>
                <p>
                  Staff are only required when all bins in the system are fully compacted and ready for removal — replacing multiple daily waste room visits with a single, efficient changeover. This optimises garbage room operations, reduces trolley movement and minimises the workload on facilities management teams.
                </p>
                <p>
                  Available in 3, 4 and 5-bin configurations (FNP 03, 04, 05), all using standard 240 L wheeled bins. The compact linear footprint fits standard garbage room dimensions and can be integrated with existing chute systems.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            <ScrollReveal variant="scale" delay={80}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <Image
                  src={binFeedSlide1}
                  alt="Downwaste bin feed press — installed view"
                  width={800}
                  height={550}
                  className="h-auto w-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={140}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <Image
                  src={binFeedSlide2}
                  alt="Downwaste bin feed press — operational view"
                  width={800}
                  height={550}
                  className="h-auto w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Models / Specifications */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Models</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Available configurations</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Three standard models — choose based on your daily waste volume and available room dimensions.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {models.map((m, i) => (
              <ScrollReveal key={m.model} delay={i * 80}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-100 bg-slate-950 px-6 py-4">
                    <p className="text-lg font-black text-white">{m.model}</p>
                    <p className="text-xs text-slate-400">{m.bins}-bin configuration</p>
                  </div>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Bin size", m.binSize],
                        ["No. of bins", m.bins],
                        ["Length", m.length],
                        ["Width", m.width],
                        ["Height", m.height],
                        ["Motor", m.motor],
                        ["Power supply", m.power],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="px-4 py-2.5 text-slate-500">{label}</td>
                          <td className="px-4 py-2.5 font-semibold text-slate-900">{value}</td>
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
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify a bin feed press?</h2>
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
              Ready to specify a bin feed press system?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us your building's daily waste volume and room dimensions and our UK team will recommend the right model. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="bin-feed-press" name="Bin Feed Press" category="Garbage Room" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
