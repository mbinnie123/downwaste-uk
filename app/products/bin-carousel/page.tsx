import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import carouselHero from "../../../assets/images/downwaste_chute_fed_carousels.jpg";
import carouselSystem from "../../../assets/images/bin_carousel_system.jpg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Bin Carousel Systems | Garbage Room | Downwaste UK",
  description:
    "Downwaste UK supplies and installs automated bin carousel systems for chute-fed garbage rooms. Photoelectric sensors and motor-driven rack and pinion automatically cycle full bins out and empty ones in — minimising labour and maximising waste room efficiency.",
};

const components = [
  { number: "1", label: "Chute discharge", description: "Waste from the building chute drops directly into the active bin positioned beneath the discharge point — no manual positioning required." },
  { number: "2", label: "Skirting board", description: "A fitted skirting board seals around the base of the unit, keeping the waste room clean and preventing debris from accumulating under the carousel." },
  { number: "3", label: "Carousel", description: "The motorised rotating carousel holds all bins in a circular configuration, advancing each to the discharge position in sequence as bins fill." },
  { number: "4", label: "Bin press (optional)", description: "An integrated vertical press compacts waste in each bin as it fills, extending the time between bin changes and reducing overall waste volume." },
  { number: "5", label: "Bin sensor", description: "Photoelectric proximity sensors detect when a bin is full and trigger the carousel to advance, bringing the next empty bin into position automatically." },
  { number: "6", label: "Position switch", description: "A position switch confirms that each bin is precisely aligned under the discharge point before chute operation continues — preventing spillage." },
  { number: "7", label: "Electric motor", description: "A reliable electric motor drives the rack and pinion system that rotates the carousel. Low power consumption and minimal maintenance requirements." },
  { number: "8", label: "Waste bins", description: "Compatible with standard 240 L and 360 L wheeled bins. 4 or 5-bin configurations available depending on model and room dimensions." },
];

const models = [
  {
    model: "RC.001",
    binSizes: "240 L / 360 L",
    bins: "4",
    diameter: "2,120 mm",
    minHeight: "2,500 mm",
    press: "Optional (floor or ceiling mount)",
    power: "380 V",
  },
  {
    model: "RC.002",
    binSizes: "240 L / 360 L",
    bins: "4 or 5",
    diameter: "2,340 mm",
    minHeight: "2,500 mm",
    press: "Optional (floor or ceiling mount)",
    power: "380 V",
  },
  {
    model: "RC.003",
    binSizes: "240 L / 360 L",
    bins: "5",
    diameter: "2,560 mm",
    minHeight: "2,500 mm",
    press: "Optional (floor or ceiling mount)",
    power: "380 V",
  },
];

const features = [
  {
    title: "Automated bin cycling",
    description:
      "Photoelectric proximity sensors detect when a bin is full and trigger the electric motor to advance the carousel, positioning the next empty bin under the chute discharge point automatically — no manual intervention required.",
  },
  {
    title: "Reduces manual labour",
    description:
      "Staff are freed from constantly monitoring and moving bins. The carousel handles the rotation automatically, meaning waste room visits are only needed to remove fully compacted bins and replace them with empties.",
  },
  {
    title: "Chute-fed — integrates with existing chutes",
    description:
      "The carousel sits directly beneath the chute discharge point, making it the natural complement to any waste or recycling chute system. It can be integrated with new or existing chute installations.",
  },
  {
    title: "Optional vertical bin press",
    description:
      "An optional integrated press can compact waste in each bin before the carousel advances, dramatically reducing waste volume and extending the interval between bin changes — available in floor or ceiling mount configurations.",
  },
  {
    title: "Compatible with 240 L and 360 L bins",
    description:
      "Standard-sized wheeled bins are used throughout, so no specialist waste receptacles are required. The 4 or 5-bin capacity accommodates high-volume buildings without requiring an oversized waste room.",
  },
  {
    title: "Cleaner, safer waste room",
    description:
      "Automated bin positioning eliminates the need for trolleys and manual bin pushing, reducing the risk of manual handling injuries. The fitted skirting board keeps the floor clean and prevents debris build-up beneath the unit.",
  },
];

const faqs = [
  {
    q: "What is a bin carousel system?",
    a: "A bin carousel is an automated waste management system positioned beneath a chute discharge point in a garbage room. It holds multiple wheeled bins in a circular rotating platform. When a bin is full, photoelectric sensors trigger an electric motor to rotate the carousel, bringing the next empty bin into position automatically — without any manual intervention.",
  },
  {
    q: "How is a bin carousel different from a bin feed press?",
    a: "A bin feed press moves bins in a linear sequence; a bin carousel rotates them in a circle. Both automate bin cycling beneath a chute discharge, but the carousel's circular footprint can be more space-efficient for certain room configurations. Both are available with an optional integrated press for waste compaction.",
  },
  {
    q: "Who needs a bin carousel?",
    a: "Bin carousels are ideal for any multi-storey residential, hotel, student accommodation or mixed-use building with a waste chute that generates a high daily volume of bagged waste. They are particularly effective where reducing waste room labour and maintaining a clean, odour-controlled environment is a priority.",
  },
  {
    q: "What bin sizes are compatible?",
    a: "The Downwaste carousel range is compatible with standard 240 L and 360 L wheeled bins. 4 or 5-bin configurations are available across the RC.001, RC.002 and RC.003 models.",
  },
  {
    q: "What is the minimum room height required?",
    a: "A minimum clear height of 2,500 mm is required for all carousel models. The machine diameter ranges from 2,120 mm to 2,560 mm depending on the model — our team will confirm the correct configuration following a site survey.",
  },
  {
    q: "Can a bin carousel be installed with an optional press?",
    a: "Yes. An optional vertical bin press can be integrated into the carousel system, available in floor-mount or ceiling-mount configurations. This compacts waste in each bin before advancing to the next, reducing waste volume and the frequency of bin changes.",
  },
  {
    q: "Can the system be retrofitted into an existing garbage room?",
    a: "Yes, provided the room has adequate dimensions and a 380 V three-phase power supply. Our UK team conducts a site survey prior to installation to confirm suitability and identify any modifications required.",
  },
];

export default function BinCarouselPage() {
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
          <span className="font-medium text-slate-700">Bin Carousel</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        {/* Absolute hero image — right side, desktop only */}
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[52%] pointer-events-none select-none">
          <Image
            src={carouselHero}
            alt="Downwaste chute-fed bin carousel system installed"
            fill
            priority
            className="object-cover object-left opacity-40"
          />
          {/* Gradient fade so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/30 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Garbage Room — Bin Carousel
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Bin Carousel Systems
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Automated waste management for chute-fed garbage rooms. Photoelectric sensors and a motor-driven carousel automatically cycle full bins out and empty ones in — maximising efficiency and eliminating the need for constant staff monitoring.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="bin-carousel" name="Bin Carousel System" category="Garbage Room" />
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
              {/* Mobile hero image */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 lg:hidden">
                <Image
                  src={carouselHero}
                  alt="Downwaste chute-fed bin carousel system"
                  width={800}
                  height={640}
                  priority
                  className="h-auto w-full"
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
                Revolutionising garbage room equipment
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  The Downwaste bin carousel is an automated waste management solution designed to handle chute-fed waste bins efficiently. Located directly beneath the chute discharge, our system uses photoelectric proximity sensors and an electric motor-driven rack and pinion to ensure that full waste bins are seamlessly replaced with empty ones — optimising waste volume reduction and overall efficiency.
                </p>
                <p>
                  By automating waste handling, the carousel allows facilities staff to focus on essential tasks while ensuring a cleaner, safer garbage room. Staff intervention is only required to remove fully compacted bins and replace them with empties — reducing the number of waste room visits and eliminating the need for constant monitoring.
                </p>
                <p>
                  The optional integrated bin press can compact waste in each bin before the carousel advances, significantly increasing the effective capacity of the system and reducing collection frequency.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src={carouselSystem}
                alt="Downwaste bin carousel system — full unit view"
                width={840}
                height={1500}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* System components */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">System components</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Eight integrated components</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Every part of the carousel works together to deliver a fully automated, self-regulating system.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {components.map((c, i) => (
              <ScrollReveal key={c.number} delay={i * 50}>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm h-full">
                  <span className="absolute right-3 top-2 text-5xl font-black text-slate-100 select-none">{c.number}</span>
                  <p className="relative text-xs font-black uppercase tracking-widest text-sky-600">Component {c.number}</p>
                  <h3 className="relative mt-1 text-sm font-bold text-slate-950">{c.label}</h3>
                  <p className="relative mt-2 text-xs leading-5 text-slate-600">{c.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Models */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Models</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Three configurations available</h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Choose based on your room dimensions and daily waste volume. All models accept 240 L or 360 L wheeled bins.
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
                      ["Bin sizes", m.binSizes],
                      ["No. of bins", m.bins],
                      ["Machine diameter", m.diameter],
                      ["Min. room height", m.minHeight],
                      ["Optional press", m.press],
                      ["Power supply", m.power],
                    ].map(([label, value]) => (
                      <tr key={label}>
                        <td className="px-4 py-2.5 text-slate-500 text-xs">{label}</td>
                        <td className="px-4 py-2.5 font-semibold text-slate-900 text-xs">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Features</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify a bin carousel?</h2>
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
              Ready to specify a bin carousel system?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us your room dimensions, chute configuration and daily waste volume and our UK team will recommend the right model. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="bin-carousel" name="Bin Carousel System" category="Garbage Room" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
