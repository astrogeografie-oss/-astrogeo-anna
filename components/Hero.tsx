"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }}
    >
      {/* Dark warm overlay so text is readable */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(20,14,6,0.55) 0%, rgba(30,20,8,0.45) 50%, rgba(15,10,4,0.6) 100%)",
        }}
      />

      {/* Decorative thin gold lines */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(184,146,46,0.5), transparent)" }} />
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(184,146,46,0.3), transparent)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Overline */}
        <p
          className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.45em] text-[#e8c97a] uppercase mb-8 opacity-0"
          style={{ animation: "fadeInUp 0.8s 0.2s ease forwards" }}
        >
          Deutschlands führende Astrokartographie-Expertin
        </p>

        {/* Main Headline */}
        <h1
          className="font-[family-name:var(--font-cormorant)] font-light text-5xl md:text-7xl lg:text-8xl leading-[1.08] text-white mb-8 opacity-0"
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
          className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#e8e0d0] max-w-2xl mx-auto mb-12 leading-relaxed font-light opacity-0"
          style={{ animation: "fadeInUp 0.9s 0.6s ease forwards" }}
        >
          Astrokartographie — es gibt Orte
          auf dieser Erde, wo du leichter liebst, klarer denkst und
          erfolgreicher wirst. Ich zeige dir, wo diese Orte sind.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0"
          style={{ animation: "fadeInUp 0.9s 0.8s ease forwards" }}
        >
          <a
            href="#buchen"
            className="btn-gold px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.2em] rounded-sm w-full sm:w-auto"
          >
            Meinen Kraftort entdecken
          </a>
          <a
            href="https://drive.google.com/file/d/12NfkiL3Cyv8QkS8EobHOoiKEn-qSz4i_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 btn-outline-gold px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm w-full sm:w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            0 Euro Guide — Gratis
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
            { number: "20+", label: "Jahre Erfahrung" },
            { number: "30+", label: "Länder analysiert" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-semibold text-[#b8922e]">
                {stat.number}
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#c8bfb0] uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#ueber-mich"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#b8922e] opacity-50 hover:opacity-100 transition-opacity duration-300 animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
