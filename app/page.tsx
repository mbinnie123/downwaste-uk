import Image from "next/image";
import downwasteLogo from "../assets/images/downwaste-logo.svg";
import disposalChute from "../assets/images/downwaste-disposal-chute.svg";
import pneumaticConstruction from "../assets/images/downwaste-pneumatic-construction-disposal.svg";
import chuteDisposal3 from "../assets/images/chute-disposal-3.svg";
import compressionIcon from "../assets/images/downwaste_compression.svg";
import managementIcon from "../assets/images/downwaste_management_plan_sil.svg";
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
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(31,195,243,0.16),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef7ff_100%)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-20 pt-12 lg:px-8 lg:pb-32">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
              Urban disposal solutions for modern buildings
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              We design and manufacture chutes for waste, recycling and laundry.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Downwaste UK delivers smart and sustainable waste handling solutions for residential, commercial and mixed-use developments, combining robust equipment with practical systems that support cleaner, more efficient buildings.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:info@downwaste.com"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Discuss your project
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-700"
              >
                View solutions
              </a>
            </div>

            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur sm:p-6">
            <Image
              src={disposalChute}
              alt="Downwaste disposal chute system"
              width={760}
              height={760}
              priority
              className="h-auto w-full rounded-[1.5rem]"
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
            return (
              <div
                key={solution.section}
                className="flex min-h-screen w-full items-center bg-gradient-to-br from-slate-50 to-white"
              >
                <div className="mx-auto flex w-full max-w-7xl gap-12 px-6 lg:grid lg:grid-cols-2 lg:px-8">
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
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
              Featured projects
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">
              Trusted by leading developments worldwide
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-950">{project.title}</h3>
                  <p className="mt-1 text-sm text-sky-700">{project.location}</p>
                  <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.2)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                  Downwaste UK
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                  Ready to improve waste handling on your next project?
                </h2>
                <p className="mt-3 text-lg leading-8 text-slate-600">
                  Contact the team to discuss a solution for your building, programme and site requirements.
                </p>
              </div>
              <a
                href="mailto:info@downwaste.com"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
