import Link from "next/link";
import { blogPosts, formatDate } from "@/lib/blog-posts";

export default function BlogTeaser() {
  const post = blogPosts[0];
  if (!post) return null;

  return (
    <section className="relative py-20" style={{ background: "#faf7f2" }}>
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#3d2800] uppercase mb-3">
              Aus meinem Journal
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#100802] leading-[1.15]">
              Meine Linien —{" "}
              <em className="gold-gradient font-medium">meine Geschichten</em>
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] text-[#b8922e] hover:text-[#6b4800] transition-colors uppercase whitespace-nowrap"
          >
            Alle Beiträge →
          </Link>
        </div>

        <Link href={`/blog/${post.slug}`} className="group block">
          <div
            className="rounded-sm p-8 md:p-12 transition-all duration-300 group-hover:shadow-md"
            style={{
              background: "linear-gradient(145deg, #fffdf9, #faf7f2)",
              border: "1px solid rgba(184,146,46,0.25)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">

              <div className="md:w-32 flex-shrink-0 flex flex-col gap-3">
                <span
                  className="inline-block px-3 py-1 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.25em] text-[#3d2800] uppercase rounded-sm"
                  style={{ background: "rgba(184,146,46,0.12)", border: "1px solid rgba(184,146,46,0.2)" }}
                >
                  {post.label}
                </span>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8272] tracking-wide">
                  {formatDate(post.date)}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#9b8272]">
                  {post.readingTime} Lesezeit
                </p>
              </div>

              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#100802] leading-[1.2] mb-2 group-hover:text-[#b8922e] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#3d2800] italic font-light mb-6">
                  {post.subtitle}
                </p>
                <div
                  className="w-12 h-px mb-6"
                  style={{ background: "linear-gradient(90deg, #b8922e, transparent)" }}
                />
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-light leading-relaxed">
                  {post.intro}
                </p>
                <p className="mt-6 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] text-[#b8922e] uppercase group-hover:tracking-[0.3em] transition-all duration-300">
                  Weiterlesen →
                </p>
              </div>

            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}
