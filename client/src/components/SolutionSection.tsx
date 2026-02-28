/*
 * SolutionSection — Linear.app-inspired tabbed feature showcase
 * Dark background, left nav tabs, right product UI mockup
 * Real content from ansera.ai
 */

import { useState } from "react";
import { Zap, BarChart3, Sliders, Users, FileText } from "lucide-react";

const features = [
  {
    id: "instant",
    icon: Zap,
    title: "Instant AI answers",
    headline: "Contextual answers from your content.",
    description:
      "Ansera delivers real-time, intelligent responses based on your website's actual content — not generic AI guesses. It understands context, not just keywords, so visitors always get precise answers.",
    bullets: [
      "Real-time content analysis and intelligent response generation",
      "Instantly surfaces relevant answers based on your site's actual content",
      "Trains on external content: PDFs, YouTube/Vimeo videos, podcasts, and documents",
    ],
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "#0a1520", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
          <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>ansera-search.widget</span>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl mb-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,201,167,0.3)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>What's your return policy?</span>
            <div className="ml-auto w-2 h-4 rounded-sm animate-pulse" style={{ background: "#00C9A7" }} />
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,201,167,0.15)" }}>
                <span className="text-xs font-bold" style={{ color: "#00C9A7" }}>A</span>
              </div>
              <div className="flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                We offer a <span style={{ color: "#00C9A7" }}>30-day money-back guarantee</span> on all orders. Simply visit your order history, select the item, and click "Start Return." Refunds are processed within 3–5 business days.
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Start a return", "Track my order", "Contact support"].map(s => (
                <button key={s} className="text-xs px-3 py-1.5 rounded-lg transition-colors" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "setup",
    icon: Zap,
    title: "1-click setup",
    headline: "Instant setup to power instant answers.",
    description:
      "Ansera installs in one click from the WordPress Plugin Marketplace and automatically trains on your existing content. No backend changes, no developer needed — just install and go live in under 5 minutes.",
    bullets: [
      "Install directly from the WordPress Plugin Marketplace",
      "Automatically trained on your existing website content",
      "Styled to match your theme out of the box — no coding required",
    ],
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "#0a1520", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
          <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>WordPress Plugin Marketplace</span>
        </div>
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "rgba(0,201,167,0.06)", border: "1px solid rgba(0,201,167,0.15)" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold" style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}>A</div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ansera Search</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>AI-powered answer engine for your site</div>
            </div>
            <div className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}>Activate</div>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: "#00C9A7" }}>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Connected and indexing your content...
          </div>
          <div className="space-y-1.5">
            {["Blog posts", "Product pages", "Help docs", "Landing pages"].map((item, i) => (
              <div key={item} className="flex items-center justify-between text-xs py-1">
                <span style={{ color: "rgba(255,255,255,0.5)" }}>{item}</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>{["142", "89", "234", "18"][i]} pages indexed</span>
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
    title: "Content insights",
    headline: "Evidence-based content insights.",
    description:
      "Ansera shows you exactly what your visitors are searching for — including the questions you're not answering. Use real data to close content gaps and improve your SEO strategy.",
    bullets: [
      "View real-time analytics on what users are asking",
      "Spot content gaps based on missed or unsupported queries",
      "Use data to guide your editorial and SEO content strategy",
    ],
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "#0a1520", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Query Analytics — Last 30 days</span>
          <span className="text-xs px-2 py-1 rounded-md" style={{ background: "rgba(0,201,167,0.1)", color: "#00C9A7" }}>Live</span>
        </div>
        <div className="p-5 space-y-3">
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[["2,847", "Searches"], ["94%", "Answered"], ["1.2s", "Avg response"]].map(([v, l]) => (
              <div key={l} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="text-lg font-bold mb-0.5" style={{ color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}>{v}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{l}</div>
              </div>
            ))}
          </div>
          {[
            { q: "What's your return policy?", count: 342, answered: true },
            { q: "How do I cancel my subscription?", count: 218, answered: true },
            { q: "Do you offer bulk discounts?", count: 156, answered: false },
            { q: "Is there an API available?", count: 89, answered: false },
          ].map((item) => (
            <div key={item.q} className="flex items-center justify-between gap-3">
              <span className="text-xs flex-1 truncate" style={{ color: "rgba(255,255,255,0.65)" }}>{item.q}</span>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{item.count}</span>
                <div className={`w-2 h-2 rounded-full ${item.answered ? "bg-green-400" : "bg-red-400"}`} />
              </div>
            </div>
          ))}
          <div className="pt-2 text-xs" style={{ color: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            2 unanswered queries — <span style={{ color: "#00C9A7" }}>create content to fill gaps →</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "customize",
    icon: Sliders,
    title: "No-code customization",
    headline: "Flexible configuration — no coding needed.",
    description:
      "Style Ansera as a search icon, chatbot, or footer widget. Match your brand colors and fonts, set default questions to guide visitors, and update everything from a point-and-click dashboard.",
    bullets: [
      "Style as a search icon, chatbot widget, or footer bar",
      "Revise colors and fonts to match your brand identity",
      "Set up to 5 default questions to guide users toward key information",
    ],
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "#0a1520", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Appearance Settings</span>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Widget Style</div>
            <div className="flex gap-2">
              {["Search Icon", "Chat Widget", "Footer Bar"].map((style, i) => (
                <button key={style} className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: i === 1 ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.05)", color: i === 1 ? "#00C9A7" : "rgba(255,255,255,0.5)", border: i === 1 ? "1px solid rgba(0,201,167,0.3)" : "1px solid rgba(255,255,255,0.08)" }}>
                  {style}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Brand Color</div>
            <div className="flex gap-2 items-center">
              {["#00C9A7", "#3B82F6", "#8B5CF6", "#F59E0B", "#EF4444"].map((color) => (
                <div key={color} className="w-6 h-6 rounded-full cursor-pointer" style={{ background: color, outline: color === "#00C9A7" ? "2px solid white" : "none", outlineOffset: "2px" }} />
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Default Questions</div>
            {["What's your pricing?", "How do I get started?"].map((q) => (
              <div key={q} className="flex items-center gap-2 mb-1.5 px-3 py-2 rounded-lg text-xs" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}>
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
    title: "Lead capture",
    headline: "Capture visitor information.",
    description:
      "Turn every interaction into an opportunity. Embed custom lead forms, personalize responses with email templates, and track anonymous visitor data — all without disrupting the user experience.",
    bullets: [
      "Embed or integrate custom lead forms within the chat experience",
      "Personalize responses with email template customization",
      "Track anonymous visitor data like IP and location for analytics",
    ],
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "#0a1520", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Lead Capture — Email Template</span>
        </div>
        <div className="p-5 space-y-3">
          <div className="p-3 rounded-lg text-sm" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}>
            "Want to save this conversation? Enter your email and we'll send you a summary."
          </div>
          <div className="flex gap-2">
            <input readOnly placeholder="your@email.com" className="flex-1 px-3 py-2 rounded-lg text-xs" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }} />
            <button className="px-3 py-2 rounded-lg text-xs font-semibold" style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A" }}>Send</button>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {[["1,247", "Leads captured"], ["4.2 min", "Avg. session"], ["68%", "Email open rate"], ["+23%", "Conversion lift"]].map(([v, l]) => (
              <div key={l} className="p-2.5 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-sm font-bold" style={{ color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}>{v}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "external",
    icon: FileText,
    title: "External content",
    headline: "Augment responses with external content.",
    description:
      "Ansera doesn't just read your web pages. Train it on your YouTube videos, Vimeo recordings, podcasts, PDFs, and documents stored on Dropbox, Google Drive, or Microsoft OneDrive.",
    bullets: [
      "External video and audio: YouTube, Vimeo, and podcast links",
      "Documents from Dropbox, Google Drive, and Microsoft OneDrive",
      "Supports PDF, PPT, DOC, XLS, MP3, and MP4 formats",
    ],
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "#0a1520", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>External Content Sources</span>
        </div>
        <div className="p-5 space-y-2">
          {[
            { type: "YouTube", name: "Product Demo Walkthrough", icon: "▶", color: "#ef4444" },
            { type: "PDF", name: "Enterprise Security Whitepaper", icon: "📄", color: "#f59e0b" },
            { type: "Google Drive", name: "Pricing & Features Deck", icon: "📊", color: "#3b82f6" },
            { type: "Podcast", name: "Customer Success Stories", icon: "🎙", color: "#8b5cf6" },
            { type: "Dropbox", name: "Onboarding Guide v3.pdf", icon: "📦", color: "#0ea5e9" },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3 p-2.5 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="text-base">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium truncate" style={{ color: "rgba(255,255,255,0.75)" }}>{item.name}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{item.type}</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function SolutionSection() {
  const [active, setActive] = useState(features[0].id);
  const current = features.find(f => f.id === active)!;

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00C9A7 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16 reveal">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#00C9A7", letterSpacing: "0.15em" }}
          >
            The Solution
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-[1.05] max-w-2xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
          >
            Everything your website needs to answer visitors instantly.
          </h2>
        </div>

        {/* Tab + content layout */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-12 items-start">
          {/* Left: tab nav */}
          <div className="space-y-1">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-200"
                style={{
                  background: active === f.id ? "rgba(0,201,167,0.08)" : "transparent",
                  border: active === f.id ? "1px solid rgba(0,201,167,0.2)" : "1px solid transparent",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: active === f.id ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.05)",
                  }}
                >
                  <f.icon
                    size={17}
                    style={{ color: active === f.id ? "#00C9A7" : "rgba(255,255,255,0.4)" }}
                  />
                </div>
                <span
                  className="text-sm font-medium"
                  style={{
                    color: active === f.id ? "#fff" : "rgba(255,255,255,0.45)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {f.title}
                </span>
                {active === f.id && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00C9A7" }} />
                )}
              </button>
            ))}
          </div>

          {/* Right: content */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3
                className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-[1.1]"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
              >
                {current.headline}
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                {current.description}
              </p>
              <ul className="space-y-3">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,201,167,0.15)" }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#00C9A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {current.mockup}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
