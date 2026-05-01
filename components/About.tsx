"use client";

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
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at bottom left, #1a0f2e22 0%, transparent 60%)",
      }}
    >
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual side */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Main image placeholder — styled as cosmic portrait */}
              <div
                className="w-80 h-96 md:w-96 md:h-[480px] rounded-sm relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #1a0f2e 0%, #0d1b3e 50%, #1a0f2e 100%)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                {/* Decorative inner frame */}
                <div
                  className="absolute inset-4 rounded-sm"
                  style={{
                    border: "1px solid rgba(201,168,76,0.1)",
                  }}
                />
                {/* Constellation decoration */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  viewBox="0 0 400 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="80" cy="100" r="2" fill="#c9a84c" />
                  <circle cx="160" cy="60" r="1.5" fill="#c9a84c" />
                  <circle cx="240" cy="120" r="2" fill="#c9a84c" />
                  <circle cx="320" cy="80" r="1.5" fill="#c9a84c" />
                  <circle cx="200" cy="200" r="3" fill="#c9a84c" />
                  <circle cx="100" cy="300" r="2" fill="#c9a84c" />
                  <circle cx="300" cy="350" r="2" fill="#c9a84c" />
                  <circle cx="180" cy="400" r="1.5" fill="#c9a84c" />
                  <line x1="80" y1="100" x2="160" y2="60" stroke="#c9a84c" strokeWidth="0.5" />
                  <line x1="160" y1="60" x2="240" y2="120" stroke="#c9a84c" strokeWidth="0.5" />
                  <line x1="240" y1="120" x2="320" y2="80" stroke="#c9a84c" strokeWidth="0.5" />
                  <line x1="200" y1="200" x2="80" y2="100" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="200" y1="200" x2="320" y2="80" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="200" y1="200" x2="100" y2="300" stroke="#c9a84c" strokeWidth="0.5" />
                  <line x1="100" y1="300" x2="300" y2="350" stroke="#c9a84c" strokeWidth="0.5" />
                  <line x1="300" y1="350" x2="180" y2="400" stroke="#c9a84c" strokeWidth="0.5" />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <p
                      className="font-[family-name:var(--font-cormorant)] text-[#c9a84c] text-lg tracking-[0.3em] uppercase opacity-60"
                    >
                      Anna
                    </p>
                    <p
                      className="font-[family-name:var(--font-montserrat)] text-[#9b8fa8] text-xs tracking-[0.2em] uppercase mt-2 opacity-50"
                    >
                      Dein Foto hier
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 card-cosmic rounded-sm px-6 py-4"
              >
                <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#c9a84c]">
                  6+ Jahre
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#9b8fa8] uppercase">
                  Erfahrung
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#c9a84c] uppercase mb-6">
              Über mich
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#f0ead6] mb-8 leading-[1.15]">
              Ich bin Anna —<br />
              <em className="gold-gradient not-italic font-medium">
                deine Lotsin
              </em>{" "}
              zu deinem<br />
              Kraftort auf der Erde.
            </h2>

            <div className="space-y-6 font-[family-name:var(--font-cormorant)] text-lg text-[#9b8fa8] leading-relaxed font-light">
              <p>
                Vor Jahren stand ich selbst vor einer Entscheidung: Wohin soll
                mein Leben führen? Nicht metaphorisch — sondern buchstäblich:
                Welcher Ort passt zu mir?
              </p>
              <p>
                Die Antwort fand ich in der Astrogeografie. Einer uralten Kunst,
                die heute durch präzise Kartographie zur Wissenschaft wurde. Sie
                zeigt uns, wo auf der Erde unsere planetaren Energien wirken —
                und wie wir sie nutzen können.
              </p>
              <p className="text-[#f0ead6]">
                Seither habe ich über 500 Menschen geholfen, ihren Ort zu
                finden. Nicht den perfekten Ort — den{" "}
                <em>richtigen</em>. Den, der zu ihrem Geburtschart passt und
                ihre Lebensthemen unterstützt.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 items-start">
                  <div className="mt-1 text-[#c9a84c] flex-shrink-0">{v.icon}</div>
                  <div>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[#f0ead6] tracking-wider uppercase mb-1">
                      {v.title}
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#9b8fa8] font-light">
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
