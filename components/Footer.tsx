import { Mail, Calendar } from "lucide-react";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-16 border-t border-[rgba(201,168,76,0.1)]"
      style={{ background: "#07060f" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-[0.15em] text-[#f0ead6] mb-4">
              ANNA<span className="text-[#c9a84c] mx-1">·</span>ASTROGEOGRAFIE
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-base text-[#9b8fa8] font-light leading-relaxed mb-6">
              Deutschlands führende Expertin für Astrogeografie & Astrocartography.
              Dein Leben beginnt am richtigen Ort.
            </p>
            {/* Instagram prominent */}
            <a
              href="https://www.instagram.com/astrogeo.anna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e8c97a] transition-colors duration-300 group"
              aria-label="Anna auf Instagram folgen"
            >
              <span className="w-8 h-8 rounded-full border border-[rgba(201,168,76,0.3)] flex items-center justify-center group-hover:border-[#c9a84c] transition-colors">
                <InstagramIcon />
              </span>
              <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] uppercase">
                @astrogeo.anna
              </span>
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#c9a84c] uppercase mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: "Über mich", href: "#ueber-mich" },
                { label: "Angebote", href: "#angebote" },
                { label: "Wie es funktioniert", href: "#prozess" },
                { label: "Erfahrungen", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Jetzt buchen", href: "#buchen" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-cormorant)] text-base text-[#9b8fa8] hover:text-[#c9a84c] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#c9a84c] uppercase mb-6">
              Kontakt
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:astrogeografie@gmail.com"
                  className="flex items-center gap-3 font-[family-name:var(--font-cormorant)] text-base text-[#9b8fa8] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  <Mail size={16} className="text-[#c9a84c] flex-shrink-0" />
                  astrogeografie@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/astrogeo.anna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-[family-name:var(--font-cormorant)] text-base text-[#9b8fa8] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  <span className="text-[#c9a84c] flex-shrink-0"><InstagramIcon /></span>
                  @astrogeo.anna · Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/astrogeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-[family-name:var(--font-cormorant)] text-base text-[#9b8fa8] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  <Calendar size={16} className="text-[#c9a84c] flex-shrink-0" />
                  Termine · calendly.com/astrogeo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8fa8] tracking-wider">
            © {year} Anna Thoma · Astrogeografie · Bingen am Rhein
          </p>
          <div className="flex gap-6">
            <a
              href="/impressum"
              className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8fa8] hover:text-[#c9a84c] transition-colors tracking-wider"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8fa8] hover:text-[#c9a84c] transition-colors tracking-wider"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
