import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import render from "../../../assets/images/downwaste_press_compactors-1.jpg";
import closeup from "../../../assets/images/Press-Compactors_closeup.jpg";
import chart from "../../../assets/images/press-compactors-number-chart1.jpg";
import drawing1 from "../../../assets/images/DWPC-tech-drawing1.jpg";
import drawing2 from "../../../assets/images/DWPC-tech-drawing2.jpg";
import drawing3 from "../../../assets/images/DWPC-tech-drawing3.jpg";

export const metadata = {
  title: "Press Compactors (DWPC) | Downwaste UK",
  description:
    "High-capacity hydraulic press compactors for UK commercial and residential buildings. Compress waste to 1/6th of original volume — reducing collection frequency, storage footprint, and disposal costs.",
};

// Legend data extracted from press-compactors-number-text.svg
const parts = [
  { n: 1,  label: "Container Body",                    colour: "#EAB500" },
  { n: 2,  label: "Loading Lid",                       colour: "#F17044" },
  { n: 3,  label: "Charge Box",                        colour: "#6FC6C6" },
  { n: 4,  label: "Service Door",                      colour: "#635B82" },
  { n: 5,  label: "Leakproof Maintenance Door",        colour: "#2D9C17" },
  { n: 6,  label: "Control Panel",                     colour: "#CC946E" },
  { n: 7,  label: "Hydraulic Oil Tank",                colour: "#00AFC7" },
  { n: 8,  label: "Compression Plate",                 colour: "#4877B9" },
  { n: 9,  label: "Hydraulic Charge Pistons",          colour: "#094EA0" },
  { n: 10, label: "Lift Up Hook",                      colour: "#BF7E5C" },
  { n: 11, label: "Discharge Door",                    colour: "#ABBA84" },
  { n: 12, label: "Door Sealant",                      colour: "#0A8281" },
  { n: 13, label: "Discharge Door Locking Mechanism",  colour: "#2D9C17" },
  { n: 14, label: "Discharge Door Safety",             colour: "#BA71D0" },
  { n: 15, label: "Discharge Door Emptying Lock",      colour: "#FF5555" },
  { n: 16, label: "Heavy Duty Wheels",                 colour: "#897F7F" },
];

const specs = [
  { model: "DWPC 12", capacity: "12 m³", length: "5,050 mm", width: "2,254 mm", height: "2,497 mm", hopper: "1.3 m³", motor: "5.5 kW", compaction: "4:1" },
  { model: "DWPC 16", capacity: "16 m³", length: "6,050 mm", width: "2,254 mm", height: "2,497 mm", hopper: "1.3 m³", motor: "5.5 kW", compaction: "4:1" },
  { model: "DWPC 18", capacity: "18 m³", length: "6,550 mm", width: "2,254 mm", height: "2,497 mm", hopper: "1.3 m³", motor: "5.5 kW", compaction: "4:1" },
  { model: "DWPC 20", capacity: "20 m³", length: "7,050 mm", width: "2,254 mm", height: "2,497 mm", hopper: "1.3 m³", motor: "5.5 kW", compaction: "4:1" },
];

const features = [
  {
    title: "1:6 Volume Reduction",
    body: "Hydraulic compaction reduces waste to one-sixth of its original volume, dramatically cutting collection frequency and skip hire costs on UK commercial sites.",
  },
  {
    title: "Leakproof Construction",
    body: "Full perimeter door sealant and a sealed container body prevent liquid waste and leachate escaping — essential for compliance with UK waste duty-of-care regulations.",
  },
  {
    title: "Safety Certified",
    body: "Three-stage discharge door locking (locking mechanism, safety catch, emptying lock) supports PUWER and employer duty-of-care requirements in UK workplaces.",
  },
  {
    title: "Lift-Off Compatibility",
    body: "Integral lift-up hooks and fork pockets give compatibility with standard hook-lift lorries and skip wagons common across UK waste collection fleets.",
  },
  {
    title: "Four Capacity Options",
    body: "DWPC 12, 16, 18 and 20 m³ variants let M&E engineers and principal contractors specify the correct unit for the building's daily waste generation rate.",
  },
  {
    title: "Minimal Footprint",
    body: "Compact compaction unit footprint — under 2,300 mm wide — fits within standard UK plant room and loading dock dimensions without structural alterations.",
  },
];

const faqs = [
  {
    q: "What power supply is required?",
    a: "The DWPC range runs on a 3-phase 400 V / 50 Hz supply (PE) with a 5.5 kW motor and a 28-litre hydraulic oil reservoir. A standard BS 7671 three-phase circuit is sufficient for most UK commercial installations.",
  },
  {
    q: "Is the DWPC suitable for residential and BTR buildings?",
    a: "Yes — the sealed, odour-controlled design and quiet hydraulic operation make the DWPC ideal for bin-store rooms in BTR, PBSA and mixed-use buildings. Units can be specified during RIBA Stage 3 to align with M&E coordination.",
  },
  {
    q: "What materials can it compact?",
    a: "General mixed waste, dry recyclables, cardboard, packaging and light industrial waste. The compression plate and hydraulic charge pistons handle a wide range of densities. It is not suitable for hazardous, clinical or liquid waste streams.",
  },
  {
    q: "Can the unit be installed indoors?",
    a: "Yes. With adequate service clearance (access via the loading lid and service door) and a suitable drainage gulley, the DWPC is routinely specified for internal bin stores. Our team can provide CAD drawings for principal contractor coordination.",
  },
  {
    q: "What ongoing maintenance is required?",
    a: "Routine maintenance includes hydraulic oil checks, door seal inspection and compression plate lubrication. Our UK service partners offer planned maintenance contracts and LOLER-compliant inspection programmes.",
  },
];

export default function PressCompactorsPage() {
  return (
    <div className="text-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-sky-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-sky-700 transition-colors">Products</Link>
            <span>/</span>
            <Link href="/products#compactors" className="hover:text-sky-700 transition-colors">Compactors</Link>
            <span>/</span>
            <span className="text-slate-800">Press Compactors</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 to-blue-900 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              DWPC Series · Compactors
            </p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Press Compactors
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              High-capacity hydraulic press compactors that reduce waste volume to 1/6th of its original size. Designed for UK commercial buildings, logistics hubs, and large residential developments — cutting collection costs and simplifying your waste programme.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <AddToQuoteButton id="press-compactor" name="Press Compactor (DWPC)" category="Compactors" size="md" />
              <a
                href="mailto:info@downwaste.com?subject=Press Compactor Enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-bold text-slate-300 transition-all hover:border-sky-400 hover:text-sky-400"
              >
                Speak to the team
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="relative">
            <Image
              src={render}
              alt="Downwaste DWPC press compactor — product render with recycling livery"
              className="rounded-2xl shadow-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Engineered for high-volume UK buildings
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                The Downwaste DWPC series deploys into residential, commercial and mixed-use developments across the UK. By compressing waste to just one-sixth of its original volume, the DWPC dramatically reduces skip and vehicle movements — lowering your disposal costs and carbon footprint. Four net capacity options (12, 16, 18 and 20 m³) let M&amp;E engineers specify the right unit at RIBA Stage 3.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="mt-12">
            <Image
              src={closeup}
              alt="Downwaste DWPC press compactor — operator loading waste into the charge box"
              className="mx-auto w-full max-w-2xl rounded-2xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Diagram + Parts Legend */}
      <div className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Components</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">How it's built</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Chart image */}
            <ScrollReveal variant="scale">
              <Image
                src={chart}
                alt="Numbered component diagram of the Downwaste DWPC press compactor"
                className="w-full rounded-2xl shadow-md"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>

            {/* Real-text legend — replaces press-compactors-number-text.svg */}
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {parts.map(({ n, label, colour }) => (
                  <div key={n} className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 shadow-sm">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                      style={{ backgroundColor: colour }}
                    >
                      {n}
                    </span>
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Specifications table */}
      <div className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Specifications</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">DWPC model range</h2>
            <p className="mt-2 text-sm text-slate-500">All models: 3 × 400 V PE / 50 Hz · Hydraulic oil tank 28 L · Feed-opening 1,057 × 1,714 mm · Compaction force 4:1</p>
          </ScrollReveal>

          <ScrollReveal className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-gradient-to-r from-slate-950 to-blue-900 text-white">
                <tr>
                  {["Model", "Net Capacity", "Length (L)", "Width (W)", "Height (H)", "Hopper Vol.", "Motor"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((s, i) => (
                  <tr key={s.model} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-bold text-slate-950">{s.model}</td>
                    <td className="px-4 py-3 font-semibold text-sky-700">{s.capacity}</td>
                    <td className="px-4 py-3 text-slate-600">{s.length}</td>
                    <td className="px-4 py-3 text-slate-600">{s.width}</td>
                    <td className="px-4 py-3 text-slate-600">{s.height}</td>
                    <td className="px-4 py-3 text-slate-600">{s.hopper}</td>
                    <td className="px-4 py-3 text-slate-600">{s.motor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </div>

      {/* Technical drawings */}
      <div className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Technical Drawings</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Engineering dimensions</h2>
            <p className="mt-2 text-sm text-slate-500">
              Detailed CAD drawings and BIM files available on request for M&amp;E coordination and principal contractor submittals.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: drawing1, caption: "Side elevation — length (L) and discharge height dimensions" },
              { img: drawing2, caption: "Front elevation — width (W) and lid opening angle (89°)" },
              { img: drawing3, caption: "Three-quarter view — overall envelope and service clearances" },
            ].map(({ img, caption }, i) => (
              <ScrollReveal key={i} delay={i * 100} variant="scale">
                <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src={img}
                    alt={caption}
                    className="w-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <figcaption className="px-4 py-3 text-xs text-slate-500">{caption}</figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Key Features</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Built for UK compliance &amp; cost control</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-sky-50 p-6">
                  <h3 className="font-bold text-slate-950">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">FAQs</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Common questions</h2>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-slate-950">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-slate-950 to-blue-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to specify a press compactor?
            </h2>
            <p className="mt-4 text-slate-300">
              Add the DWPC to your quote, or contact our UK technical team to discuss compaction strategy, installation drawings, and programme coordination with your principal contractor.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AddToQuoteButton id="press-compactor" name="Press Compactor (DWPC)" category="Compactors" size="md" />
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-bold text-slate-300 transition-all hover:border-sky-400 hover:text-sky-400"
              >
                View my quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
