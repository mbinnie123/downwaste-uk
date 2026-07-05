"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import downwasteLogo from "../../assets/images/downwaste-logo.svg";
import { useQuote } from "./quote-provider";

export function SiteHeader() {
  const { count } = useQuote();
  const pathname = usePathname();

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/#solutions", label: "Solutions" },
  ];

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

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-sky-700 ${pathname === link.href ? "text-sky-700" : ""}`}
            >
              {link.label}
            </Link>
          ))}
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
