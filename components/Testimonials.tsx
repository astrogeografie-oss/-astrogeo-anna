"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "München → Barcelona",
    service: "Cosmic Coordinates",
    stars: 5,
    text: "Anna hat mir in 90 Minuten mehr Klarheit gegeben als Jahre der Selbstreflexion. Ich bin jetzt in Barcelona — und es fühlt sich an, als wäre ich nach Hause gekommen. Kein Klischee: es ist buchstäblich wahr.",
  },
  {
    name: "Lena K.",
    location: "Hamburg",
    service: "Astrologisches Reading",
    stars: 5,
    text: "Das Reading war tiefgründig, präzise und — was selten ist — wirklich anwendbar. Ich habe endlich verstanden, warum manche Lebensbereiche bei mir immer wieder stocken. Absolut empfehlenswert.",
  },
  {
    name: "Julia R.",
    location: "Wien → Lissabon",
    service: "Cosmic Coordinates",
    stars: 5,
    text: "Ich war skeptisch. Dann habe ich Annas Analyse gemacht, Lissabon auf meiner Karte gesehen — und drei Monate später bin ich umgezogen. Beste Entscheidung meines Lebens. Anna hat eine Gabe.",
  },
  {
    name: "Miriam S.",
    location: "Berlin",
    service: "Astrologisches Reading",
    stars: 5,
    text: "Anna liest keine oberflächlichen Keywords vor — sie liest dich. Das Reading hat Dinge angesprochen, über die ich noch mit niemandem gesprochen hatte. Gleichzeitig sehr respektvoll und einfühlsam.",
  },
  {
    name: "Tanja B.",
    location: "Stuttgart → Teneriffa",
    service: "Cosmic Coordinates",
    stars: 5,
    text: "Die Investition war ein Geschenk an mich selbst. Ich lebe jetzt auf Teneriffa — auf der Venus-Linie. Meine Beziehungen, meine Kreativität, alles hat sich geöffnet. Danke, Anna.",
  },
  {
    name: "Charlotte F.",
    location: "Frankfurt",
    service: "Astrologisches Reading",
    stars: 5,
    text: "Endlich jemand, der Astrologie ernstnimmt und es trotzdem zugänglich macht. Anna erklärt komplex und trotzdem verständlich. Ich komme definitiv wieder.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#c9a84c] text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at bottom right, #1a0f2e22 0%, transparent 60%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#c9a84c] uppercase mb-6">
            Erfahrungen
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#f0ead6] leading-[1.15]">
            Was sie sagen —
            <br />
            <em className="gold-gradient not-italic font-medium">
              die Menschen, die es gewagt haben
            </em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="card-cosmic rounded-sm p-8 hover:border-[rgba(201,168,76,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-[#c9a84c] opacity-40 mb-4" />

              {/* Stars */}
              <Stars count={t.stars} />

              {/* Text */}
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#9b8fa8] font-light leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="section-divider mb-6" />

              {/* Author */}
              <div>
                <p className="font-[family-name:var(--font-cormorant)] text-base font-semibold text-[#f0ead6]">
                  {t.name}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8fa8] tracking-wider mt-0.5">
                  {t.location}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#c9a84c] tracking-wider mt-1 uppercase">
                  {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#9b8fa8] font-light">
            Über{" "}
            <span className="text-[#c9a84c] font-semibold">500 Klientinnen</span>{" "}
            haben bereits ihre kosmischen Koordinaten entdeckt.
          </p>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
