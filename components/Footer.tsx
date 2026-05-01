import { Mail } from "lucide-react";

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
            <p className="font-[family-name:var(--font-cormorant)] text-base text-[#9b8fa8] font-light leading-relaxed">
              Deutschlands führende Expertin für Astrogeografie & Astrocartography.
              Dein Leben beginnt am richtigen Ort.
            </p>
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
                  href="mailto:hallo@astrogeo-anna.de"
                  className="flex items-center gap-3 font-[family-name:var(--font-cormorant)] text-base text-[#9b8fa8] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  <Mail size={16} className="text-[#c9a84c] flex-shrink-0" />
                  hallo@astrogeo-anna.de
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/astrogeo.anna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-[family-name:var(--font-cormorant)] text-base text-[#9b8fa8] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  <span className="text-[#c9a84c] flex-shrink-0 text-xs">IG</span>
                  @astrogeo.anna
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8fa8] tracking-wider">
            © {year} Anna Astrogeografie. Alle Rechte vorbehalten.
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
