import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import chuteIllustration from "../../../assets/images/downwaste_pneumatic_construction_disposal.svg";
import chuteProduct from "../../../assets/images/construction_debris_chute.png";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Construction Debris Chutes | Chutes | Downwaste UK",
  description:
    "Downwaste UK supplies high-strength steel construction debris chutes for building sites across the UK. Safer, more durable and more efficient than traditional plastic chutes — for multi-storey demolition, refurbishment and new-build projects.",
};

const features = [
  {
    title: "High-strength steel construction",
    description:
      "Unlike traditional plastic chutes, Downwaste construction debris chutes are fabricated from heavy-gauge steel. This ensures superior longevity, resistance to heavy or sharp debris, and a safer working environment on site.",
  },
  {
    title: "Modular and scalable",
    description:
      "The chute system is fully modular — sections connect together to reach any building height. Additional sections can be added or removed as the project progresses, with no specialist tools required.",
  },
  {
    title: "Rapid installation and dismantling",
    description:
      "Each section is designed for fast assembly and disassembly by site operatives. Chutes can be repositioned or relocated as the project programme demands, minimising downtime.",
  },
  {
    title: "Safe debris containment",
    description:
      "The enclosed steel chute channels debris directly into a skip or container at the base, eliminating the risk of materials falling freely from height and significantly reducing dust spread across the site.",
  },
  {
    title: "Compliant with UK site safety standards",
    description:
      "Our construction chutes are designed to comply with UK CDM Regulations and HSE guidance on working at height. Secure connections between sections prevent separation under load.",
  },
  {
    title: "Suitable for all debris types",
    description:
      "Steel chutes handle concrete rubble, masonry, timber, plasterboard, metal offcuts and mixed demolition waste — materials that would damage or split plastic alternatives under normal site conditions.",
  },
];

const specs = [
  { label: "Material", value: "Heavy-gauge galvanised steel" },
  { label: "Section length", value: "Standard 1 m sections" },
  { label: "Chute diameter", value: "450 mm internal diameter" },
  { label: "Max. building height", value: "No limit — add sections as required" },
  { label: "Base connection", value: "Skip, container or wheeled bin" },
  { label: "Finish", value: "Powder-coated or galvanised" },
  { label: "Standards", value: "CDM 2015 / HSE Working at Height" },
];

const faqs = [
  {
    q: "What is a construction debris chute?",
    a: "A construction debris chute is a modular enclosed channel, typically made from steel sections, that is fixed to the exterior of a building or scaffold to direct demolition waste, rubble and construction offcuts safely down from height into a skip or collection container at ground level. It replaces the need to carry waste down by hand or drop it from height.",
  },
  {
    q: "Why choose steel over plastic chutes?",
    a: "Steel chutes are significantly more durable than plastic alternatives. Plastic chutes can crack or split under the weight of heavy masonry, concrete or metal debris — creating a safety hazard. Steel chutes maintain structural integrity under heavy loads and are suitable for multi-storey and high-rise sites.",
  },
  {
    q: "How many sections do I need?",
    a: "One section per metre of working height is the standard guide. Sections are connected together and the system is extended as the project progresses. Our team can advise on the correct number of sections and any specialist connectors required for your site configuration.",
  },
  {
    q: "Are Downwaste construction chutes CDM compliant?",
    a: "Yes. The chutes are designed to comply with the Construction (Design and Management) Regulations 2015 and relevant HSE guidance on safe working at height and debris containment. As principal contractor, you remain responsible for the site-specific method statement and risk assessment.",
  },
  {
    q: "What types of waste can go through the chute?",
    a: "The steel chute is suitable for concrete rubble, masonry, plasterboard, timber, ceramic tiles, metal offcuts and mixed demolition debris. Very large or unusually shaped pieces should be broken down before disposal. Hazardous materials must be disposed of through the appropriate specialist waste stream.",
  },
  {
    q: "Can the chute be used on scaffold or a building facade?",
    a: "Yes. The chute system is designed to attach to scaffold tubes or be mounted directly to a building facade using appropriate brackets. Our team can advise on the correct fixing method for your scaffold configuration.",
  },
  {
    q: "Do you supply and install or supply only?",
    a: "Downwaste can supply the chute system for installation by your site team, or provide full supply-and-install for UK projects. Contact us to discuss your programme and requirements.",
  },
];

export default function ConstructionChutePage() {
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
          <span className="font-medium text-slate-700">Construction Debris Chute</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        {/* Absolute hero image — right side, desktop only */}
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[42%] pointer-events-none select-none">
          <Image
            src={chuteProduct}
            alt="Downwaste steel construction debris chute"
            fill
            priority
            className="object-contain object-center py-6 pr-8 opacity-90"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Chutes — Construction Debris Chutes
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Construction Debris Chutes
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                The durable and efficient construction waste solution. Fabricated from high-strength steel, our construction debris chutes redefine building site safety and efficiency — outlasting and outperforming traditional plastic alternatives on every type of project.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="construction-chute" name="Construction Debris Chute" category="Chutes" />
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
              <div className="mt-10 flex justify-center lg:hidden">
                <Image
                  src={chuteProduct}
                  alt="Downwaste steel construction debris chute"
                  width={280}
                  height={740}
                  priority
                  className="h-auto w-48 opacity-90"
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
                Steel-built for the demands of the site
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Downwaste construction debris chutes are engineered for durability and safety on UK building sites. Where plastic chutes crack and split under heavy masonry, concrete and metal debris, our steel chutes maintain structural integrity under sustained load — keeping sites safe and compliant throughout the project.
                </p>
                <p>
                  The modular section design means the system can be extended to any height, repositioned as the programme progresses, and assembled rapidly by site operatives without specialist equipment. Debris is channelled directly into a skip or container at the base — no free-dropping from height, no uncontrolled dust spread.
                </p>
                <p>
                  Downwaste construction chutes are used across demolition, refurbishment and new-build projects in the UK and internationally, including at high-rise residential, commercial and industrial sites.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <Image
                src={chuteIllustration}
                alt="Downwaste construction chute installation diagram"
                width={680}
                height={480}
                className="h-auto w-full object-contain"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Specifications */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Specifications</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Technical details</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {specs.map((s) => (
                    <tr key={s.label}>
                      <td className="px-6 py-4 font-semibold text-slate-700 w-40 sm:w-52">{s.label}</td>
                      <td className="px-6 py-4 text-slate-600">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Features</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Built for the job</h2>
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
              Need construction debris chutes for your site?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us your building height and programme and our UK team will advise on the right configuration. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="construction-chute" name="Construction Debris Chute" category="Chutes" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
