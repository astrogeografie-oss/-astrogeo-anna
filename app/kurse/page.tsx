import type { Metadata } from "next";
import { Check, Compass, Map, GraduationCap, Smartphone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Raumastrologie & Astrokartographie Kurse | Anna Astrogeografie",
  description:
    "Lerne Raumastrologie (Local Space Astrology) und Astrokartographie in deinem eigenen Tempo. Mini-Kurse für Einsteiger, die Akademie als nächster Schritt und die Masterclass Astro Gold App.",
};

const kurse = [
  {
    icon: <Compass size={32} />,
    badge: "Einstieg",
    name: "Mini-Kurs Cosmic Coordinates",
    tagline: "Online-Kurs · Selbststudium",
    price: "97 €",
    originalPrice: null,
    priceNote: "PRO-Version: 397 €",
    desc: "Lerne Standort-Astrologie (Local Space) in deinem eigenen Tempo. Du verstehst Azimuth, Häuser & die 10 Planetenlinien — und kannst deine eigene Karte selbst lesen.",
    includes: [
      "Azimuth & Häuser verstehen",
      "Die 10 Planetenlinien deuten",
      "Eigene Local-Space-Karte selbst lesen",
      "Selbststudium, jederzeit abrufbar",
    ],
    url: "https://astrogeoanna.thrivecart.com/cosmic-coordinates-2026/",
    cta: "Zum Kurs",
    funnelBridge: null,
  },
  {
    icon: <Map size={32} />,
    badge: "Einstieg",
    name: "Mini-Kurs Raumastrologie",
    tagline: "Online-Kurs · Selbststudium",
    price: "49 €",
    originalPrice: null,
    priceNote: null,
    desc: "Lerne selbst, wie du deine persönliche Astro-Folie erstellst und deine Wohnung auf Vordermann bringst — das Café am Merkur-Tisch für lebhafte Gespräche, der Zoom-Call auf der Jupiter-Linie für Erfolg.",
    includes: [
      "Persönliche Astro-Folie erstellen",
      "Räume & Linien auslesen",
      "Alltag astrologisch optimieren",
      "Selbststudium, jederzeit abrufbar",
    ],
    url: "https://astrogeoanna.thrivecart.com/die-folie-die-dein-leben-vereandert/",
    cta: "Zum Kurs",
    funnelBridge: null,
  },
  {
    icon: <GraduationCap size={32} />,
    badge: "Nächster Schritt",
    name: "Die Akademie",
    tagline: "Online-Akademie · Selbststudium · Nach Cosmic Coordinates",
    price: null,
    originalPrice: null,
    priceNote: null,
    desc: "Du hast Cosmic Coordinates gemacht und weißt, wie du Standort-Astrologie liest? Jetzt geht es tiefer: In der Akademie lernst du die ACG-Linien — das globale Pendant zu Local Space — und so vieles mehr.",
    includes: [
      "ACG-Linien: Astrocartography auf der Weltkarte",
      "Planeten-Linien deuten & anwenden",
      "Von Local Space zu globalem Kraftort",
      "Und so vieles mehr …",
    ],
    url: "https://astrogeoanna.thrivecart.com/the-place-to-be-special-offer-copy-2/",
    cta: "Zur Akademie",
    funnelBridge: null,
  },
  {
    icon: <Smartphone size={32} />,
    badge: "Live-Kurs",
    name: "Masterclass Astro Gold App",
    tagline: "iPhone · 2 Std. · Live",
    price: "149 €",
    originalPrice: "299 €",
    priceNote: null,
    desc: "In zwei Stunden lernst du, deine eigenen Astrokartographie-Linien in der Astro Gold App zu lesen — konkret, Schritt für Schritt, live mit Anna. Du siehst, wo auf der Welt deine Planeten wirken. Und genau dort merken die meisten: die Linien zu sehen ist erst der Anfang.",
    includes: [
      "Einrichtung & erste Schritte in der App",
      "ACG-Karte erstellen, lesen & exportieren",
      "Eigene Planeten-Linien verstehen",
      "Live mit Anna — Fragen direkt beantworten",
    ],
    url: "https://comfy-cucurucho-c8c105.netlify.app/",
    cta: "Zur Masterclass",
    funnelBridge: {
      text: "Jetzt kennst du deine Linien — aber was sie wirklich für deine Entscheidung bedeuten, das zeige ich dir im Reading.",
      cta: "Zum Astrogeografie-Reading →",
      href: "/#angebote",
    },
  },
];

export default function KursePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24" style={{ background: "linear-gradient(to bottom, #fdf9f3, #faf7f2)" }}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#3d2800] uppercase mb-6">
              Kurse & Akademie
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#100802] leading-[1.15] mb-6">
              Lerne Raumastrologie & Astrogeografie
              <br />
              <em className="gold-gradient not-italic font-medium">in deinem Tempo</em>
            </h1>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#1c1008] max-w-2xl mx-auto font-light leading-relaxed">
              Von der Raumastrologie für dein Zuhause bis zur professionellen Astrokartographie-Praxis —
              alle Kurse und die Akademie auf einen Blick.
            </p>
          </div>

          {/* Kurse */}
          <div className="space-y-8">
            {kurse.map((k) => (
              <div
                key={k.name}
                className="rounded-sm p-8 md:p-10"
                style={{
                  background: "linear-gradient(145deg, #fffdf9, #f5efe4)",
                  border: "1px solid rgba(184,146,46,0.25)",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 flex flex-col items-start gap-3 md:w-44">
                    <div className="text-[#b8922e]">{k.icon}</div>
                    <span
                      className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(184,146,46,0.12)",
                        border: "1px solid rgba(184,146,46,0.3)",
                        color: "#b8922e",
                      }}
                    >
                      {k.badge}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
                      <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#100802]">
                        {k.name}
                      </h2>
                      {k.price && (
                        <div className="text-right">
                          {k.originalPrice && (
                            <span className="font-[family-name:var(--font-cormorant)] text-sm text-[#6b4800] line-through mr-2">
                              {k.originalPrice}
                            </span>
                          )}
                          <span className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#b8922e]">
                            {k.price}
                          </span>
                          {k.priceNote && (
                            <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#6b4800] tracking-wider mt-0.5">
                              {k.priceNote}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase mb-4">
                      {k.tagline}
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-base text-[#1c1008] font-light leading-relaxed mb-5">
                      {k.desc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {k.includes.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
                          <Check size={14} className="text-[#b8922e] mt-0.5 flex-shrink-0" />
                          <span className="font-[family-name:var(--font-cormorant)] text-[#1c1008] text-sm font-light leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={k.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block btn-gold px-8 py-3 text-xs font-[family-name:var(--font-montserrat)] tracking-[0.15em] uppercase rounded-sm"
                    >
                      {k.cta}
                    </a>

                    {k.funnelBridge && (
                      <div
                        className="mt-8 rounded-sm px-6 py-5"
                        style={{
                          background: "rgba(184,146,46,0.07)",
                          border: "1px solid rgba(184,146,46,0.3)",
                        }}
                      >
                        <p className="font-[family-name:var(--font-cormorant)] text-base text-[#100802] font-light leading-relaxed italic mb-3">
                          »{k.funnelBridge.text}«
                        </p>
                        <a
                          href={k.funnelBridge.href}
                          className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase hover:text-[#6b4800] transition-colors"
                        >
                          {k.funnelBridge.cta}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upsell Planetary Pathway */}
          <div
            className="mt-12 rounded-sm p-8 text-center"
            style={{
              background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
              border: "1px solid rgba(184,146,46,0.2)",
            }}
          >
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-light mb-4">
              Willst du Astrogeografie professionell anbieten?
            </p>
            <a
              href="/planetary-pathway"
              className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] text-[#b8922e] uppercase hover:text-[#6b4800] transition-colors"
            >
              Zur Ausbildung Planetary Pathway →
            </a>
          </div>

          {/* Back */}
          <div className="text-center mt-12">
            <a
              href="/#angebote"
              className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] text-[#6b4800] uppercase hover:text-[#b8922e] transition-colors"
            >
              ← Alle Angebote
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
