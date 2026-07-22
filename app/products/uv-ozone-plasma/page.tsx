import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import plasmaHero from "../../../assets/images/downwaste_plasma.jpg";
import cleanairSky from "../../../assets/images/downwaste_cleanair_sky.jpg";
import cleanairSkyUnits from "../../../assets/images/downwaste_cleanair_sky_units.jpg";
import freshairUnits from "../../../assets/images/downwaste_freshair_units_top.jpg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "UV-C / Ozone / Plasma Air Purification | Odour Solutions | Downwaste UK",
  description:
    "Downwaste UK supplies UV-C, ozone and plasma air purification systems for waste rooms, chutes and garbage areas. Cleanair Sky units, Freshair units and Plasma Mini — eliminating odours, bacteria and airborne contaminants.",
};

const units = [
  {
    number: "1",
    name: "Cleanair Sky Units",
    placement: "Ceiling-mounted in waste rooms and garbage areas",
    function:
      "Multi-stage filtration using plasma and activated charcoal filters to remove dust, odours and airborne contaminants. Handles spaces up to 40 m² and provides continuous air purification — ideal for garbage rooms and large waste storage areas.",
    features: [
      "Plasma and activated charcoal filtration",
      "Covers up to 40 m²",
      "Removes dust, bacteria and malodorous compounds",
      "Ceiling mount — minimal footprint",
    ],
    image: cleanairSky,
    imageAlt: "Downwaste Cleanair Sky unit — ceiling-mounted air purifier",
    imageSecondary: cleanairSkyUnits,
    imageSecondaryAlt: "Downwaste Cleanair Sky units installed in waste room",
  },
  {
    number: "2",
    name: "Freshair Units",
    placement: "Wall or duct mounted in waste disposal areas",
    function:
      "Freshair units combine UV-C and ozone injection technology to eliminate odours and germs in waste disposal areas. The ozone injection is particularly effective at neutralising waste chute odours, while UV-C provides continuous disinfection of passing air.",
    features: [
      "UV-C germicidal irradiation",
      "Ozone injection for chute odour neutralisation",
      "Wall or duct mount options",
      "Suitable for large waste disposal areas",
    ],
    image: freshairUnits,
    imageAlt: "Downwaste Freshair units — UV-C and ozone air purification",
  },
  {
    number: "3",
    name: "Plasma Mini for Waste Chutes",
    placement: "Mounted inside or at the base of the waste chute",
    function:
      "A compact plasma unit specifically engineered for waste chute hygiene. The Plasma Mini injects plasma ions into the chute shaft, neutralising odours and bacteria at source — stopping smells before they reach resident floors. Low power, minimal maintenance, maximum impact.",
    features: [
      "Plasma ion injection inside the chute shaft",
      "Neutralises odours and bacteria at source",
      "Compact form — fits inside standard chute",
      "Low power consumption",
    ],
    image: plasmaHero,
    imageAlt: "Downwaste Plasma Mini — plasma air purification for waste chutes",
  },
];

const features = [
  {
    title: "Eliminates rather than masks odours",
    description:
      "UV-C, ozone and plasma technologies actively destroy the molecules responsible for malodours at a molecular level — rather than simply masking them with fragrance. The result is genuinely clean air.",
  },
  {
    title: "Kills airborne bacteria and pathogens",
    description:
      "UV-C irradiation is highly effective at destroying airborne bacteria, viruses and mould spores. This is particularly valuable in waste rooms and chute areas where hygiene standards must be maintained.",
  },
  {
    title: "Three complementary technologies",
    description:
      "Cleanair Sky units (plasma + activated charcoal), Freshair units (UV-C + ozone) and Plasma Mini (plasma injection) each address different odour and contamination challenges — allowing a tailored solution for every area.",
  },
  {
    title: "Treats the chute at source",
    description:
      "The Plasma Mini unit is specifically designed to be installed inside the chute shaft itself — neutralising odours and bacteria before they can travel up to resident floors or escape through chute doors.",
  },
  {
    title: "Supports building health credentials",
    description:
      "Continuous air purification in waste areas contributes to overall building indoor air quality — supporting WELL Building Standard, BREEAM and similar certifications that assess air quality and occupant health.",
  },
  {
    title: "Low maintenance, long service life",
    description:
      "All three unit types are designed for minimal routine maintenance. UV-C lamps and filter elements require periodic replacement — typically annually — with no specialist skills required.",
  },
];

const faqs = [
  {
    q: "What are UV-C, ozone and plasma air purification systems?",
    a: "These are three distinct but complementary technologies used to purify air in waste management areas. UV-C (ultraviolet-C) light destroys bacteria and viruses by disrupting their DNA. Ozone injection neutralises malodorous compounds through oxidation. Plasma technology generates reactive ions that destroy pollutants, odours and pathogens in the air.",
  },
  {
    q: "What are the benefits of Cleanair Sky units in waste management areas?",
    a: "Cleanair Sky units efficiently handle garbage room disinfection by removing dust, odours and airborne contaminants. Their multi-stage filtration system — which includes plasma and activated charcoal filters — ensures effective waste room air purification, neutralising bacteria and improving air quality in waste areas up to 40 m².",
  },
  {
    q: "How do Freshair units eliminate odours and germs?",
    a: "Freshair units combine UV-C germicidal irradiation with ozone injection. The UV-C component continuously disinfects passing air, while ozone injection neutralises malodorous compounds from waste. Together they provide highly effective odour and pathogen control in waste disposal areas.",
  },
  {
    q: "What is the role of the Plasma Mini in waste chute hygiene?",
    a: "The Plasma Mini is specifically designed for installation inside or at the base of a waste chute. It injects plasma ions into the chute shaft, neutralising odours and bacteria at their source — before they can travel upward to resident floors or escape through chute intake doors.",
  },
  {
    q: "Why is ozone injection important for waste chute disinfection?",
    a: "Ozone is a powerful oxidising agent that reacts with and destroys the organic compounds responsible for waste-related odours. When injected into a waste chute, it neutralises smells throughout the chute shaft — providing a level of odour control that fragrance alone cannot achieve.",
  },
  {
    q: "Can these units be installed in existing buildings?",
    a: "Yes. All three unit types can be retrofitted into existing waste rooms and chutes. Cleanair Sky and Freshair units require only a standard electrical connection. Plasma Mini installation inside a chute may require a brief period of access to the chute shaft.",
  },
  {
    q: "Are the systems easy to maintain?",
    a: "Yes. UV-C lamp replacement is typically required annually, and activated charcoal filter cartridges in Cleanair Sky units are replaced at service intervals. The Plasma Mini requires minimal maintenance beyond annual inspection. All servicing can be carried out by a building maintenance team with appropriate training.",
  },
];

export default function UvOzonePage() {
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
          <span className="font-medium text-slate-700">UV-C / Ozone / Plasma</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 pointer-events-none">
          <Image src={headerStripe} alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[50%] pointer-events-none select-none">
          <Image
            src={plasmaHero}
            alt="Downwaste plasma air purification unit"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/30 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Odour Solutions — UV-C / Ozone / Plasma
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                UV-C, Ozone &amp; Plasma Air Purification
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Advanced air purification solutions for waste management areas. UV ozone, plasma and filtration technologies keep waste disposal areas clean, fresh and hygienic — eliminating odours and airborne contaminants at source.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToQuoteButton id="uv-ozone-plasma" name="UV-C / Ozone / Plasma System" category="Odour Solutions" />
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
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 lg:hidden">
                <Image
                  src={plasmaHero}
                  alt="Downwaste plasma air purification unit"
                  width={800}
                  height={800}
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
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Overview</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Three technologies. One clean building.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Ensuring garbage room disinfection and maintaining waste room odour control are essential for health, safety and overall well-being. Our advanced odour neutralisation systems use UV-C, ozone, plasma and filtration technologies to keep waste disposal areas clean, fresh and hygienic — addressing not just odours but bacteria, viruses and airborne particulates.
          </p>
        </ScrollReveal>
      </div>

      {/* Three units */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Product range</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Three units for every area</h2>
          </ScrollReveal>

          <div className="mt-12 space-y-16">
            {units.map((u, i) => (
              <ScrollReveal key={u.name} delay={60}>
                <div className={`grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-sky-600">Unit {u.number}</p>
                    <h3 className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">{u.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">{u.placement}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{u.function}</p>
                    <ul className="mt-4 space-y-1.5">
                      {u.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-sm text-slate-700">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-sky-600">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`flex gap-4 ${u.imageSecondary ? "flex-col sm:flex-row" : ""}`}>
                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex-1">
                      <Image
                        src={u.image}
                        alt={u.imageAlt}
                        width={800}
                        height={800}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                    {u.imageSecondary && (
                      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex-1">
                        <Image
                          src={u.imageSecondary}
                          alt={u.imageSecondaryAlt!}
                          width={800}
                          height={800}
                          className="h-auto w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
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
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Why specify UV-C / ozone / plasma?</h2>
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
              Specify an air purification system for your building
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Tell us about your waste areas and odour challenges and our UK team will recommend the right combination of units. Add to your quote or use the estimator for a guide price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="uv-ozone-plasma" name="UV-C / Ozone / Plasma System" category="Odour Solutions" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
