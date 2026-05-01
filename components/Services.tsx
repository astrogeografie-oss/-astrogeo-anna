"use client";

import { Check, Globe, Stars } from "lucide-react";

const services = [
  {
    id: "cosmic-coordinates",
    badge: "Flagship",
    icon: <Globe size={32} />,
    name: "Cosmic Coordinates",
    tagline: "Die vollständige Astrogeografie-Analyse",
    price: "297",
    currency: "€",
    duration: "90 Min.",
    description:
      "Mein intensivstes Angebot. Wir schauen uns gemeinsam deine persönliche Weltkarte an — mit allen Planeten, Linien und Zonen. Du erfährst, welche Regionen und Städte dich in Liebe, Karriere, Gesundheit und persönlichem Wachstum unterstützen.",
    includes: [
      "Vollständige Astrocartography-Karte für deinen Geburtsmoment",
      "Analyse von 10 Planeten & 4 Hauptachsen (AC, DC, MC, IC)",
      "Top 3 Empfehlungen für Wohn- und Arbeitorte",
      "Reiseempfehlungen für 2025 / 2026",
      "Detaillierte Auswertung deiner aktuellen Wohnlage",
      "Aufzeichnung der Session (MP4 + Audio)",
      "30 Tage Nachfrage per E-Mail inklusive",
    ],
    highlight: true,
    cta: "Cosmic Coordinates buchen",
  },
  {
    id: "astro-reading",
    badge: "Bestseller",
    icon: <Stars size={32} />,
    name: "Astrologisches Reading",
    tagline: "Dein persönliches Geburtschart-Reading",
    price: "147",
    currency: "€",
    duration: "60 Min.",
    description:
      "Dein Geburtschart ist ein einzigartiger Fingerabdruck deiner Seele. Im Reading schauen wir, was dich antreibt, was dich hemmt und welche Themen in deinem aktuellen Lebenszyklus besonders relevant sind.",
    includes: [
      "Tiefes Geburtschart-Reading (Radix-Analyse)",
      "Aktuelle Planetentransits & ihr Einfluss auf dich",
      "Persönliche Themen: Liebe, Karriere, Spiritualität",
      "Jahresprognose für dein wichtigstes Lebensthema",
      "Aufzeichnung der Session",
      "Schriftliche Zusammenfassung per E-Mail",
    ],
    highlight: false,
    cta: "Reading buchen",
  },
];

export default function Services() {
  return (
    <section
      id="angebote"
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top right, #0d1b3e22 0%, transparent 60%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#c9a84c] uppercase mb-6">
            Meine Angebote
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#f0ead6] leading-[1.15] mb-6">
            Zwei Wege zu deiner
            <br />
            <em className="gold-gradient not-italic font-medium">
              kosmischen Klarheit
            </em>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#9b8fa8] max-w-2xl mx-auto font-light">
            Ob du deinen Kraftort auf der Erde suchst oder deine innere
            Landschaft verstehen willst — hier findest du das passende Angebot.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                service.highlight
                  ? "glow-gold"
                  : "hover:border-[rgba(201,168,76,0.3)]"
              }`}
              style={{
                background: service.highlight
                  ? "linear-gradient(145deg, #1a0f2e, #0d1b3e)"
                  : "linear-gradient(145deg, #0f0c1a, #0d1020)",
                border: service.highlight
                  ? "1px solid rgba(201,168,76,0.4)"
                  : "1px solid rgba(201,168,76,0.1)",
              }}
            >
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span
                  className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                  style={{
                    background: service.highlight
                      ? "rgba(201,168,76,0.2)"
                      : "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#c9a84c",
                  }}
                >
                  {service.badge}
                </span>
              </div>

              <div className="p-8 md:p-10">
                {/* Icon */}
                <div className="text-[#c9a84c] mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#f0ead6] mb-2">
                  {service.name}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#9b8fa8] uppercase mb-6">
                  {service.tagline}
                </p>

                {/* Price */}
                <div className="flex items-end gap-2 mb-6">
                  <span className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#c9a84c]">
                    {service.currency}
                    {service.price}
                  </span>
                  <span className="font-[family-name:var(--font-montserrat)] text-sm text-[#9b8fa8] mb-2 tracking-wider">
                    / {service.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#9b8fa8] font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="section-divider mb-8" />

                {/* Includes */}
                <ul className="space-y-3 mb-10">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <Check
                        size={16}
                        className="text-[#c9a84c] mt-0.5 flex-shrink-0"
                      />
                      <span className="font-[family-name:var(--font-cormorant)] text-[#9b8fa8] text-base font-light leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#buchen"
                  className={`block text-center py-4 px-8 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] uppercase rounded-sm transition-all duration-300 ${
                    service.highlight
                      ? "btn-gold"
                      : "btn-outline-gold"
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance note */}
        <p className="text-center font-[family-name:var(--font-cormorant)] text-base text-[#9b8fa8] mt-10 font-light">
          Nicht sicher, was passt? Schreib mir —{" "}
          <a
            href="#buchen"
            className="text-[#c9a84c] underline underline-offset-4 hover:text-[#e8c97a] transition-colors"
          >
            ich berate dich kostenlos
          </a>
          .
        </p>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
