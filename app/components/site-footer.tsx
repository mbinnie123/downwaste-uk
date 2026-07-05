import Image from "next/image";
import Link from "next/link";
import downwasteLogo from "../../assets/images/downwaste-logo.svg";
import { categories } from "../lib/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={downwasteLogo}
              alt="Downwaste logo"
              width={160}
              height={40}
              className="w-36 brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Waste chutes, compactors and bin handling equipment for UK residential towers, BTR schemes, hotels and mixed-use developments. Manufactured to exacting standards. UK-based specification and installation support.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <a href="tel:+902362142590" className="block hover:text-white transition-colors">+90 236 214 2590</a>
              <a href="mailto:info@downwaste.com" className="block hover:text-white transition-colors">info@downwaste.com</a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products#${cat.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {["Disposal", "Pneumatic", "Sorting", "Compression", "Management"].map((s) => (
                <li key={s}>
                  <Link href="/#solutions" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get a Quote */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Get a Quote</h3>
            <p className="mt-4 text-sm text-slate-400">
              Browse our full range and build a specification-ready quote for your UK project.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2 text-xs font-bold text-slate-300 transition-all hover:border-sky-400 hover:text-sky-400"
              >
                Browse products
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-xs font-bold text-white shadow transition-all hover:bg-sky-400"
              >
                View your quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} Downwaste UK. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
