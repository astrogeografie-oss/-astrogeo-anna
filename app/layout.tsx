import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.astrogeoanna.com"),
  title: "Astrokartographie mit Anna Thoma | Kraftort finden · ab 499 €",
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
    "Standortwahl Unternehmer",
    "Standortwahl Astrologie",
    "finanzieller Flow Astrologie",
    "Business Standort Astrologie",
    "Umzug Business Entscheidung Astrologie",
    "Seelenort finden Schweiz",
    "Seelenort finden Österreich",
    "Auswanderung Astrologie",
    "Astrokartographie Unternehmer",
    "High-Stakes Entscheidung Astrologie",
  ],
  authors: [{ name: "Anna Thoma" }],
  creator: "Anna Thoma",
  alternates: {
    canonical: "https://www.astrogeoanna.com",
  },
  openGraph: {
    title: "Astrokartographie mit Anna Thoma | Kraftort finden · ab 499 €",
    description:
      "Finde den Ort, wo dein Leben aufblüht — mit 7 Linienarten, Karma-Linien & Destiny-Crossings. 90 Min. Deep-Dive ab 499 €.",
    type: "website",
    locale: "de_DE",
    siteName: "Anna Thoma – Astrokartographie",
    url: "https://www.astrogeoanna.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Astrokartographie mit Anna Thoma – Finde deinen Kraftort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrokartographie mit Anna",
    description:
      "Finde deinen Kraftort. Deutschlands führende Astrokartographie-Expertin.",
    images: ["/opengraph-image"],
  },
  verification: {
    google: "dt2KHDIlwJ3Vn3mveHPoxrD2f6K1q7B0oqLsPuAMutU",
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
      <body className="min-h-full flex flex-col bg-[#faf7f2] text-[#100802]">
        <JsonLd />
        {children}
        <Script
          id="activecampaign-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
    vgo('setAccount', '255208829');
    vgo('setTrackByDefault', true);
    vgo('process');`,
          }}
        />
      </body>
    </html>
  );
}
