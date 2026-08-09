import type { Metadata } from "next";
import { Check, GraduationCap, Star, Users, Globe, BookOpen, Compass } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Planetary Pathway – Ausbildung Astrogeografie | Anna Thoma",
  description:
    "Die professionelle Ausbildung in Astrogeografie & Astrokartographie. Für Astrologinnen, Coaches und Astro-Kennerinnen, die Standort-Astrologie eigenständig anbieten möchten.",
};

const modules = [
  {
    icon: <Globe size={20} />,
    title: "Modul 1 — Grundlagen Astrokartographie",
    desc: "ACG-Linien verstehen: Planeten auf der Weltkarte, Winkel-Linien (ASC, MC, DSC, IC) und ihre Bedeutung.",
  },
  {
    icon: <Compass size={20} />,
    title: "Modul 2 — Local Space & Raumastrologie",
    desc: "Von der Weltkarte in den eigenen Alltag: Local Space, Azimuth-Linien und Raumastrologie praktisch anwenden.",
  },
  {
    icon: <Star size={20} />,
    title: "Modul 3 — Seelenformel & Karma-Linien",
    desc: "Mondknoten, Chiron, Asteroi­den und Destiny-Crossings — die spirituelle Tiefendimension der Karte.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Modul 4 — Relocation-Chart & Solar-Radix",
    desc: "Progressionen und Solarjahr: den richtigen Zeitpunkt für Veränderungen erkennen und kommunizieren.",
  },
  {
    icon: <Users size={20} />,
    title: "Modul 5 — Session-Führung & Klientinnen-Arbeit",
    desc: "Wie du eine professionelle Astrogeo-Session aufbaust, Grenzen kommunizierst und Klientinnen führst.",
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Modul 6 — Business & Positionierung",
    desc: "Dein Angebot entwickeln, Preise setzen und als Astrogeografie-Expertin sichtbar werden.",
  },
];

const tiers = [
  {
    name: "Self-Study",
    price: "1.700 €",
    highlight: false,
    rateNote: null,
    includes: [
      "Alle 6 Video-Module (Selbststudium, jederzeit abrufbar)",
      "Schritt-für-Schritt-Anleitungen & Checklisten",
      "Astrogold App-Tutorials für jede Technik",
      "Telegram-Gruppe mit allen Teilnehmerinnen",
      "1:1-Call mit Anna alle 2 Wochen (3 Monate)",
      "Zertifikat: Certified Astrogeografie Practitioner",
      "Lebenslanger Zugang inkl. aller Updates",
    ],
    cta: "Self-Study starten",
    url: "https://astrogeoanna.thrivecart.com/planetary-pathway--erfolg-astrogeografie/",
  },
  {
    name: "Persönliche Begleitung",
    price: "4.900 €",
    highlight: true,
    includes: [
      "Alles aus Self-Study",
      "Intensive 1:1-Begleitung über 3 Monate",
      "Wöchentliche individuelle Calls mit Anna",
      "Persönliches Feedback auf deine Sessions",
      "Individuelle Positionierungs-Beratung",
      "Priorität & direkte Erreichbarkeit",
      "Für Coaches & Astrologinnen, die schnell skalieren wollen",
    ],
    cta: "Persönliche Begleitung anfragen",
    url: "mailto:anna@astrogeoanna.info",
    rateNote: "Raten über 6 Monate möglich",
  },
];

export default function PlanetaryPathwayPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24" style={{ background: "linear-gradient(to bottom, #fdf9f3, #faf7f2)" }}>
        <div className="max-w-4xl mx-auto px-6">

          {/* Hero */}
          <div className="text-center mb-16 rounded-sm px-6 py-14 md:py-16" style={{ background: "linear-gradient(135deg, #2c1f08 0%, #3d2a0a 50%, #2c1f08 100%)", border: "1px solid rgba(184,146,46,0.3)" }}>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#b8922e] uppercase mb-6">
              Ausbildung · Für Astrologinnen & Astro-Kennerinnen
            </p>
            <h1 className="font-[family-name:var(--font-archivo-black)] uppercase tracking-[0.005em] text-4xl md:text-6xl leading-[1.05] text-white mb-6">
              Planetary <span className="gold-gradient-on-dark">Pathway</span>
            </h1>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#c8bfb0] max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Annas umfassendes Ausbildungsprogramm in Astrogeografie — von den Grundlagen der Astrokartographie bis zur eigenständigen Praxis mit Klientinnen.
            </p>
            <a
              href="https://astrogeoanna.thrivecart.com/planetary-pathway--erfolg-astrogeografie/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] uppercase rounded-sm"
            >
              Jetzt einschreiben
            </a>
          </div>

          {/* For whom */}
          <div
            className="rounded-sm p-8 md:p-10 mb-12"
            style={{
              background: "linear-gradient(145deg, #fffdf9, #f5efe4)",
              border: "1px solid rgba(184,146,46,0.3)",
            }}
          >
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase mb-6">
              Für wen ist das?
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#1c1008] font-light leading-relaxed">
              Du bist Astrologin, Coach oder begeisterte Astro-Kennerin und möchtest Astrogeografie professionell anbieten? Du willst deinen Klientinnen zeigen, wo auf der Welt sie aufblühen — und dafür bezahlt werden?
              <br /><br />
              Der Planetary Pathway gibt dir das gesamte Handwerk, die Technik und das Selbstvertrauen dazu.
            </p>
          </div>

          {/* Curriculum */}
          <div className="mb-12">
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
              Curriculum · 6 Module
            </p>
            <div className="space-y-4">
              {modules.map((m, i) => (
                <div
                  key={m.title}
                  className="flex gap-6 rounded-sm p-6"
                  style={{
                    background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
                    border: "1px solid rgba(184,146,46,0.15)",
                  }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(184,146,46,0.12)", color: "#b8922e" }}>
                    <span className="font-[family-name:var(--font-montserrat)] text-xs font-medium">{i + 1}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#b8922e]">{m.icon}</span>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#100802]">
                        {m.title}
                      </h3>
                    </div>
                    <p className="font-[family-name:var(--font-cormorant)] text-base text-[#1c1008] font-light leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tiers */}
          <div className="mb-16">
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase text-center mb-10">
              Investment · Wähle deine Variante
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`rounded-sm p-8 md:p-10 flex flex-col ${t.highlight ? "glow-gold" : ""}`}
                  style={{
                    background: t.highlight
                      ? "linear-gradient(145deg, #fffdf9, #f5efe4)"
                      : "linear-gradient(145deg, #fffdf9, #faf7f2)",
                    border: t.highlight
                      ? "1px solid rgba(184,146,46,0.5)"
                      : "1px solid rgba(184,146,46,0.2)",
                  }}
                >
                  <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase mb-2">
                    {t.name}
                  </p>
                  <div className="mb-6">
                    <p className="font-[family-name:var(--font-cormorant)] text-4xl font-medium text-[#100802]">
                      {t.price}
                    </p>
                    {t.rateNote && (
                      <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#6b4800] tracking-wider mt-1">
                        {t.rateNote}
                      </p>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {t.includes.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <Check size={15} className="text-[#b8922e] mt-0.5 flex-shrink-0" />
                        <span className="font-[family-name:var(--font-cormorant)] text-[#1c1008] text-base font-light leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={t.url}
                    target={t.url.startsWith("mailto") ? undefined : "_blank"}
                    rel={t.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className={`block text-center py-4 px-8 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] uppercase rounded-sm transition-all duration-300 ${
                      t.highlight ? "btn-gold" : "btn-outline-gold"
                    }`}
                  >
                    {t.cta}
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center font-[family-name:var(--font-cormorant)] text-sm text-[#1c1008] font-light mt-6">
              Ratenzahlung auf Anfrage möglich ·{" "}
              <a href="mailto:anna@astrogeoanna.info" className="text-[#b8922e] underline underline-offset-4 hover:text-[#6b4800] transition-colors">
                anna@astrogeoanna.info
              </a>
            </p>
          </div>

          {/* Back */}
          <div className="text-center">
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
