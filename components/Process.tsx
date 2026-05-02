"use client";

const steps = [
  {
    number: "01",
    title: "Buchung & Vorbereitung",
    description:
      "Du buchst deine Session online und gibst mir deinen genauen Geburtsmoment (Datum, Uhrzeit, Ort). Ich erstelle im Voraus deine persönliche Astrokartografie-Karte und Geburtschart-Analyse.",
    detail: "Keine Vorkenntnisse in Astrologie nötig.",
  },
  {
    number: "02",
    title: "Unsere gemeinsame Session",
    description:
      "Wir treffen uns per Zoom für 60–90 Minuten. Ich führe dich durch deine Astrogeografie-Karte, erkläre die Energien der verschiedenen Weltregionen und beantworte all deine Fragen.",
    detail: "Die Session wird aufgezeichnet — damit du sie immer wieder ansehen kannst.",
  },
  {
    number: "03",
    title: "Deine Klarheit & der nächste Schritt",
    description:
      "Du erhältst eine schriftliche Zusammenfassung mit deinen Top-Empfehlungen. Und du weißt, wohin dein nächster Schritt führt — ob Umzug, Reise oder bewusste Nutzung deines aktuellen Ortes.",
    detail: "Viele meiner Klientinnen treffen innerhalb von Wochen lifechanging Entscheidungen.",
  },
];

export default function Process() {
  return (
    <section
      id="prozess"
      className="relative py-32 overflow-hidden bg-[#faf7f2]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#7a5c18] uppercase mb-6">
            Der Prozess
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#2c2010] leading-[1.15]">
            So funktioniert es —
            <br />
            <em className="gold-gradient not-italic font-medium">einfach & klar</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-7 top-14 bottom-14 w-px hidden md:block"
            style={{
              background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4) 20%, rgba(201,168,76,0.4) 80%, transparent)",
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-8 md:gap-12 items-start group">
                <div className="number-circle flex-shrink-0 relative z-10 group-hover:bg-[#fff9f0] transition-colors duration-300">
                  <span className="font-[family-name:var(--font-montserrat)] text-sm font-light">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2 pb-8">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-medium text-[#2c2010] mb-4">
                    {step.title}
                  </h3>
                  <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#7a6a58] font-light leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#c9a84c] uppercase">
                    → {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a
            href="#buchen"
            className="btn-gold inline-block px-12 py-5 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.2em] rounded-sm"
          >
            Jetzt starten
          </a>
          <p className="font-[family-name:var(--font-cormorant)] text-base text-[#7a6a58] mt-4 font-light">
            Nächste freie Termine:{" "}
            <span className="text-[#c9a84c]">Diese Woche verfügbar</span>
          </p>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
