"use client";

import { Instagram, ExternalLink } from "lucide-react";

const posts = [
  {
    emoji: "🌍",
    label: "Kraftort-Analyse",
    caption: "Warum manche Orte dich erden — und andere dich leer zurücklassen.",
  },
  {
    emoji: "✨",
    label: "Planetenlinien",
    caption: "Venus, Jupiter, Sonne — welche Linie zieht dich an? Ein Deep Dive.",
  },
  {
    emoji: "🗺️",
    label: "Local Space",
    caption: "Deine Wohnung als astrologische Karte: Raumastrologie im Alltag.",
  },
  {
    emoji: "🌙",
    label: "Parans & Kreuzungen",
    caption: "Wenn zwei Planetenlinien sich treffen — Orte mit doppelter Energie.",
  },
];

export default function InstagramCTA() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#faf7f2" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#6a4c10] uppercase mb-6">
            Follow Along
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#2c2010] leading-[1.15] mb-6">
            Astrokartographie im Alltag —
            <br />
            <em className="gold-gradient not-italic font-medium">täglich auf Instagram</em>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#52402e] font-light max-w-xl mx-auto">
            Hinter den Kulissen, Karten-Insights, Klientinnen-Geschichten und
            kosmische Impulse für deinen Alltag.
          </p>
        </div>

        {/* Preview cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {posts.map((post) => (
            <div
              key={post.label}
              className="card-warm rounded-sm p-6 text-center"
            >
              <div className="text-4xl mb-3">{post.emoji}</div>
              <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#b8922e] uppercase mb-2">
                {post.label}
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-base text-[#52402e] font-light leading-snug">
                {post.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/astrogeo.anna"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
          >
            <Instagram size={16} />
            @astrogeo.anna folgen
            <ExternalLink size={14} className="opacity-70" />
          </a>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
