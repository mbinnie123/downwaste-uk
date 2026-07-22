import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import chuteOpen from "../../../assets/images/downwaste_chute_door_opened-tall.jpg";
import chuteClosed from "../../../assets/images/garbage_chute_door_closed.jpg";
import ventCap from "../../../assets/images/downwaste_vent_cap.jpg";
import trunkDetail from "../../../assets/images/downwaste_structure_detail1.jpg";
import pendant from "../../../assets/images/downwaste_power_switch-1.png";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Garbage Chute Systems | Chutes | Downwaste UK",
  description:
    "Downwaste UK supplies and installs fire-rated garbage chute systems for residential towers, BTR schemes, hotels and mixed-use developments. Hygienic, odour-free waste disposal from every floor.",
};

const sizes = [
  { label: '12" × 12"', mm: "300 × 300 mm" },
  { label: '15" × 15"', mm: "395 × 395 mm" },
  { label: '15" × 18"', mm: "395 × 450 mm" },
  { label: '15" × 24"', mm: "395 × 600 mm" },
  { label: '18" × 18"', mm: "450 × 450 mm" },
];

const components = [
  {
    title: "Fire-rated chute doors",
    description:
      "Each floor is fitted with a self-closing, fire-rated intake door tested to EN 1366 and BS 476. The door features an ergonomic handle and indicator lights showing safe open/closed status.",
    image: chuteOpen,
    imageAlt: "Downwaste garbage chute door — open",
  },
  {
    title: "Galvanised steel trunk",
    description:
      "The chute trunk is fabricated from heavy-gauge galvanised steel with a mineral-wool lined fire-resisting enclosure. Rock wool insulation suppresses noise transmission between floors.",
    image: trunkDetail,
    imageAlt: "Garbage chute trunk cross-section with fire-rated liner",
  },
  {
    title: "Roof vent cap",
    description:
      "A weather-proof stainless steel vent cap sits at roof level, exhausting odours and preventing downdraught. Perforated sides allow continuous passive ventilation without rain ingress.",
    image: ventCap,
    imageAlt: "Downwaste stainless steel chute roof vent cap",
  },
  {
    title: "Pendant control unit",
    description:
      "The optional brushing and flushing system is operated via a simple pendant control unit. One-button activation drives the cleaning head down the full chute length, removing debris and biofilm.",
    image: pendant,
    imageAlt: "Garbage chute brushing system pendant control",
  },
];

const benefits = [
  {
    title: "Eliminates manual waste carrying",
    description:
      "Residents and staff deposit waste directly at each floor — no carrying bags along corridors or down stairwells, reducing injuries and improving daily operations.",
  },
  {
    title: "Odour-free and hygienic",
    description:
      "Continuous passive ventilation through the roof cap and optional automated flushing keep the chute free from odour, bacteria and vermin attraction.",
  },
  {
    title: "Fire-rated to EN standards",
    description:
      "All doors and trunk enclosures are tested to EN 1366 / BS 476 fire ratings. Our UK installations comply with Building Regulations Part B.",
  },
  {
    title: "Suitable for new build and retrofit",
    description:
      "Chutes can be installed in purpose-built shafts during construction or retrofitted into existing service risers in occupied buildings with minimal disruption.",
  },
  {
    title: "Low maintenance",
    description:
      "The optional automated brushing and flushing system cleans the full chute length at a scheduled interval, keeping maintenance costs predictable.",
  },
  {
    title: "Designed for high-rise",
    description:
      "Chute systems have been installed in towers up to 60 storeys. The trunk sections clip together floor by floor — no specialist plant required inside the shaft.",
  },
];

const faqs = [
  {
    q: "What is a garbage chute system?",
    a: "A garbage chute provides the most efficient and hygienic solution for transporting waste from different floors to a central collection room. Equipped with fire-rated doors on each landing, it eliminates manual waste carrying and significantly improves sanitation and operational efficiency in multi-storey residential and commercial buildings.",
  },
  {
    q: "Who needs a garbage chute?",
    a: "Garbage chutes are ideal for residential apartment towers, BTR (Build to Rent) schemes, student accommodation, hotels, hospitals and any multi-storey building where residents or staff need to dispose of waste without travelling to a ground-floor collection point.",
  },
  {
    q: "What sizes are available?",
    a: "Downwaste UK chutes are available in five standard opening sizes from 300×300 mm (12\"×12\") up to 450×600 mm (18\"×24\"). Non-standard sizes and custom door configurations can be accommodated — contact our team to discuss.",
  },
  {
    q: "Can a garbage chute be retrofitted into an existing building?",
    a: "Yes. Provided a suitable service riser or shaft is available, chutes can be retrofitted into occupied buildings. Our installation teams are experienced in phased work to minimise disruption to residents.",
  },
  {
    q: "What is the best material for an apartment garbage chute?",
    a: "Galvanised steel is the most common choice — cost-effective, corrosion-resistant and durable. Stainless steel is specified for higher-end or coastal developments. PVC-coated variants are available where noise attenuation is a priority.",
  },
  {
    q: "Are the chute doors fire-rated?",
    a: "Yes. All Downwaste intake doors are fire-rated to EN 1366 and BS 476, with self-closing mechanisms and intumescent seals. They meet UK Building Regulations Part B requirements.",
  },
  {
    q: "How are the chutes cleaned?",
    a: "An optional automated brushing and flushing system is available. A motorised cleaning head descends the full chute length on a set schedule, and a water flush rinse removes debris. The system is operated via a pendant or timer control.",
  },
];

export default function GarbageChutePage() {
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
          <span className="font-medium text-slate-700">Garbage Chute</span>
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
                  Chutes — Garbage Chute Systems
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Garbage Chute Systems
                </h1>
                <p className="mt-4 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Hygienic, fire-rated waste chutes for apartments, BTR schemes, hotels and commercial towers. Downwaste chutes transport waste from every floor to a central collection room — eliminating manual handling and reducing sanitation risks across the building.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <AddToQuoteButton id="garbage-chute" name="Garbage Chute System" category="Chutes" />
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
              <div className="flex justify-center gap-4">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl max-w-[220px]">
                  <Image
                    src={chuteClosed}
                    alt="Downwaste garbage chute door — closed"
                    width={440}
                    height={640}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl max-w-[220px] self-end">
                  <Image
                    src={chuteOpen}
                    alt="Downwaste garbage chute door — open"
                    width={440}
                    height={680}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                The most efficient solution for multi-storey waste disposal
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Downwaste offers state-of-the-art waste chutes designed for hygienic and efficient waste disposal in apartments, buildings and commercial spaces. Our building garbage chutes ensure safe, odour-free and hassle-free disposal — making them the preferred choice for high-density residential and mixed-use developments across the UK.
                </p>
                <p>
                  Each chute system is supplied with fire-rated intake doors on every served floor, a galvanised or stainless steel trunk running the full building height, and a weatherproof roof vent cap. The system discharges directly into a collection room or wheeled bin at ground level.
                </p>
                <p>
                  By eliminating manual waste carrying, garbage chutes dramatically reduce the risk of pest attraction in corridors and lift lobbies, improve resident satisfaction and simplify waste management operations across the building.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow">
                <Image src={trunkDetail} alt="Chute trunk fire-rated detail" width={400} height={560} className="h-auto w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow self-start mt-8">
                <Image src={ventCap} alt="Stainless steel chute roof vent cap" width={400} height={340} className="h-auto w-full object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* YouTube demo */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">See it in action</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Garbage chute system overview</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Watch how a Downwaste garbage chute system works — from intake door operation on each floor through to the collection room at ground level.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-lg" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/XJY93m9xFaM"
                title="Downwaste garbage chute system overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Available sizes */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Specifications</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Available door sizes</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Five standard opening sizes cover the full range of UK residential and commercial projects. Custom sizes are available on request.
            </p>
          </ScrollReveal>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-[380px] w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                  <th className="px-5 py-3.5">Door opening (imperial)</th>
                  <th className="px-5 py-3.5">Door opening (metric)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sizes.map((s) => (
                  <tr key={s.label} className="hover:bg-sky-50/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-950">{s.label}</td>
                    <td className="px-5 py-4 text-slate-600">{s.mm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Key components */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">System components</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Main components of a chute system</h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {components.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex h-52 items-center justify-center bg-slate-50 p-6">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    width={300}
                    height={200}
                    className="h-full w-auto max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-950">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{c.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Benefits</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why install a garbage chute?</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-sky-600">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-slate-950">{b.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{b.description}</p>
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
              Ready to specify a garbage chute system?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Use our estimator to get a guide price based on your building height, floor count and specification — or add the system to your quote and our UK team will be in touch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="garbage-chute" name="Garbage Chute System" category="Chutes" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
