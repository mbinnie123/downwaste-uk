import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Estimator | Downwaste UK",
  robots: { index: false, follow: false },
};

export default function EstimatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
