"use client";

import { Check, Globe, Star, Users, Gift, Calendar, BookOpen, Compass, Map, Smartphone, GraduationCap, Crown } from "lucide-react";

const readings = [
  {
    id: "standard",
    tier: "Standard",
    name: "Astrogeografie-Reading",
    tagline: "2 × 45 Min. · Zoom",
    price: "499 €",
    highlight: false,
    description:
      "Zwei intensive Sessions, die dir genau zeigen, wo auf der Erde dein Leben aufblüht — für Liebe, Karriere, finanzielle Energie oder einen Neuanfang.",
    includes: [
      "Einführung & Planeten-PDF",
      "Seelenformel, Best Planet, Mondknoten, Chiron",
      "Human Design: Autorität & Profil (+ weitere Faktoren individuell)",
      "Geburtsort, aktueller Standort & Wunschort",
      "Relocation-Chart, Karma-Linien, Destiny-Crossings, Vortex-Punkte",
      "Asteroiden & sensitive Punkte",
      "Progressions-Chart & Solar-Radix (individuell, je nach Klient)",
      "Screenshots & Aufzeichnung beider Calls",
    ],
    url: "https://calendly.com/astrogeo/60",
    cta: "Standard buchen",
    note: "Benötigt: genaues Geburtsdatum, Uhrzeit & Geburtsort",
  },
  {
    id: "vip",
    tier: "VIP",
    name: "Astrogeografie-Reading",
    tagline: "Standard + 2 Folgetermine · Premium PDF",
    price: "1.499 €",
    highlight: true,
    description:
      "Für Unternehmer und Menschen mit Kapital, die eine hochwertige Gesamtanalyse brauchen — mit persönlicher Begleitung über mehrere Monate und einer professionellen Auswertung als Dokument.",
    includes: [
      "Alles aus dem Standard-Reading",
      "2 Folgetermine (je 45 Min.) zur Vertiefung",
      "Hochwertige Premium-Auswertung als PDF",
      "Konkrete Empfehlungen für Standort & Timing",
      "Speziell buchbar als Unternehmer-Paket",
      "Priorität bei Terminvergabe",
      "E-Mail-Support zwischen den Sessions",
    ],
    url: "mailto:anna@astrogeoanna.info",
    cta: "VIP anfragen",
    note: "Persönliche Absprache · Zahlung individuell vereinbart",
  },
];

const buch = {
  icon: <BookOpen size={32} />,
  name: "Astro-Code – Das Buch",
  tagline: "Von Anna Thoma · Sachbuch · Astrokartographie",
  badge: "Bestseller",
  quote: "»Deine Seele hat ein GPS. Zeit, es endlich zu aktivieren.«",
  desc: "Das Standardwerk zur Astrokartographie auf Deutsch. Anna Thoma zeigt, wie du deinen Kraftort auf der Erde findest — kompakt, praxisnah und transformativ.",
  highlights: [
    "Grundlagen der Astrokartographie verständlich erklärt",
    "ACG-Linien, Local Space & Relocation-Charts",
    "Praktische Anleitungen zum Selbst-Lesen deiner Karte",
    "Von der Autorin persönlich empfohlen",
  ],
  url: "https://publishde.bookmundo.com/books/22022143",
};

export default function Services() {
  return (
    <section
      id="angebote"
      className="relative py-32 overflow-hidden"
      style={{ background: "none" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#3d2800] uppercase mb-6">
            Meine Angebote
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-[#100802] leading-[1.15] mb-6">
            Finde deinen Weg zu
            <br />
            <em className="gold-gradient font-medium">
              deinem Kraftort
            </em>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#1c1008] max-w-2xl mx-auto font-light">
            Nicht "Astrologin, die auch Astrogeografie macht" — sondern die Spezialistin für finanziell und persönlich bedeutsame Standortentscheidungen. Von der Einzelperson bis zum Unternehmer.
          </p>
        </div>

        {/* 1. Readings – Standard & VIP */}
        <div className="max-w-5xl mx-auto mb-16">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
            Astrogeografie-Reading · 1:1 mit Anna
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {readings.map((r) => (
              <div
                key={r.id}
                className={`relative rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 ${r.highlight ? "glow-gold" : ""}`}
                style={{
                  background: r.highlight
                    ? "linear-gradient(145deg, #fffdf9, #f5efe4)"
                    : "linear-gradient(145deg, #fffdf9, #faf7f2)",
                  border: r.highlight
                    ? "1px solid rgba(184,146,46,0.5)"
                    : "1px solid rgba(184,146,46,0.15)",
                }}
              >
                {r.highlight && (
                  <div
                    className="flex items-center justify-center gap-2 py-2"
                    style={{ background: "rgba(184,146,46,0.12)", borderBottom: "1px solid rgba(184,146,46,0.3)" }}
                  >
                    <Crown size={12} className="text-[#b8922e]" />
                    <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.25em] text-[#b8922e] uppercase">
                      Für Unternehmer & Premium-Klientel
                    </span>
                  </div>
                )}
                <div className="p-8 md:p-10">
                  <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase mb-3">
                    {r.tier}
                  </p>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#100802] mb-2">
                    {r.name}
                  </h3>
                  <div className="flex items-baseline gap-4 mb-6">
                    <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#b8922e]">
                      {r.tagline}
                    </p>
                    <span
                      className="font-[family-name:var(--font-cormorant)] text-2xl font-medium"
                      style={{ color: "#b8922e" }}
                    >
                      {r.price}
                    </span>
                  </div>

                  <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-light leading-relaxed mb-8">
                    {r.description}
                  </p>

                  <div className="section-divider mb-8" />

                  <ul className="space-y-3 mb-10">
                    {r.includes.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <Check size={16} className="text-[#b8922e] mt-0.5 flex-shrink-0" />
                        <span className="font-[family-name:var(--font-cormorant)] text-[#1c1008] text-base font-light leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={r.url}
                    target={r.url.startsWith("mailto") ? undefined : "_blank"}
                    rel={r.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className={`block text-center py-4 px-8 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] uppercase rounded-sm transition-all duration-300 ${
                      r.highlight ? "btn-gold" : "btn-outline-gold"
                    }`}
                  >
                    {r.cta}
                  </a>

                  <p className="text-center font-[family-name:var(--font-montserrat)] text-xs text-[#1c1008] mt-3 tracking-wider">
                    {r.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Planetary Pathway */}
        <div className="max-w-5xl mx-auto mb-16">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
            Ausbildung · Für Astrologinnen & Astro-Kennerinnen
          </p>
          <a
            href="/planetary-pathway"
            className="group block rounded-sm p-8 md:p-10 hover:-translate-y-1 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #fffdf9, #f5efe4)",
              border: "1px solid rgba(184,146,46,0.35)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="text-[#b8922e] flex-shrink-0">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#100802] mb-1 group-hover:text-[#b8922e] transition-colors">
                      Planetary Pathway
                    </h3>
                    <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase">
                      3 Monate · Ausbildung Astrogeografie
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#100802] font-medium">ab 1.700 €</p>
                    <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#b8922e] tracking-wider">Self-Study / 1:1 auf Anfrage</p>
                  </div>
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-light leading-relaxed">
                  Du bist Astrologin, Coach oder begeisterte Astro-Kennerin und möchtest Astrogeografie professionell anbieten? Der Planetary Pathway ist Annas umfassendes Ausbildungsprogramm — von den Grundlagen der Astrokartographie bis zur eigenständigen Praxis mit Klientinnen.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.12em] text-[#6b4800] uppercase mt-5 group-hover:text-[#b8922e] transition-colors">
                  Mehr erfahren →
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* 3. Buch */}
        <div className="max-w-5xl mx-auto mb-16">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
            Das Buch · Authority
          </p>
          <a
            href={buch.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-sm p-8 md:p-10 hover:-translate-y-1 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #fffdf9, #f5efe4)",
              border: "1px solid rgba(184,146,46,0.35)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex-shrink-0 flex flex-col items-center gap-4 md:w-40">
                <div className="text-[#b8922e]">{buch.icon}</div>
                <span
                  className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(184,146,46,0.15)",
                    border: "1px solid rgba(184,146,46,0.35)",
                    color: "#b8922e",
                  }}
                >
                  {buch.badge}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#100802] mb-1 group-hover:text-[#b8922e] transition-colors">
                  {buch.name}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase mb-5">
                  {buch.tagline}
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#6b4800] font-light mb-4 leading-snug">
                  {buch.quote}
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-light leading-relaxed mb-6">
                  {buch.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {buch.highlights.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <Check size={15} className="text-[#b8922e] mt-0.5 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-cormorant)] text-[#1c1008] text-base font-light leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.12em] text-[#6b4800] uppercase group-hover:text-[#b8922e] transition-colors">
                  Jetzt bestellen →
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* 4. Weitere Angebote */}
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
            Weitere Angebote
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "Kurse & Akademie",
                desc: "Raumastrologie (49 €), Cosmic Coordinates (97 € / PRO 397 €), iPhone Masterclass (179 €) & Akademie — lerne Astrogeografie in deinem Tempo.",
                href: "/kurse",
                icon: <Compass size={24} />,
              },
              {
                label: "Sessions & Extras",
                desc: "Follow-Up, Birthday Astrogeo, Frag Anna, Urlaubsplanung & Gutschein.",
                href: "/weitere-angebote",
                icon: <Star size={24} />,
              },
            ].map((tile) => (
              <a
                key={tile.href}
                href={tile.href}
                className="group rounded-sm p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                style={{
                  background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
                  border: "1px solid rgba(184,146,46,0.2)",
                }}
              >
                <div className="text-[#b8922e] mb-4">{tile.icon}</div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#100802] mb-3 group-hover:text-[#b8922e] transition-colors">
                  {tile.label}
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-base text-[#1c1008] font-light leading-relaxed flex-1">
                  {tile.desc}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.12em] text-[#6b4800] uppercase mt-5 group-hover:text-[#b8922e] transition-colors">
                  Mehr entdecken →
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Reassurance */}
        <p className="text-center font-[family-name:var(--font-cormorant)] text-base text-[#1c1008] mt-14 font-light">
          Nicht sicher, was passt?{" "}
          <a
            href="#buchen"
            className="text-[#b8922e] underline underline-offset-4 hover:text-[#6b4800] transition-colors"
          >
            Schreib mir direkt
          </a>
          {" "}— ich helfe dir, das Richtige zu finden.
        </p>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
