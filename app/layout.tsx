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
  title: "Astrogeografie mit Anna Thoma | Astrocartography Deutschland",
  description:
    "Finde deinen Kraftort auf der Erde. Anna Thoma ist Deutschlands führende Astrokartografie-Expertin. Entdecke, wo dein Leben aufblüht — durch präzise astrologische Ortsanalyse & Cosmic Coordinates.",
  keywords: [
    "Astrogeografie",
    "Astrokartografie",
    "Astrocartography",
    "Astrogeografie Deutschland",
    "Astrokartografie Deutschland",
    "Astrocartography Deutschland",
    "Local Space Astrology",
    "Raumastrologie",
    "Standortastrologie",
    "Parans Astrologie",
    "Destiny Crossings",
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
    "Local Space Astrologie",
    "Astrologie Reading",
  ],
  authors: [{ name: "Anna Thoma" }],
  creator: "Anna Thoma",
  alternates: {
    canonical: "https://astrogeoanna.com",
  },
  openGraph: {
    title: "Astrogeografie mit Anna Thoma | Astrocartography Deutschland",
    description:
      "Finde den Ort, wo dein Leben aufblüht. Deutschlands führende Astrocartography-Expertin.",
    type: "website",
    locale: "de_DE",
    siteName: "Astrogeografie – Anna Thoma",
    url: "https://astrogeoanna.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrogeografie mit Anna Thoma",
    description:
      "Finde deinen Kraftort. Deutschlands führende Astrogeografie-Expertin.",
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
