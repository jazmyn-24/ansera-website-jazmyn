/*
 * HowItWorksSection — Real 3-step Ansera process
 * Linear.app-inspired alternating split layout
 * Real content from ansera.ai/how-it-works
 */

const steps = [
  {
    number: "01",
    title: "Install the Ansera plugin",
    description:
      "Ansera installs in minutes and starts delivering real answers to your visitors — not just links or chatbot dead ends. No backend duplication or external AI training needed.",
    detail: "Syncs with HTML pages and PDF files automatically",
    platforms: [
      { name: "WordPress", detail: "Install directly from the WordPress Plugin Marketplace" },
      { name: "Webflow", detail: "Register and install from the Webflow Marketplace" },
      { name: "Wix / Squarespace", detail: "Register on Ansera.ai and add a code snippet to your site" },
    ],
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="px-4 py-3 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
          <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>WordPress Plugin Marketplace</span>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 p-3 rounded-xl mb-4" style={{ background: "rgba(0,201,167,0.06)", border: "1px solid rgba(0,201,167,0.15)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}>A</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ansera Search</div>
              <div className="text-xs truncate" style={{ color: "rgba(255,255,255,0.4)" }}>AI-powered answer engine · by ansera01</div>
              <div className="flex items-center gap-1 mt-1">
                {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-xs">★</span>)}
                <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.3)" }}>(9)</span>
              </div>
            </div>
            <button className="px-3 py-1.5 rounded-lg text-xs font-semibold flex-shrink-0" style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}>
              Activate
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs mb-3" style={{ color: "#00C9A7" }}>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Scanning and indexing your content...
          </div>
          <div className="space-y-1.5">
            {[["Blog posts", "142 pages"], ["Product pages", "89 pages"], ["Help docs", "234 pages"], ["PDFs", "18 files"]].map(([label, count]) => (
              <div key={label} className="flex items-center justify-between text-xs py-1 px-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Customize the plugin",
    description:
      "Ansera works right out of the box, but gives you full point-and-click control over how it looks and behaves on your site. No code required.",
    detail: "Style your integration, control messaging, and capture leads",
    platforms: [],
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
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
            <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Default Questions (up to 5)</div>
            {["What's your pricing?", "How do I get started?", "Do you offer a free trial?"].map((q) => (
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
    number: "03",
    title: "Learn and improve",
    description:
      "Analyze real visitor questions and refine your content strategy with built-in chat insights and feedback tools. Discover what your audience wants — and what gaps you need to fill.",
    detail: "Third-party integrations for tracking or outreach",
    platforms: [],
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Analytics Dashboard</span>
          <span className="text-xs px-2 py-1 rounded-md" style={{ background: "rgba(0,201,167,0.1)", color: "#00C9A7" }}>Live</span>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[["2,847", "Searches"], ["94%", "Answered"], ["1.2s", "Avg response"]].map(([v, l]) => (
              <div key={l} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="text-lg font-bold mb-0.5" style={{ color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}>{v}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Top queries this week</div>
          <div className="space-y-2">
            {[["return policy", 342], ["pricing plans", 218], ["how to integrate", 156], ["bulk discounts", 89]].map(([q, n]) => (
              <div key={String(q)} className="flex items-center gap-3">
                <span className="text-xs flex-1 truncate" style={{ color: "rgba(255,255,255,0.6)" }}>{q}</span>
                <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full" style={{ width: `${(n as number) / 3.42}%`, background: "#00C9A7" }} />
                </div>
                <span className="text-xs w-8 text-right" style={{ color: "rgba(255,255,255,0.4)" }}>{n}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 text-xs" style={{ color: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            1 unanswered query — <span style={{ color: "#00C9A7" }}>create content to fill gap →</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#080F18" }}
    >
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-20 reveal">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#00C9A7", letterSpacing: "0.15em" }}
          >
            Setup in a Snap
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-[1.05] max-w-2xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
          >
            Turn your website into a smart answer engine in 3 easy steps.
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: "rgba(255,255,255,0.45)" }}>
            Ansera installs in minutes and starts delivering real answers to your visitors — not just links or chatbot dead ends.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Text — alternates side */}
              <div className={`${i % 2 === 1 ? "lg:order-2 reveal-right" : "reveal-left"}`}>
                <div
                  className="text-8xl font-bold mb-4 leading-none select-none"
                  style={{
                    color: "rgba(255,255,255,0.04)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-[1.1]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
                >
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {step.description}
                </p>

                {step.platforms.length > 0 && (
                  <div className="mb-5 space-y-2.5">
                    {step.platforms.map((p) => (
                      <div key={p.name} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,201,167,0.1)" }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#00C9A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}: </span>
                          <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{p.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
                  ✓ {step.detail}
                </p>
              </div>

              {/* Mockup */}
              <div className={`${i % 2 === 1 ? "lg:order-1 reveal-left" : "reveal-right"}`}>
                {step.mockup}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
