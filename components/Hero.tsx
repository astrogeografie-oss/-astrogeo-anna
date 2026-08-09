"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#faf7f2] pt-16 pb-24 lg:pb-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text column */}
          <div className="text-center lg:text-left">
            <p
              className="inline-block font-[family-name:var(--font-montserrat)] text-xs tracking-[0.45em] text-[#3d2800] uppercase px-6 py-3 rounded-full mb-8"
              style={{
                background: "rgba(250,247,242,0.75)",
                border: "1px solid rgba(184,146,46,0.3)",
              }}
            >
              Deutschlands führende Astrokartographie-Expertin
            </p>

            <h1 className="font-[family-name:var(--font-playfair)] font-semibold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15] text-[#100802] mb-6">
              Dein Leben beginnt{" "}
              <span className="gold-gradient">am richtigen Ort.</span>
            </h1>

            <p className="font-[family-name:var(--font-bricolage)] font-medium text-lg md:text-xl text-[#100802] leading-relaxed tracking-[0.005em] max-w-xl mx-auto lg:mx-0 mb-10">
              Es gibt einen Ort auf dieser Erde, an dem sich alles leichter anfühlt —
              klarer, freier, mehr du. Das spürst du schon lange, auch wenn du es dir
              noch nicht eingestehst. Ich zeige ihn dir. Seit über 20 Jahren — für
              dich genauso wie für dein Unternehmen. Lass uns herausfinden, welcher
              Ort dich ruft.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch">
              <a
                href="#buchen"
                className="btn-gold px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.2em] rounded-sm text-center"
              >
                Jetzt meinen Kraftort buchen
              </a>
              <a
                href="https://drive.google.com/file/d/12NfkiL3Cyv8QkS8EobHOoiKEn-qSz4i_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-10 py-4 font-[family-name:var(--font-montserrat)] tracking-[0.2em] rounded-sm inline-flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                0€-Guide — in 5 Minuten deine ersten 3 Kraftorte entdecken
              </a>
            </div>
          </div>

          {/* Photo column */}
          <div
            className="relative rounded-sm overflow-hidden min-h-[360px] lg:min-h-[560px] lg:h-full"
            style={{ border: "1px solid rgba(184,146,46,0.3)" }}
          >
            <Image
              src="/photo_2026-07-28_07-13-07.jpg"
              alt="Anna Thoma, Expertin für Astrokartographie"
              fill
              className="object-cover"
              style={{ objectPosition: "60% 22%" }}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>

        {/* Social proof bar */}
        <div className="mt-16 lg:mt-20 flex flex-wrap justify-center gap-12">
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
