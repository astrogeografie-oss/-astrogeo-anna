"use client";

export default function NewsletterSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#f5efe4" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left – 0 Euro Guide */}
          <div>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#6a4c10] uppercase mb-6">
              Kostenlos
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#2c2010] leading-[1.2] mb-4">
              Dein kostenloser
              <br />
              <em className="gold-gradient not-italic font-medium">Astrogeografie-Guide</em>
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#52402e] font-light leading-relaxed mb-8">
              Entdecke die 3 wichtigsten Planetenlinien — und was sie für deinen
              Kraftort bedeuten. Gratis, sofort per E-Mail.
            </p>
            <div
              className="rounded-sm overflow-hidden"
              style={{ border: "1px solid rgba(184,146,46,0.25)" }}
            >
              <iframe
                src="https://astrogeoanna.activehosted.com/f/5"
                style={{ width: "100%", height: 320, border: "none" }}
                scrolling="no"
                title="Kostenloser Astrogeografie-Guide"
              />
            </div>
          </div>

          {/* Right – Newsletter */}
          <div>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#6a4c10] uppercase mb-6">
              Newsletter
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#2c2010] leading-[1.2] mb-4">
              Kosmische Impulse —
              <br />
              <em className="gold-gradient not-italic font-medium">direkt in dein Postfach</em>
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#52402e] font-light leading-relaxed mb-8">
              Planetenlinien, Kraftort-Insights, Annas persönliche Entdeckungen
              und exklusive Angebote. Kein Spam — nur echte Tiefe.
            </p>
            <div
              className="rounded-sm overflow-hidden"
              style={{ border: "1px solid rgba(184,146,46,0.25)" }}
            >
              <iframe
                src="https://astrogeoanna.activehosted.com/f/11"
                style={{ width: "100%", height: 320, border: "none" }}
                scrolling="no"
                title="Newsletter Anmeldung"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
