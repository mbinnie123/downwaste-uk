import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Estimator | Downwaste UK",
  robots: { index: true, follow: true },
};

export default function EstimatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
