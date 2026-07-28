"use client";

import Image from "next/image";
import { Mail, ArrowRight, Calendar } from "lucide-react";

export default function BookingCTA() {
  return (
    <section
      id="buchen"
      className="relative py-40 overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(245,239,228,0.94) 0%, rgba(237,229,212,0.9) 100%)" }}
      />

      {/* Decorative gold circle */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(184,146,46,0.12)" }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(184,146,46,0.07)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#3d2800] uppercase mb-6">
          Bereit?
        </p>

        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-7xl font-bold text-[#100802] leading-[1.1] mb-8">
          Dein Kraftort wartet.
          <br />
          <em className="gold-shimmer not-italic font-semibold">Ich auch.</em>
        </h2>

        <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#1c1008] font-light max-w-2xl mx-auto mb-8 leading-relaxed">
          Buch direkt deinen Wunschtermin — oder schreib mir eine Nachricht.
          Ich freue mich auf dich.
        </p>

        <div className="inline-flex items-center gap-2 bg-[#fffdf9] border border-[rgba(184,146,46,0.4)] rounded-sm px-5 py-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#b8922e] animate-pulse flex-shrink-0" />
          <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.12em] text-[#6b4800] uppercase">
            Nächste freie Termine: innerhalb 1–2 Wochen
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://calendly.com/astrogeo/60"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
          >
            <Calendar size={16} />
            Jetzt Termin buchen
          </a>
          <a
            href="mailto:anna@astrogeoanna.info"
            className="btn-outline-gold inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
          >
            Frage stellen
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mb-16">
          <a
            href="mailto:anna@astrogeoanna.info"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-cormorant)] text-base text-[#1c1008] hover:text-[#b8922e] transition-colors duration-300"
          >
            <Mail size={14} />
            anna@astrogeoanna.info
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            "Antwort innerhalb 24h",
            "Flexible Terminwahl",
            "Zoom · Deutsch & Englisch",
            "Geld-zurück-Garantie",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#b8922e]" />
              <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-[#1c1008] uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
