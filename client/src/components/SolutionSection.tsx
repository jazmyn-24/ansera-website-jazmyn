/*
 * SolutionSection — Linear.app-inspired tabbed feature showcase
 * Dark background, left nav tabs, right product UI mockup
 */

import { useState } from "react";
import { Search, Zap, BarChart3, Globe } from "lucide-react";

const features = [
  {
    id: "instant",
    icon: Search,
    title: "Instant AI answers",
    headline: "Answer every question, instantly.",
    description:
      "Ansera understands natural language questions and delivers precise answers from your content — not a list of links. Visitors get what they need in seconds.",
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
            <Search size={16} style={{ color: "#00C9A7" }} />
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>What's your return policy?</span>
            <div className="ml-auto w-2 h-4 rounded-sm animate-pulse" style={{ background: "#00C9A7" }} />
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,201,167,0.15)" }}>
                <span className="text-xs font-bold" style={{ color: "#00C9A7" }}>A</span>
              </div>
              <div className="flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                We offer a <span style={{ color: "#00C9A7" }}>30-day free return</span> on all orders. Simply visit your order history, select the item, and click "Start Return." Refunds are processed within 3–5 business days.
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
    title: "5-minute setup",
    headline: "Live in minutes, not months.",
    description:
      "Paste one line of code. Ansera crawls your site, learns your content, and is ready to answer questions. No training data, no configuration, no developer required.",
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "#0a1520", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
          <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>index.html</span>
        </div>
        <div className="p-6 font-mono text-sm">
          <div style={{ color: "rgba(255,255,255,0.3)" }}>{"<!-- Add to your <head> -->"}</div>
          <div className="mt-3" style={{ color: "#7dd3fc" }}>{"<script"}</div>
          <div className="ml-4" style={{ color: "#86efac" }}>src<span style={{ color: "rgba(255,255,255,0.5)" }}>=</span><span style={{ color: "#fde68a" }}>"https://cdn.ansera.ai/v2/widget.js"</span></div>
          <div className="ml-4" style={{ color: "#86efac" }}>data-site-id<span style={{ color: "rgba(255,255,255,0.5)" }}>=</span><span style={{ color: "#fde68a" }}>"your-site-id"</span></div>
          <div style={{ color: "#7dd3fc" }}>{">"}</div>
          <div style={{ color: "#7dd3fc" }}>{"</script>"}</div>
          <div className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.2)" }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00C9A7" }} />
            <span className="text-xs" style={{ color: "#00C9A7" }}>Ansera is indexing your site... 847 pages found</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Search analytics",
    headline: "Know exactly what visitors want.",
    description:
      "Every search query is a signal. Ansera's analytics dashboard reveals your visitors' most common questions, knowledge gaps, and conversion opportunities.",
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "#0a1520", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
          <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Analytics Dashboard</span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[["2,847", "Searches today"], ["94%", "Answer rate"], ["1.2s", "Avg response"]].map(([v, l]) => (
              <div key={l} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="text-xl font-bold mb-1" style={{ color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}>{v}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Top queries this week</div>
            {[["return policy", 342], ["pricing plans", 218], ["how to integrate", 156]].map(([q, n]) => (
              <div key={String(q)} className="flex items-center gap-3">
                <span className="text-sm flex-1" style={{ color: "rgba(255,255,255,0.6)" }}>{q}</span>
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full" style={{ width: `${(n as number) / 3.42}%`, background: "#00C9A7" }} />
                </div>
                <span className="text-xs w-8 text-right" style={{ color: "rgba(255,255,255,0.4)" }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "multilingual",
    icon: Globe,
    title: "Multilingual",
    headline: "Speak every visitor's language.",
    description:
      "Ansera automatically detects and responds in the visitor's language — 95+ languages supported out of the box. No extra configuration needed.",
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "#0a1520", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
          <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Multilingual support</span>
        </div>
        <div className="p-6 space-y-4">
          {[
            { flag: "🇺🇸", q: "What's your return policy?", a: "We offer 30-day free returns on all orders." },
            { flag: "🇩🇪", q: "Was ist Ihre Rückgabepolitik?", a: "Wir bieten 30-tägige kostenlose Rücksendungen an." },
            { flag: "🇯🇵", q: "返品ポリシーは何ですか？", a: "すべての注文に30日間の無料返品を提供しています。" },
          ].map(({ flag, q, a }) => (
            <div key={flag} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{flag}</span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{q}</span>
              </div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{a}</div>
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
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
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
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3
                className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-[1.1]"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
              >
                {current.headline}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {current.description}
              </p>
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
