"use client";

import Link from "next/link";
import { useState } from "react";
import { useQuote } from "../components/quote-provider";

// Guide prices (supply only, ex-VAT) for items added without going through the estimator
const GUIDE_PRICES: Record<string, { low: number; high: number; unit: string }> = {
  "skip-bins":              { low: 800,    high: 1800,  unit: "per unit" },
  "press-container":        { low: 12000,  high: 25000, unit: "per unit" },
  "hooklift-bins":          { low: 1500,   high: 4000,  unit: "per unit" },
  "vertical-baler":         { low: 6000,   high: 15000, unit: "per unit" },
  "auger-compactor":        { low: 8000,   high: 18000, unit: "per unit" },
  "static-compactor":       { low: 8000,   high: 18000, unit: "per unit" },
  "self-tipping-skips":     { low: 1200,   high: 3000,  unit: "per unit" },
  "bin-tipper":             { low: 2500,   high: 6000,  unit: "per unit" },
  "trash-containers":       { low: 300,    high: 800,   unit: "per unit" },
  "garbage-chute":          { low: 400,    high: 1200,  unit: "per floor (use estimator for full spec)" },
  "laundry-chute":          { low: 400,    high: 800,   unit: "per floor (use estimator for full spec)" },
  "recycling-chute":        { low: 450,    high: 950,   unit: "per floor" },
  "pneumatic-chute":        { low: 1200,   high: 3000,  unit: "per floor" },
  "construction-chute":     { low: 200,    high: 600,   unit: "per floor" },
  "chute-fed-compactor":    { low: 8000,   high: 18000, unit: "per unit" },
  "press-compactor":        { low: 12000,  high: 25000, unit: "per unit" },
  "carousel":               { low: 3000,   high: 8000,  unit: "per unit" },
  "conveyor":               { low: 2500,   high: 7000,  unit: "per unit" },
  "odour-control":          { low: 1500,   high: 5000,  unit: "per unit" },
  "bin-store":              { low: 5000,   high: 20000, unit: "per installation" },
};

function getGuidePrice(id: string) {
  // exact match first, then prefix match for estimator-generated IDs
  if (GUIDE_PRICES[id]) return GUIDE_PRICES[id];
  const key = Object.keys(GUIDE_PRICES).find(k => id.startsWith(k));
  return key ? GUIDE_PRICES[key] : null;
}

export default function QuotePage() {
  const { items, remove, setQty, setNotes, clear } = useQuote();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, projectDetails, items }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setSubmitted(true);
      clear();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <div className="rounded-3xl border border-sky-200 bg-sky-50 p-10 shadow-lg">
          <p className="text-4xl">✓</p>
          <h1 className="mt-4 text-2xl font-bold text-slate-950">Quote sent!</h1>
          <p className="mt-2 text-slate-600">
            Your quote has been sent to the Downwaste UK team. We&apos;ll be in touch shortly.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-slate-950 to-blue-900 px-7 py-3 text-sm font-bold text-white shadow transition-all hover:scale-105"
          >
            Browse more products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="text-slate-900">
      {/* Header */}
      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-950 to-blue-900 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Quote request</p>
          <h1 className="mt-1 text-3xl font-bold text-white sm:text-4xl">Your quote</h1>
          <p className="mt-2 text-slate-300">
            {items.length === 0
              ? "No items added yet."
              : `${items.length} item${items.length !== 1 ? "s" : ""} selected.`}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {items.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
            <p className="text-slate-500">Your quote is empty.</p>
            <Link
              href="/products"
              className="mt-4 inline-flex rounded-full border-2 border-sky-400 px-6 py-2.5 text-sm font-bold text-sky-600 transition-all hover:bg-sky-50"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-[1fr_400px]">
            {/* Left: items */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-950">Selected equipment</h2>
                <button
                  type="button"
                  onClick={clear}
                  className="text-xs text-slate-400 hover:text-red-500 transition-colors"
                >
                  Clear all
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                          {item.category}
                        </p>
                        <p className="mt-0.5 font-bold text-slate-950">{item.name}</p>
                        {item.estimateLow != null && item.estimateHigh != null && (
                          <p className="mt-1 text-xs font-semibold text-sky-700">
                            Guide: £{item.estimateLow.toLocaleString("en-GB")} – £{item.estimateHigh.toLocaleString("en-GB")} <span className="font-normal text-slate-400">supply only · ex-VAT</span>
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(item.id)}
                        className="shrink-0 rounded-full p-1 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        Qty
                        <input
                          type="number"
                          min={1}
                          max={999}
                          value={item.quantity}
                          onChange={(e) => setQty(item.id, parseInt(e.target.value) || 1)}
                          className="w-16 rounded-lg border border-slate-200 px-2 py-1 text-center text-sm font-bold text-slate-950 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                        />
                      </label>
                    </div>

                    <div className="mt-3">
                      <input
                        type="text"
                        placeholder="Notes (optional — e.g. dimensions, floor count…)"
                        value={item.notes}
                        onChange={(e) => setNotes(item.id, e.target.value)}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: estimate + contact + submit */}
            <div className="flex flex-col gap-6 lg:self-start lg:sticky lg:top-24">

              {/* Estimate summary */}
              {(() => {
                const withEstimates = items.map(i => {
                  const low  = i.estimateLow  ?? (getGuidePrice(i.id)?.low  ?? null);
                  const high = i.estimateHigh ?? (getGuidePrice(i.id)?.high ?? null);
                  const unit = i.estimateLow != null ? null : getGuidePrice(i.id)?.unit ?? null;
                  return { ...i, resolvedLow: low, resolvedHigh: high, unit };
                });
                const estimated   = withEstimates.filter(i => i.resolvedLow != null);
                const unestimated = withEstimates.filter(i => i.resolvedLow == null);
                const totalLow    = estimated.reduce((s, i) => s + i.resolvedLow!  * i.quantity, 0);
                const totalHigh   = estimated.reduce((s, i) => s + i.resolvedHigh! * i.quantity, 0);
                return (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-base font-bold text-slate-950">Cost Estimate</h2>
                    {estimated.length === 0 ? (
                      <div className="mt-3">
                        <p className="text-sm text-slate-500">No estimates available. Use the estimator to get guide prices.</p>
                        <Link href="/estimator" className="mt-3 inline-flex items-center gap-1.5 rounded-full border-2 border-sky-400 px-4 py-2 text-xs font-bold text-sky-700 hover:bg-sky-50 transition-colors">
                          Open Estimator →
                        </Link>
                      </div>
                    ) : (
                      <>
                        <div className="mt-3 flex flex-col gap-2">
                          {estimated.map(i => (
                            <div key={i.id} className="flex items-start justify-between gap-2 text-xs">
                              <div className="min-w-0">
                                <span className="text-slate-700 font-medium leading-5">{i.name}{i.quantity > 1 ? ` ×${i.quantity}` : ""}</span>
                                {i.unit && <p className="text-[10px] text-slate-400">{i.unit}</p>}
                              </div>
                              <span className="shrink-0 font-semibold text-sky-700 tabular-nums">
                                £{(i.resolvedLow! * i.quantity).toLocaleString("en-GB")}–£{(i.resolvedHigh! * i.quantity).toLocaleString("en-GB")}
                              </span>
                            </div>
                          ))}
                          {unestimated.length > 0 && (
                            <p className="text-[11px] text-slate-400 mt-1 border-t border-slate-100 pt-2">
                              {unestimated.map(i => i.name).join(", ")} — no guide price available
                            </p>
                          )}
                        </div>
                        <div className="mt-4 border-t border-slate-100 pt-4">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total guide price</p>
                          <p className="mt-1 text-2xl font-black text-slate-950">
                            £{totalLow.toLocaleString("en-GB")}
                            <span className="text-base font-bold text-slate-400"> – </span>
                            £{totalHigh.toLocaleString("en-GB")}
                          </p>
                          <p className="mt-1 text-[11px] text-slate-400 leading-4">Supply only · ex-VAT · installation adds ~20–40%</p>
                          <Link href="/estimator" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-800 transition-colors">
                            Refine with Estimator →
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                );
              })()}

              {/* Contact form */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <h2 className="mb-5 text-lg font-bold text-slate-950">Your details</h2>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-600">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-600">
                    Company
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-600">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-600">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-600">
                    Project details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Building type, floor count, location…"
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 resize-none"
                  />
                </div>

                {error && (
                  <p className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 w-full rounded-full bg-gradient-to-r from-slate-950 to-blue-900 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {sending ? "Sending…" : "Send quote request"}
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  Sent directly to{" "}
                  <span className="font-medium">info@downwaste.com</span>
                </p>
              </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
