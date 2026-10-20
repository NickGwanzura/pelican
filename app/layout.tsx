import type { Metadata, Viewport } from "next";
import { company } from "@/data/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pelicancreekrealty.com";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  title: {
    default: "Pelican Creek Realty | Property in Zimbabwe",
    template: "%s | Pelican Creek Realty",
  },
  description: "Harare-based property development and investment across Zimbabwe, shaped by local partnerships, careful site selection and lasting value.",
  applicationName: "Pelican Creek Realty",
  openGraph: {
    type: "website",
    siteName: "Pelican Creek Realty",
    title: "Pelican Creek Realty | Property in Zimbabwe",
    description: "Harare-based property development and investment shaped by local partnerships and long-term value.",
    ...(siteUrl ? { images: ["/images/nyeredzi-artist-impression.jpg"] } : {}),
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pelican Creek Realty Pvt Ltd",
              url: siteUrl,
              email: "hello@pelicancreekrealty.com",
              address: { "@type": "PostalAddress", addressLocality: "Harare", addressCountry: "ZW" },
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
