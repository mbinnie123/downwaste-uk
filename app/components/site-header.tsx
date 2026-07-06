"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import downwasteLogo from "../../assets/images/downwaste-logo.svg";
import { useQuote } from "./quote-provider";
import { categories } from "../lib/products";

// Products with dedicated pages — shown as links in the dropdown
const featuredProducts = [
  { href: "/products/skip-bins", label: "Skip Bins", category: "Containers" },
  { href: "/products/hooklift-bins", label: "Hooklift Bins", category: "Containers" },
  { href: "/products/press-compactors", label: "Press Container", category: "Containers" },
];

export function SiteHeader() {
  const { count } = useQuote();
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Downwaste home">
          <Image
            src={downwasteLogo}
            alt="Downwaste logo"
            width={180}
            height={44}
            priority
            className="w-32 sm:w-40"
          />
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-700 sm:flex">
          <Link
            href="/"
            className={`rounded-lg px-3 py-2 transition-colors hover:text-sky-700 ${pathname === "/" ? "text-sky-700" : ""}`}
          >
            Home
          </Link>

          {/* Products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen((o) => !o)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:text-sky-700 ${pathname.startsWith("/products") ? "text-sky-700" : ""}`}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className={`h-3.5 w-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              >
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute left-0 top-full mt-1.5 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                {/* Browse all */}
                <Link
                  href="/products"
                  onClick={() => setProductsOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                >
                  Browse all products
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-50"><path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 11.78a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
                </Link>

                <div className="my-1.5 border-t border-slate-100" />

                {/* Category links */}
                <p className="px-4 pb-1 pt-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Categories</p>
                <div className="grid grid-cols-2 gap-0.5">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products#${cat.slug}`}
                      onClick={() => setProductsOpen(false)}
                      className="rounded-lg px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-sky-700 transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>

                {featuredProducts.length > 0 && (
                  <>
                    <div className="my-1.5 border-t border-slate-100" />
                    <p className="px-4 pb-1 pt-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Featured</p>
                    {featuredProducts.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-center justify-between rounded-xl px-4 py-2.5 hover:bg-sky-50 transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-sky-700">{p.label}</p>
                          <p className="text-xs text-slate-400">{p.category}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 text-slate-300 group-hover:text-sky-400 transition-colors"><path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 11.78a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
                      </Link>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>

          <Link
            href="/#solutions"
            className="rounded-lg px-3 py-2 transition-colors hover:text-sky-700"
          >
            Solutions
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden text-xs font-medium text-slate-700 sm:flex flex-col items-end">
            <a href="tel:+902362142590" className="hover:text-sky-700">+90 236 214 2590</a>
            <a href="mailto:info@downwaste.com" className="hover:text-sky-700">info@downwaste.com</a>
          </div>

          <Link
            href="/quote"
            className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-slate-950 to-blue-900 px-4 py-2 text-xs font-bold text-white shadow transition-all duration-200 hover:scale-105 hover:shadow-md sm:px-5 sm:text-sm"
            aria-label={`View quote (${count} items)`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
            <span>Quote</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 text-[10px] font-black text-white shadow-sm">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

