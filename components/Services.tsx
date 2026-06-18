"use client";

import { Check, Globe, Star, Users, Gift, Calendar, BookOpen, Compass, Map, Smartphone, GraduationCap } from "lucide-react";

const flagship = {
  id: "orts-horoskop",
  badge: "",
  icon: <Globe size={32} />,
  name: "Astrokartographie (Orts-Horoskop)",
  tagline: "Astrokartographie · Orts-Horoskop",
  duration: "90 Min. · Zoom",
  price: "495 €",
  description:
    "Für Menschen, die eine echte Entscheidung zu treffen haben — Standortwahl, Umzug, Auswanderung, Business-Aufbau. Ich verbinde astrogeografische Tiefe mit deinem konkreten Horoskop und sage dir präzise: dieser Ort, dieser Zeitpunkt, diese Richtung.",
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

<div className="p-8 md:p-10">
        <div className="text-[#b8922e] mb-6">{service.icon}</div>

        <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#100802] mb-2">
          {service.name}
        </h3>
        <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#1c1008] uppercase mb-2">
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
          <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#1c1008] tracking-wider mb-6 -mt-4">
            {service.priceNote}
          </p>
        )}

        <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-light leading-relaxed mb-8">
          {service.description}
        </p>

        <div className="section-divider mb-8" />

        <ul className="space-y-3 mb-10">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <Check size={16} className="text-[#b8922e] mt-0.5 flex-shrink-0" />
              <span className="font-[family-name:var(--font-cormorant)] text-[#1c1008] text-base font-light leading-snug">
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

        <p className="text-center font-[family-name:var(--font-montserrat)] text-xs text-[#1c1008] mt-3 tracking-wider">
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
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#3d2800] uppercase mb-6">
            Meine Angebote
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#100802] leading-[1.15] mb-6">
            Finde deinen Weg zu
            <br />
            <em className="gold-gradient not-italic font-medium">
              deinem Kraftort
            </em>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#1c1008] max-w-2xl mx-auto font-light">
            Nicht "Astrologin, die auch Astrogeografie macht" — sondern die Spezialistin für finanziell und persönlich bedeutsame Standortentscheidungen. Von der Einzelperson bis zum Unternehmer.
          </p>
        </div>

        {/* 1. Flagship – Orts-Horoskop */}
        <div className="max-w-5xl mx-auto mb-8">
          <MainCard service={flagship} fullWidth />
        </div>

        {/* 2. Paar-Analyse */}
        <div className="max-w-5xl mx-auto mb-16">
          <MainCard service={paarReading} fullWidth />
        </div>

        {/* 3. Planetary Pathway – Ausbildung */}
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
                      Erfolg Astrogeografie · Ausbildung
                    </p>
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

        {/* 4. Buch – Authority-Anker */}
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
                <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#3d2800] font-light mb-4 leading-snug">
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

        {/* 5. Teaser-Links zu Unterseiten */}
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
            Weitere Angebote
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "Kurse & Akademie",
                desc: "Mini-Kurse, Akademie & Masterclass Astro Gold — lerne Astrogeografie in deinem Tempo.",
                href: "/kurse",
                icon: <Compass size={24} />,
              },
              {
                label: "Sessions & Extras",
                desc: "Follow-Up, Birthday Astrogeo, Frag Anna, Urlaubsplanung & Gutschein.",
                href: "/weitere-angebote",
                icon: <Star size={24} />,
              },
              {
                label: "Orakel & Karten",
                desc: "Kipperkarten, Skatkarten & Jahreslegung Orakelkarten.",
                href: "/orakel",
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
