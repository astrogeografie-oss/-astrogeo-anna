import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, formatDate } from "@/lib/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Anna Astrogeografie`,
    description: post.intro,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen" style={{ background: "#faf7f2" }}>

      {/* Top bar */}
      <div className="border-b border-[rgba(184,146,46,0.2)]" style={{ background: "#f5efe4" }}>
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-[0.15em] text-[#100802] hover:text-[#b8922e] transition-colors duration-300"
          >
            ANNA<span className="text-[#b8922e] mx-1">·</span>ASTROGEOGRAFIE
          </Link>
          <Link
            href="/blog"
            className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#1c1008] hover:text-[#b8922e] transition-colors duration-300 uppercase"
          >
            ← Journal
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* Meta */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="inline-block px-3 py-1 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.25em] text-[#3d2800] uppercase rounded-sm"
            style={{ background: "rgba(184,146,46,0.12)", border: "1px solid rgba(184,146,46,0.2)" }}
          >
            {post.label}
          </span>
          <span className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8272]">
            {formatDate(post.date)} · {post.readingTime} Lesezeit
          </span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[#100802] leading-[1.1] mb-3">
          {post.title}
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[#3d2800] italic font-normal mb-10">
          {post.subtitle}
        </p>

        <div className="w-16 h-px mb-10" style={{ background: "linear-gradient(90deg, #b8922e, transparent)" }} />

        {/* Intro */}
        <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#100802] font-medium leading-relaxed mb-14">
          {post.intro}
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-12">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#100802] mb-5">
                  {section.heading}
                </h2>
              )}

              {section.definitionBox ? (
                <div
                  className="rounded-sm px-8 py-7 my-2"
                  style={{
                    background: "linear-gradient(135deg, #fffef8, #fef9ee)",
                    border: "1px solid rgba(184,146,46,0.4)",
                    borderLeft: "4px solid #b8922e",
                  }}
                >
                  {section.keywords && (
                    <div className="flex flex-wrap gap-3 mb-5">
                      {section.keywords.map((kw, k) => (
                        <span
                          key={k}
                          className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] text-[#3d2800] uppercase px-3 py-1 rounded-sm"
                          style={{ background: "rgba(184,146,46,0.15)", border: "1px solid rgba(184,146,46,0.25)" }}
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}
                  {section.body.split("\n\n").map((paragraph, j) => (
                    <p
                      key={j}
                      className="font-[family-name:var(--font-cormorant)] text-lg text-[#100802] font-normal leading-relaxed mb-3 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : section.planetBox ? (
                <div
                  className="rounded-sm px-8 py-7 mb-2"
                  style={{
                    background: "linear-gradient(135deg, #fffdf9, #fdf6e8)",
                    border: "1px solid rgba(184,146,46,0.35)",
                    borderLeft: "4px solid #b8922e",
                  }}
                >
                  <div className="flex items-baseline gap-3 mb-5">
                    <span
                      className="font-[family-name:var(--font-cormorant)] text-4xl font-light leading-none"
                      style={{ color: "#b8922e" }}
                    >
                      {section.planetBox.symbol}
                    </span>
                    <div>
                      <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.35em] text-[#b8922e] uppercase mb-0.5">
                        Planet
                      </p>
                      <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#100802]">
                        {section.planetBox.planet}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {section.planetBox.keywords.map((kw, k) => (
                      <span
                        key={k}
                        className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#3d2800] px-3 py-1 rounded-sm uppercase"
                        style={{ background: "rgba(184,146,46,0.12)", border: "1px solid rgba(184,146,46,0.2)" }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] text-[#9b8272] uppercase">
                    {section.planetBox.energy}
                  </p>
                </div>
              ) : section.highlight ? (
                <div
                  className="rounded-sm px-8 py-7 my-2"
                  style={{
                    background: "linear-gradient(135deg, #fffdf9, #fdf6e8)",
                    border: "1px solid rgba(184,146,46,0.35)",
                    borderLeft: "4px solid #b8922e",
                  }}
                >
                  <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] text-[#b8922e] uppercase mb-4">
                    Meine Erfahrung
                  </p>
                  {section.body.split("\n\n").map((paragraph, j) => (
                    <p
                      key={j}
                      className="font-[family-name:var(--font-cormorant)] text-xl text-[#100802] font-medium leading-relaxed mb-3 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                section.body.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-normal leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))
              )}

              {section.bullets && (
                <ul className="mt-4 flex flex-col gap-3">
                  {section.bullets.map((bullet, k) => (
                    <li key={k} className="flex items-start gap-3">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#b8922e" }} />
                      <span className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-normal leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.cta && (
                <div className="mt-8 pt-8 border-t border-[rgba(184,146,46,0.2)] flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://peaceful-smakager-b2db11.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-block px-8 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm text-center"
                  >
                    Mini-Kurs entdecken
                  </a>
                  <a
                    href="/#buchen"
                    className="inline-block px-8 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm text-center text-[#3d2800] hover:text-[#b8922e] transition-colors duration-300"
                    style={{ border: "1px solid rgba(184,146,46,0.4)" }}
                  >
                    1:1 Beratung buchen
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </article>

      {/* Footer strip */}
      <div className="border-t border-[rgba(184,146,46,0.2)] py-10" style={{ background: "#f5efe4" }}>
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link
            href="/blog"
            className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] text-[#b8922e] hover:text-[#6b4800] transition-colors uppercase"
          >
            ← Zurück zum Journal
          </Link>
          <div className="flex gap-6">
            <Link href="/impressum" className="font-[family-name:var(--font-montserrat)] text-xs text-[#1c1008] hover:text-[#b8922e] transition-colors tracking-wider">
              Impressum
            </Link>
            <Link href="/datenschutz" className="font-[family-name:var(--font-montserrat)] text-xs text-[#1c1008] hover:text-[#b8922e] transition-colors tracking-wider">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
