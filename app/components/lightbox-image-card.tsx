"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LightboxImageCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export function LightboxImageCard({ src, alt, title, description }: LightboxImageCardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all hover:shadow-md"
        aria-label={`Open image: ${title}`}
      >
        <div className="relative aspect-[4/3] bg-slate-100">
          <Image src={src} alt={alt} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
        </div>
        <div className="p-4">
          <p className="text-sm font-bold text-slate-900">{title}</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-bold text-white hover:bg-slate-700"
              aria-label="Close image"
            >
              Close
            </button>
            <div className="relative aspect-[16/10] w-full bg-slate-950">
              <Image src={src} alt={alt} fill className="object-contain" sizes="100vw" priority />
            </div>
          </div>
        </div>
      )}
    </>
  );
}