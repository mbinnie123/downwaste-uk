import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Quote | Downwaste UK",
  robots: { index: false, follow: false },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
