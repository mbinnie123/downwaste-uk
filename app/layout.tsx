import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "./components/quote-provider";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://downwaste.co.uk";

const title = "Downwaste UK | Waste Chutes & Handling Equipment";
const description =
  "Downwaste UK supplies and installs waste chutes, compactors, balers and bin handling systems for residential towers, BTR schemes, hotels and commercial developments across the UK.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Downwaste UK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 512,
        height: 512,
        alt: "Downwaste UK",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <QuoteProvider>
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </QuoteProvider>
      </body>
    </html>
  );
}
