"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Angebote", href: "#angebote" },
  { label: "Wie es funktioniert", href: "#prozess" },
  { label: "Stimmen", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Podcast", href: "/podcast" },
];

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#faf7f2] border-b border-[rgba(184,146,46,0.25)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left links */}
        <div className="hidden lg:flex items-center gap-5">
          {leftLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-5">
              <a
                href={link.href}
                className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#1c1008] hover:text-[#b8922e] transition-colors duration-300 uppercase whitespace-nowrap"
              >
                {link.label}
              </a>
              {i < leftLinks.length - 1 && <span className="nav-divider" aria-hidden />}
            </span>
          ))}
        </div>

        {/* Logo */}
        <a
          href="#"
          className="group mx-auto lg:mx-0"
          aria-label="Astrogeografie Anna – Startseite"
        >
          <span className="font-[family-name:var(--font-montserrat)] text-base lg:text-lg font-semibold uppercase tracking-[0.25em] text-[#b8922e] transition-colors duration-300 group-hover:text-[#6b4800]">
            Anna Astrogeografie
          </span>
        </a>

        {/* Right links + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          {rightLinks.map((link) => (
            <span key={link.href} className="flex items-center gap-5">
              <a
                href={link.href}
                className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#1c1008] hover:text-[#b8922e] transition-colors duration-300 uppercase whitespace-nowrap"
              >
                {link.label}
              </a>
              <span className="nav-divider" aria-hidden />
            </span>
          ))}
          <a
            href="#buchen"
            className="flex items-center justify-center w-11 h-11 bg-[#b8922e] text-white hover:bg-[#6b4800] transition-colors duration-300"
            aria-label="Jetzt Termin buchen"
          >
            <Menu size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-[#b8922e] transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#faf7f2] border-t border-[rgba(184,146,46,0.15)]">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-montserrat)] text-sm tracking-[0.15em] text-[#1c1008] hover:text-[#b8922e] transition-colors duration-300 uppercase"
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
