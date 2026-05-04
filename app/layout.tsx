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
  title: "Astrokartographie mit Anna Thoma | Kraftort finden · ab 495 €",
  description:
    "Finde deinen Kraftort auf der Erde. Anna Thoma — Astrokartographie-Expertin aus Deutschland. 90 Min. Deep-Dive mit 7 Linienarten, Karma-Linien & Destiny-Crossings. Jetzt Termin buchen.",
  keywords: [
    "Astrokartographie",
    "Astrogeografie",
    "Astrokartografie",
    "Astrocartography",
    "Astrokartographie Deutschland",
    "Astrogeografie Deutschland",
    "Astrokartografie Deutschland",
    "Kraftort finden",
    "Kraftort Astrologie",
    "Local Space Astrology",
    "Raumastrologie",
    "Standortastrologie",
    "Parans Astrologie",
    "Destiny Crossings",
    "Karma-Linien Astrologie",
    "Orts-Horoskop",
    "Orts-Astrologie",
    "Astrogeografie Beratung",
    "Astrokartographie Beratung",
    "Cosmic Coordinates",
    "Umzug Astrologie",
    "Auswandern Astrologie",
    "Astrogeografie Anna Thoma",
    "Astrokartographie Anna",
    "Vortex-Punkte Astrologie",
    "Relocation Astrologie",
    "Relocation Chart",
  ],
  authors: [{ name: "Anna Thoma" }],
  creator: "Anna Thoma",
  alternates: {
    canonical: "https://astrogeoanna.com",
  },
  openGraph: {
    title: "Astrokartographie mit Anna Thoma | Kraftort finden · ab 495 €",
    description:
      "Finde den Ort, wo dein Leben aufblüht — mit 7 Linienarten, Karma-Linien & Destiny-Crossings. 90 Min. Deep-Dive ab 495 €.",
    type: "website",
    locale: "de_DE",
    siteName: "Anna Thoma – Astrokartographie",
    url: "https://astrogeoanna.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrokartographie mit Anna",
    description:
      "Finde deinen Kraftort. Deutschlands führende Astrokartographie-Expertin.",
  },
  verification: {
    google: "761c616b7cc676a8",
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
