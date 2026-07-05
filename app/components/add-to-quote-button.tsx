"use client";

import { useQuote } from "./quote-provider";

type Props = {
  id: string;
  name: string;
  category: string;
  size?: "sm" | "md";
};

export function AddToQuoteButton({ id, name, category, size = "md" }: Props) {
  const { has, add, remove } = useQuote();
  const added = has(id);

  const base =
    size === "sm"
      ? "rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200"
      : "rounded-full px-5 py-2 text-sm font-bold transition-all duration-200";

  if (added) {
    return (
      <button
        onClick={() => remove(id)}
        className={`${base} border-2 border-sky-400 bg-sky-50 text-sky-700 hover:bg-red-50 hover:border-red-300 hover:text-red-600`}
        aria-label={`Remove ${name} from quote`}
      >
        ✓ Added — Remove
      </button>
    );
  }

  return (
    <button
      onClick={() => add(id, name, category)}
      className={`${base} border-2 border-slate-200 bg-white text-slate-700 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-700`}
      aria-label={`Add ${name} to quote`}
    >
      + Add to Quote
    </button>
  );
}
