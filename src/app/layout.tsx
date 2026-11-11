import type { Metadata, Viewport } from "next";
import "../styles/scrollcraft.css";
import "../styles/site.css";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteFooter } from "@/components/SiteFooter";
import { ORGANIZATION_JSONLD, SITE } from "@/data/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title:
    "M&M Engineering | Contracting, construction, civil engineering and management in Namibia",
  description:
    "M&M Engineering & Consultancy CC is a Windhoek-based contracting, construction, civil engineering and management company serving Namibia and Southern Africa.",
  icons: {
    icon: [
      { url: "/assets/brand/favicon/favicon.ico", sizes: "any" },
      { url: "/assets/brand/mm-logo.svg", type: "image/svg+xml" },
      { url: "/assets/brand/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/brand/favicon/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/assets/brand/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title:
      "M&M Engineering | Contracting, construction, civil engineering and management in Namibia",
    description:
      "M&M Engineering & Consultancy CC is a Windhoek-based contracting, construction, civil engineering and management company serving Namibia and Southern Africa.",
    url: `${SITE.url}/`,
    images: [{ url: SITE.ogImage }],
  },
  alternates: {
    canonical: `${SITE.url}/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/assets/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/source-serif-4-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
      </head>
      <body suppressHydrationWarning>
        <SiteChrome />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
