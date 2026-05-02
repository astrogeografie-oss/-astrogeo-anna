"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Angebote", href: "#angebote" },
  { label: "Wie es funktioniert", href: "#prozess" },
  { label: "Stimmen", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf7f2]/95 backdrop-blur-md border-b border-[rgba(201,168,76,0.2)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="Astrogeografie Anna – Startseite"
        >
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="0.5" opacity="0.7" />
              <circle cx="16" cy="16" r="10" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5" />
              <circle cx="16" cy="16" r="2.5" fill="#c9a84c" />
              <line x1="16" y1="1" x2="16" y2="7" stroke="#c9a84c" strokeWidth="0.8" opacity="0.8" />
              <line x1="16" y1="25" x2="16" y2="31" stroke="#c9a84c" strokeWidth="0.8" opacity="0.8" />
              <line x1="1" y1="16" x2="7" y2="16" stroke="#c9a84c" strokeWidth="0.8" opacity="0.8" />
              <line x1="25" y1="16" x2="31" y2="16" stroke="#c9a84c" strokeWidth="0.8" opacity="0.8" />
            </svg>
          </div>
          <span className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-[0.15em] text-[#2c2010] group-hover:text-[#c9a84c] transition-colors duration-300">
            ANNA<span className="text-[#c9a84c] mx-1">·</span>ASTROGEOGRAFIE
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#7a6a58] hover:text-[#c9a84c] transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buchen"
            className="btn-gold px-6 py-2.5 text-xs font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
          >
            Jetzt Buchen
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#c9a84c] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#faf7f2]/98 backdrop-blur-md border-t border-[rgba(201,168,76,0.15)]">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-montserrat)] text-sm tracking-[0.15em] text-[#7a6a58] hover:text-[#c9a84c] transition-colors duration-300 uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#buchen"
              className="btn-gold px-6 py-3 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Jetzt Buchen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
