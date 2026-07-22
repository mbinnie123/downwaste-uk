import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import diffuserHero from "../../../assets/images/prolitec_scent_diffusers.jpg";
import prolitecGraph from "../../../assets/images/downwaste_prolitec_graph.svg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Prolitec Scent Diffuser | Odour Solutions | Downwaste UK",
  description:
    "Downwaste UK supplies Prolitec commercial scent diffusers for waste rooms, garbage rooms and chute areas. Neutralise odours and create a fresher environment — available in AQ580, AQ1280 and AQ1570 models.",
};

const models = [
  {
    model: "AQ580",
    subtitle: "Versatile scenting solution",
    description:
      "The AQ580 is a compact, versatile unit suitable for small to medium waste rooms and individual floors. It can be installed in a variety of positions and connects directly to the building's fragrance supply. Ideal for corridor or cupboard-size waste collection points.",
    coverage: "Up to 580 m³",
    installation: "Wall or ceiling mount",
    programming: "Scheduled fragrance release, adjustable intensity",
  },
  {
    model: "AQ1280",
    subtitle: "Large space scenting",
    description:
      "The AQ1280 is engineered for larger waste rooms, central garbage rooms and high-volume waste areas. Greater fragrance output and extended coverage make it the preferred choice where waste volumes are high and odour control demands are greater.",
    coverage: "Up to 1,280 m³",
    installation: "Wall or ceiling mount",
    programming: "Scheduled fragrance release, adjustable intensity",
  },
  {
    model: "AQ1570",
    subtitle: "Multi-zone scent control",
    description:
      "The AQ1570 is Prolitec's flagship model, designed for large or multi-zone installations. It supports HVAC integration, allowing fragrance to be distributed through the building's existing ventilation system to cover multiple areas simultaneously.",
    coverage: "Up to 1,570 m³",
    installation: "HVAC integrated or standalone",
    programming: "Multi-zone control, BMS compatible",
  },
];

const features = [
  {
    title: "Neutralises rather than masks odours",
    description:
      "Prolitec's fragrance technology uses odour-neutralising agents rather than simply covering bad smells. The active compounds bond with malodorous molecules in the air, eliminating them at source for a genuinely fresher environment.",
  },
  {
    title: "Activated by chute door airflow",
    description:
      "As chute doors open, the airflow naturally carries the scent upwards through the chute — providing effective odour control on every floor served by the chute, not just at ground level.",
  },
  {
    title: "Programmable and schedulable",
    description:
      "All AQ units can be programmed to release fragrance at set intervals and intensities, and can be scheduled to align with peak usage times — ensuring effective coverage when it is needed most while conserving fragrance outside peak hours.",
  },
  {
    title: "HVAC integration available",
    description:
      "The AQ1570 model supports integration with the building's existing HVAC system, allowing fragrance to be distributed through ventilation ductwork to cover multiple rooms or zones simultaneously.",
  },
  {
    title: "Discreet and low-maintenance",
    description:
      "The compact units are unobtrusive and require only periodic fragrance cartridge replacement. No plumbing, no drainage and no specialist installation skills required beyond standard electrical connection.",
  },
  {
    title: "Wide fragrance range",
    description:
      "A wide range of Prolitec fragrance options is available to suit different building types and preferences — from fresh citrus and clean linen to subtle, neutral odour-neutralising blends.",
  },
];

const faqs = [
  {
    q: "What is a waste odour solution?",
    a: "Waste odour solutions encompass technologies and methodologies employed to address and manage odours emanating from waste collection and disposal areas. These solutions are designed to neutralise, mask or eliminate malodorous compounds, enhancing the environmental quality of waste rooms, garbage rooms and chute areas.",
  },
  {
    q: "How do Prolitec scent diffusers work?",
    a: "Prolitec scent diffusers use a precision cold-air diffusion technology to break fragrance oil into ultra-fine dry particles and disperse them evenly through the air. As chute doors open, the resulting airflow carries the fragrance upwards through the chute — providing effective odour control on multiple floors.",
  },
  {
    q: "Who needs a waste room scent diffuser?",
    a: "Scent diffusers are ideal for any building where odour from waste rooms or chute areas affects the experience of residents, guests or staff — including high-end residential towers, BTR developments, hotels, student accommodation and hospitals.",
  },
  {
    q: "Which Prolitec model is right for my building?",
    a: "The AQ580 suits smaller waste rooms and individual floor collection points. The AQ1280 handles larger garbage rooms and higher-volume waste areas. The AQ1570 is ideal for large buildings where HVAC distribution across multiple zones is required. Our UK team can advise on the correct model following a site review.",
  },
  {
    q: "Can Prolitec units be integrated with HVAC systems?",
    a: "Yes — the AQ1570 model is specifically designed for HVAC integration, allowing fragrance to be distributed through the building's existing ventilation ductwork to cover multiple areas simultaneously.",
  },
  {
    q: "How often do fragrance cartridges need replacing?",
    a: "Cartridge life varies depending on the model, usage schedule and intensity settings. Typically, cartridges last several weeks to a few months. Replacement is quick and straightforward — no tools or specialist skills required.",
  },
];

export default function ScentDiffuserPage() {
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
          <span className="font-medium text-slate-700">Scent Diffuser</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                  Odour Solutions — Scent Diffuser
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Prolitec Scent Diffusers
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Advanced commercial scent diffusers for superior waste room odour control. Our systems diffuse fragrance and odour-neutralising agents into the air — as chute doors open, airflow carries the scent upwards, providing effective garbage room odour control for every floor.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <AddToQuoteButton id="scent-diffuser" name="Prolitec Scent Diffuser" category="Odour Solutions" />
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
              </div>
            </ScrollReveal>

            <ScrollReveal variant="scale" delay={150}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src={diffuserHero}
                  alt="Prolitec commercial scent diffuser units"
                  width={800}
                  height={800}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Overview + graph */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Fresher waste rooms, happier residents
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Downwaste equips waste facilities with advanced Prolitec commercial scent diffusers, ensuring superior waste room odour control. Our odour elimination systems diffuse fragrance and odour-neutralising agents into the air, creating a fresher environment throughout the building.
                </p>
                <p>
                  As chute doors open, the airflow naturally carries the scent upwards through the chute — providing effective odour management on every floor served by the system, not just at the garbage room level. This makes the Prolitec system uniquely effective for multi-storey chute-fed buildings.
                </p>
                <p>
                  Available in three models — AQ580, AQ1280 and AQ1570 — to suit everything from individual waste points to large multi-zone buildings with HVAC integration.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <Image
                src={prolitecGraph}
                alt="Prolitec fragrance diffusion effectiveness graph"
                width={800}
                height={500}
                className="h-auto w-full object-contain"
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
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Three Prolitec models available</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {models.map((m, i) => (
              <ScrollReveal key={m.model} delay={i * 80}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col">
                  <div className="border-b border-slate-100 bg-slate-950 px-6 py-4">
                    <p className="text-lg font-black text-white">Prolitec {m.model}</p>
                    <p className="text-xs text-slate-400">{m.subtitle}</p>
                  </div>
                  <div className="p-6 flex-1">
                    <p className="text-sm leading-6 text-slate-600">{m.description}</p>
                  </div>
                  <table className="w-full text-sm border-t border-slate-100">
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Coverage", m.coverage],
                        ["Installation", m.installation],
                        ["Programming", m.programming],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="px-4 py-2.5 text-xs text-slate-500">{label}</td>
                          <td className="px-4 py-2.5 text-xs font-semibold text-slate-900">{value}</td>
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
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify a Prolitec system?</h2>
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
              Specify a Prolitec scent diffuser system
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us your building type and the areas requiring odour control and our UK team will recommend the right model. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="scent-diffuser" name="Prolitec Scent Diffuser" category="Odour Solutions" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
