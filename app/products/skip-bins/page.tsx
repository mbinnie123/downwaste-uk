import Image from "next/image";
import Link from "next/link";
import { AddToQuoteButton } from "../../components/add-to-quote-button";
import { ScrollReveal } from "../../components/scroll-reveal";
import skipPhoto from "../../../assets/images/downwaste_skip_10cbm.jpg";
import skipRender from "../../../assets/images/skip_container_10cbm_3.png";
import headerStripe from "../../../assets/images/downwaste-header-stripe-bg.svg";

export const metadata = {
  title: "Skip Bins | Containers | Downwaste UK",
  description:
    "Heavy-duty skip containers for construction sites, industrial estates and residential developments across the UK. Available in 5 m³, 7 m³ and 10 m³. Crane-liftable, stackable and built to last.",
};

const specs = [
  { capacity: "5 m³", width: "1.25 m", length: "1.70 m", height: "1.70 m", weight: "590 kg" },
  { capacity: "7 m³", width: "1.40 m", length: "1.70 m", height: "1.70 m", weight: "700 kg" },
  { capacity: "10 m³", width: "1.70 m", length: "1.70 m", height: "1.70 m", weight: "900 kg" },
];

const features = [
  {
    title: "Crane-liftable",
    description:
      "Four-point lifting lugs as standard, making them safe for crane operations on high-rise construction sites and industrial facilities across the UK.",
  },
  {
    title: "Stackable",
    description:
      "Designed to stack efficiently when not in use, minimising space requirements on constrained urban sites and in tight bin stores.",
  },
  {
    title: "Corrosion-resistant",
    description:
      "Hot-dip galvanised or powder-coated finish as standard, providing long-term protection against the UK's wet climate and harsh site conditions.",
  },
  {
    title: "Skip-truck compatible",
    description:
      "Engineered for straightforward operation with standard UK skip trucks. No specialist equipment or training required.",
  },
  {
    title: "Bespoke branding",
    description:
      "Available with custom RAL colour finishes and company livery — suitable for contractors, facilities teams and waste management operators.",
  },
  {
    title: "Industry compliant",
    description:
      "Manufactured to relevant EN standards and suitable for use across UK construction, industrial and municipal waste applications.",
  },
];

const faqs = [
  {
    q: "What are skip containers used for in the UK?",
    a: "Skip containers are used across UK construction sites, industrial estates, housing developments and commercial properties for collecting and transporting municipal, construction and industrial waste. Their robust construction also makes them suitable as temporary storage units and for crane-lift operations at height.",
  },
  {
    q: "What sizes are available?",
    a: "Downwaste UK skip containers are available in 5 m³, 7 m³ and 10 m³ capacities. Custom dimensions can be discussed — contact our UK team to discuss specific project requirements.",
  },
  {
    q: "Are they suitable for crane lifting on UK construction sites?",
    a: "Yes. All Downwaste skip containers are fitted with four-point lifting lugs as standard, making them safe for crane-lift operations in compliance with UK lifting regulations (LOLER).",
  },
  {
    q: "Can skip containers be stacked?",
    a: "Yes. The reinforced frame design allows containers to be safely stacked when empty, saving valuable space on constrained UK sites or in bin stores.",
  },
  {
    q: "Do they comply with UK standards?",
    a: "Yes. Containers are manufactured to relevant EN standards and are suitable for use across UK waste management, construction and industrial applications.",
  },
];

export default function SkipBinsPage() {
  return (
    <div className="text-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5">
          <Link href="/" className="hover:text-sky-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-sky-700 transition-colors">Products</Link>
          <span>/</span>
          <Link href="/products#containers" className="hover:text-sky-700 transition-colors">Containers</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Skip Bins</span>
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
                  Containers — Skip Bins
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Skip Containers
                </h1>
                <p className="mt-4 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Heavy-duty skip containers for UK construction sites, industrial estates and residential developments. Available in 5, 7 and 10 m³ — crane-liftable, stackable and built to last.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <AddToQuoteButton id="skip-bins" name="Skip Bins" category="Containers" />
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-bold text-slate-300 transition-all hover:border-sky-400 hover:text-sky-400"
                  >
                    View quote
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="scale" delay={150}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl sm:rounded-3xl sm:p-3">
                <Image
                  src={skipRender}
                  alt="Downwaste 10 m³ skip container"
                  width={800}
                  height={600}
                  priority
                  className="h-auto w-full rounded-xl sm:rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Overview + photo */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Versatile solutions for waste and beyond
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Downwaste skip containers are versatile units designed for the efficient transport and storage of municipal, construction and industrial waste across the UK. Thanks to a range of special modifications, these containers are not limited to waste disposal alone.
                </p>
                <p>
                  Whether being crane-lifted at high-rise construction sites, used as temporary storage units on constrained urban plots, or operated by skip trucks across residential and commercial estates, Downwaste skips adapt to the demands of UK projects.
                </p>
                <p>
                  Available in a range of styles and capacities, each container is tailored for specific applications and compatible with standard UK skip trucks — minimising plant requirements and keeping site logistics simple.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg sm:rounded-3xl">
              <Image
                src={skipPhoto}
                alt="Downwaste skip container on site"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Specifications table */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Specifications</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Available sizes</h2>
          </ScrollReveal>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-[460px] w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                  <th className="px-5 py-3.5">Capacity</th>
                  <th className="px-5 py-3.5">Width</th>
                  <th className="px-5 py-3.5">Length</th>
                  <th className="px-5 py-3.5">Height</th>
                  <th className="px-5 py-3.5">Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {specs.map((s) => (
                  <tr key={s.capacity} className="hover:bg-sky-50/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-950">{s.capacity}</td>
                    <td className="px-5 py-4 text-slate-600">{s.width}</td>
                    <td className="px-5 py-4 text-slate-600">{s.length}</td>
                    <td className="px-5 py-4 text-slate-600">{s.height}</td>
                    <td className="px-5 py-4 text-slate-600">{s.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">Custom dimensions available on request. Contact our UK team to discuss project-specific requirements.</p>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Features</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Built for UK site conditions</h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow sm:p-6">
                <h3 className="font-bold text-slate-950">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{f.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">FAQs</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Common questions</h2>
          </ScrollReveal>

          <div className="mt-8 space-y-5">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h3 className="font-bold text-slate-950">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <div className="rounded-2xl bg-gradient-to-br from-slate-950 to-blue-900 p-8 sm:rounded-3xl sm:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Downwaste UK</p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Specifying skip containers for your next UK project?
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  Talk to our UK team about sizes, finishes, crane-lift requirements and delivery to your site.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <AddToQuoteButton id="skip-bins" name="Skip Bins" category="Containers" />
                <a
                  href="mailto:info@downwaste.com"
                  className="inline-flex items-center justify-center rounded-full border-2 border-sky-400 px-7 py-3 text-sm font-bold text-sky-400 transition-all hover:bg-sky-400 hover:text-white"
                >
                  Email our team
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
