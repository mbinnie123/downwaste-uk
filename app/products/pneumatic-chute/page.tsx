import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import pneumaticChute from "../../../assets/images/pneumatic_chute.svg";
import pneumaticDescription from "../../../assets/images/downwaste_pneumatic_description.svg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Pneumatic Waste Collection Systems | Chutes | Downwaste UK",
  description:
    "Downwaste UK supplies and installs pneumatic waste systems for hospitals, high-rise buildings and urban developments. Fully automated, vacuum-powered and hygienic — transforming waste collection across the UK.",
};

const steps = [
  {
    number: "1",
    title: "Waste inlet deposit",
    description:
      "The user deposits waste or linen into the pneumatic trash chute via a secure, self-closing disposal inlet located on each floor. No manual bin handling required.",
  },
  {
    number: "2",
    title: "Automated detection and categorisation",
    description:
      "The automated system detects and categorises each waste stream, routing it to the correct collection container and optimising disposal based on waste type.",
  },
  {
    number: "3",
    title: "Vacuum transport",
    description:
      "Powerful air suction technology transports waste at high speed through a sealed underground or in-wall pipeline network — fully contained and odour-free.",
  },
  {
    number: "4",
    title: "Central collection and compaction",
    description:
      "The central collection plant receives and compacts waste, storing it in sealed containers ready for efficient removal. No skips on the street — collection is scheduled and controlled.",
  },
  {
    number: "5",
    title: "Air filtration and venting",
    description:
      "An integrated air filtration system deodorises and cleans the air before venting it into the atmosphere — leaving no smell or contaminants from the process.",
  },
];

const features = [
  {
    title: "Fully automated",
    description:
      "No manual waste bins, no porter rounds, no trolley movements. The system operates automatically — waste is transported from inlet to collection point without human intervention.",
  },
  {
    title: "Hygienic and odour-free",
    description:
      "All waste travels through sealed pipelines. The air filtration system deodorises vented air. No bin liners, no overflow, no odour — ideal for hospitals, hotels and high-density residential.",
  },
  {
    title: "Reduces labour costs",
    description:
      "Eliminating manual waste rounds and bin handling significantly reduces operational labour costs over the building's lifecycle. Typical payback periods of 5–8 years for large schemes.",
  },
  {
    title: "Supports waste segregation",
    description:
      "Separate inlet points and automated routing allow recyclables, general waste and clinical or linen streams to be kept segregated throughout — without additional handling.",
  },
  {
    title: "RFID access control",
    description:
      "Inlets can be fitted with RFID card readers so that only authorised users can deposit waste. Ideal for pay-as-you-throw schemes, data-capture requirements and secure healthcare environments.",
  },
  {
    title: "Ideal for hospitals and urban developments",
    description:
      "Widely specified across hospitals, university campuses, BTR towers, airports and mixed-use urban regeneration schemes where conventional waste collection is impractical.",
  },
];

const components = [
  {
    title: "Wall-mounted waste inlets",
    description:
      "Fire-rated self-closing inlet doors fitted flush into the wall at each disposal point. Available in multiple finishes and with optional RFID card access.",
  },
  {
    title: "High-performance conveyance network",
    description:
      "A sealed network of steel-lined pipes carries waste at speeds up to 70 km/h using negative air pressure. Pipes run through service risers, below floors or underground.",
  },
  {
    title: "Central collection plant",
    description:
      "The collection plant houses the compaction units, air filtration equipment and control systems. Sized to suit the building's waste throughput and collection frequency.",
  },
];

const faqs = [
  {
    q: "What is a pneumatic waste system and how does it work?",
    a: "A pneumatic waste system is an automated waste collection system that uses vacuum technology to transport waste through a sealed network of pipes. Users deposit waste into designated inlets, and the system sucks the waste to a central collection plant, where it is compacted and stored for disposal. This hygienic, odour-free and efficient system eliminates the need for traditional waste bins and manual collection.",
  },
  {
    q: "What are the benefits over traditional waste collection?",
    a: "Pneumatic systems eliminate manual bin rounds, reduce odour and pest risk, improve hygiene, enable waste segregation at source, and can incorporate RFID access control. They are particularly beneficial where space for bin stores is limited, or where a high standard of hygiene is required.",
  },
  {
    q: "Where are pneumatic chutes typically installed?",
    a: "Pneumatic waste systems are widely installed in hospitals and healthcare facilities, high-rise residential towers, university campuses, airports, large hotels, and dense urban developments. Any building type where conventional waste collection is impractical or costly can benefit.",
  },
  {
    q: "How does a pneumatic system support hospital waste management?",
    a: "In healthcare settings, pneumatic systems are used to transport clinical waste, general waste and soiled linen in segregated streams through sealed pipelines — eliminating the need for porter trolleys to move waste through clinical areas, reducing infection risk and freeing staff time.",
  },
  {
    q: "Can the system support RFID access control?",
    a: "Yes. Inlet doors can be fitted with RFID card readers so that only authorised users can deposit waste. This enables pay-as-you-throw schemes, accurate waste data capture by user or apartment, and access restriction in secure environments.",
  },
  {
    q: "What is involved in a pneumatic chute installation?",
    a: "The pipeline network, inlet doors and central collection plant are coordinated with the base-build contractor. New-build integration is straightforward; retrofit is possible where service risers are available. Our UK team manages the full scope from design through commissioning.",
  },
  {
    q: "Are pneumatic waste systems eco-friendly?",
    a: "Yes. By improving waste segregation rates, reducing vehicle movements (waste lorries make fewer, more efficient collections), and eliminating single-use bin liners across large buildings, pneumatic systems contribute meaningfully to a development's sustainability credentials.",
  },
];

export default function PneumaticChutePage() {
  return (
    <div className="text-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5">
          <Link href="/" className="hover:text-sky-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-sky-700 transition-colors">Products</Link>
          <span>/</span>
          <Link href="/products#chutes" className="hover:text-sky-700 transition-colors">Chutes</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Pneumatic Chute</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        {/* Absolute hero image — right side, full hero height */}
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[56%] pointer-events-none select-none">
          <Image
            src={pneumaticChute}
            alt="Downwaste pneumatic waste collection system diagram"
            fill
            priority
            className="object-contain object-center p-6 opacity-90"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Chutes — Pneumatic Waste Systems
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Pneumatic Waste Collection Systems
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Fully automated, vacuum-powered waste transport for hospitals, high-rise buildings and urban developments. Waste travels from floor inlet to central collection plant through sealed pipelines — hygienic, odour-free and without any manual handling.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="pneumatic-chute" name="Pneumatic Waste System" category="Chutes" />
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
              {/* Mobile image — shown below buttons, hidden on desktop where absolute version shows */}
              <div className="mt-10 flex justify-center lg:hidden">
                <Image
                  src={pneumaticChute}
                  alt="Downwaste pneumatic waste collection system diagram"
                  width={560}
                  height={560}
                  priority
                  className="h-auto w-full max-w-sm opacity-90"
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
                The future of building waste management
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Downwaste offers state-of-the-art pneumatic waste systems, revolutionising waste management for hospitals, high-rise buildings and urban developments. Our pneumatic garbage chutes provide a fully automated, hygienic and efficient alternative to traditional waste collection — reducing manual handling and optimising resource efficiency.
                </p>
                <p>
                  A sealed network of pipes connects every waste inlet in the building to a single central collection plant. A powerful vacuum draws waste through at high speed — no odour escapes, no pest access, no overflow. The collection plant compacts and stores waste until it is ready for removal, reducing the number of vehicle collections required.
                </p>
                <p>
                  Downwaste pneumatic systems have been installed across hospitals, cancer centres, smart city developments and industrial campuses in the UK, Middle East and beyond.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <Image
                src={pneumaticDescription}
                alt="Downwaste pneumatic chute system — component overview diagram"
                width={680}
                height={480}
                className="h-auto w-full object-contain"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* How it works — 5 steps */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">How it works</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Five-step automated process</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              From inlet deposit to clean air venting, the entire waste journey is sealed, automated and monitored.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <ScrollReveal key={s.number} delay={i * 70}>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="absolute right-4 top-3 text-6xl font-black text-slate-100 select-none">
                    {s.number}
                  </span>
                  <p className="relative text-xs font-black uppercase tracking-widest text-sky-600">Step {s.number}</p>
                  <h3 className="relative mt-2 text-sm font-bold text-slate-950">{s.title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-600">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Core components */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">System components</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Three core components</h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {components.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sky-600">
                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.description}</p>
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
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify a pneumatic system?</h2>
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
              Specify a pneumatic waste system for your project
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Whether you are designing a hospital, a BTR tower or an urban regeneration scheme, our UK team can help you specify the right system. Add to your quote or use the estimator to get a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="pneumatic-chute" name="Pneumatic Waste System" category="Chutes" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
