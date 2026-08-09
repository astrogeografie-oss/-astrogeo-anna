import type { Metadata } from "next";
import { Sun, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Orakel & Kartenlegungen | Anna Astrogeografie",
  description:
    "Kipperkarten Reading, Skatkarten Orakel & Jahreslegung Orakelkarten mit Anna Thoma. Klarheit für Liebe, Beruf und persönliche Entwicklung.",
};

const orakelServices = [
  {
    icon: <Sun size={32} />,
    name: "Jahreslegung Orakelkarten",
    tagline: "30 Min. · Zoom",
    price: "97 €",
    desc: "Alle Herausforderungen des kommenden Jahres mit Lösungs-Tipps. Eine kraftvolle Jahresübersicht mit den Orakelkarten.",
    url: "https://calendly.com/astrogeo/jahreslegung-mit-den-orakelkarten",
  },
  {
    icon: <Star size={32} />,
    name: "Kipperkarten Reading",
    tagline: "45 Min. · Zoom",
    price: "47 €",
    desc: "Klarheit in Liebe, Beruf & persönlicher Entwicklung. Die große Tafel zeigt dir dein vollständiges Lebensthema.",
    url: "https://calendly.com/astrogeo/kipperkarten-reading-grosse-tafel-klon",
  },
  {
    icon: <Star size={32} />,
    name: "Skatkarten Orakel",
    tagline: "30 Min. · Zoom",
    price: "47 €",
    desc: "Vergangenheit, Gegenwart & Zukunft mit empathischer Führung. Die Skatkarten sprechen direkt und ehrlich.",
    url: "https://calendly.com/astrogeo/skatkarten",
  },
];

export default function OrakelPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24" style={{ background: "linear-gradient(to bottom, #fdf9f3, #faf7f2)" }}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 rounded-sm px-6 py-14 md:py-16" style={{ background: "linear-gradient(135deg, #2c1f08 0%, #3d2a0a 50%, #2c1f08 100%)", border: "1px solid rgba(184,146,46,0.3)" }}>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#b8922e] uppercase mb-6">
              Orakel & Kartenlegungen
            </p>
            <h1 className="font-[family-name:var(--font-archivo-black)] uppercase tracking-[0.005em] text-3xl md:text-5xl leading-[1.1] text-white mb-6">
              Klarheit durch <span className="gold-gradient-on-dark">die Karten</span>
            </h1>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#c8bfb0] max-w-xl mx-auto font-light leading-relaxed">
              Kipperkarten, Skatkarten & Orakelkarten — für direkte Antworten und ehrliche Führung in wichtigen Lebensfragen.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            {orakelServices.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row gap-6 rounded-sm p-8 hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
                  border: "1px solid rgba(184,146,46,0.2)",
                }}
              >
                <div className="text-[#b8922e] flex-shrink-0 mt-1">{s.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#100802] group-hover:text-[#b8922e] transition-colors">
                      {s.name}
                    </h2>
                    <span className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#b8922e]">
                      {s.price}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase mb-4">
                    {s.tagline}
                  </p>
                  <p className="font-[family-name:var(--font-cormorant)] text-base text-[#1c1008] font-light leading-relaxed">
                    {s.desc}
                  </p>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.12em] text-[#6b4800] uppercase mt-5 group-hover:text-[#b8922e] transition-colors">
                    Jetzt buchen →
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Back link */}
          <div className="text-center mt-16">
            <a
              href="/#angebote"
              className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] text-[#6b4800] uppercase hover:text-[#b8922e] transition-colors"
            >
              ← Alle Angebote
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
