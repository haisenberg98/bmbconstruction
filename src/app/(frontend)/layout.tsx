import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import Footer from "@/app/(frontend)/components/Footer";
import Header from "@/app/(frontend)/components/Header";
import "@/app/(frontend)/globals.css";
export const dynamic = "force-dynamic";
import { ClientToaster } from "@/app/(frontend)/components/ClientToaster"; // ← use client wrapper

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BMB Construction & Services Ltd - Auckland Builder",
  description:
    "BMB Construction and Services Ltd - Auckland-based company with over 30 years of combined trade experience. One call, one solution for building, renovations, and property maintenance.",
  keywords: [
    "construction",
    "builder",
    "auckland",
    "renovation",
    "property maintenance",
    "residential builds",
    "kitchen renovation",
    "bathroom renovation",
    "villa restoration",
    "heritage homes",
    "project management",
    "insurance work",
    "bmb construction",
    "auckland builder",
  ],
};

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`${inter.variable} ${montserrat.variable} bg-background text-foreground antialiased`}>
        <Header />
        {children}
        <Footer />
        <ClientToaster /> {/* ← safe client usage */}
      </body>
    </html>
  );
}
