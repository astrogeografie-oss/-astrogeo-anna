"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f5efe4 0%, #faf7f2 40%, #eee8d8 100%)",
      }}
    >
      {/* Subtle warm radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 30%, rgba(232,201,122,0.18) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Decorative thin gold lines */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }} />
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Overline */}
        <p
          className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.45em] text-[#c9a84c] uppercase mb-8 opacity-0"
          style={{ animation: "fadeInUp 0.8s 0.2s ease forwards" }}
        >
          Deutschlands führende Astrogeografie &amp; Astrokartografie-Expertin
        </p>

        {/* Main Headline */}
        <h1
          className="font-[family-name:var(--font-cormorant)] font-light text-5xl md:text-7xl lg:text-8xl leading-[1.08] text-[#2c2010] mb-8 opacity-0"
          style={{ animation: "fadeInUp 0.9s 0.4s ease forwards" }}
        >
          Dein Leben beginnt
          <br />
          <em className="gold-shimmer not-italic font-semibold">
            am richtigen Ort.
          </em>
        </h1>

        {/* Subheadline */}
        <p
          className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#7a6a58] max-w-2xl mx-auto mb-12 leading-relaxed font-light opacity-0"
          style={{ animation: "fadeInUp 0.9s 0.6s ease forwards" }}
        >
          Astrogeografie · Astrokartografie · Astrocartography — es gibt Orte
          auf dieser Erde, wo du leichter liebst, klarer denkst und
          erfolgreicher wirst. Ich zeige dir, wo diese Orte sind.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0"
          style={{ animation: "fadeInUp 0.9s 0.8s ease forwards" }}
        >
          <a
            href="https://calendly.com/astrogeo/orientierungs-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.2em] rounded-sm w-full sm:w-auto"
          >
            Meinen Kraftort entdecken
          </a>
          <a
            href="#angebote"
            className="btn-outline-gold px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm w-full sm:w-auto"
          >
            Angebote ansehen
          </a>
        </div>

        {/* Social proof bar */}
        <div
          className="mt-20 flex flex-wrap justify-center gap-12 opacity-0"
          style={{ animation: "fadeInUp 0.9s 1s ease forwards" }}
        >
          {[
            { number: "500+", label: "Transformationen" },
            { number: "98%", label: "Weiterempfehlung" },
            { number: "6+", label: "Jahre Erfahrung" },
            { number: "30+", label: "Länder analysiert" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-semibold text-[#c9a84c]">
                {stat.number}
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#7a6a58] uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#ueber-mich"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#c9a84c] opacity-50 hover:opacity-100 transition-opacity duration-300 animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
