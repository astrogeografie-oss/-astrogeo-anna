import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        background:
          "radial-gradient(ellipse at center, #1a0f2e 0%, #07060f 60%)",
      }}
    >
      {/* Decorative ring */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(201,168,76,0.06)" }}
      />

      <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#c9a84c] uppercase mb-6">
        404
      </p>

      <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-[#f0ead6] mb-6 leading-tight">
        Diese Seite liegt<br />
        <em
          className="not-italic font-medium"
          style={{
            background:
              "linear-gradient(90deg, #9a7430, #e8c97a, #9a7430)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          jenseits der Karte.
        </em>
      </h1>

      <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#9b8fa8] max-w-md mb-12 font-light">
        Keine Sorge — auch das ist ein Zeichen. Vielleicht wartet dein
        eigentliches Ziel woanders auf dich.
      </p>

      <Link
        href="/"
        className="btn-gold inline-block px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.2em] rounded-sm"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
