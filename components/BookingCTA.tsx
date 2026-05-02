"use client";

import { Mail, ArrowRight, Calendar } from "lucide-react";

export default function BookingCTA() {
  return (
    <section
      id="buchen"
      className="relative py-40 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f5efe4 0%, #ede5d4 100%)" }}
    >
      {/* Decorative gold circle */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(201,168,76,0.12)" }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(201,168,76,0.07)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#c9a84c] uppercase mb-6">
          Bereit?
        </p>

        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-7xl font-light text-[#2c2010] leading-[1.1] mb-8">
          Dein Kraftort wartet.
          <br />
          <em className="gold-shimmer not-italic font-semibold">Ich auch.</em>
        </h2>

        <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#7a6a58] font-light max-w-2xl mx-auto mb-14 leading-relaxed">
          Buch direkt deinen Wunschtermin — oder starte kostenlos mit einem
          Orientierungs-Call. Ich freue mich auf dich.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://calendly.com/astrogeo/orientierungs-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
          >
            <Calendar size={16} />
            Kostenloser Orientierungs-Call
          </a>
          <a
            href="https://calendly.com/astrogeo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
          >
            Alle Termine ansehen
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mb-16">
          <a
            href="mailto:astrogeografie@gmail.com"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-cormorant)] text-base text-[#7a6a58] hover:text-[#c9a84c] transition-colors duration-300"
          >
            <Mail size={14} />
            astrogeografie@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            "Antwort innerhalb 24h",
            "Orientierungs-Call kostenlos",
            "Flexible Terminwahl",
            "Zoom · Deutsch & Englisch",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#c9a84c]" />
              <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#7a6a58] uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
