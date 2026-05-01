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
  title: "Astrogeografie mit Anna | Cosmic Coordinates & Astrologische Readings",
  description:
    "Finde deinen Kraftort auf der Erde. Anna ist Deutschlands führende Expertin für Astrogeografie & Astrocartography. Entdecke, wo dein Leben aufblüht — durch Cosmic Coordinates & tiefe astrologische Readings.",
  keywords: [
    "Astrogeografie",
    "Astrogeografie Deutschland",
    "Astrocartography",
    "Kraftort finden",
    "Astrologisches Reading",
    "Cosmic Coordinates",
    "Umzug Astrologie",
    "Orte Astrologie",
    "Lokale Astrologie",
    "Astrologie Reading",
    "Astrogeografie Beratung",
    "Anna Astrogeografie",
  ],
  authors: [{ name: "Anna" }],
  creator: "Anna",
  openGraph: {
    title: "Astrogeografie mit Anna | Cosmic Coordinates & Readings",
    description:
      "Finde den Ort, wo dein Leben aufblüht. Deutschlands führende Astrogeografie-Expertin.",
    type: "website",
    locale: "de_DE",
    siteName: "Astrogeografie Anna",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrogeografie mit Anna",
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
      <body className="min-h-full flex flex-col bg-[#07060f] text-[#f0ead6]">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
