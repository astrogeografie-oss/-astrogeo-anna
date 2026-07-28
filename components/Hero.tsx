"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#faf7f2] pt-20 pb-40 overflow-hidden">
      {/* Flowing full-bleed background: Anna portrait */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/photo_2026-07-28_07-13-07.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "50% 40%" }}
          sizes="100vw"
          priority
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(250,247,242,0.38)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 75% 65% at 50% 38%, transparent 0%, #faf7f2 88%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Overline */}
        <div className="text-center mb-10">
          <p
            className="inline-block font-[family-name:var(--font-montserrat)] text-xs tracking-[0.45em] text-[#3d2800] uppercase px-6 py-3 rounded-full"
            style={{
              background: "rgba(250,247,242,0.75)",
              border: "1px solid rgba(184,146,46,0.3)",
              backdropFilter: "blur(4px)",
            }}
          >
            Deutschlands führende Astrokartographie-Expertin
          </p>
        </div>

        {/* Flanking headline */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16 lg:min-h-[340px] lg:-mx-16 xl:-mx-32">
          <h1
            className="font-[family-name:var(--font-montserrat)] font-medium uppercase tracking-[0.06em] text-2xl md:text-3xl text-center lg:text-right text-[#8a6a1e]"
            style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.35))" }}
          >
            Dein Leben beginnt
          </h1>

          <h1
            className="font-[family-name:var(--font-montserrat)] font-medium uppercase tracking-[0.06em] text-2xl md:text-3xl text-center lg:text-left text-[#8a6a1e]"
            style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.35))" }}
          >
            am richtigen Ort.
          </h1>
        </div>

        {/* Statement text — sits on the plain page background, no card/box at all */}
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-6">
          <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#100802] leading-relaxed font-bold mb-10">
            Die Spezialistin für finanziell und persönlich bedeutsame
            Standortentscheidungen — von der Einzelperson bis zum Unternehmer.
            Du spürst es bereits. Lass uns jetzt herausfinden,
            wohin dein Leben dich ruft.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
            <a
              href="#buchen"
              className="btn-gold px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.2em] rounded-sm w-full sm:flex-1 text-center"
            >
              Jetzt meinen Kraftort buchen
            </a>
            <a
              href="https://drive.google.com/file/d/12NfkiL3Cyv8QkS8EobHOoiKEn-qSz4i_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold px-10 py-4 font-[family-name:var(--font-montserrat)] tracking-[0.2em] rounded-sm w-full sm:flex-1 inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              0 Euro Guide — Gratis
            </a>
          </div>
        </div>

        {/* Social proof bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-12">
          {[
            { number: "1.000+", label: "Transformationen" },
            { number: "98%", label: "Weiterempfehlung" },
            { number: "20+", label: "Jahre Erfahrung" },
            { number: "30+", label: "Länder analysiert" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-semibold text-[#b8922e]">
                {stat.number}
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#1c1008] uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#ueber-mich"
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-[#b8922e] opacity-50 hover:opacity-100 transition-opacity duration-300 animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
