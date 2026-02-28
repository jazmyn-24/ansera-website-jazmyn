/**
 * Ansera Individual Blog Post Page
 * Design: Dark navy, editorial long-form reading experience
 * - Clean reading column with generous whitespace
 * - Author byline, category badge, read time
 * - Markdown-style content rendering
 * - Related posts sidebar
 * - CTA at bottom
 */

import { useEffect, type ReactElement } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "./Blog";

const categoryColors: Record<string, string> = {
  Trends: "#00C9A7",
  Support: "#60A5FA",
  WordPress: "#A78BFA",
  Product: "#FB923C",
  SEO: "#34D399",
  Growth: "#F472B6",
};

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: ReactElement[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-extrabold mt-10 mb-4" style={{ fontSize: "1.35rem", fontFamily: "'Space Grotesk', sans-serif", color: "rgba(255,255,255,0.95)" }}>
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-bold mt-8 mb-3" style={{ fontSize: "1.1rem", fontFamily: "'Space Grotesk', sans-serif", color: "rgba(255,255,255,0.9)" }}>
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="my-6 pl-5 py-1" style={{ borderLeft: "3px solid #00C9A7", color: "rgba(255,255,255,0.7)", fontStyle: "italic", fontSize: "1.05rem" }}>
          {line.replace("> ", "")}
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      // collect list items
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00C9A7" }} />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:rgba(255,255,255,0.85)">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else {
      // paragraph — handle **bold**
      const html = line.replace(/\*\*(.*?)\*\*/g, '<strong style="color:rgba(255,255,255,0.9)">$1</strong>');
      elements.push(
        <p key={i} className="leading-relaxed mb-4 text-sm" style={{ color: "rgba(255,255,255,0.6)" }} dangerouslySetInnerHTML={{ __html: html }} />
      );
    }
    i++;
  }
  return elements;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#060C16", color: "#fff" }}>
        <Navbar />
        <div className="text-center mt-32">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog">
            <span className="text-sm" style={{ color: "#00C9A7" }}>← Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const color = categoryColors[post.category] || "#00C9A7";
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: "#060C16", color: "#fff" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ paddingTop: "80px" }}>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${color}08 0%, transparent 70%)` }} />
          <div className="container relative z-10 mx-auto px-6 max-w-3xl pt-14 pb-10">
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70 cursor-pointer" style={{ color: "rgba(255,255,255,0.45)" }}>
                <ArrowLeft size={14} /> Back to Blog
              </span>
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${color}15`, color }}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                <Clock size={11} /> {post.readTime}
              </span>
            </div>

            <h1 className="font-extrabold leading-tight mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
              {post.title}
            </h1>

            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold" style={{ background: `${color}20`, color }}>
                {post.author[0]}
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>{post.author}</div>
                <div className="text-xs flex items-center gap-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                  <span>{post.authorRole}</span>
                  <span>·</span>
                  <Calendar size={10} />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="container mx-auto px-6 max-w-3xl">
        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* ── Article body ── */}
      <article className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose-ansera">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* ── CTA ── */}
      <section className="py-16 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(0,201,167,0.06)", border: "1px solid rgba(0,201,167,0.2)" }}>
            <h3 className="font-extrabold mb-3" style={{ fontSize: "1.5rem", fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to try Ansera on your site?
            </h3>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              Install in under 5 minutes. Free plan available, no credit card required.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://wordpress.org/plugins/ansera"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: "#00C9A7", color: "#060C16" }}
              >
                Install Free on WordPress
              </a>
              <Link href="/product">
                <span className="flex items-center gap-2 text-sm font-medium cursor-pointer" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related posts ── */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.6)" }}>
            More from the blog
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((p) => {
              const c = categoryColors[p.category] || "#00C9A7";
              return (
                <Link key={p.id} href={`/blog/${p.slug}`}>
                  <div
                    className="group p-4 rounded-xl border cursor-pointer transition-all"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.07)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = `${c}40`)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)")}
                  >
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-3 inline-block" style={{ background: `${c}15`, color: c }}>
                      {p.category}
                    </span>
                    <h4 className="text-sm font-semibold leading-snug mb-2" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {p.title}
                    </h4>
                    <span className="text-xs flex items-center gap-1 transition-all group-hover:gap-2" style={{ color: c }}>
                      Read <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
