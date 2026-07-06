import { categories } from "../lib/products";
import { AddToQuoteButton } from "../components/add-to-quote-button";
import { ScrollReveal } from "../components/scroll-reveal";
import Link from "next/link";

export const metadata = {
  title: "Products | Downwaste UK",
  description:
    "Browse Downwaste UK's full range of waste handling equipment — chutes, compactors, containers, balers and more. Add items to your quote.",
};

const categoryColors: Record<string, string> = {
  containers:      "from-blue-50 via-sky-50 to-cyan-50 border-sky-200",
  balers:          "from-cyan-50 via-teal-50 to-blue-50 border-teal-200",
  compactors:      "from-sky-50 via-blue-50 to-indigo-50 border-indigo-200",
  handling:        "from-amber-50 via-orange-50 to-red-50 border-amber-200",
  chutes:          "from-purple-50 via-violet-50 to-indigo-50 border-violet-200",
  "garbage-room":  "from-green-50 via-emerald-50 to-teal-50 border-emerald-200",
  "odour-solutions": "from-rose-50 via-pink-50 to-red-50 border-rose-200",
};

export default function ProductsPage() {
  return (
    <div className="text-slate-900">
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-slate-950 to-blue-900 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              Full equipment range
            </p>
            <h1 className="mt-2 max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Browse &amp; build your specification
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Select equipment for your UK project from our full range — chutes, compactors, containers, balers and more. Add items to your quote and send it directly to our UK team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-2.5 text-sm font-bold text-white shadow transition-all hover:bg-sky-300 hover:scale-105"
              >
                View my quote
              </Link>
              <a
                href="mailto:info@downwaste.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-bold text-slate-300 transition-all hover:border-sky-400 hover:text-sky-400"
              >
                Speak to the team
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Category nav */}
      <div className="sticky top-[57px] sm:top-[73px] z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 py-2" aria-label="Product categories">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-700"
              >
                {cat.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-16">
          {categories.map((cat, idx) => {
            const colors = categoryColors[cat.slug] ?? "from-slate-50 to-white border-slate-200";
            return (
              <section key={cat.slug} id={cat.slug} aria-labelledby={`cat-${cat.slug}`}>
                <ScrollReveal delay={idx * 40}>
                  <div className="mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.35em] text-sky-500">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2
                      id={`cat-${cat.slug}`}
                      className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl"
                    >
                      {cat.name}
                    </h2>
                    <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                      {cat.description}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {cat.products.map((product) => (
                      <div
                        key={product.id}
                        className={`flex flex-col justify-between rounded-2xl border bg-gradient-to-br ${colors} p-5 shadow-sm transition-shadow hover:shadow-md ${product.comingSoon ? "opacity-60" : ""}`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                              {cat.name}
                            </p>
                            {product.comingSoon && (
                              <span className="shrink-0 rounded-full bg-slate-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                                Soon
                              </span>
                            )}
                          </div>
                          <h3 className="mt-1 text-base font-bold text-slate-950 sm:text-lg">
                            {product.href ? (
                              <Link href={product.href} className="hover:text-sky-700 transition-colors">
                                {product.name} →
                              </Link>
                            ) : (
                              product.name
                            )}
                          </h3>
                          <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                            {product.description}
                          </p>
                        </div>
                        <div className="mt-5">
                          {product.comingSoon ? (
                            <span className="inline-block rounded-full border-2 border-slate-200 px-4 py-1.5 text-xs font-bold text-slate-400">
                              Coming soon
                            </span>
                          ) : (
                            <AddToQuoteButton
                              id={product.id}
                              name={product.name}
                              category={cat.name}
                              size="sm"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </section>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-950">Ready to submit your specification?</h2>
          <p className="mt-2 text-slate-600">
            Review your selected equipment and send a quote request directly to our UK team.
          </p>
          <Link
            href="/quote"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-950 to-blue-900 px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            View &amp; submit quote
          </Link>
        </div>
      </div>
    </div>
  );
}
