"use client";

import { Check, Globe, Star, Users, Gift, Calendar, BookOpen, Compass, Map, Sun, Smartphone, GraduationCap } from "lucide-react";

const flagship = {
  id: "orts-horoskop",
  badge: "Flagship",
  icon: <Globe size={32} />,
  name: "Astrokartographie (Orts-Horoskop)",
  tagline: "Astrokartographie · Orts-Horoskop",
  duration: "90 Min. · Zoom",
  price: "495 €",
  description:
    "Astrokartographie verbindet dein persönliches Horoskop (Radix) mit einer Weltkarte — und zeigt dir, welche Orte auf der Erde ideal für Liebe, Karriere oder inneren Ausgleich sind.",
  includes: [
    "Einführung in die Astrokartographie & Planeten-Erklärungen (PDF)",
    "Analyse: Seelenformel, Best Planet, Mondknoten, Chiron, Human Design",
    "Überblick Geburtsort, aktueller Standort & Wunschort",
    "Relocation-Chart, Karma-Linien, Destiny-Crossings, Vortex-Punkte",
    "Asteroiden & sensitive Punkte",
    "Progressions-Chart & Solar-Radix (bester Zeitpunkt für Veränderung)",
    "Screenshots, Bilder & Aufzeichnung des Zoom-Calls",
  ],
  url: "https://calendly.com/astrogeo/60",
  cta: "Jetzt buchen",
  note: "Benötigt: genaues Geburtsdatum, Uhrzeit & Geburtsort",
};

const paarReading = {
  id: "paare",
  badge: "Für Paare",
  icon: <Users size={32} />,
  name: "Astrokartographie für Paare",
  tagline: "Euer gemeinsamer Traumort auf der Erde",
  duration: "2 × 90 Min. · Zoom",
  price: "777 €",
  priceNote: "Einzelperson 90 Min. | Paar 2 Sessions à 90 Min.",
  description:
    "Astrokartographie berechnet den idealen Traumort für Paare, die ins Ausland ziehen möchten — mit Blick auf Beziehungsdynamik, seelische Verbundenheit und Entwicklungspotenziale.",
  includes: [
    "Gesamteindruck der Beziehung & worum es euch wirklich geht",
    "Seelische Verbundenheit: was euch zusammengeführt hat",
    "Entwicklungs- & Konfliktpotenziale erkennen",
    "Gemeinsame Astrokartographie für beide Geburtsmomente",
    "Top-Empfehlungen für euren gemeinsamen Wohnort",
    "Viele Unterlagen, Screenshots & Aufzeichnung",
  ],
  url: "https://calendly.com/astrogeo/astrogeografie-fur-paare",
  cta: "Als Paar buchen",
  note: "Beide Geburtszeiten & -orte notwendig",
};

const akademie = {
  icon: <GraduationCap size={32} />,
  name: "Die Akademie",
  tagline: "Nächster Schritt · Online-Akademie · Selbststudium",
  badge: "Upsell aus Cosmic Coordinates",
  desc: "Du hast Cosmic Coordinates gemacht und weißt, wie du Standort-Astrologie liest? Jetzt geht es tiefer: In der Akademie lernst du die ACG-Linien (Astrocartography) — das globale Pendant zu Local Space — und so vieles mehr. Deine Karte, deine Welt.",
  url: "https://astrogeoanna.thrivecart.com/the-place-to-be-special-offer-copy-2/",
  includes: [
    "ACG-Linien: Astrocartography auf der Weltkarte",
    "Planeten-Linien deuten & anwenden",
    "Von Local Space zu globalem Kraftort",
    "Und so vieles mehr …",
  ],
};

const miniKurse = [
  {
    icon: <Compass size={24} />,
    name: "Mini-Kurs Cosmic Coordinates",
    tagline: "Einstieg · Online-Kurs · Selbststudium",
    desc: "Lerne Standort-Astrologie (Local Space) in deinem eigenen Tempo. Du verstehst Azimuth, Häuser & die 10 Planetenlinien — und kannst deine eigene Karte selbst lesen.",
    url: "https://astrogeoanna.thrivecart.com/cosmic-coordinates-2026/",
  },
  {
    icon: <Map size={24} />,
    name: "Mini-Kurs Raumastrologie",
    tagline: "Einstieg · Online-Kurs · Selbststudium",
    desc: "Lerne selbst, wie du deine persönliche Astro-Folie erstellst und deine Wohnung auf Vordermann bringst — das Café am Merkur-Tisch für lebhafte Gespräche, den Zoom-Call auf der Jupiter-Linie für Erfolg. Dein Alltag, astrologisch optimiert.",
    url: "https://astrogeoanna.thrivecart.com/die-folie-die-dein-leben-vereandert/",
  },
];

const buch = {
  icon: <BookOpen size={24} />,
  name: "Astro-Code – Das Buch",
  tagline: "Vertiefung · Buch",
  desc: "Deine Seele hat ein GPS. Zeit, es endlich zu aktivieren. Das Buch zur Astrokartographie von Anna Thoma.",
  url: "https://publishde.bookmundo.com/books/22022143",
};

const additionalServices = [
  {
    icon: <Star size={18} />,
    name: "Birthday Astrogeo",
    desc: "45 Min. — Finde den perfekten Geburtstags-Ort für dein nächstes Solarjahr.",
    url: "https://calendly.com/astrogeo/birthday-astrogeo",
    free: false,
    price: "222 €",
  },
  {
    icon: <Calendar size={18} />,
    name: "Follow-Up Session",
    desc: "45 Min. — Für bestehende Klientinnen: aktuelle Themen & neue Zyklen.",
    url: "https://calendly.com/astrogeo/astrogeo-follow-up",
    free: false,
    price: "197 €",
  },
  {
    icon: <Smartphone size={18} />,
    name: "Masterclass Astro Gold App",
    desc: "iPhone · Lerne die App für deine persönliche Astrokartographie-Analyse.",
    url: "https://astrogeoanna.thrivecart.com/astrogoldappiphone/",
    free: false,
    price: "97 €",
  },
  {
    icon: <Star size={18} />,
    name: "Frag Anna – Astro-Session",
    desc: "30 Min. — Alle deine Fragen zur Astrokartographie, gezielt & auf den Punkt.",
    url: "https://calendly.com/astrogeo/frag-anna-deine-personliche-astro-session",
    free: false,
    price: "147 €",
  },
  {
    icon: <Star size={18} />,
    name: "Urlaubsplanung 2026",
    desc: "30 Min. — Dein Urlaubsspot, der wirklich zu deiner Energie passt.",
    url: "https://calendly.com/astrogeo/urlaubsplanung-2026-schon-ready",
    free: false,
    price: "147 €",
  },
  {
    icon: <Sun size={18} />,
    name: "Jahreslegung Orakelkarten",
    desc: "30 Min. — Alle Herausforderungen des kommenden Jahres mit Lösungs-Tipps.",
    url: "https://calendly.com/astrogeo/jahreslegung-mit-den-orakelkarten",
    free: false,
    price: "97 €",
  },
  {
    icon: <Star size={18} />,
    name: "Kipperkarten Reading",
    desc: "45 Min. — Klarheit in Liebe, Beruf & persönlicher Entwicklung.",
    url: "https://calendly.com/astrogeo/kipperkarten-reading-grosse-tafel-klon",
    free: false,
    price: "47 €",
  },
  {
    icon: <Star size={18} />,
    name: "Skatkarten Orakel",
    desc: "30 Min. — Vergangenheit, Gegenwart & Zukunft mit empathischer Führung.",
    url: "https://calendly.com/astrogeo/skatkarten",
    free: false,
    price: "47 €",
  },
  {
    icon: <Gift size={18} />,
    name: "Gutschein",
    desc: "Für alle Angebote — das perfekte Geschenk. Dauerhaft gültig.",
    url: "https://calendly.com/astrogeo/gutschein",
    free: false,
  },
];

function MainCard({ service, fullWidth = false }: { service: typeof flagship | typeof paarReading; fullWidth?: boolean }) {
  const isHighlight = service.id === "orts-horoskop";
  return (
    <div
      className={`relative rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        isHighlight ? "glow-gold" : ""
      } ${fullWidth ? "w-full" : ""}`}
      style={{
        background: isHighlight
          ? "linear-gradient(145deg, #fffdf9, #f5efe4)"
          : "linear-gradient(145deg, #fffdf9, #faf7f2)",
        border: isHighlight
          ? "1px solid rgba(184,146,46,0.4)"
          : "1px solid rgba(184,146,46,0.1)",
      }}
    >
      {/* Badge */}
      <div className="absolute top-6 right-6">
        <span
          className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full"
          style={{
            background: isHighlight
              ? "rgba(184,146,46,0.2)"
              : "rgba(184,146,46,0.08)",
            border: "1px solid rgba(184,146,46,0.3)",
            color: "#b8922e",
          }}
        >
          {service.badge}
        </span>
      </div>

      <div className="p-8 md:p-10">
        <div className="text-[#b8922e] mb-6">{service.icon}</div>

        <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#2c2010] mb-2">
          {service.name}
        </h3>
        <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#52402e] uppercase mb-2">
          {service.tagline}
        </p>
        <div className="flex items-baseline gap-4 mb-6">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#b8922e]">
            {service.duration}
          </p>
          <span
            className="font-[family-name:var(--font-cormorant)] text-2xl font-medium"
            style={{ color: "#b8922e" }}
          >
            {service.price}
          </span>
        </div>
        {"priceNote" in service && service.priceNote && (
          <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#52402e] tracking-wider mb-6 -mt-4">
            {service.priceNote}
          </p>
        )}

        <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#52402e] font-light leading-relaxed mb-8">
          {service.description}
        </p>

        <div className="section-divider mb-8" />

        <ul className="space-y-3 mb-10">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <Check size={16} className="text-[#b8922e] mt-0.5 flex-shrink-0" />
              <span className="font-[family-name:var(--font-cormorant)] text-[#52402e] text-base font-light leading-snug">
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
            isHighlight ? "btn-gold" : "btn-outline-gold"
          }`}
        >
          {service.cta}
        </a>

        <p className="text-center font-[family-name:var(--font-montserrat)] text-xs text-[#52402e] mt-3 tracking-wider">
          {service.note}
        </p>
      </div>
    </div>
  );
}

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
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#6a4c10] uppercase mb-6">
            Meine Angebote
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#2c2010] leading-[1.15] mb-6">
            Finde deinen Weg zu
            <br />
            <em className="gold-gradient not-italic font-medium">
              deinem Kraftort
            </em>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#52402e] max-w-2xl mx-auto font-light">
            Ob du solo deinen idealen Ort suchst, als Paar umziehen möchtest
            oder schnelle Klarheit brauchst — hier findest du das Richtige.
          </p>
        </div>

        {/* 1. Flagship – Hauptangebot */}
        <div className="max-w-5xl mx-auto mb-8">
          <MainCard service={flagship} fullWidth />
        </div>

        {/* 2. Paar Reading */}
        <div className="max-w-5xl mx-auto mb-16">
          <MainCard service={paarReading} fullWidth />
        </div>

        {/* 3. Mini-Kurse – Einstieg */}
        <div className="max-w-5xl mx-auto mb-16">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
            Einstieg · Mini-Kurse
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {miniKurse.map((kurs) => (
              <a
                key={kurs.name}
                href={kurs.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-sm p-8 hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
                  border: "1px solid rgba(184,146,46,0.2)",
                }}
              >
                <div className="text-[#b8922e] mb-4">{kurs.icon}</div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#2c2010] mb-1 group-hover:text-[#b8922e] transition-colors">
                  {kurs.name}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase mb-4">
                  {kurs.tagline}
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-base text-[#52402e] font-light leading-relaxed">
                  {kurs.desc}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* 4. Akademie – Upsell aus Cosmic Coordinates */}
        <div className="max-w-5xl mx-auto mb-16">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
            Nächster Schritt · Akademie
          </p>
          <a
            href={akademie.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-sm p-8 md:p-10 hover:-translate-y-1 transition-all duration-300 glow-gold"
            style={{
              background: "linear-gradient(145deg, #fffdf9, #f5efe4)",
              border: "1px solid rgba(184,146,46,0.4)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="text-[#b8922e] flex-shrink-0">
                {akademie.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#2c2010] mb-1 group-hover:text-[#b8922e] transition-colors">
                      {akademie.name}
                    </h3>
                    <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase">
                      {akademie.tagline}
                    </p>
                  </div>
                  <span
                    className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full flex-shrink-0"
                    style={{
                      background: "rgba(184,146,46,0.2)",
                      border: "1px solid rgba(184,146,46,0.3)",
                      color: "#b8922e",
                    }}
                  >
                    Nach Cosmic Coordinates
                  </span>
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#52402e] font-light leading-relaxed mb-6">
                  {akademie.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {akademie.includes.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <Check size={15} className="text-[#b8922e] mt-0.5 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-cormorant)] text-[#52402e] text-base font-light leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.12em] text-[#8a6420] uppercase group-hover:text-[#b8922e] transition-colors">
                  Jetzt zur Akademie →
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* 5. Ausbildung – Planetary Pathway */}
        <div className="max-w-5xl mx-auto mb-16">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
            Ausbildung · Für Astrologinnen & Astro-Kenner
          </p>
          <a
            href="https://astrogeoanna.thrivecart.com/planetary-pathway--erfolg-astrogeografie/"
            target="_blank"
            rel="noopener noreferrer"
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
                    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#2c2010] mb-1 group-hover:text-[#b8922e] transition-colors">
                      Planetary Pathway
                    </h3>
                    <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase">
                      Erfolg Astrogeografie · Ausbildung
                    </p>
                  </div>
                  <span
                    className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full flex-shrink-0"
                    style={{
                      background: "rgba(184,146,46,0.15)",
                      border: "1px solid rgba(184,146,46,0.3)",
                      color: "#b8922e",
                    }}
                  >
                    Für Profis
                  </span>
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#52402e] font-light leading-relaxed">
                  Du bist Astrologin, Coach oder begeisterte Astro-Kennerin und möchtest Astrogeografie professionell anbieten? Der Planetary Pathway ist Annas umfassendes Ausbildungsprogramm — von den Grundlagen der Astrokartographie bis zur eigenständigen Praxis mit Klientinnen.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.12em] text-[#8a6420] uppercase mt-5 group-hover:text-[#b8922e] transition-colors">
                  Mehr erfahren →
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* 6. Buch – Vertiefung */}
        <div className="max-w-5xl mx-auto mb-16">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
            Vertiefung · Das Buch
          </p>
          <a
            href={buch.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-sm p-8 hover:-translate-y-1 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
              border: "1px solid rgba(184,146,46,0.15)",
            }}
          >
            <div className="text-[#b8922e] flex-shrink-0">{buch.icon}</div>
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#2c2010] mb-1 group-hover:text-[#b8922e] transition-colors">
                {buch.name}
              </h3>
              <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase mb-3">
                {buch.tagline}
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-base text-[#52402e] font-light leading-relaxed">
                {buch.desc}
              </p>
            </div>
          </a>
        </div>

        {/* 7. Weitere Angebote */}
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
            Weitere Angebote
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-cosmic rounded-sm p-6 hover:border-[rgba(184,146,46,0.3)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#b8922e]">{s.icon}</span>
                    {s.free && (
                      <span className="font-[family-name:var(--font-montserrat)] text-xs text-[#b8922e] border border-[rgba(184,146,46,0.4)] px-2 py-0.5 rounded-full tracking-wider">
                        Kostenlos
                      </span>
                    )}
                  </div>
                  {"price" in s && s.price && (
                    <span className="font-[family-name:var(--font-cormorant)] text-base font-medium text-[#b8922e]">
                      {s.price}
                    </span>
                  )}
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#2c2010] mb-2 group-hover:text-[#b8922e] transition-colors">
                  {s.name}
                </h4>
                <p className="font-[family-name:var(--font-cormorant)] text-sm text-[#52402e] font-light leading-snug">
                  {s.desc}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Reassurance */}
        <p className="text-center font-[family-name:var(--font-cormorant)] text-base text-[#52402e] mt-14 font-light">
          Nicht sicher, was passt?{" "}
          <a
            href="#buchen"
            className="text-[#b8922e] underline underline-offset-4 hover:text-[#8a6420] transition-colors"
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
