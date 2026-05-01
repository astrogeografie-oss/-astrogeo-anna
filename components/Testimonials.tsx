"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Verifizierte Kundin",
    location: "★★★★★ · 5,00 von 5",
    service: "Astrogeografie Reading",
    stars: 5,
    text: "Das Reading hat mich einfach nur sprachlos gemacht. Unglaublich, was man alles mit der Astrologie- und Geografie herausarbeiten kann. Ich versuche deine Tipps seit zwei Wochen einzubauen und mir geht's damit viel besser. Ich kann dich nur wärmstens weiterempfehlen.",
  },
  {
    name: "Verifiziertes Paar",
    location: "★★★★★ · 5,00 von 5",
    service: "Paar- & Familienreading",
    stars: 5,
    text: "Wir sind total begeistert. Anna ist eine lockere, super freundliche Persönlichkeit. Zu erfahren, dass man an dem aktuellen Wohnort niemals ankommen wird — und das nicht daran liegt, weil man „falsch" ist, sondern einfach falsch wohnt — eröffnet einem nochmal so viel mehr.",
  },
  {
    name: "Verifizierte Kundin",
    location: "★★★★★ · 5,00 von 5",
    service: "1:1 Reading",
    stars: 5,
    text: "Anna ist eine sehr kompetente Ansprechpartnerin mit viel Erfahrung & Humor. Bereits während des Readings veränderte sich die Energie schon sehr deutlich — und in den Tagen danach merkt man richtig, wie man noch einen Schub vom Universum bekommt.",
  },
  {
    name: "Verifizierte Kundin",
    location: "★★★★★ · 5,00 von 5",
    service: "Cosmic Coordinates",
    stars: 5,
    text: "Wow — was für ein Reading! Danke für diese Tiefe. Was du mir zu den Orten gesagt hast, wo es für mich definitiv einmal hingehen muss — sind jetzt auf meiner Travelliste. Es ist ein komplett anderer Blick auf sich selbst.",
  },
  {
    name: "Andrea",
    location: "★★★★★ · 5,00 von 5",
    service: "Astrogeografie & Familienreading",
    stars: 5,
    text: "Astrogeo.Anna hat bei mir und meinem Sohn bereits umfangreiche Analysen erstellt. Es war sehr informativ, spannend und vor allem wertvoll. Anna ist mit sehr viel Liebe und Herzblut bei ihrer Arbeit. Vielen Dank — du hast mir bereits des Öfteren sehr geholfen.",
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
