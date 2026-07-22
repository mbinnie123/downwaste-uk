import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import doorOpen from "../../../assets/images/downwaste_chute_door_open.jpg";
import doorClosed from "../../../assets/images/downwaste_recycle_door_closed.jpg";
import doorPedal from "../../../assets/images/recycling_door_closed_pedal.jpg";
import module1 from "../../../assets/images/downwaste_module_1-1.svg";
import module2 from "../../../assets/images/downwaste_module_2-1.svg";
import module3 from "../../../assets/images/downwaste_module_3-1.svg";
import pendant from "../../../assets/images/downwaste_power_switch-1.png";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Recycling Chute Systems | Chutes | Downwaste UK",
  description:
    "Downwaste UK supplies and installs recycling chute systems that sort metals, cardboard and plastic at source — saving space, reducing costs and supporting green building initiatives in UK residential and commercial developments.",
};

const features = [
  {
    title: "Increased productivity",
    description:
      "Less area needed for separate bins for recyclables, and less time spent on their collection, means more time for staff to concentrate on other activities. A single chute replaces multiple waste streams on every floor.",
  },
  {
    title: "Improved hygiene",
    description:
      "An automatic cleaning system keeps the chute disinfected. Since staff no longer need to visit and empty recycling bins periodically, the overall health and hygiene of the recycling process are greatly improved.",
  },
  {
    title: "Enhanced sound properties",
    description:
      "The chute inlets operate silently, as does the separator device. The chute is covered with sound-insulating material and isolated from the slab with rubber isolator pads, making the system practically noiseless.",
  },
  {
    title: "Operational excellence",
    description:
      "Each hopper door monitors and selects the type of recyclable discarded. Separators are operated by electric actuators with safety position sensors. Electric panels integrate with BMS and operate on low-voltage control units.",
  },
  {
    title: "Saves space, reduces costs",
    description:
      "Our recycling chute system saves floor space by eliminating separate bins on every level, reduces waste collection costs, and transforms recyclables into a valuable resource rather than landfill.",
  },
  {
    title: "Supports green building certification",
    description:
      "Built-in waste sorting at source supports BREEAM, LEED and other green building certifications — making it a sustainable amenity that adds measurable value to the asset.",
  },
];

const sorterTypes = [
  {
    title: "Trisorter",
    description:
      "A single chute intake sorts waste into three separate collection streams at the base — typically paper/cardboard, metals/cans and plastics. The selector panel on the door allows residents to choose the category before depositing.",
    image: doorOpen,
    imageAlt: "Downwaste recycling chute door — open, showing trisorter selector panel",
  },
  {
    title: "Bisorter",
    description:
      "The bisorter configuration separates waste into two streams — commonly general recyclables and mixed residual. Simpler to operate and ideal for buildings where a full three-stream sort is not required.",
    image: doorClosed,
    imageAlt: "Downwaste recycling chute door — closed, bisorter configuration",
  },
  {
    title: "Pedal-operated door",
    description:
      "A hands-free pedal-operated variant is available where hygiene is a priority — common in hospitals, food production facilities and high-specification residential buildings. The foot pedal opens the door without hand contact.",
    image: doorPedal,
    imageAlt: "Downwaste recycling chute door with foot pedal operation",
  },
];

const systemModules = [
  { img: module1, alt: "Recycling chute intake module — floor unit", label: "Floor intake unit" },
  { img: module2, alt: "Recycling chute separator module", label: "Separator / sorter" },
  { img: module3, alt: "Recycling chute collection module at base", label: "Collection module" },
];

const faqs = [
  {
    q: "What is a recycling chute?",
    a: "A recycling chute, unlike a standard garbage chute, allows for the convenient and separate collection of recyclable materials through a single chute system. Residents select the waste category (paper, metal, plastic) on the door panel before depositing — the separator at the base routes each stream to the correct collection container. This makes waste sorting easier and more efficient.",
  },
  {
    q: "Who needs a recycling chute system?",
    a: "Recycling chutes are ideal for residential apartment towers, BTR (Build to Rent) schemes, student accommodation, hotels and any multi-storey building where the building owner wants to improve recycling rates, reduce bin cupboard space on each floor, and minimise staff time spent collecting segregated waste.",
  },
  {
    q: "How do recycling chutes work?",
    a: "Each floor has a single intake door with a press-button selector panel showing the available waste categories (e.g. cardboard, cans, plastic). The resident selects the category and deposits the item. An automated separator at the base of the chute routes the item to the correct collection container.",
  },
  {
    q: "Are recycling chutes different from regular waste chutes?",
    a: "Yes. A standard garbage chute routes all waste to a single bin. A recycling chute adds a sorting mechanism — either bisorter (two streams) or trisorter (three streams) — so that recyclables and general waste are kept separate without requiring residents to use separate bins on each floor.",
  },
  {
    q: "Can recycling chutes be installed in existing buildings?",
    a: "Yes. Provided a suitable service riser or shaft is available, recycling chutes can be retrofitted into occupied buildings. Our installation teams work in phases to minimise disruption.",
  },
  {
    q: "Are there UK regulations governing recycling chutes?",
    a: "Recycling chute doors and dampers are fire-rated to EN 1634-1 standards. The system complies with UK Building Regulations Part B. The built-in waste separation functionality also supports compliance with UK waste recycling targets for new developments.",
  },
];

export default function RecyclingChutePage() {
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
          <span className="font-medium text-slate-700">Recycling Chute</span>
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
                  Chutes — Recycling Chute Systems
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Recycling Chute Systems
                </h1>
                <p className="mt-4 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Sort metals, cardboard and plastic at source — with a press-button panel on each door, a single chute handles multiple waste streams and automatically separates recyclables at the base. Cost-effective, eco-friendly and modern.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <AddToQuoteButton id="recycling-chute" name="Recycling Chute System" category="Chutes" />
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
                    src={doorClosed}
                    alt="Downwaste recycling chute door — closed"
                    width={440}
                    height={540}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl max-w-[220px] self-end">
                  <Image
                    src={doorOpen}
                    alt="Downwaste recycling chute door — open showing selector panel"
                    width={440}
                    height={600}
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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Waste sorting built into the building
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Our recycling chute system saves space, reduces costs and transforms waste into a valuable resource. Supporting green building initiatives, it simplifies waste separation at the source — so residents sort correctly every time without any additional effort.
                </p>
                <p>
                  With a press-button selector panel on each chute door, your building can sort metals, cardboard and plastic efficiently. The separator device at the base automatically routes each item to the correct collection container — no manual sorting by staff required.
                </p>
                <p>
                  Cost-effective, eco-friendly and modern, the Downwaste recycling chute is a sustainable amenity that adds measurable value to any BTR, residential tower or mixed-use development.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src={doorPedal}
                alt="Downwaste recycling chute door with pedal operation"
                width={680}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* System modules */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">System overview</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">How the system works</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Three core modules work together — the floor intake unit, the automated separator and the collection module — all controlled via low-voltage BMS-integrated panels.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {systemModules.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 80}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex h-52 items-center justify-center bg-slate-50 p-8">
                    <Image src={m.img} alt={m.alt} width={240} height={200} className="h-full w-auto object-contain" />
                  </div>
                  <div className="border-t border-slate-100 px-6 py-4">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Step {i + 1}</p>
                    <h3 className="mt-1 text-sm font-bold text-slate-950">{m.label}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Pendant control */}
          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:gap-10">
              <div className="shrink-0">
                <Image src={pendant} alt="Pendant control unit for recycling chute automation" width={160} height={160} className="h-auto w-32 object-contain" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-950">BMS-integrated control panels</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Our automation system is simple yet effective. Each hopper door monitors and selects the type of recyclable discarded. The separators are operated by electric actuators with safety position sensors. Electric panels integrate into building management systems (BMS) and operate on low-voltage, reliable control units — ensuring the safety of both residents and building operators.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Door variants */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Door variants</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Three configurations available</h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {sorterTypes.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 80}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex h-56 items-center justify-center bg-slate-50 p-6">
                  <Image src={t.image} alt={t.imageAlt} width={280} height={320} className="h-full w-auto object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-950">{t.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{t.description}</p>
                </div>
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
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Built for performance and sustainability</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
              Ready to specify a recycling chute system?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Use our estimator to get a guide price based on your building height and floor count, or add the system to your quote and our UK team will follow up.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                Open Estimator
              </Link>
              <AddToQuoteButton id="recycling-chute" name="Recycling Chute System" category="Chutes" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
