import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | Pelican Creek Realty",
  description: "The page you were looking for is not available.",
  robots: { index: false, follow: true },
};

export const viewport: Viewport = { themeColor: "#f6f7f1" };

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <SiteHeader projectPage />
        <main id="main" className="not-found">
          <span className="error-code">404 · OUTSIDE THE BOUNDARY</span>
          <h1>This page<br />isn’t on<br />the plan.</h1>
          <p>Let’s get you back to the places we’re working on.</p>
          <Link href="/">Return to homepage ←</Link>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
