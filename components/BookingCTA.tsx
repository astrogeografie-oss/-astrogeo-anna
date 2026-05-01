"use client";

import { Mail, ArrowRight } from "lucide-react";

export default function BookingCTA() {
  return (
    <section
      id="buchen"
      className="relative py-40 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #1a0f2e 0%, #07060f 60%)",
      }}
    >
      {/* Decorative rings */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(201,168,76,0.06)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(201,168,76,0.04)",
        }}
      />

      {/* Glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#c9a84c] uppercase mb-6">
          Bereit?
        </p>

        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-7xl font-light text-[#f0ead6] leading-[1.1] mb-8">
          Dein Kraftort wartet.
          <br />
          <em className="gold-shimmer not-italic font-medium">
            Ich auch.
          </em>
        </h2>

        <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#9b8fa8] font-light max-w-2xl mx-auto mb-14 leading-relaxed">
          Schreib mir eine E-Mail oder buche direkt deinen Termin. Ich freue
          mich auf dich und deinen kosmischen Weg.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:hallo@astrogeo-anna.de"
            className="btn-gold inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
          >
            <Mail size={16} />
            hallo@astrogeo-anna.de
          </a>
          <a
            href="#angebote"
            className="btn-outline-gold inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
          >
            Angebote ansehen
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Quick reassurances */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "Antwort innerhalb 24h",
            "Kostenlose Erstberatung",
            "Flexible Terminwahl",
            "Auf Deutsch & Englisch",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div
                className="w-1 h-1 rounded-full"
                style={{ background: "#c9a84c" }}
              />
              <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#9b8fa8] uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
