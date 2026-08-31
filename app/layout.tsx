import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

const title = "Waste Chutes & Garbage Room Systems for UK Buildings | Downwaste";
const description =
  "Downwaste UK supplies and installs waste chutes, garbage room systems and odour control solutions for residential towers, BTR schemes, hotels and commercial developments across the UK.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Downwaste UK",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Downwaste UK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Downwaste UK — Waste Chutes & Handling Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://downwaste.co.uk/#organization",
  name: "Downwaste UK",
  url: "https://downwaste.co.uk",
  logo: "https://downwaste.co.uk/og-image.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+902362142590",
      contactType: "sales",
      areaServed: "GB",
      availableLanguage: "English",
    },
  ],
  email: "info@downwaste.com",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://downwaste.co.uk/#website",
  url: "https://downwaste.co.uk",
  name: "Downwaste UK",
  description:
    "Waste chutes, garbage room systems and odour control solutions for UK buildings.",
  publisher: {
    "@id": "https://downwaste.co.uk/#organization",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M3L5X6H1SR"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-M3L5X6H1SR');`}
        </Script>
      </head>
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
