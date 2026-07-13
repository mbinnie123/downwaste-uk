"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { useQuote } from "../components/quote-provider";

// ─── Price data ────────────────────────────────────────────────────────────────
// Supply-only guide prices. Installation typically adds 20–40%.
// All prices in GBP, ex-VAT.

const CHUTE_BASE: Record<string, number> = {
  galvanised: 400,   // £/floor — manual galvanised steel
  stainless:  850,   // £/floor — stainless steel
  "pvc-coated": 560, // £/floor — powder/PVC-coated
};

const CHUTE_TYPE_UPLIFT: Record<string, number> = {
  waste:   0,
  laundry: 120, // £/floor uplift — smoother finish, heavier doors
};

const CHUTE_AUTO_UPLIFT: Record<string, number> = {
  manual:    0,
  electric:  250, // £/floor
  automatic: 480, // £/floor — motorised, sensors, control panel
};

const CHUTE_STANDARD_UPLIFT: Record<string, number> = {
  en: 0,
  ul: 180, // £/floor — US-spec components, different supply chain
};

const DIAMETER_UPLIFT: Record<string, number> = {
  "400":  0,
  "500":  60,  // £/floor
  "630":  140, // £/floor
};

const COMPACTOR_PRICES: Record<string, { low: number; high: number }> = {
  "chute-fed-compactor": { low: 8000,  high: 18000 },
  "press-compactor":     { low: 12000, high: 25000 },
};

const CONTAINER_PRICES: Record<string, { low: number; high: number }> = {
  "skip-bins":           { low: 800,   high: 1800 },
  "hooklift-bins":       { low: 1500,  high: 4000 },
  "baler":               { low: 6000,  high: 15000 },
};

// ─── Types ─────────────────────────────────────────────────────────────────────

type ChuteConfig = {
  type: "waste" | "laundry";
  material: "galvanised" | "stainless" | "pvc-coated";
  standard: "en" | "ul";
  diameter: "400" | "500" | "630";
  floors: number;
  heightMetres: number;
  operation: "manual" | "electric" | "automatic";
};

type OtherItem = {
  id: string;
  label: string;
  qty: number;
  prices: { low: number; high: number };
};

const DEFAULT_CHUTE: ChuteConfig = {
  type: "waste",
  material: "galvanised",
  standard: "en",
  diameter: "500",
  floors: 10,
  heightMetres: 30,
  operation: "manual",
};

// ─── Helper ────────────────────────────────────────────────────────────────────

function chuteEstimate(cfg: ChuteConfig): { low: number; high: number } {
  const base =
    CHUTE_BASE[cfg.material] +
    CHUTE_TYPE_UPLIFT[cfg.type] +
    CHUTE_AUTO_UPLIFT[cfg.operation] +
    CHUTE_STANDARD_UPLIFT[cfg.standard] +
    DIAMETER_UPLIFT[cfg.diameter];
  const perFloor = base;
  const total = perFloor * cfg.floors;
  // ±20% range
  return { low: Math.round(total * 0.85), high: Math.round(total * 1.2) };
}

function fmt(n: number) {
  return "£" + n.toLocaleString("en-GB");
}

// ─── Component ─────────────────────────────────────────────────────────────────

const CHUTE_ID_RE = /^chute-(waste|laundry)-(galvanised|stainless|pvc-coated)-(400|500|630)-(\d+)fl$/;

export default function EstimatorPage() {
  const { items, add, remove } = useQuote();

  const [includeChute, setIncludeChute] = useState(true);
  const [chute, setChute] = useState<ChuteConfig>(DEFAULT_CHUTE);

  const [otherItems, setOtherItems] = useState<OtherItem[]>([
    { id: "press-compactor",     label: "Press Compactor (DWPC)", qty: 0, prices: COMPACTOR_PRICES["press-compactor"] },
    { id: "chute-fed-compactor", label: "Chute-Fed Compactor",    qty: 0, prices: COMPACTOR_PRICES["chute-fed-compactor"] },
    { id: "skip-bins",           label: "Skip Bins",              qty: 0, prices: CONTAINER_PRICES["skip-bins"] },
    { id: "hooklift-bins",       label: "Hooklift Bins",          qty: 0, prices: CONTAINER_PRICES["hooklift-bins"] },
    { id: "baler",               label: "Baler",                  qty: 0, prices: CONTAINER_PRICES["baler"] },
  ]);

  const [addedToQuote, setAddedToQuote] = useState(false);

  // Pre-fill from whatever is already in the quote basket (added via product pages
  // or a previous visit to the estimator), so the form reflects existing selections.
  useEffect(() => {
    if (items.length === 0) return;

    setOtherItems((prev) =>
      prev.map((i) => {
        const match = items.find((q) => q.id === i.id || q.id.startsWith(`${i.id}-x`));
        return match ? { ...i, qty: match.quantity } : i;
      })
    );

    const chuteItem = items.find((q) => CHUTE_ID_RE.test(q.id));
    if (chuteItem) {
      const m = chuteItem.id.match(CHUTE_ID_RE)!;
      setIncludeChute(true);
      setChute((c) => ({
        ...c,
        type: m[1] as ChuteConfig["type"],
        material: m[2] as ChuteConfig["material"],
        diameter: m[3] as ChuteConfig["diameter"],
        floors: parseInt(m[4], 10),
      }));
    } else {
      const genericChute = items.find((q) => q.id.endsWith("-chute"));
      if (genericChute) {
        setIncludeChute(true);
        setChute((c) => ({ ...c, type: genericChute.id === "laundry-chute" ? "laundry" : "waste" }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setQty(id: string, qty: number) {
    setOtherItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(0, qty) } : i)));
  }

  const chuteCost = useMemo(() => (includeChute ? chuteEstimate(chute) : null), [includeChute, chute]);

  const otherLow  = otherItems.reduce((s, i) => s + i.qty * i.prices.low,  0);
  const otherHigh = otherItems.reduce((s, i) => s + i.qty * i.prices.high, 0);

  const totalLow  = (chuteCost?.low  ?? 0) + otherLow;
  const totalHigh = (chuteCost?.high ?? 0) + otherHigh;
  const hasEstimate = totalLow > 0;

  function handleAddToQuote() {
    // Clear out any previous entries for these items first, so refining a
    // selection updates the quote instead of adding duplicates alongside it.
    items.forEach((q) => {
      const isChute = CHUTE_ID_RE.test(q.id) || q.id.endsWith("-chute");
      const isOther = otherItems.some((i) => q.id === i.id || q.id.startsWith(`${i.id}-x`));
      if (isChute || isOther) remove(q.id);
    });

    if (includeChute && chuteCost) {
      add(
        `chute-${chute.type}-${chute.material}-${chute.diameter}-${chute.floors}fl`,
        `${chute.type === "waste" ? "Waste" : "Laundry"} Chute — ${chute.diameter}mm ⌀, ${chute.material}, ${chute.floors} floors (${chute.heightMetres}m), ${chute.operation}, ${chute.standard.toUpperCase()} standard`,
        "Chutes",
        chuteCost.low,
        chuteCost.high
      );
    }
    otherItems.filter((i) => i.qty > 0).forEach((i) => {
      add(
        `${i.id}-x${i.qty}`,
        `${i.label}${i.qty > 1 ? ` ×${i.qty}` : ""}`,
        i.label.includes("Compactor") ? "Compactors" : "Containers",
        i.qty * i.prices.low,
        i.qty * i.prices.high
      );
    });
    setAddedToQuote(true);
  }

  return (
    <div className="text-slate-900">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 to-blue-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Downwaste UK</p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Project Estimator</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
            Get a guide price for your building's waste handling specification. All figures are supply-only, ex-VAT and indicative — we'll confirm exact pricing once we've reviewed your project.
          </p>
          <p className="mt-3 text-xs text-slate-500">Installation typically adds 20–40%. Prices based on current market rates.</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">

          {/* ── Left column: inputs ── */}
          <div className="flex flex-col gap-8">

            {/* Chute section */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-950">Waste / Laundry Chute</h2>
                  <p className="mt-0.5 text-sm text-slate-500">Configure your chute specification</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeChute}
                    onChange={(e) => setIncludeChute(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`h-6 w-11 rounded-full transition-colors ${includeChute ? "bg-sky-500" : "bg-slate-200"}`}>
                    <div className={`mt-0.5 ml-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${includeChute ? "translate-x-5" : "translate-x-0"}`} />
                  </div>
                  <span className="text-sm font-medium text-slate-600">{includeChute ? "Included" : "Excluded"}</span>
                </label>
              </div>

              {includeChute && (
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {/* Type */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">Type</label>
                    <div className="flex gap-2">
                      {(["waste", "laundry"] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setChute((c) => ({ ...c, type: t }))}
                          className={`flex-1 rounded-xl border-2 py-2.5 text-sm font-bold capitalize transition-all ${chute.type === t ? "border-sky-400 bg-sky-50 text-sky-700" : "border-slate-200 text-slate-600 hover:border-sky-200"}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Diameter */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">Diameter</label>
                    <div className="flex gap-2">
                      {(["400", "500", "630"] as const).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setChute((c) => ({ ...c, diameter: d }))}
                          className={`flex-1 rounded-xl border-2 py-2.5 text-sm font-bold transition-all ${chute.diameter === d ? "border-sky-400 bg-sky-50 text-sky-700" : "border-slate-200 text-slate-600 hover:border-sky-200"}`}
                        >
                          {d}mm
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">Material</label>
                    <select
                      value={chute.material}
                      onChange={(e) => setChute((c) => ({ ...c, material: e.target.value as ChuteConfig["material"] }))}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                    >
                      <option value="galvanised">Galvanised Steel</option>
                      <option value="stainless">Stainless Steel</option>
                      <option value="pvc-coated">PVC-Coated Steel</option>
                    </select>
                  </div>

                  {/* Operation */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">Operation</label>
                    <select
                      value={chute.operation}
                      onChange={(e) => setChute((c) => ({ ...c, operation: e.target.value as ChuteConfig["operation"] }))}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                    >
                      <option value="manual">Manual</option>
                      <option value="electric">Electric</option>
                      <option value="automatic">Automatic (motorised + sensors)</option>
                    </select>
                  </div>

                  {/* Standard */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">Compliance Standard</label>
                    <div className="flex gap-2">
                      {(["en", "ul"] as const).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setChute((c) => ({ ...c, standard: s }))}
                          className={`flex-1 rounded-xl border-2 py-2.5 text-sm font-bold uppercase transition-all ${chute.standard === s ? "border-sky-400 bg-sky-50 text-sky-700" : "border-slate-200 text-slate-600 hover:border-sky-200"}`}
                        >
                          {s === "en" ? "EN (Europe)" : "UL (US)"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Floors */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">
                      Floors Served <span className="normal-case text-sky-600 font-semibold">{chute.floors}</span>
                    </label>
                    <input
                      type="range"
                      min={2}
                      max={60}
                      value={chute.floors}
                      onChange={(e) => setChute((c) => ({ ...c, floors: parseInt(e.target.value) }))}
                      className="w-full accent-sky-500"
                    />
                    <div className="mt-1 flex justify-between text-xs text-slate-400">
                      <span>2</span><span>60</span>
                    </div>
                  </div>

                  {/* Building height */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">
                      Building Height <span className="normal-case text-sky-600 font-semibold">{chute.heightMetres} m</span>
                    </label>
                    <input
                      type="range"
                      min={6}
                      max={200}
                      value={chute.heightMetres}
                      onChange={(e) => setChute((c) => ({ ...c, heightMetres: parseInt(e.target.value) }))}
                      className="w-full accent-sky-500"
                    />
                    <div className="mt-1 flex justify-between text-xs text-slate-400">
                      <span>6 m</span><span>200 m</span>
                    </div>
                  </div>
                </div>
              )}

              {includeChute && chuteCost && (
                <div className="mt-6 rounded-xl bg-slate-50 px-5 py-4 border border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Chute guide price</p>
                  <p className="mt-1 text-2xl font-black text-slate-950">
                    {fmt(chuteCost.low)} – {fmt(chuteCost.high)}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Supply only · ex-VAT · {chute.floors} floors · {chute.heightMetres} m tall · ~{fmt(Math.round((chuteCost.low + chuteCost.high) / 2 / chute.floors))}/floor</p>
                </div>
              )}
            </div>

            {/* Other equipment */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-bold text-slate-950">Other Equipment</h2>
              <p className="mt-0.5 text-sm text-slate-500">Set quantities for any additional items</p>

              <div className="mt-5 flex flex-col divide-y divide-slate-100">
                {otherItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-4 py-4">
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-950">{item.label}</p>
                      <p className="text-xs text-slate-400">
                        {fmt(item.prices.low)} – {fmt(item.prices.high)} per unit
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQty(item.id, item.qty - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-sky-300 hover:text-sky-600 transition-colors"
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-bold text-slate-950">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(item.id, item.qty + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-sky-300 hover:text-sky-600 transition-colors"
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column: summary ── */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-950">Estimate Summary</h2>

              {!hasEstimate && (
                <p className="mt-4 text-sm text-slate-400">Configure your specification to see a guide price.</p>
              )}

              {hasEstimate && (
                <>
                  <div className="mt-4 flex flex-col gap-2">
                    {includeChute && chuteCost && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">
                          {chute.type === "waste" ? "Waste" : "Laundry"} Chute ({chute.floors} fl.)
                        </span>
                        <span className="font-semibold text-slate-950">{fmt(chuteCost.low)}–{fmt(chuteCost.high)}</span>
                      </div>
                    )}
                    {otherItems.filter((i) => i.qty > 0).map((i) => (
                      <div key={i.id} className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">{i.label} ×{i.qty}</span>
                        <span className="font-semibold text-slate-950">
                          {fmt(i.qty * i.prices.low)}–{fmt(i.qty * i.prices.high)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Total guide price</p>
                    <p className="mt-1 text-3xl font-black text-slate-950">
                      {fmt(totalLow)}
                      <span className="text-lg font-bold text-slate-400"> – </span>
                      {fmt(totalHigh)}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">Supply only · ex-VAT</p>
                    <p className="mt-2 text-xs text-slate-400 leading-5">
                      Installation adds approx. 20–40%. These are indicative figures — we'll confirm exact pricing after reviewing your project details.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-col gap-3">
                    {addedToQuote ? (
                      <div className="rounded-xl bg-sky-50 border border-sky-200 px-4 py-3 text-center text-sm font-bold text-sky-700">
                        ✓ Added to your quote
                      </div>
                    ) : (
                      <button
                        onClick={handleAddToQuote}
                        className="w-full rounded-full bg-gradient-to-r from-slate-950 to-blue-900 px-6 py-3 text-sm font-bold text-white shadow transition-all hover:scale-105 hover:shadow-md"
                      >
                        Add to Quote
                      </button>
                    )}
                    <Link
                      href="/quote"
                      className="w-full rounded-full border-2 border-slate-200 px-6 py-3 text-center text-sm font-bold text-slate-700 transition-all hover:border-sky-400 hover:text-sky-700"
                    >
                      View Quote →
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Info card */}
            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-sky-600">Need a formal quote?</p>
              <p className="mt-2 text-sm text-slate-600 leading-5">
                Our UK team can provide detailed project-specific pricing, installation drawings and programme coordination.
              </p>
              <a
                href="mailto:info@downwaste.co.uk"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-900 transition-colors"
              >
                Email our team →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
