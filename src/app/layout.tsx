// src/app/layout.tsx
import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { DesktopNavWrapper } from "@/components/DesktopNavWrapper";
import { MobilNavWrapper } from "@/components/MobilNavWrapper"; // keeping your file name
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tascha Reese Therapy",
  description: "Therapy website built with Next.js and Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="quiet"
      className={`${lato.variable} ${playfair.variable}`}
    >
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 border-b border-muted/40 bg-white/80 backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <Image
              src="/images/tascha_logo.png"
              alt="Tascha Reese Therapy Logo"
              width={250}
              height={210}
              className="w-25 h-16 ml-8"
            />
            <DesktopNavWrapper />
            <MobilNavWrapper />
          </div>
        </header>

        <main className="flex-1">{children}</main>
        <Footer />

        {/* Temporary: client review toggle (remove after decision) */}
        <ThemeToggle />

        {/* Calendly widget script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
