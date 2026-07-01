import Image from "next/image";
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
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="inline-flex items-center" aria-label="Downwaste home">
          <Image
            src={downwasteLogo}
            alt="Downwaste logo"
            width={180}
            height={44}
            priority
          />
        </a>
        <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
          <a href="tel:+902362142590" className="hover:text-sky-700">+90 236 214 2590</a>
          <a href="mailto:info@downwaste.com" className="hover:text-sky-700">info@downwaste.com</a>
        </div>
      </header>

      <main className="flex flex-col">
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(31,195,243,0.16),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef7ff_100%)]">
          <div className="absolute inset-0 z-0">
            <Image
              src={baseManagement}
              alt="Downwaste base management background"
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-1">
            <Image
              src={headerStripe}
              alt="Downwaste header stripe background"
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-20 pt-12 lg:px-8 lg:pb-32">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] animate-[fadeIn_1s_ease-in-out]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border-2 border-sky-300 bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700 animate-[slideUp_0.8s_ease-out]">
              Urban disposal solutions for modern buildings
            </span>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl bg-gradient-to-r from-slate-950 via-blue-900 to-slate-950 bg-clip-text text-transparent animate-[slideUp_0.8s_ease-out_0.1s_both]">
              We design and manufacture chutes for waste, recycling and laundry.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 animate-[slideUp_0.8s_ease-out_0.2s_both]">
              Downwaste UK delivers smart and sustainable waste handling solutions for residential, commercial and mixed-use developments, combining robust equipment with practical systems that support cleaner, more efficient buildings.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row animate-[slideUp_0.8s_ease-out_0.3s_both]">
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

            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {benefits.map((benefit, idx) => (
                <li
                  key={benefit}
                  className="group rounded-2xl border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md hover:border-sky-400 transition-all duration-300 hover:scale-105 cursor-default animate-[slideUp_0.8s_ease-out] transform"
                  style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border-2 border-sky-300 bg-white/95 p-4 shadow-[0_30px_80px_-30px_rgba(14,165,233,0.4)] backdrop-blur sm:p-6 animate-[scaleIn_0.8s_ease-out] hover:shadow-2xl transition-all duration-500 group">
            <Image
              src={chuteDisposal3}
              alt="Downwaste disposal chute system"
              width={760}
              height={760}
              priority
              className="h-auto w-full rounded-[1.5rem] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>
          </div>
        </div>

        <section id="solutions" className="flex flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-16 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
              Our solutions
            </p>
            <h2 className="mt-2 max-w-2xl text-3xl font-semibold text-slate-950">
              From disposal to management, every element is designed to support cleaner, more efficient buildings.
            </h2>
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
                className={`relative flex min-h-screen w-full items-center overflow-hidden ${gradients[index]} transition-all duration-500 ease-out animate-[fadeIn_0.8s_ease-in-out] group`}
              >
                <div className="absolute -inset-40 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-3xl" />
                <div className="mx-auto flex w-full max-w-7xl gap-12 px-6 lg:grid lg:grid-cols-2 lg:px-8 relative z-10">
                  {isEven ? (
                    <>
                      <div className="flex flex-col justify-center py-12 lg:py-0">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                          {solution.section}
                        </p>
                        <h3 className="mt-3 text-3xl font-semibold text-slate-950">{solution.title}</h3>
                        <p className="mt-4 text-lg leading-8 text-slate-600">{solution.description}</p>
                        <h4 className="mt-8 text-2xl font-semibold text-slate-950">{solution.secondaryTitle}</h4>
                        <p className="mt-3 text-lg leading-8 text-slate-600">{solution.secondaryDescription}</p>
                      </div>
                      <div className="hidden items-center justify-center lg:flex">
                        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
                          <Image
                            src={solution.image}
                            alt={solution.alt}
                            width={500}
                            height={500}
                            className="h-auto w-full rounded-[1.5rem]"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden items-center justify-center lg:flex">
                        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
                          <Image
                            src={solution.image}
                            alt={solution.alt}
                            width={500}
                            height={500}
                            className="h-auto w-full rounded-[1.5rem]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center py-12 lg:py-0">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                          {solution.section}
                        </p>
                        <h3 className="mt-3 text-3xl font-semibold text-slate-950">{solution.title}</h3>
                        <p className="mt-4 text-lg leading-8 text-slate-600">{solution.description}</p>
                        <h4 className="mt-8 text-2xl font-semibold text-slate-950">{solution.secondaryTitle}</h4>
                        <p className="mt-3 text-lg leading-8 text-slate-600">{solution.secondaryDescription}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-5 h-32 opacity-50 pointer-events-none">
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

        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_30px_80px_-30px_rgba(2,6,23,0.6)]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Why UK teams specify Downwaste
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Practical systems for projects where performance and presentation matter.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                From high-rise residential towers to commercial refurbishments, Downwaste supports efficient waste handling with systems that are robust, easy to use and well suited to modern site demands.
              </p>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.25)]">
              <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xl font-semibold text-slate-950">Built for</p>
                <p className="mt-1 text-sm text-slate-600">Residential, commercial and mixed-use schemes</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xl font-semibold text-slate-950">Focused on</p>
                <p className="mt-1 text-sm text-slate-600">Safety, speed and cleaner site operations</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xl font-semibold text-slate-950">Trusted by</p>
                <p className="mt-1 text-sm text-slate-600">Contractors and developers across the UK</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xl font-semibold text-slate-950">Delivered with</p>
                <p className="mt-1 text-sm text-slate-600">Practical specification and installation support</p>
              </div>
            </div>
          </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-12 animate-[slideUp_0.8s_ease-out]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
              Featured projects
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">
              Trusted by leading developments worldwide
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project, idx) => (
              <article key={project.title} className={`group overflow-hidden rounded-[1.5rem] border-2 border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-sky-300 transition-all duration-500 hover:-translate-y-2 animate-[scaleIn_0.6s_ease-out] cursor-pointer`} style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-sky-100 to-cyan-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-sky-950/0 group-hover:bg-sky-950/20 transition-all duration-500" />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                  <h3 className="font-bold text-slate-950 text-lg group-hover:text-sky-700 transition-colors duration-300">{project.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-sky-600 group-hover:text-sky-700 transition-colors">{project.location}</p>
                  <p className="mt-3 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-16 lg:px-8 lg:py-20 animate-[slideUp_0.8s_ease-out]">
          <div className="rounded-[2rem] bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 p-8 shadow-[0_30px_80px_-30px_rgba(14,165,233,0.4)] border border-sky-300/50">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-100">
                  Downwaste UK
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Ready to improve waste handling on your next project?
                </h2>
                <p className="mt-3 text-lg leading-8 text-sky-50">
                  Contact the team to discuss a solution for your building, programme and site requirements.
                </p>
              </div>
              <a
                href="mailto:info@downwaste.com"
                className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-sky-600 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="relative">Get in touch</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
