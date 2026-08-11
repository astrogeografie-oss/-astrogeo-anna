import type { Metadata } from "next";
import { Headphones, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PODCAST_URL = "https://open.spotify.com/show/0uBKraHMLzQmz4q1qFe8dH";

export const metadata: Metadata = {
  title: "ASTRO – Der Podcast | Anna Astrogeografie",
  description:
    "ASTRO – der Podcast mit Anna (Astro-Kartografie) und Jonathan (Astro-Polarity). Jetzt kostenlos auf Spotify anhören.",
  alternates: {
    canonical: "https://www.astrogeoanna.com/podcast",
  },
  openGraph: {
    title: "ASTRO – Der Podcast mit Anna & Jonathan",
    description:
      "Astrokartographie trifft Astro-Polarity: Anna und Jonathan über Orte, Energie und die Sterne. Jetzt auf Spotify hören.",
    type: "website",
    url: "https://www.astrogeoanna.com/podcast",
  },
};

function YinYangIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2a10 10 0 000 20 5 5 0 010-10 5 5 0 000-10z"
        fill="currentColor"
      />
      <circle cx="12" cy="7" r="1.4" fill="var(--podcast-bg, #fffdf9)" />
      <circle cx="12" cy="17" r="1.4" fill="currentColor" />
      <circle cx="12" cy="12" r="9.6" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

const hosts = [
  {
    icon: <Globe size={28} />,
    name: "Anna",
    focus: "Astro-Kartografie",
    desc: "Wo auf der Erde entfaltest du deine beste Energie? Anna bringt ihre Expertise aus der Astrokartographie in jede Folge ein.",
  },
  {
    icon: <YinYangIcon />,
    name: "Jonathan",
    focus: "Astro-Polarity",
    desc: "Zwischen den Polen: Jonathan beleuchtet Astrologie als Spiel von Gegensätzen und Ausgleich.",
  },
];

export default function PodcastPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24" style={{ background: "linear-gradient(to bottom, #fdf9f3, #faf7f2)" }}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 rounded-sm px-6 py-14 md:py-16" style={{ background: "linear-gradient(135deg, #0c0d1a 0%, #1a1530 50%, #0c0d1a 100%)", border: "1px solid rgba(184,146,46,0.3)" }}>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#b8922e] uppercase mb-6">
              Der Podcast
            </p>
            <h1 className="font-[family-name:var(--font-archivo-black)] uppercase tracking-[0.005em] text-4xl md:text-6xl leading-[1.1] text-white mb-6">
              <span className="gold-gradient-on-dark">ASTRO</span>
            </h1>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#c8bfb0] max-w-xl mx-auto font-light leading-relaxed mb-10">
              Astrokartographie trifft Astro-Polarity: Anna &amp; Jonathan über Orte, Energie und die Sterne.
            </p>
            <a
              href={PODCAST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 px-8 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm uppercase"
            >
              <Headphones size={18} />
              Jetzt auf Spotify anhören
            </a>
          </div>

          {/* Hosts */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {hosts.map((h) => (
              <div
                key={h.name}
                className="rounded-sm p-7"
                style={{
                  background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
                  border: "1px solid rgba(184,146,46,0.2)",
                }}
              >
                <div className="text-[#b8922e] mb-4">{h.icon}</div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#100802] mb-1">
                  {h.name}
                </h2>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#b8922e] uppercase mb-3">
                  {h.focus}
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-base text-[#1c1008] font-light leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Spotify embed */}
          <div className="mb-16">
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#3d2800] uppercase mb-6 text-center">
              Aktuelle Folgen
            </p>
            <div className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(184,146,46,0.2)" }}>
              <iframe
                title="ASTRO Podcast auf Spotify"
                src="https://open.spotify.com/embed/show/0uBKraHMLzQmz4q1qFe8dH?utm_source=generator&theme=0"
                width="100%"
                height="352"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>

          {/* Back */}
          <div className="text-center">
            <a
              href="/"
              className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] text-[#6b4800] uppercase hover:text-[#b8922e] transition-colors"
            >
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
