import Image from "next/image";
import { ScrollReveal } from "./components/scroll-reveal";
import downwasteLogo from "../assets/images/downwaste-logo.svg";
import disposalChute from "../assets/images/downwaste-disposal-chute.svg";
import pneumaticConstruction from "../assets/images/downwaste-pneumatic-construction-disposal.svg";
import chuteDisposal3 from "../assets/images/chute-disposal-3.svg";
import compressionIcon from "../assets/images/downwaste_compression.svg";
import managementIcon from "../assets/images/downwaste_management_plan_sil.svg";
import baseManagement from "../assets/images/downwaste-base-management.svg";
import headerStripe from "../assets/images/downwaste-header-stripe-bg.svg";
import burujApartments from "../assets/images/buruj_apartments_baghdad_iraq_downwaste.jpg";
import riverPlaza from "../assets/images/river_plaza_residential_mongolia_downwaste.jpg";
import sheratonHotel from "../assets/images/sheraton_hotel_bahrain_downwaste.jpg";
import grandTower from "../assets/images/the_grand_residential_tower_dubai_uae_downwaste.jpg";

const solutionGroups = [
  {
    section: "Disposal",
    title: "Garbage Chutes",
    description:
      "Our garbage chutes centralise and simplify waste disposal in multi-floor buildings. We provide all sizes and specifications, delivering cost-effective, safe and innovative systems to architects and contractors.",
    secondaryTitle: "Laundry Chutes",
    secondaryDescription:
      "Laundry chutes are essential in luxury hotels and villas for managing bulky linen. We offer full system design, fabrication, installation and laundry room carts on wheels such as rolltainers and folding tables.",
    image: disposalChute,
    alt: "Downwaste disposal chute system",
  },
  {
    section: "Pneumatic",
    title: "Pneumatic Chutes",
    description:
      "Our stationary pneumatic refuse systems use vacuum transport to collect and compact waste. This automated solution reduces odours, pests and visible bins in modern urban settings, while the underground system can handle multiple waste streams from the same pipe network.",
    secondaryTitle: "Construction Chutes",
    secondaryDescription:
      "Our metal debris chutes provide a durable and sound-insulated solution for high-rise construction sites. We also offer soft-case nylon chutes for flexible setup and HDPE dumpsters with pulley systems for safe discharge.",
    image: pneumaticConstruction,
    alt: "Downwaste pneumatic construction disposal",
  },
  {
    section: "Sorting",
    title: "Recycling Chutes",
    description:
      "Our automatic recycling chutes allow easy separation of plastics, metal and cardboard via push-button selector panels on every floor, streamlining waste sorting at the source.",
    secondaryTitle: "Carousels & Conveyors",
    secondaryDescription:
      "Bin carousels and conveyors reduce staff workload by rotating full bins with empty ones, and can be integrated with automatic bin press conveyors for maximum compaction and space efficiency.",
    image: chuteDisposal3,
    alt: "Downwaste sorting equipment",
  },
  {
    section: "Compression",
    title: "Chute Fed Compactors",
    description:
      "Our chute-fed compactors offer compact, hygienic and powerful solutions for garbage rooms, ideal for reducing waste volume directly at the point of collection.",
    secondaryTitle: "Press Containers",
    secondaryDescription:
      "Downwaste press containers are designed for storing bulky waste and recyclables in sealed containers safely and efficiently, with various capacities to support organized waste storage.",
    image: compressionIcon,
    alt: "Downwaste compression equipment",
  },
  {
    section: "Management",
    title: "Installation & Maintenance",
    description:
      "Our team offers full installation and maintenance services for your building's waste system, providing safe and reliable solutions tailored to your operational and sustainability goals.",
    secondaryTitle: "Custom Solutions",
    secondaryDescription:
      "Downwaste provides custom waste solutions based on your building's layout and capacity, using detailed waste profile analysis to deliver long-term systems that enhance efficiency, safety and sustainability.",
    image: managementIcon,
    alt: "Downwaste management services",
  },
];

const benefits = [
  "Smart, sustainable solutions for modern buildings",
  "Designed for high-rise, residential and mixed-use developments",
  "Safer and cleaner waste handling from upper levels to ground level",
  "Practical support for installation, maintenance and long-term operations",
];

const featuredProjects = [
  {
    title: "Buruj Apartments",
    location: "Baghdad, Iraq",
    description: "Multi-residential waste management system",
    image: burujApartments,
  },
  {
    title: "River Plaza",
    location: "Ulaanbaatar, Mongolia",
    description: "Comprehensive disposal solution",
    image: riverPlaza,
  },
  {
    title: "Sheraton Hotel",
    location: "Bahrain",
    description: "Hospitality waste handling system",
    image: sheratonHotel,
  },
  {
    title: "The Grand",
    location: "Dubai, UAE",
    description: "Premium residential tower system",
    image: grandTower,
  },
];

export default function Home() {
  return (
    <div className="text-slate-900">
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <a href="/" className="inline-flex shrink-0 items-center" aria-label="Downwaste home">
          <Image
            src={downwasteLogo}
            alt="Downwaste logo"
            width={180}
            height={44}
            priority
            className="w-32 sm:w-44"
          />
        </a>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-700">
          <a href="tel:+902362142590" className="hidden sm:inline hover:text-sky-700">+90 236 214 2590</a>
          <a href="mailto:info@downwaste.com" className="hover:text-sky-700 truncate">info@downwaste.com</a>
        </div>
      </header>

      <main className="flex flex-col">
        <div className="relative min-h-[90dvh] sm:min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(31,195,243,0.16),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef7ff_100%)]">
          <div className="absolute inset-0 z-0 opacity-40 sm:opacity-100">
            <Image
              src={baseManagement}
              alt="Downwaste base management background"
              fill
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-[1] h-16 overflow-hidden opacity-40 pointer-events-none sm:h-24 sm:opacity-50 lg:h-32">
            <Image
              src={headerStripe}
              alt="Downwaste header stripe background"
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-32">
            <section className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div className="space-y-5 sm:space-y-6">
                <ScrollReveal>
                  <span className="inline-flex rounded-full border-2 border-sky-300 bg-sky-100 px-3 py-1 text-xs sm:text-sm font-semibold text-sky-700">
                    Urban disposal solutions for modern buildings
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={120}>
                  <h1 className="max-w-3xl text-[1.75rem] leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-slate-950 via-blue-900 to-slate-950 bg-clip-text text-transparent">
                    We design and manufacture chutes for waste, recycling and laundry.
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={240}>
                  <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    Downwaste UK delivers smart and sustainable waste handling solutions for residential, commercial and mixed-use developments, combining robust equipment with practical systems that support cleaner, more efficient buildings.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={360}>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="mailto:info@downwaste.com"
                      className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-950 to-blue-900 px-8 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <span className="relative">Discuss your project</span>
                    </a>
                    <a
                      href="#solutions"
                      className="group relative inline-flex items-center justify-center rounded-full border-2 border-sky-400 bg-white px-8 py-3 text-sm font-bold text-sky-600 shadow-md transition-all duration-300 hover:shadow-lg hover:bg-sky-50 hover:border-sky-500 hover:scale-105"
                    >
                      <span className="absolute inset-0 bg-sky-400 opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-300" />
                      <span className="relative">View solutions</span>
                    </a>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={480}>
                  <ul className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2 sm:gap-3">
                    {benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="group rounded-2xl border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md hover:border-sky-400 transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
              {/* Hero image: constrained on mobile, full beside text on desktop */}
              <ScrollReveal variant="scale" delay={200}>
                <div className="mx-auto w-full max-w-[18rem] sm:max-w-none rounded-2xl sm:rounded-[2rem] border-2 border-sky-300 bg-white/95 p-3 sm:p-6 shadow-[0_20px_60px_-15px_rgba(14,165,233,0.4)] backdrop-blur hover:shadow-2xl transition-shadow duration-500 group">
                  <Image
                    src={chuteDisposal3}
                    alt="Downwaste disposal chute system"
                    width={760}
                    height={760}
                    priority
                    className="h-auto w-full rounded-xl sm:rounded-[1.5rem] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            </section>
          </div>
        </div>

        <section id="solutions" className="flex flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                  Our solutions
                </p>
                <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-slate-950 sm:text-3xl">
                  From disposal to management, every element is designed to support cleaner, more efficient buildings.
                </h2>
              </div>
            </ScrollReveal>
          </div>

          {solutionGroups.map((solution, index) => {
            const isEven = index % 2 === 0;
            const gradients = [
              'bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50',
              'bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50',
              'bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50',
              'bg-gradient-to-br from-amber-50 via-orange-50 to-red-50',
              'bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50',
            ];
            return (
              <div
                key={solution.section}
                className={`relative w-full ${gradients[index]} group`}
              >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-40 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-3xl" />
                </div>

                {/* Scroll-driven sticky heading strip */}
                <div className="sticky top-0 z-30 flex items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8 bg-white/75 backdrop-blur-md border-b border-slate-200/70 shadow-[0_1px_12px_-4px_rgba(15,23,42,0.08)]">
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] tabular-nums text-sky-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-6 shrink-0 bg-sky-300" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-900">
                    {solution.section}
                  </span>
                </div>

                {/* Body */}
                <div className="flex lg:min-h-screen items-stretch">
                  {/* Stroke vertical label — desktop only */}
                  <div className="pointer-events-none hidden lg:block relative shrink-0 w-16">
                    <h2 className="sticky top-[40vh] pl-3 text-5xl font-black uppercase tracking-[0.35em] text-transparent [-webkit-text-stroke:1.5px_rgb(15_23_42_/0.35)] leading-none [writing-mode:vertical-rl] rotate-180 select-none">
                      {solution.section}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 items-center relative z-10">
                    <div className="mx-auto w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid lg:grid-cols-2 lg:px-8 lg:py-20">
                      {/* Text col — always first on mobile, order swaps on desktop for odd panels */}
                      <div className={`flex flex-col justify-center ${!isEven ? 'lg:order-2' : ''}`}>
                        <ScrollReveal>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                            {solution.section}
                          </p>
                        </ScrollReveal>
                        <div className="mt-3 overflow-hidden">
                          <ScrollReveal variant="clip" delay={80}>
                            <h3 className="text-2xl font-semibold text-slate-950 sm:text-3xl">{solution.title}</h3>
                          </ScrollReveal>
                        </div>
                        <ScrollReveal delay={160}>
                          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{solution.description}</p>
                        </ScrollReveal>
                        <div className="mt-6 overflow-hidden sm:mt-8">
                          <ScrollReveal variant="clip" delay={260}>
                            <h4 className="text-xl font-semibold text-slate-950 sm:text-2xl">{solution.secondaryTitle}</h4>
                          </ScrollReveal>
                        </div>
                        <ScrollReveal delay={340}>
                          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{solution.secondaryDescription}</p>
                        </ScrollReveal>
                      </div>
                      {/* Image col — centred below text on mobile, beside on desktop */}
                      <div className={`mt-10 flex items-center justify-center sm:mt-12 lg:mt-0 ${!isEven ? 'lg:order-1' : ''}`}>
                        <ScrollReveal variant="scale" delay={120}>
                          <div className="w-full max-w-[14rem] sm:max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:p-6 lg:max-w-none lg:rounded-[2rem] lg:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
                            <Image
                              src={solution.image}
                              alt={solution.alt}
                              width={500}
                              height={500}
                              className="h-auto w-full rounded-xl lg:rounded-[1.5rem]"
                            />
                          </div>
                        </ScrollReveal>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom stripe — clipped so it never breaks sticky */}
                <div className="absolute bottom-0 left-0 right-0 z-[5] h-16 overflow-hidden opacity-40 pointer-events-none sm:h-24 sm:opacity-50 lg:h-32">
                  <Image
                    src={headerStripe}
                    alt="Header Stripe"
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
            );
          })}
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <ScrollReveal>
              <article className="rounded-2xl sm:rounded-[2rem] bg-slate-950 p-6 sm:p-8 text-white shadow-[0_30px_80px_-30px_rgba(2,6,23,0.6)]">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                  Why UK teams specify Downwaste
                </p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Practical systems for projects where performance and presentation matter.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  From high-rise residential towers to commercial refurbishments, Downwaste supports efficient waste handling with systems that are robust, easy to use and well suited to modern site demands.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <article className="rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.25)]">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                    <p className="text-base font-semibold text-slate-950 sm:text-xl">Built for</p>
                    <p className="mt-1 text-xs text-slate-600 sm:text-sm">Residential, commercial and mixed-use schemes</p>
                  </div>
                  <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                    <p className="text-base font-semibold text-slate-950 sm:text-xl">Focused on</p>
                    <p className="mt-1 text-xs text-slate-600 sm:text-sm">Safety, speed and cleaner site operations</p>
                  </div>
                  <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                    <p className="text-base font-semibold text-slate-950 sm:text-xl">Trusted by</p>
                    <p className="mt-1 text-xs text-slate-600 sm:text-sm">Contractors and developers across the UK</p>
                  </div>
                  <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                    <p className="text-base font-semibold text-slate-950 sm:text-xl">Delivered with</p>
                    <p className="mt-1 text-xs text-slate-600 sm:text-sm">Practical specification and installation support</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <ScrollReveal>
            <div className="mb-8 sm:mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Featured projects
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
                Trusted by leading developments worldwide
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project, idx) => (
              <ScrollReveal key={project.title} variant="scale" delay={idx * 90}>
                <article className="group overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-sky-300 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sky-100 to-cyan-100 sm:h-60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-sky-950/0 group-hover:bg-sky-950/20 transition-all duration-500" />
                  </div>
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-slate-50">
                    <h3 className="font-bold text-slate-950 text-base sm:text-lg group-hover:text-sky-700 transition-colors duration-300">{project.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-sky-600 group-hover:text-sky-700 transition-colors">{project.location}</p>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{project.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <ScrollReveal>
          <div className="rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 p-6 sm:p-8 shadow-[0_30px_80px_-30px_rgba(14,165,233,0.4)] border border-sky-300/50">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-100">
                  Downwaste UK
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Ready to improve waste handling on your next project?
                </h2>
                <p className="mt-3 text-base leading-7 text-sky-50 sm:text-lg sm:leading-8">
                  Contact the team to discuss a solution for your building, programme and site requirements.
                </p>
              </div>
              <a
                href="mailto:info@downwaste.com"
                className="group relative inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-sky-600 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 sm:w-auto whitespace-nowrap overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="relative">Get in touch</span>
              </a>
            </div>
          </div>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
