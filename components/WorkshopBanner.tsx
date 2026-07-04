"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export default function WorkshopBanner() {
  return (
    <section
      className="relative py-14 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2c1f08 0%, #3d2a0a 50%, #2c1f08 100%)",
        borderBottom: "1px solid rgba(184,146,46,0.3)",
      }}
    >
      {/* Subtle gold shimmer lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(184,146,46,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* Icon */}
          <div
            className="flex-shrink-0 w-16 h-16 rounded-sm flex items-center justify-center"
            style={{ background: "rgba(184,146,46,0.15)", border: "1px solid rgba(184,146,46,0.4)" }}
          >
            <Sparkles size={28} className="text-[#e8c97a]" />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#b8922e] uppercase mb-2">
              Live · Plätze begrenzt
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light text-white leading-snug">
              Der <em className="gold-shimmer not-italic font-semibold">Workshop im Herbst</em>
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-base md:text-lg text-[#c8bfb0] font-light mt-1">
              Sichere dir jetzt deinen Platz und erforsche live mit Anna deine kosmischen Koordinaten.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <a
              href="https://astrogeoanna.activehosted.com/f/27"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 px-8 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm whitespace-nowrap"
            >
              Jetzt anmelden
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
