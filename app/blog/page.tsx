import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, formatDate } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Anna Astrogeografie — Meine Linien, meine Geschichten",
  description:
    "Persönliche Erfahrungen mit Planetenlinien — die Sonnenlinie, Mondlinie, Jupiterlinie und mehr. Anna Thoma teilt ihre echten Geschichten aus der Astrogeografie.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ background: "#faf7f2" }}>

      {/* Top bar */}
      <div className="border-b border-[rgba(184,146,46,0.2)]" style={{ background: "#f5efe4" }}>
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-[0.15em] text-[#2c2010] hover:text-[#b8922e] transition-colors duration-300"
          >
            ANNA<span className="text-[#b8922e] mx-1">·</span>ASTROGEOGRAFIE
          </Link>
          <Link
            href="/"
            className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] text-[#52402e] hover:text-[#b8922e] transition-colors duration-300 uppercase"
          >
            ← Startseite
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#6a4c10] uppercase mb-4">
          Journal
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#2c2010] leading-[1.1] mb-6">
          Meine Linien —{" "}
          <em className="gold-gradient not-italic font-medium">meine Geschichten</em>
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#52402e] font-light leading-relaxed max-w-2xl">
          Jede Planetenlinie hat mich etwas gelehrt. Hier teile ich meine echten
          Erfahrungen — damit du verstehst, was Astrogeografie wirklich bedeutet.
        </p>
        <div className="w-20 h-px mt-10" style={{ background: "linear-gradient(90deg, #b8922e, transparent)" }} />
      </div>

      {/* Post list */}
      <div className="max-w-5xl mx-auto px-6 pb-24 flex flex-col gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div
              className="rounded-sm p-8 md:p-10 transition-all duration-300 group-hover:shadow-md"
              style={{
                background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
                border: "1px solid rgba(184,146,46,0.25)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-28 flex-shrink-0 flex flex-col gap-2">
                  <span
                    className="inline-block px-3 py-1 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.25em] text-[#6a4c10] uppercase rounded-sm"
                    style={{ background: "rgba(184,146,46,0.12)", border: "1px solid rgba(184,146,46,0.2)" }}
                  >
                    {post.label}
                  </span>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8272]">
                    {formatDate(post.date)}
                  </p>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8272]">
                    {post.readingTime}
                  </p>
                </div>
                <div className="flex-1">
                  <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#2c2010] leading-[1.2] mb-1 group-hover:text-[#b8922e] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#6a4c10] italic font-light mb-4">
                    {post.subtitle}
                  </p>
                  <p className="font-[family-name:var(--font-cormorant)] text-base text-[#52402e] font-light leading-relaxed line-clamp-3">
                    {post.intro}
                  </p>
                  <p className="mt-4 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] text-[#b8922e] uppercase group-hover:tracking-[0.3em] transition-all duration-300">
                    Weiterlesen →
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
