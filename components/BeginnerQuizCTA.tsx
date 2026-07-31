"use client";

import { GraduationCap, ArrowRight } from "lucide-react";

export default function BeginnerQuizCTA() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#faf7f2" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="card-warm rounded-sm p-10 md:p-14 text-center">
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: "rgba(184,146,46,0.12)", border: "1px solid rgba(184,146,46,0.4)" }}
            >
              <GraduationCap size={28} className="text-[#b8922e]" />
            </div>
          </div>

          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#3d2800] uppercase mb-6">
            Für Einsteiger
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#100802] leading-[1.15] mb-6">
            Wie gut kennst du dich schon
            <br />
            <em className="gold-gradient not-italic font-medium">mit Astrogeografie aus?</em>
          </h2>

          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#1c1008] font-light max-w-xl mx-auto mb-10">
            Teste in ein paar Minuten dein Wissen als Einsteiger:in — ganz unverbindlich
            und kostenlos.
          </p>

          <a
            href="https://heartfelt-dango-2ccd79.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
          >
            Jetzt Test starten
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
