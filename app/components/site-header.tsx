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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={closeMobile} className="inline-flex shrink-0 items-center" aria-label="Downwaste home">
          <Image src={downwasteLogo} alt="Downwaste logo" width={180} height={44} priority className="w-32 sm:w-40" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-700 sm:flex">
          <Link href="/" className={`rounded-lg px-3 py-2 transition-colors hover:text-sky-700 ${pathname === "/" ? "text-sky-700" : ""}`}>
            Home
          </Link>

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen((o) => !o)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:text-sky-700 ${pathname.startsWith("/products") ? "text-sky-700" : ""}`}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`h-3.5 w-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}>
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute left-0 top-full mt-1.5 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                <Link href="/products" onClick={() => setProductsOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 hover:bg-sky-50 hover:text-sky-700 transition-colors">
                  Browse all products
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-50"><path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 11.78a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
                </Link>
                <div className="my-1.5 border-t border-slate-100" />
                <p className="px-4 pb-1 pt-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Categories</p>
                <div className="grid grid-cols-2 gap-0.5">
                  {categories.map((cat) => (
                    <Link key={cat.slug} href={`/products#${cat.slug}`} onClick={() => setProductsOpen(false)} className="rounded-lg px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-sky-700 transition-colors">
                      {cat.name}
                    </Link>
                  ))}
                </div>
                {featuredProducts.length > 0 && (
                  <>
                    <div className="my-1.5 border-t border-slate-100" />
                    <p className="px-4 pb-1 pt-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Featured</p>
                    {featuredProducts.map((p) => (
                      <Link key={p.href} href={p.href} onClick={() => setProductsOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-2.5 hover:bg-sky-50 transition-colors group">
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

          <Link href="/#solutions" className="rounded-lg px-3 py-2 transition-colors hover:text-sky-700">Solutions</Link>
          <Link href="/estimator" className={`rounded-lg px-3 py-2 transition-colors hover:text-sky-700 ${pathname === "/estimator" ? "text-sky-700" : ""}`}>Estimator</Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden text-xs font-medium text-slate-700 sm:flex flex-col items-end">
            <a href="tel:+902362142590" className="hover:text-sky-700">+90 236 214 2590</a>
            <a href="mailto:info@downwaste.com" className="hover:text-sky-700">info@downwaste.com</a>
          </div>

          <Link
            href="/quote"
            onClick={closeMobile}
            className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-slate-950 to-blue-900 px-4 py-2 text-xs font-bold text-white shadow transition-all duration-200 hover:scale-105 hover:shadow-md sm:px-5 sm:text-sm"
            aria-label={`View quote (${count} items)`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            <span>Quote</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 text-[10px] font-black text-white shadow-sm">
                {count}
              </span>
            )}
          </Link>

          {/* Burger button — mobile only */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-0 rounded-xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-sky-300 sm:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ${mobileOpen ? "translate-y-[3px] rotate-45" : "-translate-y-[3px]"}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ${mobileOpen ? "-translate-y-[3px] -rotate-45" : "translate-y-[3px]"}`} />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile drawer — rendered outside <header> to avoid backdrop-filter stacking context issues */}
      <div
        className={`fixed inset-0 z-[60] sm:hidden transition-all duration-300 ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          onClick={closeMobile}
          className={`absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
        />

        {/* Panel — slides in from right */}
        <div className={`absolute right-0 top-0 h-full w-[80vw] max-w-xs bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Panel header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <span className="text-sm font-bold text-slate-950">Menu</span>
            <button
              onClick={closeMobile}
              className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <Link
              href="/"
              onClick={closeMobile}
              className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-sky-50 hover:text-sky-700 ${pathname === "/" ? "bg-sky-50 text-sky-700" : "text-slate-800"}`}
            >
              Home
            </Link>

            {/* Products accordion */}
            <div>
              <button
                onClick={() => setMobileProductsOpen((o) => !o)}
                className={`mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-sky-50 hover:text-sky-700 ${pathname.startsWith("/products") ? "bg-sky-50 text-sky-700" : "text-slate-800"}`}
              >
                Products
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`h-4 w-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}>
                  <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileProductsOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="ml-3 mt-1 border-l-2 border-sky-100 pl-3 pb-2">
                  <Link href="/products" onClick={closeMobile} className="flex items-center rounded-lg px-3 py-2.5 text-sm font-bold text-slate-900 hover:text-sky-700 transition-colors">
                    Browse all products
                  </Link>
                  <p className="mt-2 px-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Categories</p>
                  {categories.map((cat) => (
                    <Link key={cat.slug} href={`/products#${cat.slug}`} onClick={closeMobile} className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-sky-700 transition-colors">
                      {cat.name}
                    </Link>
                  ))}
                  <p className="mt-3 px-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Featured</p>
                  {featuredProducts.map((p) => (
                    <Link key={p.href} href={p.href} onClick={closeMobile} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors">
                      {p.label}
                      <span className="ml-1.5 text-xs text-slate-400">↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/#solutions"
              onClick={closeMobile}
              className="mt-1 flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              Solutions
            </Link>
            <Link
              href="/estimator"
              onClick={closeMobile}
              className={`mt-1 flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-sky-50 hover:text-sky-700 ${pathname === "/estimator" ? "bg-sky-50 text-sky-700" : "text-slate-800"}`}
            >
              Estimator
            </Link>
          </nav>

          {/* Bottom contact strip */}
          <div className="border-t border-slate-100 px-5 py-4 space-y-1">
            <a href="tel:+902362142590" className="flex items-center gap-2 text-sm text-slate-600 hover:text-sky-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-slate-400"><path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" /></svg>
              +90 236 214 2590
            </a>
            <a href="mailto:info@downwaste.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-sky-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-slate-400"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" /></svg>
              info@downwaste.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
