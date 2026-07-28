"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#faf7f2] pt-16 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Overline */}
        <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.45em] text-[#6b4800] uppercase text-center mb-10">
          Deutschlands führende Astrokartographie-Expertin
        </p>

        {/* Flanking script headline + central portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-4">
          <h1 className="script-accent text-4xl md:text-5xl text-center lg:text-right order-1 lg:order-1">
            Dein Leben beginnt
          </h1>

          <div className="relative order-2 mx-auto w-72 h-96 md:w-96 md:h-[520px]">
            <div
              className="relative w-full h-full overflow-hidden rounded-sm"
              style={{ border: "1px solid rgba(184,146,46,0.35)" }}
            >
              <Image
                src="/anna-portrait.jpg"
                alt="Anna – Astrokartographie-Expertin"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 288px, 384px"
                priority
              />
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8" style={{ borderTop: "1px solid rgba(184,146,46,0.6)", borderLeft: "1px solid rgba(184,146,46,0.6)" }} />
            <div className="absolute -bottom-3 -right-3 w-8 h-8" style={{ borderBottom: "1px solid rgba(184,146,46,0.6)", borderRight: "1px solid rgba(184,146,46,0.6)" }} />
          </div>

          <h1 className="script-accent text-4xl md:text-5xl text-center lg:text-left order-3 lg:order-3">
            am richtigen Ort.
          </h1>
        </div>

        {/* Overlapping statement banner */}
        <div className="relative -mt-8 md:-mt-12 z-10">
          <div className="card-warm max-w-3xl mx-auto rounded-sm px-8 py-10 md:px-14 md:py-12 text-center shadow-md">
            <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#1c1008] leading-relaxed font-light mb-10">
              Astrokartographie für Menschen, die wirklich entscheiden:
              Wohin ziehe ich? Wo entsteht finanzieller Flow? Wo gehört mein Business hin?
              Ich gebe dir die Antwort — präzise, nicht unverbindlich.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
              <a
                href="#buchen"
                className="btn-gold px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.2em] rounded-sm w-full sm:flex-1 text-center"
              >
                Meinen Kraftort entdecken
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
