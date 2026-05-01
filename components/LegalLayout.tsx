import Link from "next/link";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen"
      style={{ background: "radial-gradient(ellipse at top, #1a0f2e 0%, #07060f 50%)" }}
    >
      {/* Top bar */}
      <div className="border-b border-[rgba(201,168,76,0.1)]">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-lg font-light tracking-[0.15em] text-[#f0ead6] hover:text-[#c9a84c] transition-colors duration-300"
          >
            ANNA<span className="text-[#c9a84c] mx-1">·</span>ASTROGEOGRAFIE
          </Link>
          <Link
            href="/"
            className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#9b8fa8] hover:text-[#c9a84c] transition-colors duration-300 uppercase"
          >
            ← Zurück
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#f0ead6] mb-4">
          {title}
        </h1>
        <div
          className="w-16 h-px mb-12"
          style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }}
        />
        <div className="legal-content">{children}</div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-[rgba(201,168,76,0.1)] py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8fa8] tracking-wider">
            © {new Date().getFullYear()} Anna Thoma · Astrogeografie
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8fa8] hover:text-[#c9a84c] transition-colors tracking-wider"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8fa8] hover:text-[#c9a84c] transition-colors tracking-wider"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
