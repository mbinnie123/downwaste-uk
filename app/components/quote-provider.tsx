"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

// ── Types ────────────────────────────────────────────────────
export type QuoteItem = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  notes: string;
  estimateLow?: number;
  estimateHigh?: number;
};

type State = { items: QuoteItem[] };

type Action =
  | { type: "ADD"; id: string; name: string; category: string; estimateLow?: number; estimateHigh?: number }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QTY"; id: string; quantity: number }
  | { type: "SET_NOTES"; id: string; notes: string }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: QuoteItem[] };

// ── Reducer ──────────────────────────────────────────────────
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      if (state.items.find((i) => i.id === action.id)) return state;
      return {
        items: [
          ...state.items,
          { id: action.id, name: action.name, category: action.category, quantity: 1, notes: "", estimateLow: action.estimateLow, estimateHigh: action.estimateHigh },
        ],
      };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "SET_QTY":
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: Math.max(1, action.quantity) } : i
        ),
      };
    case "SET_NOTES":
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, notes: action.notes } : i
        ),
      };
    case "CLEAR":
      return { items: [] };
    case "HYDRATE":
      return { items: action.items };
    default:
      return state;
  }
}

// ── Context ──────────────────────────────────────────────────
type QuoteContextValue = {
  items: QuoteItem[];
  count: number;
  has: (id: string) => boolean;
  add: (id: string, name: string, category: string, estimateLow?: number, estimateHigh?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, quantity: number) => void;
  setNotes: (id: string, notes: string) => void;
  clear: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

const STORAGE_KEY = "dw_quote_v1";

// ── Provider ─────────────────────────────────────────────────
export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", items: JSON.parse(raw) });
    } catch {
      // ignore
    }
  }, []);

  // Persist on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const add = useCallback(
    (id: string, name: string, category: string, estimateLow?: number, estimateHigh?: number) =>
      dispatch({ type: "ADD", id, name, category, estimateLow, estimateHigh }),
    []
  );
  const remove = useCallback(
    (id: string) => dispatch({ type: "REMOVE", id }),
    []
  );
  const setQty = useCallback(
    (id: string, quantity: number) => dispatch({ type: "SET_QTY", id, quantity }),
    []
  );
  const setNotes = useCallback(
    (id: string, notes: string) => dispatch({ type: "SET_NOTES", id, notes }),
    []
  );
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const has = useCallback(
    (id: string) => state.items.some((i) => i.id === id),
    [state.items]
  );

  return (
    <QuoteContext.Provider
      value={{
        items: state.items,
        count: state.items.length,
        has,
        add,
        remove,
        setQty,
        setNotes,
        clear,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────────
export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside <QuoteProvider>");
  return ctx;
}
