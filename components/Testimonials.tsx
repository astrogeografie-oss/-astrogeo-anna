"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Claudia M.",
    location: "Deutschland",
    service: "Astrokartographie Reading",
    stars: 5,
    text: "Das Reading hat mich einfach nur sprachlos gemacht. Ich war total begeistert von dem vielen Wissen über mich, obwohl Anna mich als Person überhaupt nicht kannte. Unglaublich, was man alles mit der Astrologie- und Geografie herausarbeiten kann. Ich versuche die Tipps seit zwei Wochen in meinen Alltag einzubauen — und mir geht es damit viel besser.",
  },
  {
    name: "Sabrina",
    location: "Österreich",
    service: "Astrokartographie Reading",
    stars: 5,
    text: "Ich hatte ein unglaublich magisches Astro Reading. Es war einfach durchgehend Gänsehaut-Feeling — mit so viel Liebe und tiefem Wissen durchgeführt, bis zur Perfektion. Man gewinnt nur an Mehrwert. Das sind Informationen, die das gesamte Leben umkrempeln.",
  },
  {
    name: "Familie R.",
    location: "Deutschland → Umzug",
    service: "Paar & Familien Reading",
    stars: 5,
    text: "Mein Mann und ich hatten ein Paar- bzw. Familienreading gebucht. Es hat eine Woche gebraucht, bis wir das verarbeiten konnten. Zu erfahren, dass man am aktuellen Wohnort niemals ankommen wird — nicht weil man 'falsch' ist, sondern einfach falsch wohnt — das eröffnet einem so viel mehr. Ich kann jedem, der ernsthaft etwas verändern möchte, das Reading ans Herz legen.",
  },
  {
    name: "Katharina S.",
    location: "Schweiz",
    service: "Astrokartographie Reading",
    stars: 5,
    text: "Wow — was für ein Reading. Ich habe es jetzt zwei Wochen setzen lassen und bemerke, wie oft ich an die Informationen denke. Was Anna mir zu den Orten gesagt hat, wo es für mich definitiv hingehen muss — die sind jetzt auf meiner Travelliste. Es ist ein komplett anderer Blick auf sich selbst.",
  },
  {
    name: "Monika T.",
    location: "Deutschland",
    service: "1:1 Reading",
    stars: 5,
    text: "Ich kann das 1:1 Reading bei Anna total empfehlen. Es hat mir Spaß gemacht und ich kann mit diesen konkreten Angaben sehr viel anfangen. Es bestärkt mich darin, mich mehr auf meine Intuition zu verlassen. Bereits während des Readings veränderte sich die Energie sehr deutlich. Anna ist eine kompetente Ansprechpartnerin mit viel Erfahrung und Humor.",
  },
  {
    name: "Sandra W.",
    location: "Österreich",
    service: "Astrokartographie Reading",
    stars: 5,
    text: "Ich bedanke mich für die Fülle an Informationen. Wenn schon länger Entscheidungen ins Haus stehen, geht es hier mit einer Richtung voran, die wirklich für einen persönlich nährend ist. All die vergangenen Steps, die unbewusst bereits auf den richtigen Linien stattfanden — wahnsinn.",
  },
  {
    name: "Teilnehmerin",
    location: "Zürisee, Schweiz",
    service: "Workshop",
    stars: 5,
    text: "Ich ging nach unserem Workshop mit vielen Eindrücken, neugierig und sehr zufrieden weiter. Spannend, wie immer mal wieder ein Puzzlestein oder eben Linien Erkenntnisse aufzeigen und einen Schritt weiterführen. So freue ich mich, ganz in Ruhe meine Linien zu erforschen. Danke, Anna, für diese Möglichkeit!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#b8922e] text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-32 overflow-hidden"
      style={{ background: "#f5efe4" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#3d2800] uppercase mb-6">
            Erfahrungen
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#100802] leading-[1.15]">
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
              className="card-warm rounded-sm p-8"
            >
              <Quote size={24} className="text-[#b8922e] opacity-40 mb-4" />
              <Stars count={t.stars} />
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-light leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="section-divider mb-6" />
              <div>
                <p className="font-[family-name:var(--font-cormorant)] text-base font-semibold text-[#100802]">
                  {t.name}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#1c1008] tracking-wider mt-0.5">
                  {t.location}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#b8922e] tracking-wider mt-1 uppercase">
                  {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#1c1008] font-light">
            Über{" "}
            <span className="text-[#b8922e] font-semibold">500 Klientinnen</span>{" "}
            haben bereits ihre kosmischen Koordinaten entdeckt.
          </p>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
