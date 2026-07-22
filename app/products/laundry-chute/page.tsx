import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import heroIllustration from "../../../assets/images/laundry_chute.jpg";
import electricOpen from "../../../assets/images/downwaste_electric_laundry_chute-open.jpg";
import electricClosed from "../../../assets/images/downwaste_electric_laundry_chute-closed.jpg";
import mechanicalClosed from "../../../assets/images/downwaste_mechanical_laundry_chute_closed.jpg";
import mechanicalPhoto from "../../../assets/images/mechanical_laundry_chute_photo.png";
import passwordAccess from "../../../assets/images/downwaste_password_access_laundry_1.jpg";
import rolltainer from "../../../assets/images/downwaste_customized_handling-disposal_rolltainer.jpg";
import carousel from "../../../assets/images/downwaste_customized_handling-disposal_carousels.jpg";
import seamlessStructure from "../../../assets/images/downwaste_seamless_structure-sq.jpg";
import fireSprinkler from "../../../assets/images/downwaste_firesprinkler-sq.jpg";
import laundryDischarge from "../../../assets/images/downwaste_laundry-discharge-sq.jpg";
import strikeLock from "../../../assets/images/downwaste_strike_lock.jpg";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Laundry Chute Systems | Chutes | Downwaste UK",
  description:
    "Downwaste UK supplies and installs electric, mechanical and password-access laundry chute systems for luxury hotels, BTR schemes, private villas and residential towers. Quiet, fire-rated and built to EN/UL standards.",
};

const sizes = [
  { label: '12" × 12"', mm: "300 × 300 mm" },
  { label: '15" × 15"', mm: "395 × 395 mm" },
  { label: '18" × 18"', mm: "450 × 450 mm" },
  { label: '21" × 21"', mm: "530 × 530 mm" },
  { label: '24" × 24"', mm: "600 × 600 mm" },
];

const types = [
  {
    title: "Electric Laundry Chute",
    description:
      "Electric chutes feature a 24V electric strike and integrated micro-switch, providing real-time door status feedback across every floor. Doors can be centrally locked for maintenance or interlocked so only one floor can be open at a time — preventing draughts and improving safety. Ideal for BTR schemes, student accommodation and serviced apartments.",
    images: [electricOpen, electricClosed],
    imageAlts: ["Electric laundry chute door — open", "Electric laundry chute door — closed"],
  },
  {
    title: "Mechanical Laundry Chute",
    description:
      "The preferred choice for luxury hotels and private villas — prized for long-term reliability and minimal maintenance demands. Available in electrostatic-painted steel or brushed 304/316 stainless steel, with positive-latching handles for secure closure. Quick and straightforward to install, with no control cabling required.",
    images: [mechanicalClosed, mechanicalPhoto],
    imageAlts: ["Mechanical laundry chute door — closed", "Mechanical laundry chute installation"],
  },
  {
    title: "Password Access Chute",
    description:
      "Our advanced password-access chute doors blend safety and sophistication into modern high-end developments. PIN-code entry restricts use to authorised personnel, making these ideal for hotel corridors, serviced residences and any facility where controlled access to the chute is required.",
    images: [passwordAccess, strikeLock],
    imageAlts: ["Password access laundry chute door", "Automatic electric strike lock detail"],
  },
];

const features = [
  {
    title: "Enhanced sound properties",
    description:
      "The chute is fixed to each floor with hot-dip galvanised brackets fitted with anti-vibration rubber pads. All outer surfaces are coated with sound-dampening material — delivering a quiet laundry chute system for hotel and residential environments.",
  },
  {
    title: "Ergonomic door design",
    description:
      "Doors are crafted for ease of use and operational comfort. Choose from fully electrostatic-painted mechanical or stainless-steel interlocking or password access doors in 304 or 316 grade. Heavy-duty, positive-latching handles ensure secure closure with every use.",
  },
  {
    title: "90/120-minute fire rating",
    description:
      "All chute doors and dampers are 90-minute fire rated to UL 10B and 120-minute to EN 1634-1. Installations include automatic electric strike locks, ensuring the safety of residents and building operators at all times.",
  },
  {
    title: "Centralised monitoring",
    description:
      "Electric models support centralised monitoring of door status across all floors. The intelligent system automatically locks hopper doors during maintenance or when fire safety protocols are triggered — enhancing security, reliability and user convenience.",
  },
  {
    title: "Seamless welded trunk",
    description:
      "Continuously welded chutes feature smooth interlocking male-female connections for a snag-free interior surface. 600mm diameter, 1.5mm thick S304 stainless steel is standard, offering superior resistance to alkalis, acids and humidity found in laundry environments.",
  },
  {
    title: "NFPA-compliant fire sprinklers",
    description:
      "½\" glass bulb fire sprinklers (standard response pendant type, 72°C actuating temperature) are positioned on alternate floors and at the top of the chute, complying with NFPA 13 and NFPA Code 82.",
  },
];

const faqs = [
  {
    q: "What is a laundry chute?",
    a: "A laundry chute is designed to manage linen in any multi-storey establishment, allowing quick and easy disposal of laundry by occupants and safe, efficient removal by housekeeping staff. Downwaste chutes are technically superior, quiet and environmentally conscious solutions for laundry disposal in hotels, residential towers and private villas.",
  },
  {
    q: "Who needs a laundry chute system?",
    a: "Luxury hotels, private villas, BTR developments, student accommodation, hospitals and any multi-storey facility where housekeeping or residents need to dispose of linen and clothing without transporting bulky loads along corridors or in service lifts.",
  },
  {
    q: "What is the difference between mechanical and electric laundry chutes?",
    a: "Mechanical chutes use a simple positive-latching door with no electronics — reliable, low-maintenance and preferred for luxury hotels. Electric chutes add a 24V strike lock and micro-switch, enabling centralised door monitoring, remote locking for maintenance and interlocking across floors. Password-access models add PIN-code entry for controlled access.",
  },
  {
    q: "Are laundry chutes fire rated?",
    a: "Yes. All Downwaste laundry chute doors and dampers are fire rated — 90 minutes to UL 10B and 120 minutes to EN 1634-1. Fire sprinklers are fitted at alternate floors and at the top of the chute, compliant with NFPA 13 and NFPA Code 82.",
  },
  {
    q: "What sizes are available?",
    a: "Five standard door sizes from 300×300 mm (12\"×12\") up to 600×600 mm (24\"×24\"). The recommended trunk diameter for laundry is 600mm stainless steel (1.5mm thick, S304 grade). Non-standard configurations are available — contact our team.",
  },
  {
    q: "Can laundry chutes be installed in existing buildings?",
    a: "Yes. Provided a suitable service riser or shaft is available, chutes can be retrofitted into occupied buildings. Our installation teams are experienced in phased retrofit programmes to minimise disruption.",
  },
  {
    q: "What accessories are available?",
    a: "Beyond the chute system itself, Downwaste provides a comprehensive range of accessories — laundry handling tables, rolltainers, automatic carousels and conveyors — ensuring efficient collection and management of linen at the base of the chute.",
  },
];

export default function LaundryChutePage() {
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
          <span className="font-medium text-slate-700">Laundry Chute</span>
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
                  Chutes — Laundry Chute Systems
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Laundry Chute Systems
                </h1>
                <p className="mt-4 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Luxury hotels and private villas choose Downwaste laundry chutes over service lifts for handling bulky linen from individual floors. Electric, mechanical and password-access models — all fire-rated, quiet and built to EN and UL standards.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <AddToQuoteButton id="laundry-chute" name="Laundry Chute System" category="Chutes" />
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
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl sm:rounded-3xl">
                <Image
                  src={heroIllustration}
                  alt="Laundry chute system — linen dropped from floor into rolltainer at base"
                  width={900}
                  height={950}
                  priority
                  className="h-auto w-full rounded-xl"
                />
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
                A technically superior laundry disposal solution
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Laundry chutes are designed to manage linen in any multi-storey establishment — allowing quick and easy disposal by occupants and safe, efficient removal by housekeeping staff. Downwaste chutes are a technically superior, clean, quiet and environmentally conscious alternative to carrying linen by hand or overloading service lifts.
                </p>
                <p>
                  Our advanced laundry chute solutions are designed to blend seamlessly with the intelligent infrastructure of modern buildings, offering a combination of mechanical reliability and smart technology. We provide electric, mechanical and password-access variants to match the exact needs of every project.
                </p>
                <p>
                  Beyond the chute itself, Downwaste provides a full suite of linen handling accessories — rolltainers, handling tables, automatic carousels and conveyors — ensuring that collection and management of laundry at the base of the chute is handled with equal efficiency.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow">
                <Image src={seamlessStructure} alt="Seamless welded laundry chute trunk" width={400} height={400} className="h-auto w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow self-end">
                <Image src={laundryDischarge} alt="Laundry chute discharge door at base" width={400} height={400} className="h-auto w-full object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Door types */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Door types</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Three laundry chute configurations</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Choose the access system that fits your building type, security requirements and operational workflow.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {types.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 80}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex h-52 items-center justify-center gap-3 bg-slate-50 p-4">
                    {t.images.map((img, j) => (
                      <div key={j} className="h-full max-w-[45%] overflow-hidden rounded-xl">
                        <Image
                          src={img}
                          alt={t.imageAlts[j]}
                          width={240}
                          height={280}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ))}
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
      </div>

      {/* Available sizes */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Specifications</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Available door sizes</h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Five standard door opening sizes. Recommended trunk diameter for laundry is 600 mm (1.5mm S304 stainless steel). Non-standard sizes available on request.
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

      {/* Key features */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Features</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Built for performance and safety</h2>
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

      {/* Safety components */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Safety systems</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Fire protection & secure discharge</h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            { img: fireSprinkler, alt: "NFPA-compliant fire sprinkler inside laundry chute", title: "Fire sprinklers", body: "½\" glass bulb sprinklers (72°C, standard response pendant type) on alternate floors and at the top of the chute — compliant with NFPA 13 and NFPA Code 82." },
            { img: laundryDischarge, alt: "Fire-rated laundry discharge door at base of chute", title: "Fire-rated discharge door", body: "Top-hinged stainless steel discharge door held open with a UL-approved fusible link set at 72°C. Clothes land securely in the collection basket below." },
            { img: strikeLock, alt: "Automatic electric strike lock on laundry chute door", title: "Electric strike locks", body: "24V automatic electric strike locks secure hopper doors during maintenance or when fire safety protocols are activated — providing centralised control across all floors." },
          ].map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex h-48 items-center justify-center bg-slate-50 p-6">
                  <Image src={c.img} alt={c.alt} width={300} height={200} className="h-full w-auto max-w-full object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-bold text-slate-950">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{c.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Accessories */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Accessories</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Customised handling &amp; disposal</h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                  <p>
                    Beyond the chute system itself, Downwaste provides a comprehensive range of accessories including laundry handling tables, rolltainers, and automatic carousels and conveyors — ensuring that the collection and management of laundry are handled with the utmost efficiency.
                  </p>
                  <p>
                    Our custom laundry chute solutions support efficient, streamlined linen operations for any facility — from boutique hotels to large-scale residential developments.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={100}>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow">
                  <Image src={rolltainer} alt="Downwaste laundry rolltainer for chute collection" width={400} height={480} className="h-auto w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow self-start mt-8">
                  <Image src={carousel} alt="Downwaste automatic laundry carousel" width={400} height={360} className="h-auto w-full object-cover" />
                </div>
              </div>
            </ScrollReveal>
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
              Ready to specify a laundry chute system?
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
              <AddToQuoteButton id="laundry-chute" name="Laundry Chute System" category="Chutes" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
