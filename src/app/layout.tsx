import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Diamond Builders | Uncompromising Construction Luxury",
  description:
    "Pakistan's premier luxury construction & grey structure specialists, led by Furqan Butt. Poore Pakistan ko mera challenge hai — zero compromises, zero shapper shortcuts.",
  keywords: [
    "Black Diamond Builders",
    "Furqan Butt",
    "Luxury Construction Pakistan",
    "Grey Structure Islamabad",
    "Construction Rawalpindi",
    "Overseas Pakistanis Home Construction",
    "Poore Pakistan Ko Mera Challenge Hai",
    "Anti Shapper Construction",
  ],
  authors: [{ name: "Furqan Butt - Black Diamond Builders" }],
  openGraph: {
    title: "Black Diamond Builders | Uncompromising Construction Luxury",
    description:
      "Poore Pakistan ko mera challenge hai. Pakistan's benchmark for structural precision, uncompromising steel ratios, and luxury builds.",
    type: "website",
    locale: "en_PK",
    siteName: "Black Diamond Builders",
  },
};

import { FloatingCaneAuditor } from "@/components/interactive/FloatingCaneAuditor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${jakarta.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-brand-black text-brand-ivory font-sans selection:bg-brand-gold selection:text-brand-black">
        {children}
        <FloatingCaneAuditor />
      </body>
    </html>
  );
}
