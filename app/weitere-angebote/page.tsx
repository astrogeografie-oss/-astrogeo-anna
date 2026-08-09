import type { Metadata } from "next";
import { Star, Calendar, Gift } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sessions & Extras | Anna Astrogeografie",
  description:
    "Follow-Up Session, Birthday Astrogeo, Frag Anna, Urlaubsplanung 2026 und Gutscheine — alle zusätzlichen Angebote von Anna Thoma.",
};

const angebote = [
  {
    icon: <Star size={28} />,
    name: "Birthday Astrogeo",
    tagline: "45 Min. · Zoom",
    price: "222 €",
    desc: "Finde den perfekten Geburtstags-Ort für dein nächstes Solarjahr. Wo auf der Erde entfaltest du deine beste Energie — genau jetzt, in diesem Lebensjahr?",
    url: "https://calendly.com/astrogeo/birthday-astrogeo",
  },
  {
    icon: <Calendar size={28} />,
    name: "Follow-Up Session",
    tagline: "45 Min. · Zoom · Nur für bestehende Klientinnen",
    price: "197 €",
    desc: "Für bestehende Klientinnen: aktuelle Themen, neue Zyklen, offene Fragen. Tauche tiefer in deine Karte ein.",
    url: "https://calendly.com/astrogeo/astrogeo-follow-up",
  },
  {
    icon: <Star size={28} />,
    name: "Frag Anna – Astro-Session",
    tagline: "30 Min. · Zoom",
    price: "147 €",
    desc: "Alle deine Fragen zur Astrokartographie, gezielt & auf den Punkt. Ideal wenn du eine konkrete Frage hast, die du schnell beantwortet haben möchtest.",
    url: "https://calendly.com/astrogeo/frag-anna-deine-personliche-astro-session",
  },
  {
    icon: <Star size={28} />,
    name: "Urlaubsplanung 2026",
    tagline: "30 Min. · Zoom",
    price: "147 €",
    desc: "Dein Urlaubsspot, der wirklich zu deiner Energie passt. Wo regenerierst du am besten? Wo machst du neue Erfahrungen? Dein nächster Urlaub astrologisch geplant.",
    url: "https://calendly.com/astrogeo/urlaubsplanung-2026-schon-ready",
  },
  {
    icon: <Gift size={28} />,
    name: "Gutschein",
    tagline: "Für alle Angebote · Dauerhaft gültig",
    price: null,
    desc: "Das perfekte Geschenk für Menschen, die ihren Kraftort finden wollen. Gültig für alle Angebote von Anna — ohne Ablaufdatum.",
    url: "https://calendly.com/astrogeo/gutschein",
  },
];

export default function WeitereAngebotePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24" style={{ background: "linear-gradient(to bottom, #fdf9f3, #faf7f2)" }}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 rounded-sm px-6 py-14 md:py-16" style={{ background: "linear-gradient(135deg, #2c1f08 0%, #3d2a0a 50%, #2c1f08 100%)", border: "1px solid rgba(184,146,46,0.3)" }}>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#b8922e] uppercase mb-6">
              Sessions & Extras
            </p>
            <h1 className="font-[family-name:var(--font-archivo-black)] uppercase tracking-[0.005em] text-3xl md:text-5xl leading-[1.1] text-white mb-6">
              Gezielte Klarheit <span className="gold-gradient-on-dark">für jede Situation</span>
            </h1>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#c8bfb0] max-w-xl mx-auto font-light leading-relaxed">
              Kürzere Sessions, spezifische Themen, Geschenke — alles was du neben den großen Readings brauchst.
            </p>
          </div>

          {/* Angebote */}
          <div className="space-y-6">
            {angebote.map((a) => (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row gap-6 rounded-sm p-7 hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
                  border: "1px solid rgba(184,146,46,0.2)",
                }}
              >
                <div className="text-[#b8922e] flex-shrink-0 mt-1">{a.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
                    <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#100802] group-hover:text-[#b8922e] transition-colors">
                      {a.name}
                    </h2>
                    {a.price && (
                      <span className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#b8922e]">
                        {a.price}
                      </span>
                    )}
                  </div>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase mb-3">
                    {a.tagline}
                  </p>
                  <p className="font-[family-name:var(--font-cormorant)] text-base text-[#1c1008] font-light leading-relaxed">
                    {a.desc}
                  </p>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.12em] text-[#6b4800] uppercase mt-4 group-hover:text-[#b8922e] transition-colors">
                    Jetzt buchen →
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Back */}
          <div className="text-center mt-14">
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
