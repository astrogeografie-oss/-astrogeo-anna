"use client";

import { Mail, BookOpen } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#f5efe4" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left – 0 Euro Guide */}
          <div
            className="rounded-sm p-8 md:p-10 flex flex-col"
            style={{
              background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
              border: "1px solid rgba(184,146,46,0.25)",
            }}
          >
            <div className="text-[#b8922e] mb-6">
              <BookOpen size={28} />
            </div>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#6a4c10] uppercase mb-4">
              Kostenlos
            </p>
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#2c2010] leading-[1.2] mb-4">
              Dein kostenloser
              <br />
              <em className="gold-gradient not-italic font-medium">Astrogeografie-Guide</em>
            </h3>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#52402e] font-light leading-relaxed mb-8 flex-1">
              Die 3 wichtigsten Planetenlinien — und was sie für deinen
              Kraftort bedeuten. Gratis, sofort per E-Mail.
            </p>
            <div className="section-divider mb-8" />
            <a
              href="https://astrogeoanna.activehosted.com/f/5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block text-center px-8 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
            >
              Guide herunterladen
            </a>
          </div>

          {/* Right – Newsletter */}
          <div
            className="rounded-sm p-8 md:p-10 flex flex-col"
            style={{
              background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
              border: "1px solid rgba(184,146,46,0.25)",
            }}
          >
            <div className="text-[#b8922e] mb-6">
              <Mail size={28} />
            </div>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#6a4c10] uppercase mb-4">
              Newsletter
            </p>
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#2c2010] leading-[1.2] mb-4">
              Kosmische Impulse —
              <br />
              <em className="gold-gradient not-italic font-medium">direkt ins Postfach</em>
            </h3>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#52402e] font-light leading-relaxed mb-8 flex-1">
              Planetenlinien, Kraftort-Insights und Annas persönliche
              Entdeckungen. Kein Spam — nur echte Tiefe.
            </p>
            <div className="section-divider mb-8" />
            <a
              href="https://astrogeoanna.activehosted.com/f/11"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-block text-center px-8 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
            >
              Newsletter abonnieren
            </a>
          </div>

        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
