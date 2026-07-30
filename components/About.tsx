"use client";

import Image from "next/image";
import { Star, MapPin, Compass } from "lucide-react";

const values = [
  {
    icon: <Star size={20} />,
    title: "Präzision",
    text: "Jede Analyse basiert auf deinem genauen Geburtsmoment — auf die Minute genau.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Tiefe",
    text: "Ich lese nicht nur Linien — ich lese das Leben, das hinter jedem Ort wartet.",
  },
  {
    icon: <Compass size={20} />,
    title: "Klarheit",
    text: "Keine Floskeln, keine Schönrednerei. Nur echte, nutzbare Erkenntnis.",
  },
];

export default function About() {
  return (
    <section
      id="ueber-mich"
      className="relative py-32 overflow-hidden bg-[#faf7f2]"
    >
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Portrait */}
          <div className="relative flex justify-center lg:justify-end order-2">
            <div className="relative">
              <div
                className="w-80 h-[30rem] md:w-96 md:h-[600px] rounded-sm relative overflow-hidden"
                style={{ border: "1px solid rgba(184,146,46,0.3)" }}
              >
                <Image
                  src="/photo_2026-07-28_07-12-57.jpg"
                  alt="Anna – Astrokartographie-Expertin"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 320px, 384px"
                  priority
                />
                <div className="absolute inset-x-0 top-[54%] -translate-y-1/2 flex justify-center px-8">
                  <div
                    className="px-6 py-4 rounded-sm backdrop-blur-[2px]"
                    style={{
                      background: "rgba(16,8,2,0.28)",
                      border: "1px solid rgba(212,175,110,0.65)",
                      boxShadow: "0 0 0 4px rgba(212,175,110,0.12)",
                    }}
                  >
                    <p className="quote-overlay text-lg md:text-xl text-white text-center leading-snug">
                      &ldquo;Dein Ort wartet. Ich zeige dir, wo.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8" style={{ borderTop: "1px solid rgba(184,146,46,0.6)", borderLeft: "1px solid rgba(184,146,46,0.6)" }} />
              <div className="absolute -bottom-3 -right-3 w-8 h-8" style={{ borderBottom: "1px solid rgba(184,146,46,0.6)", borderRight: "1px solid rgba(184,146,46,0.6)" }} />

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 card-warm rounded-sm px-6 py-4 shadow-md">
                <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#b8922e]">1.000+</p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#1c1008] uppercase">Transformationen</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1">
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#3d2800] uppercase mb-6">
              Über mich
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[#100802] mb-8 leading-[1.15]">
              Ich bin Anna —<br />
              <em className="gold-gradient not-italic font-medium">deine Lotsin</em>{" "}
              zu deinem<br />Kraftort auf der Erde.
            </h2>

            <div className="space-y-6 font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] leading-relaxed font-light">
              <p className="text-xl font-light italic text-[#3d2800]">
                Seit über 20 Jahren lese ich Karten. Nicht für Inspiration —
                für Entscheidungen.
              </p>
              <p>
                Vor Jahren stand ich selbst vor einer Entscheidung: Wohin soll
                mein Leben führen? Nicht metaphorisch — sondern buchstäblich:
                Welcher Ort passt zu mir?
              </p>
              <p>
                Die Antwort fand ich in der Astrokartographie — sie verbindet
                dein persönliches Horoskop mit einer Weltkarte und zeigt, wo auf
                der Erde deine planetaren Energien wirken: für Liebe, Karriere,
                inneren Ausgleich oder neue Kapitel.
              </p>
              <p className="text-[#100802]">
                Seit 2005 begleite ich Menschen auf diesem Weg —
                mit Astrokartographie, Local Space Astrology
                und Raumastrologie. Über 20 Jahre Erfahrung, Präzision und
                die tiefe Überzeugung: der richtige Ort verändert alles.
              </p>
              <p className="text-[#100802]">
                Mehr als 1.000 Menschen haben durch meine Arbeit erkannt,
                wo ihr Leben aufblüht — emotional, finanziell, energetisch.
                Wo Liebe entsteht. Wo Geld fließt. Wo sie endlich{" "}
                <em>sie selbst</em> sind.
              </p>
              <p className="text-[#100802]">
                Meine Klientinnen und Klienten sind keine Hobbiastrologen.
                Sie stehen vor echten Entscheidungen — Auswanderung,
                Unternehmensstandort, finanzieller Neustart. Sie wollen keine
                Allgemeinplätze. Sie wollen wissen: wohin konkret.
              </p>
              <p className="text-[#3d2800] font-medium">
                Astrogeografie ist keine Theorie. Es ist die Landkarte deines
                Lebens — und ich zeige dir, wie du sie liest.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 items-start">
                  <div className="mt-1 text-[#b8922e] flex-shrink-0">{v.icon}</div>
                  <div>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[#100802] tracking-wider uppercase mb-1">
                      {v.title}
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-light">
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct booking CTA */}
            <div className="mt-12">
              <a
                href="#buchen"
                className="btn-gold inline-block px-8 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
              >
                Jetzt Termin buchen →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
