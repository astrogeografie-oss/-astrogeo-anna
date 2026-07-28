"use client";

const types = [
  {
    number: "I",
    headline: "Ich treffe eine große Entscheidung.",
    subline: "Umzug, Unternehmensstandort, Auswanderung — du brauchst Klarheit, keine Inspiration.",
    body: "Du stehst vor einer Entscheidung mit echtem Gewicht: vielleicht mit Familie, Kapital oder einem ganzen Lebensmodell im Gepäck. Bauchgefühl reicht hier nicht. Das Deep-Dive Reading gibt dir Entscheidungssicherheit auf Basis deines Horoskops — konkret, präzise, umsetzbar. Kein anderes Angebot geht so tief.",
    empfohlen: "Empfohlen: Astrokartographie Reading · 499 €",
    href: "#angebote",
    cta: "Meinen Kraftort finden",
    outline: false,
  },
  {
    number: "II",
    headline: "Ich plane eine Reise.",
    subline: "Nicht einfach Urlaub. Sondern ein Ort, der wirklich wirkt.",
    body: "Du reist bewusst — und weißt, dass manche Orte dich auf eine Weise berühren, die du nicht ganz erklären kannst. Mit Astrokartographie lernst du, diese Orte gezielt zu wählen: für Energie, Klarheit, Leichtigkeit oder Neuanfänge. Schnell umsetzbar, sofort anwendbar.",
    empfohlen: "Einstieg: Mini-Kurs Cosmic Coordinates",
    href: "#angebote",
    cta: "Meine Reise planen",
    outline: true,
  },
  {
    number: "III",
    headline: "Ich will mehr — aber wohin?",
    subline: "Du spürst das Potenzial. Der Ort, an dem du lebst, fühlt sich wie Widerstand an.",
    body: "Du feststeckst nicht — du bist einfach noch nicht da, wo du hingehörst. Vielleicht bremst dich dein aktueller Standort beruflich, finanziell oder energetisch. Der erste Schritt muss nicht groß sein — er muss nur der richtige sein.",
    empfohlen: "Einstieg: Raumastrologie-Kurs oder Das Buch",
    href: "#angebote",
    cta: "Meinen Einstieg finden",
    outline: true,
  },
];

export default function ForWhom() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#3d2800] uppercase mb-6">
            Für wen ist das?
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#100802] leading-[1.15]">
            Erkenne dich —
            <br />
            <em className="gold-gradient font-medium">und deinen nächsten Schritt</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {types.map((t) => (
            <div
              key={t.number}
              className="relative rounded-sm p-8 md:p-10 flex flex-col"
              style={{
                background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
                border: "1px solid rgba(184,146,46,0.2)",
              }}
            >
              {/* Roman numeral */}
              <div className="number-circle mb-8 font-[family-name:var(--font-cormorant)] text-lg font-light">
                {t.number}
              </div>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-medium text-[#100802] leading-snug mb-3">
                {t.headline}
              </h3>

              <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#b8922e] uppercase mb-6">
                {t.subline}
              </p>

              <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-light leading-relaxed mb-8 flex-1">
                {t.body}
              </p>

              <div className="section-divider mb-6" />

              <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.08em] text-[#6b4800] uppercase mb-6">
                {t.empfohlen}
              </p>

              <a
                href={t.href}
                className={`text-center py-3 px-6 text-xs font-[family-name:var(--font-montserrat)] tracking-[0.15em] uppercase rounded-sm transition-all duration-300 ${
                  t.outline ? "btn-outline-gold" : "btn-gold"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
