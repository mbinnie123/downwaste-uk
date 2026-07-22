import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import chuteCompactor from "../../../assets/images/chute_compactor.jpg";
import beforeAfter from "../../../assets/images/downwaste_compactors_before_after.jpg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Chute Fed Compactor | Garbage Room | Downwaste UK",
  description:
    "Downwaste UK supplies and installs chute fed compactors with a 10:1 compaction ratio. Leakproof, fully automatic and ideal for multi-storey residential and commercial buildings — reducing bin changes and labour costs.",
};

const features = [
  {
    title: "10:1 compaction ratio",
    description:
      "Our chute fed compactor achieves a 10:1 compaction ratio — meaning ten bags' worth of waste is reduced to the volume of one. This dramatically reduces the number of bin changes required and the associated labour costs.",
  },
  {
    title: "Leakproof design",
    description:
      "The compactor features a fully leakproof design, preventing liquid waste from escaping onto the garbage room floor. This significantly improves hygiene and reduces cleaning requirements.",
  },
  {
    title: "Continuous bagging system",
    description:
      "Waste is automatically packaged in a continuous bagging system as it is compacted — producing a hygienically sealed, easy-to-handle bale that can be moved without contact with the waste itself.",
  },
  {
    title: "Fully automatic operation",
    description:
      "The system operates automatically — detecting waste from the overhead chute, compacting it and advancing the bag without any manual intervention. Staff only need to remove the sealed bale when the unit is full.",
  },
  {
    title: "Reduces bin replacement needs",
    description:
      "Because waste is compacted rather than accumulated loose, far fewer bins are needed at any one time. This is especially valuable in buildings with limited garbage room space.",
  },
  {
    title: "Control panel and monitoring",
    description:
      "An integrated control panel and monitoring system gives facilities teams visibility over the compactor's status — including fill level, fault alerts and service indicators — enabling proactive management.",
  },
];

const faqs = [
  {
    q: "What is a chute fed compactor?",
    a: "A chute fed compactor is a waste management unit positioned at the base of a waste chute in a multi-storey building. As waste falls from the chute, the compactor automatically compresses it into a sealed continuous bag. The result is a significant reduction in waste volume — typically 10:1 — meaning far fewer bin changes and less labour.",
  },
  {
    q: "What is a waste compactor with continuous bagging?",
    a: "A waste compactor with continuous bagging is a fully automatic waste management solution designed to compress standard domestic refuse into a smaller volume and package it in a continuous bagging system. This enables hygienic disposal, reducing the need for manual handling and limiting waste exposure in the garbage room.",
  },
  {
    q: "Who needs a chute fed compactor?",
    a: "Chute fed compactors are ideal for any multi-storey residential tower, BTR development, hotel, student accommodation block or hospital where a waste chute is in operation and there is a need to reduce the frequency of bin changes and the associated labour costs.",
  },
  {
    q: "How does a chute fed compactor work?",
    a: "Waste deposited into the chute falls into the compactor's inlet. The compaction ram then compresses the waste into a continuous polythene bag. When the bag is full, it is sealed and the unit is ready for the bag to be removed. The entire process is automatic — no manual compaction or bagging is required.",
  },
  {
    q: "What is the compaction ratio?",
    a: "The Downwaste chute fed compactor achieves a 10:1 compaction ratio. This means that ten units of loose waste are compressed into the volume of one — dramatically reducing storage requirements and collection frequency.",
  },
  {
    q: "Can a chute fed compactor be installed in an existing building?",
    a: "Yes. Provided the garbage room has adequate space and a suitable power supply, the chute fed compactor can be retrofitted beneath an existing waste chute. Our UK installation team conducts a site survey prior to works to confirm suitability.",
  },
  {
    q: "What maintenance is required?",
    a: "Routine maintenance is minimal — the compaction ram and sealing mechanism require periodic inspection and lubrication. Bag roll replacement is a regular consumable task. We recommend an annual service by a Downwaste-trained engineer.",
  },
];

export default function ChuteCompactorPage() {
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
          <span className="font-medium text-slate-700">Chute Compactor</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[44%] pointer-events-none select-none">
          <Image
            src={chuteCompactor}
            alt="Downwaste chute fed compactor unit"
            fill
            priority
            className="object-contain object-center p-8 opacity-90"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Garbage Room — Chute Compactor
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Chute Fed Compactor
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                DownWaste 10:1 — the smart waste management solution. Designed to compact waste from an overhead chute in multi-storey buildings, significantly reducing bin replacement needs and making it ideal for buildings with limited garbage room space.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="chute-compactor" name="Chute Fed Compactor" category="Garbage Room" />
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
                  src={chuteCompactor}
                  alt="Downwaste chute fed compactor"
                  width={840}
                  height={840}
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
                10:1 compaction — fewer bins, less labour
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  The Downwaste chute fed compactor is designed to enhance efficient waste management by compacting waste from an overhead chute in multi-storey buildings. At a 10:1 compaction ratio, ten loose bags of waste are reduced to the volume of one sealed bale — dramatically reducing the number of bin changes required and the workload on facilities staff.
                </p>
                <p>
                  The leakproof, fully automatic design means waste is compressed and hygienically bagged in a continuous polythene sleeve without any manual intervention. Staff only need to remove and replace the sealed bale when the unit signals it is full.
                </p>
                <p>
                  An integrated control panel and monitoring system gives facilities teams full visibility over the unit's status — including fill level, fault alerts and service indicators.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src={beforeAfter}
                alt="Downwaste compactor — before and after compaction comparison"
                width={660}
                height={800}
                className="h-auto w-full object-cover"
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
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify a chute fed compactor?</h2>
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
              Specify a chute fed compactor for your building
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us your building height, waste volumes and room dimensions and our UK team will recommend the right configuration. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="chute-compactor" name="Chute Fed Compactor" category="Garbage Room" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
