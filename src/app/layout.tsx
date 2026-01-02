import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trajter | Sculptor-Designed Furniture",
    template: "%s | Trajter",
  },
  description:
    "Memory of Pressure — Premium glazed foam tables by sculptor Jakub Trajter. Functional sculpture for those who refuse ordinary.",
  keywords: [
    "luxury furniture",
    "designer tables",
    "sculptor furniture",
    "Jakub Trajter",
    "glazed foam",
    "art furniture",
    "premium tables",
  ],
  authors: [{ name: "Jakub Trajter" }],
  creator: "Jakub Trajter",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Trajter",
    title: "Trajter | Sculptor-Designed Furniture",
    description:
      "Memory of Pressure — Premium glazed foam tables by sculptor Jakub Trajter.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trajter | Sculptor-Designed Furniture",
    description:
      "Memory of Pressure — Premium glazed foam tables by sculptor Jakub Trajter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
