"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

function Stars() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;
    const container = starsRef.current;
    const count = 150;

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2.5 + 0.5;
      const delay = Math.random() * 5;
      const duration = Math.random() * 4 + 3;
      const opacity = Math.random() * 0.6 + 0.2;

      star.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: white;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${opacity};
        animation: twinkle ${duration}s ${delay}s ease-in-out infinite;
        pointer-events: none;
      `;
      container.appendChild(star);
    }

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return <div ref={starsRef} className="absolute inset-0 overflow-hidden" aria-hidden />;
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, #1a0f2e 0%, #07060f 40%), radial-gradient(ellipse at 70% 80%, #0d1b3e 0%, #07060f 50%)",
      }}
    >
      <Stars />

      {/* Orbit rings */}
      <div
        aria-hidden
        className="orbit-ring"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(0deg)",
          animationDuration: "40s",
        }}
      />
      <div
        aria-hidden
        className="orbit-ring"
        style={{
          width: "900px",
          height: "900px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(20deg)",
          animationDuration: "70s",
          animationDirection: "reverse",
        }}
      />

      {/* Glowing orb */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Overline */}
        <p
          className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#c9a84c] uppercase mb-8 opacity-0 animate-[fadeInUp_0.8s_0.2s_ease_forwards]"
          style={{ animationFillMode: "forwards" }}
        >
          Deutschlands führende Astrogeografie &amp; Astrokartografie-Expertin
        </p>

        {/* Main Headline */}
        <h1
          className="font-[family-name:var(--font-cormorant)] font-light text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-[#f0ead6] mb-8 opacity-0"
          style={{ animation: "fadeInUp 0.9s 0.4s ease forwards" }}
        >
          Dein Leben beginnt
          <br />
          <em className="gold-shimmer not-italic font-medium">
            am richtigen Ort.
          </em>
        </h1>

        {/* Subheadline */}
        <p
          className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#9b8fa8] max-w-2xl mx-auto mb-12 leading-relaxed font-light opacity-0"
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
              <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#9b8fa8] uppercase mt-1">
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
