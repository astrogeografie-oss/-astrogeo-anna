"use client";

import { Check, Globe, Star, Users, Clock, Gift, Calendar, BookOpen, Compass, Map } from "lucide-react";

const mainServices = [
  {
    id: "orts-horoskop",
    badge: "Flagship",
    icon: <Globe size={32} />,
    name: "Astrogeografie (Orts-Horoskop)",
    tagline: "Astrogeografie · Orts-Horoskop",
    duration: "120 Min. · Zoom",
    description:
      "Astrogeografie verbindet dein persönliches Horoskop (Radix) mit einer Weltkarte — und zeigt dir, welche Orte auf der Erde ideal für Liebe, Karriere oder inneren Ausgleich sind.",
    includes: [
      "Einführung in die Astrogeografie & Planeten-Erklärungen (PDF)",
      "Analyse: Seelenformel, Best Planet, Mondknoten, Chiron, Human Design",
      "Überblick Geburtsort, aktueller Standort & Wunschort",
      "Relocation-Chart, Karma-Linien, Destiny-Crossings, Vortex-Punkte",
      "Asteroiden & sensitive Punkte",
      "Progressions-Chart & Solar-Radix (bester Zeitpunkt für Veränderung)",
      "Screenshots, Bilder & Aufzeichnung des Zoom-Calls",
    ],
    highlight: true,
    url: "https://calendly.com/astrogeo/60",
    cta: "Jetzt buchen",
    note: "Benötigt: genaues Geburtsdatum, Uhrzeit & Geburtsort",
  },
  {
    id: "paare",
    badge: "Für Paare",
    icon: <Users size={32} />,
    name: "Astrogeografie für Paare",
    tagline: "Euer gemeinsamer Traumort auf der Erde",
    duration: "120 Min. · Zoom",
    description:
      "Astrogeografie berechnet den idealen Traumort für Paare, die ins Ausland ziehen möchten — mit Blick auf Beziehungsdynamik, seelische Verbundenheit und Entwicklungspotenziale.",
    includes: [
      "Gesamteindruck der Beziehung & worum es euch wirklich geht",
      "Seelische Verbundenheit: was euch zusammengeführt hat",
      "Entwicklungs- & Konfliktpotenziale erkennen",
      "Gemeinsame Astrokartografie für beide Geburtsmomente",
      "Top-Empfehlungen für euren gemeinsamen Wohnort",
      "Viele Unterlagen, Screenshots & Aufzeichnung",
    ],
    highlight: false,
    url: "https://calendly.com/astrogeo/astrogeografie-fur-paare",
    cta: "Als Paar buchen",
    note: "Beide Geburtszeiten & -orte notwendig",
  },
];

const additionalServices = [
  {
    icon: <Clock size={18} />,
    name: "Orientierungs-Call",
    desc: "Kostenlos · 30 Min. — Wir schauen, ob die Chemie stimmt.",
    url: "https://calendly.com/astrogeo/orientierungs-call",
    free: true,
  },
  {
    icon: <Star size={18} />,
    name: "Frag Anna – Astro-Session",
    desc: "30 Min. — Alle deine Fragen zu Astrogeografie, gezielt & auf den Punkt.",
    url: "https://calendly.com/astrogeo/frag-anna-deine-personliche-astro-session",
    free: false,
  },
  {
    icon: <Calendar size={18} />,
    name: "Follow-Up Session",
    desc: "45 Min. — Für bestehende Klientinnen: aktuelle Themen & neue Zyklen.",
    url: "https://calendly.com/astrogeo/astrogeo-follow-up",
    free: false,
  },
  {
    icon: <Star size={18} />,
    name: "Birthday Astrogeo",
    desc: "30 Min. — Finde den perfekten Geburtstags-Ort für dein nächstes Solarjahr.",
    url: "https://calendly.com/astrogeo/birthday-astrogeo",
    free: false,
  },
  {
    icon: <Star size={18} />,
    name: "Progression Chart",
    desc: "30 Min. — Deine innere Seelenentwicklung im Zeitverlauf.",
    url: "https://calendly.com/astrogeo/porgessions-chart",
    free: false,
  },
  {
    icon: <Star size={18} />,
    name: "Kipperkarten Reading",
    desc: "45 Min. — Klarheit in Liebe, Beruf & persönlicher Entwicklung.",
    url: "https://calendly.com/astrogeo/kipperkarten-reading-grosse-tafel-klon",
    free: false,
  },
  {
    icon: <Star size={18} />,
    name: "Skatkarten Orakel",
    desc: "30 Min. — Vergangenheit, Gegenwart & Zukunft mit empathischer Führung.",
    url: "https://calendly.com/astrogeo/skatkarten",
    free: false,
  },
  {
    icon: <Gift size={18} />,
    name: "Gutschein",
    desc: "Für alle Angebote — das perfekte Geschenk. Dauerhaft gültig.",
    url: "https://calendly.com/astrogeo/gutschein",
    free: false,
  },
  {
    icon: <Map size={18} />,
    name: "Mini-Kurs Raumastrologie",
    desc: "Lerne, wie astrologische Energien Räume prägen — und wie du bewusst mit ihnen lebst.",
    url: "https://astrogeoanna.thrivecart.com/die-folie-die-dein-leben-vereandert/",
    free: false,
  },
  {
    icon: <Compass size={18} />,
    name: "Mini-Kurs Cosmic Coordinates",
    desc: "Dein Wegweiser zum Wohlfühlort — Azimuth, Häuser & die 10 Planeten der Astrogeografie.",
    url: "https://astrogeoanna.thrivecart.com/cosmic-coordinates-2026/",
    free: false,
  },
  {
    icon: <BookOpen size={18} />,
    name: "Astro-Code – Das Buch",
    desc: "Deine Seele hat ein GPS. Zeit, es endlich zu aktivieren. Das Buch zur Astrogeografie von Anna Thoma.",
    url: "https://publishde.bookmundo.com/books/22022143",
    free: false,
  },
];

export default function Services() {
  return (
    <section
      id="angebote"
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#7a5c18] uppercase mb-6">
            Meine Angebote
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#2c2010] leading-[1.15] mb-6">
            Finde deinen Weg zu
            <br />
            <em className="gold-gradient not-italic font-medium">
              deinem Kraftort
            </em>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#7a6a58] max-w-2xl mx-auto font-light">
            Ob du solo deinen idealen Ort suchst, als Paar umziehen möchtest
            oder schnelle Klarheit brauchst — hier findest du das Richtige.
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {mainServices.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                service.highlight ? "glow-gold" : ""
              }`}
              style={{
                background: service.highlight
                  ? "linear-gradient(145deg, #fffdf9, #f5efe4)"
                  : "linear-gradient(145deg, #fffdf9, #faf7f2)",
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
                <div className="text-[#c9a84c] mb-6">{service.icon}</div>

                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#2c2010] mb-2">
                  {service.name}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#7a6a58] uppercase mb-2">
                  {service.tagline}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#c9a84c] mb-6">
                  {service.duration}
                </p>

                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#7a6a58] font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="section-divider mb-8" />

                <ul className="space-y-3 mb-10">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <Check size={16} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-cormorant)] text-[#7a6a58] text-base font-light leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-4 px-8 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] uppercase rounded-sm transition-all duration-300 ${
                    service.highlight ? "btn-gold" : "btn-outline-gold"
                  }`}
                >
                  {service.cta}
                </a>

                <p className="text-center font-[family-name:var(--font-montserrat)] text-xs text-[#7a6a58] mt-3 tracking-wider">
                  {service.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#c9a84c] uppercase text-center mb-10">
            Weitere Angebote
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-cosmic rounded-sm p-6 hover:border-[rgba(201,168,76,0.3)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#c9a84c]">{s.icon}</span>
                  {s.free && (
                    <span className="font-[family-name:var(--font-montserrat)] text-xs text-[#c9a84c] border border-[rgba(201,168,76,0.4)] px-2 py-0.5 rounded-full tracking-wider">
                      Kostenlos
                    </span>
                  )}
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#2c2010] mb-2 group-hover:text-[#c9a84c] transition-colors">
                  {s.name}
                </h4>
                <p className="font-[family-name:var(--font-cormorant)] text-sm text-[#7a6a58] font-light leading-snug">
                  {s.desc}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Reassurance */}
        <p className="text-center font-[family-name:var(--font-cormorant)] text-base text-[#7a6a58] mt-14 font-light">
          Nicht sicher, was passt? Starte mit dem{" "}
          <a
            href="https://calendly.com/astrogeo/orientierungs-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9a84c] underline underline-offset-4 hover:text-[#e8c97a] transition-colors"
          >
            kostenlosen Orientierungs-Call
          </a>
          .
        </p>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
