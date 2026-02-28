/*
 * SolutionSection — Ansera AI
 * Tabbed feature showcase with large product mockups
 * Light background section for contrast against the dark Problem section
 */

import { useState } from "react";
import { Zap, BarChart3, Sliders, Users, Globe } from "lucide-react";

const features = [
  {
    id: "instant",
    icon: Zap,
    tab: "Instant AI answers",
    headline: "Real answers from your content. Not generic AI guesses.",
    description:
      "Ansera reads and understands your website's actual content — product pages, blog posts, help docs — and delivers precise, contextual answers in real time. It understands intent, not just keywords.",
    bullets: [
      "Real-time content analysis and intelligent response generation",
      "Understands context and visitor intent — not just keyword matching",
      "Trains on external content: PDFs, YouTube/Vimeo videos, podcasts",
    ],
    mockup: (
      <div
        className="rounded-2xl overflow-hidden h-full"
        style={{
          background: "#0a1520",
          border: "1px solid rgba(0,201,167,0.12)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="flex items-center gap-2 px-5 py-3.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#3a3a3a" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#3a3a3a" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#3a3a3a" }} />
          </div>
          <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>ansera-search.widget</span>
        </div>
        <div className="p-6 space-y-5">
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,201,167,0.25)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>What's your return policy?</span>
            <div className="ml-auto w-2 h-4 rounded-sm animate-pulse" style={{ background: "#00C9A7" }} />
          </div>
          <div className="flex items-start gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
              style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A
            </div>
            <div
              className="flex-1 text-sm leading-relaxed p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              We offer a <span style={{ color: "#00C9A7", fontWeight: 600 }}>30-day money-back guarantee</span> on all orders. Simply visit your order history, select the item, and click "Start Return." Refunds are processed within 3–5 business days.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Start a return", "Track my order", "Contact support"].map((s) => (
              <button
                key={s}
                className="text-xs px-3 py-1.5 rounded-lg"
                style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "setup",
    icon: Zap,
    tab: "1-click setup",
    headline: "Live in under five minutes. No developer needed.",
    description:
      "Install directly from the WordPress Plugin Marketplace and Ansera automatically scans, indexes, and trains on your existing content — no backend work, no external AI training, no code.",
    bullets: [
      "Install directly from the WordPress Plugin Marketplace",
      "Webflow, Wix, and Squarespace supported via code snippet",
      "Automatically syncs with HTML pages and PDF files",
    ],
    mockup: (
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#0a1520",
          border: "1px solid rgba(0,201,167,0.12)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="flex items-center gap-2 px-5 py-3.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#3a3a3a" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#3a3a3a" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#3a3a3a" }} />
          </div>
          <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>WordPress Plugin Marketplace</span>
        </div>
        <div className="p-6 space-y-4">
          <div
            className="flex items-center gap-4 p-4 rounded-xl"
            style={{ background: "rgba(0,201,167,0.06)", border: "1px solid rgba(0,201,167,0.15)" }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ansera Search</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>AI-powered answer engine · by ansera01</div>
              <div className="flex mt-1">
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#00C9A7", fontSize: "10px" }}>★</span>)}
                <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.3)" }}>(9)</span>
              </div>
            </div>
            <div
              className="px-4 py-2 rounded-lg text-xs font-semibold flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A" }}
            >
              Activate
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: "#00C9A7" }}>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Scanning and indexing your content...
          </div>
          <div className="space-y-2">
            {[["Blog posts", "142 pages"], ["Product pages", "89 pages"], ["Help docs", "234 pages"], ["PDFs", "18 files"]].map(([label, count]) => (
              <div key={label} className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "rgba(255,255,255,0.55)" }}>{label}</span>
                <span style={{ color: "#00C9A7", fontWeight: 600 }}>{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    icon: BarChart3,
    tab: "Content insights",
    headline: "Know exactly what your visitors want to know.",
    description:
      "Ansera's built-in analytics dashboard shows you every question your visitors are asking — including the ones your content can't answer yet. Use that data to close content gaps and improve SEO.",
    bullets: [
      "View real-time analytics on what users are asking",
      "Spot content gaps based on missed or unsupported queries",
      "Use data to guide your editorial and SEO content strategy",
    ],
    mockup: (
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#0a1520",
          border: "1px solid rgba(0,201,167,0.12)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="flex items-center justify-between px-5 py-3.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Analytics Dashboard</span>
          <span className="text-xs px-2 py-1 rounded-md" style={{ background: "rgba(0,201,167,0.12)", color: "#00C9A7" }}>● Live</span>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[["2,847", "Searches"], ["94%", "Answered"], ["1.2s", "Avg response"]].map(([v, l]) => (
              <div key={l} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-xl font-bold mb-0.5" style={{ color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}>{v}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Top queries this week</div>
          {[
            { q: "return policy", count: 342, answered: true },
            { q: "pricing plans", count: 218, answered: true },
            { q: "how to integrate", count: 156, answered: true },
            { q: "bulk discounts", count: 89, answered: false },
          ].map((item) => (
            <div key={item.q} className="flex items-center justify-between gap-3 py-1.5">
              <span className="text-sm flex-1" style={{ color: "rgba(255,255,255,0.65)" }}>{item.q}</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{item.count}</span>
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: item.answered ? "#22c55e" : "rgba(255,255,255,0.2)" }}
              />
            </div>
          ))}
          <div className="pt-2 text-xs" style={{ color: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            1 unanswered query — <span style={{ color: "#00C9A7" }}>create content to fill gap →</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "customize",
    icon: Sliders,
    tab: "No-code customization",
    headline: "Style it your way. No code, no complexity.",
    description:
      "Ansera works right out of the box, but gives you full point-and-click control over how it looks and behaves on your site. Match your brand identity in minutes.",
    bullets: [
      "Choose from search icon, chat widget, or footer bar display styles",
      "Revise colors and fonts to match your brand identity",
      "Set up to 5 default questions to guide visitors",
    ],
    mockup: (
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#0a1520",
          border: "1px solid rgba(0,201,167,0.12)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="px-5 py-3.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Appearance Settings</span>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <div className="text-xs mb-3 font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Widget Style</div>
            <div className="flex gap-2">
              {["Search Icon", "Chat Widget", "Footer Bar"].map((style, i) => (
                <button
                  key={style}
                  className="px-3 py-2 rounded-lg text-xs font-medium"
                  style={{
                    background: i === 0 ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.04)",
                    color: i === 0 ? "#00C9A7" : "rgba(255,255,255,0.4)",
                    border: i === 0 ? "1px solid rgba(0,201,167,0.3)" : "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs mb-3 font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Brand Color</div>
            <div className="flex gap-2.5 items-center">
              {["#00C9A7", "#3B82F6", "#8B5CF6", "#F59E0B"].map((color, i) => (
                <div
                  key={color}
                  className="w-7 h-7 rounded-full cursor-pointer"
                  style={{
                    background: color,
                    outline: i === 0 ? "2px solid white" : "none",
                    outlineOffset: "2px",
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs mb-3 font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Default Questions (up to 5)</div>
            {["What's your pricing?", "How do I get started?", "Do you offer a free trial?"].map((q) => (
              <div
                key={q}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg mb-2 text-xs"
                style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00C9A7" }} />
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "leads",
    icon: Users,
    tab: "Lead capture",
    headline: "Turn every visitor question into a qualified lead.",
    description:
      "Collect viable leads while helping your visitors — by turning every interaction into an opportunity. Ansera captures emails, personalizes responses, and tracks visitor data so your CRM stays full.",
    bullets: [
      "Embed custom lead forms within the answer flow",
      "Personalize responses with email template customization",
      "Connect to your CRM or email marketing tool via integrations",
    ],
    mockup: (
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#0a1520",
          border: "1px solid rgba(0,201,167,0.12)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="px-5 py-3.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Lead Capture Settings</span>
        </div>
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>Capture visitor emails</span>
            <div className="w-10 h-6 rounded-full relative" style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)" }}>
              <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
            </div>
          </div>
          <div>
            <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Email capture prompt</div>
            <div className="px-3 py-2.5 rounded-lg text-xs" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}>
              Enter your email to get your answer instantly
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[["1,247", "Leads captured"], ["34%", "Conversion rate"], ["41", "Avg. per day"]].map(([v, l]) => (
              <div key={l} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-lg font-bold mb-0.5" style={{ color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}>{v}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "external",
    icon: Globe,
    tab: "External content",
    headline: "Augment answers with content beyond your website.",
    description:
      "Ansera doesn't just read your web pages. Connect it to your external content library — whitepapers, webinar recordings, pricing tables, presentations — and it will answer from all of it.",
    bullets: [
      "External video and audio: YouTube, Vimeo, and podcasts",
      "Documents on Dropbox, Google Drive, and Microsoft OneDrive",
      "Support for PDF, PPT, DOC, XLS, MP3, and MP4 file formats",
    ],
    mockup: (
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#0a1520",
          border: "1px solid rgba(0,201,167,0.12)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="px-5 py-3.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>External Content Sources</span>
        </div>
        <div className="p-6 space-y-3">
          {[
            { label: "PDF Documents", sub: "Dropbox, Google Drive, OneDrive", icon: "📄" },
            { label: "Video Content", sub: "YouTube, Vimeo embeds", icon: "🎬" },
            { label: "Podcasts & Audio", sub: "MP3, MP4 audio files", icon: "🎙️" },
            { label: "Presentations", sub: "PPT, XLS, DOC files", icon: "📊" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-3.5 rounded-xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="text-xl flex-shrink-0">{item.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.label}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{item.sub}</div>
              </div>
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#22c55e" }} />
            </div>
          ))}
          <div className="pt-2 text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
            4 external sources connected · <span style={{ color: "#00C9A7" }}>36 documents indexed</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function SolutionSection() {
  const [active, setActive] = useState("instant");
  const current = features.find((f) => f.id === active)!;

  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,201,167,0.3), transparent)" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16 reveal">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#00C9A7", letterSpacing: "0.2em" }}
          >
            The Solution
          </p>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.05] max-w-3xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
          >
            Everything your website needs to answer visitors instantly.
          </h2>
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap gap-2 mb-14 reveal">
          {features.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: active === f.id ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.04)",
                color: active === f.id ? "#00C9A7" : "rgba(255,255,255,0.45)",
                border: active === f.id ? "1px solid rgba(0,201,167,0.3)" : "1px solid rgba(255,255,255,0.07)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <f.icon size={14} />
              {f.tab}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <h3
              className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-[1.1]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
            >
              {current.headline}
            </h3>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {current.description}
            </p>
            <ul className="space-y-3">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(0,201,167,0.15)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: mockup */}
          <div className="relative">
            {/* Glow behind mockup */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #00C9A7 0%, transparent 70%)", transform: "scale(0.8)" }}
            />
            {current.mockup}
          </div>
        </div>
      </div>
    </section>
  );
}
