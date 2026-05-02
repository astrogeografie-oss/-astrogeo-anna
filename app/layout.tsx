import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astrogeografie & Astrokartografie mit Anna | Astrocartography Deutschland",
  description:
    "Finde deinen Kraftort auf der Erde. Anna Thoma ist Deutschlands führende Expertin für Astrogeografie, Astrokartografie & Astrocartography. Entdecke, wo dein Leben aufblüht — durch präzise astrologische Ortsanalyse & Cosmic Coordinates.",
  keywords: [
    "Astrogeografie",
    "Astrokartografie",
    "Astrocartography",
    "Astrogeografie Deutschland",
    "Astrokartografie Deutschland",
    "Astrocartography Deutschland",
    "Kraftort finden",
    "Astrogeografie Beratung",
    "Astrokartografie Beratung",
    "Astrologisches Reading",
    "Cosmic Coordinates",
    "Umzug Astrologie",
    "Orte Astrologie",
    "Lokale Astrologie",
    "Orts-Astrologie",
    "Orts-Horoskop",
    "Astrogeografie Anna Thoma",
    "Astrokartografie Anna",
    "Astrologie Reading",
  ],
  authors: [{ name: "Anna Thoma" }],
  creator: "Anna Thoma",
  alternates: {
    canonical: "https://astrogeoanna.com",
  },
  openGraph: {
    title: "Astrogeografie & Astrokartografie mit Anna | Astrocartography Deutschland",
    description:
      "Finde den Ort, wo dein Leben aufblüht. Deutschlands führende Expertin für Astrogeografie, Astrokartografie & Astrocartography.",
    type: "website",
    locale: "de_DE",
    siteName: "Astrogeografie & Astrokartografie – Anna Thoma",
    url: "https://astrogeoanna.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrogeografie & Astrokartografie mit Anna",
    description:
      "Finde deinen Kraftort. Deutschlands führende Expertin für Astrogeografie, Astrokartografie & Astrocartography.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf7f2] text-[#2c2010]">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
