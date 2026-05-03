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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Portrait */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div
                className="w-80 h-96 md:w-96 md:h-[480px] rounded-sm relative overflow-hidden"
                style={{ border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <Image
                  src="/anna-portrait.jpg"
                  alt="Anna – Astrokartographie-Expertin"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 320px, 384px"
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: "linear-gradient(to top, rgba(250,247,242,0.6), transparent)" }}
                />
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8" style={{ borderTop: "1px solid rgba(201,168,76,0.6)", borderLeft: "1px solid rgba(201,168,76,0.6)" }} />
              <div className="absolute -bottom-3 -right-3 w-8 h-8" style={{ borderBottom: "1px solid rgba(201,168,76,0.6)", borderRight: "1px solid rgba(201,168,76,0.6)" }} />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 card-warm rounded-sm px-6 py-4 shadow-md">
                <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#c9a84c]">500+</p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#7a6a58] uppercase">Transformationen</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#7a5c18] uppercase mb-6">
              Über mich
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#2c2010] mb-8 leading-[1.15]">
              Ich bin Anna —<br />
              <em className="gold-gradient not-italic font-medium">deine Lotsin</em>{" "}
              zu deinem<br />Kraftort auf der Erde.
            </h2>

            <div className="space-y-6 font-[family-name:var(--font-cormorant)] text-lg text-[#7a6a58] leading-relaxed font-light">
              <p>
                Vor Jahren stand ich selbst vor einer Entscheidung: Wohin soll
                mein Leben führen? Nicht metaphorisch — sondern buchstäblich:
                Welcher Ort passt zu mir?
              </p>
              <p>
                Die Antwort fand ich in der Astrokartographie. Diese Methode verbindet dein
                persönliches Horoskop mit einer Weltkarte und zeigt, wo auf
                der Erde deine planetaren Energien wirken: für Liebe, Karriere,
                inneren Ausgleich oder neue Kapitel.
              </p>
              <p className="text-[#2c2010]">
                Seit 2005 begleite ich Menschen auf diesem Weg —
                mit Astrokartographie, Local Space Astrology
                und Raumastrologie. Über 20 Jahre Erfahrung, Präzision und
                die tiefe Überzeugung: der richtige Ort verändert alles.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 items-start">
                  <div className="mt-1 text-[#c9a84c] flex-shrink-0">{v.icon}</div>
                  <div>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[#2c2010] tracking-wider uppercase mb-1">
                      {v.title}
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#7a6a58] font-light">
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Free intro CTA */}
            <div className="mt-12">
              <a
                href="https://calendly.com/astrogeo/orientierungs-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold inline-block px-8 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
              >
                Kostenloses Kennenlerngespräch →
              </a>
              <p className="font-[family-name:var(--font-cormorant)] text-sm text-[#7a6a58] mt-2 font-light">
                30 Min. · Zoom · Kostenlos
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
