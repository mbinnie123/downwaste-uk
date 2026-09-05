export type GuidePrice = {
  low: number;
  high: number;
  unit: string;
};

// Guide prices (supply only, ex-VAT) for items added without going through the estimator.
// Inactive categories remain commented out for future re-enablement.
export const GUIDE_PRICES: Record<string, GuidePrice> = {
  // "skip-bins":              { low: 800,    high: 1800,  unit: "per unit" },
  // "press-container":        { low: 12000,  high: 25000, unit: "per unit" },
  // "hooklift-bins":          { low: 1500,   high: 4000,  unit: "per unit" },
  // "vertical-baler":         { low: 6000,   high: 15000, unit: "per unit" },
  // "auger-compactor":        { low: 8000,   high: 18000, unit: "per unit" },
  // "static-compactor":       { low: 8000,   high: 18000, unit: "per unit" },
  // "self-tipping-skips":     { low: 1200,   high: 3000,  unit: "per unit" },
  // "bin-tipper":             { low: 2500,   high: 6000,  unit: "per unit" },
  // "trash-containers":       { low: 300,    high: 800,   unit: "per unit" },
  "garbage-chute": { low: 2000, high: 6000, unit: "per floor (use estimator for full spec)" },
  "laundry-chute": { low: 2000, high: 4000, unit: "per floor (use estimator for full spec)" },
  "recycling-chute": { low: 2250, high: 4750, unit: "per floor" },
  "pneumatic-chute": { low: 6000, high: 15000, unit: "per floor" },
  "construction-chute": { low: 1000, high: 3000, unit: "per floor" },
  "chute-fed-compactor": { low: 8000, high: 18000, unit: "per unit" },
  // "press-compactor":        { low: 12000,  high: 25000, unit: "per unit" },
  carousel: { low: 3000, high: 8000, unit: "per unit" },
  conveyor: { low: 2500, high: 7000, unit: "per unit" },
  "odour-control": { low: 1500, high: 5000, unit: "per unit" },
  "bin-store": { low: 5000, high: 20000, unit: "per installation" },
};

export function getGuidePrice(id: string): GuidePrice | null {
  if (GUIDE_PRICES[id]) return GUIDE_PRICES[id];
  const key = Object.keys(GUIDE_PRICES).find((k) => id.startsWith(k));
  return key ? GUIDE_PRICES[key] : null;
}
