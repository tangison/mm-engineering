import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { COMPANY } from "@/data/company";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactWidget } from "@/components/ContactWidget";
import { KitBridge } from "@/components/KitBridge";
import "./theme.css";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: `${COMPANY.shortName} | Civil, Electrical & Consulting Engineering Namibia`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    "M&M Engineering & Consultancy CC plans, builds and commissions public hospitals, police facilities, power reticulation and civil infrastructure across Namibia since 2013.",
  icons: {
    icon: [
      { url: "/assets/brand/favicon/favicon.ico" },
      { url: "/assets/brand/mm-logo.svg", type: "image/svg+xml" },
      { url: "/assets/brand/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/assets/brand/favicon/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    images: [{ url: "/assets/opt/brand/og-image.jpg", width: 1200, height: 630 }],
  },
  other: {
    "site-kind": "other",
    "page-type": "service",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f4f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-type="service"
      data-radius="soft"
      data-buttons="solid"
      data-tone="light"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          href="/fonts/newsreader-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/hanken-grotesk-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/assets/kit/system.css" />
        <link rel="stylesheet" href="/assets/kit/ui/cards.css" />
        <link rel="stylesheet" href="/assets/kit/motion/motion.css" />
        <link rel="stylesheet" href="/assets/kit/layout/layout.css" />
        <link rel="stylesheet" href="/assets/kit/icons/icon.css" />
        <link rel="stylesheet" href="/assets/kit/moments/pinned-chapters/moment.css" />
        <link rel="stylesheet" href="/assets/kit/moments/picture-develops/moment.css" />
        <link rel="stylesheet" href="/assets/site.css" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-js','m-enter','mo-js');setTimeout(function(){document.documentElement.classList.add('m-safe','m-enter-done','mo-safe');},700);",
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <ContactWidget />
        <KitBridge />
        <Script src="/assets/kit/system.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/kit/motion/motion.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/kit/layout/layout.js" type="module" strategy="afterInteractive" />
      </body>
    </html>
  );
}
