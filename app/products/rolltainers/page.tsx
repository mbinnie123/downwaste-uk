import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import rolltainer from "../../../assets/images/rolltainer.jpg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Rolltainers | Handling | Downwaste UK",
  description:
    "Downwaste stainless steel rolltainers optimise laundry handling in hotels, hospitals and commercial buildings — reducing manual strain on staff and streamlining linen collection from laundry chutes.",
};

const features = [
  {
    title: "Reduces manual handling strain",
    description:
      "Rolltainers eliminate the need to manually unload bulky laundry from chute outlets — reducing the risk of back injuries and musculoskeletal disorders for housekeeping and laundry staff.",
  },
  {
    title: "Stainless steel construction",
    description:
      "Heavy-duty stainless steel frame resists corrosion, withstands frequent washing and meets hygiene standards required in hotels, hospitals and commercial laundry environments.",
  },
  {
    title: "High-capacity transport",
    description:
      "Large-volume capacity allows significant laundry loads to be collected and transported in a single trip — reducing the number of journeys between chute outlets and laundry processing areas.",
  },
  {
    title: "Non-marking wheels",
    description:
      "Non-marking castors protect floors in hotels and healthcare facilities. Smooth-rolling wheels enable easy manoeuvring in tight service corridors and lift lobbies.",
  },
  {
    title: "Direct laundry chute integration",
    description:
      "Designed to position directly beneath Downwaste laundry chute discharge outlets for seamless collection — eliminating the need for intermediate handling or transfer equipment.",
  },
  {
    title: "Protects linen in transit",
    description:
      "The enclosed container design protects linen from contamination and damage during transport from collection points to laundry processing — maintaining hygiene throughout the workflow.",
  },
];

const faqs = [
  {
    q: "What is a rolltainer?",
    a: "A rolltainer is a mobile laundry container designed to efficiently transport bulky laundry loads in hotels, hospitals and commercial laundry facilities. It is positioned beneath a laundry chute outlet to collect discharged linen, then wheeled directly to the laundry processing area — eliminating manual unloading and carrying.",
  },
  {
    q: "How do rolltainers improve laundry operations in hotels?",
    a: "Rolltainers streamline the laundry workflow by allowing chute-discharged linen to be collected automatically into a mobile container. Staff can push the loaded rolltainer directly to the laundry, avoiding multiple manual lifts and reducing journey time — improving both efficiency and staff welfare.",
  },
  {
    q: "What makes rolltainers user-friendly for laundry transport?",
    a: "Ergonomic push handles, smooth non-marking castors and a low-resistance frame make rolltainers easy to manoeuvre even when fully loaded. The open-top design allows easy loading and unloading by laundry staff.",
  },
  {
    q: "What are the benefits of stainless steel rolltainers?",
    a: "Stainless steel construction is hygienic, easy to clean and corrosion-resistant — essential in hotel and healthcare environments. It withstands repeated washing and disinfection cycles without degrading, extending the working life of the equipment.",
  },
  {
    q: "What capacity do rolltainers offer?",
    a: "Downwaste rolltainers are available in configurations sized to match standard laundry chute discharge rates. Contact our UK team to confirm the right capacity for your building's chute output and laundry processing schedule.",
  },
  {
    q: "Why are non-marking wheels important for laundry rolltainers?",
    a: "Hotels and healthcare facilities require floor surfaces to be kept in good condition. Non-marking castors prevent black scuff marks on vinyl, tile and carpet floor finishes — avoiding the damage caused by standard industrial wheels.",
  },
  {
    q: "Can rolltainers be used as the base unit for a laundry chute system?",
    a: "Yes. Downwaste rolltainers are specifically designed to integrate with Downwaste laundry chute systems as the collection unit beneath the chute outlet. Combined with a laundry chute and optional chute compactor, they form a complete linen collection and handling solution.",
  },
  {
    q: "Are rolltainers suitable for high-capacity laundry operations?",
    a: "Yes. For very high-volume operations — such as large hotels, NHS trusts and commercial laundries — multiple rolltainers can be rotated in and out of service at the chute outlet to ensure continuous collection without downtime.",
  },
];

export default function RolltainersPage() {
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
          <span className="font-medium text-slate-700">Rolltainers</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:flex w-[45%] items-center justify-center pointer-events-none select-none px-8 py-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl w-full">
            <Image src={rolltainer} alt="Downwaste stainless steel rolltainer laundry trolley" width={800} height={600} priority className="h-auto w-full object-cover" />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Handling — Rolltainers
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Laundry Rolltainers
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Stainless steel rolltainers that optimise laundry handling in hotels, hospitals and commercial buildings. Designed to work directly beneath laundry chutes — eliminating manual strain and streamlining the complete linen collection workflow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="rolltainers" name="Rolltainers" category="Handling" />
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
                <Image src={rolltainer} alt="Downwaste stainless steel rolltainer laundry trolley" width={800} height={600} priority className="h-auto w-full object-cover" />
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
            Optimise laundry operations from chute to processing
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
            <p>
              Handling laundry in hotels and multi-storey buildings can be a burdensome task. Without proper equipment beneath your laundry chute, the manual labour becomes a significant strain — unloading bulky laundry can lead to health issues for staff such as back pain.
            </p>
            <p>
              Downwaste rolltainers are designed to streamline the process. These laundry trolleys sit directly beneath the chute discharge outlet, collecting linen automatically as it falls. Once full, the loaded rolltainer is simply wheeled to the laundry processing area — no manual unloading required.
            </p>
            <p>
              For hotels, NHS facilities and commercial laundries with high linen volumes, rolltainers are an essential component of an efficient laundry chute system. They integrate seamlessly with the Downwaste laundry chute range — and can be combined with a chute compactor for even higher-volume operations.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Features */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Features</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify Downwaste rolltainers?</h2>
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

      {/* Related products */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Related products</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Complete laundry chute systems</h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Rolltainers work best as part of a complete linen collection system. Combine with a Downwaste laundry chute and optional chute compactor for the most efficient solution.
          </p>
        </ScrollReveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/products/laundry-chute", label: "Laundry Chute", description: "Multi-storey linen discharge chutes for hotels and residential buildings." },
            { href: "/products/chute-compactor", label: "Chute Compactor", description: "Combines a discharge chute with an integrated waste or linen compactor." },
            { href: "/products/bin-tipper", label: "Bin Tipper", description: "Automatically tips bins directly into compactors or skip containers." },
          ].map((r, i) => (
            <ScrollReveal key={r.href} delay={i * 80}>
              <Link href={r.href} className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-sky-300 hover:shadow-md">
                <p className="text-sm font-bold text-slate-900 group-hover:text-sky-700">{r.label} →</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{r.description}</p>
              </Link>
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
              Specify rolltainers for your laundry system
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us about your building, chute configuration and linen volumes — our UK team will specify the right rolltainer to complete your laundry handling system.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="rolltainers" name="Rolltainers" category="Handling" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
