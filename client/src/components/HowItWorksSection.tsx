/*
 * HowItWorksSection — Linear.app-inspired alternating split layout
 * Dark background, large step numbers, text + mockup pairs
 */

const steps = [
  {
    number: "01",
    title: "Install the snippet",
    description:
      "Add a single line of JavaScript to your site. Works with any platform — WordPress, Webflow, Shopify, custom HTML. No developer required.",
    detail: "Takes under 5 minutes. No backend changes needed.",
    mockup: (
      <div className="rounded-2xl p-6 font-mono text-sm" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="text-xs mb-4 font-sans" style={{ color: "rgba(255,255,255,0.3)" }}>Paste into your HTML {"<head>"}</div>
        <div style={{ color: "#7dd3fc" }}>{"<script"}</div>
        <div className="ml-4" style={{ color: "#86efac" }}>src<span style={{ color: "rgba(255,255,255,0.4)" }}>=</span><span style={{ color: "#fde68a" }}>"https://cdn.ansera.ai/v2/widget.js"</span></div>
        <div className="ml-4" style={{ color: "#86efac" }}>data-site-id<span style={{ color: "rgba(255,255,255,0.4)" }}>=</span><span style={{ color: "#fde68a" }}>"abc123"</span></div>
        <div style={{ color: "#7dd3fc" }}>{">"}</div>
        <div style={{ color: "#7dd3fc" }}>{"</script>"}</div>
        <div className="mt-5 flex items-center gap-2 text-xs font-sans" style={{ color: "#00C9A7" }}>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00C9A7" }} />
          Connected and indexing...
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Ansera learns your content",
    description:
      "Our AI automatically crawls and indexes your entire website — every page, blog post, product, and doc. It understands context, not just keywords.",
    detail: "Updates automatically when you publish new content.",
    mockup: (
      <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="text-xs mb-5 font-sans" style={{ color: "rgba(255,255,255,0.3)" }}>Content indexed</div>
        <div className="space-y-3">
          {[
            { label: "Blog posts", count: 142, pct: 100 },
            { label: "Product pages", count: 89, pct: 78 },
            { label: "Help docs", count: 234, pct: 60 },
            { label: "Landing pages", count: 18, pct: 40 },
          ].map(({ label, count, pct }) => (
            <div key={label}>
              <div className="flex justify-between text-xs mb-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span>{label}</span>
                <span style={{ color: "#00C9A7" }}>{count} pages</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, background: "linear-gradient(90deg, #00C9A7, #7FFFD4)" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 text-xs font-sans" style={{ color: "rgba(255,255,255,0.35)" }}>
          483 pages indexed · Last updated 2 min ago
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Visitors get instant answers",
    description:
      "A beautiful search widget appears on your site. Visitors type any question in plain language and get a precise, sourced answer — instantly.",
    detail: "Fully customizable to match your brand.",
    mockup: (
      <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="p-5">
          <div className="text-xs mb-4 font-sans" style={{ color: "rgba(255,255,255,0.3)" }}>Live on your site</div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl mb-5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,201,167,0.3)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>How do I cancel my subscription?</span>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,201,167,0.15)" }}>
              <span className="text-xs font-bold" style={{ color: "#00C9A7" }}>A</span>
            </div>
            <div className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              You can cancel anytime from <span style={{ color: "#00C9A7" }}>Settings → Billing → Cancel Plan</span>. Your access continues until the end of the billing period. No cancellation fees.
            </div>
          </div>
        </div>
        <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>Powered by Ansera AI</span>
          <span className="text-xs" style={{ color: "#00C9A7" }}>Was this helpful?</span>
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
            How It Works
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-[1.05] max-w-xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
          >
            Up and running in under 5 minutes.
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Text — alternates side */}
              <div
                className={`${i % 2 === 1 ? "lg:order-2 reveal-right" : "reveal-left"}`}
              >
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
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {step.description}
                </p>
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
