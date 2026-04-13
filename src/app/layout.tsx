import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { headers } from "next/headers";

import { routing } from "@/i18n/routing";
import { isRtlLocale } from "@/lib";

import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aurum Advisory",
  description:
    "Phase 1 frontend shell for a premium corporate website built with Next.js and Tailwind CSS.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  const requestHeaders = await headers();
  const locale =
    requestHeaders.get("X-NEXT-INTL-LOCALE") ?? routing.defaultLocale;
  const direction = isRtlLocale(locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body
        className="min-h-screen text-[#f7f2ec]"
        style={{
          backgroundColor: "#0a0807",
          backgroundImage: "url('/images/home/hero-background.png')",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {children}
      </body>
    </html>
  );
}
