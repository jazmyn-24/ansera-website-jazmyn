/*
 * CtaSection — Front.com-inspired
 * Dark background, bold two-line headline, dual CTAs
 */

export default function CtaSection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#080F18" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,201,167,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
        {/* Eyebrow */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-6 reveal"
          style={{ color: "#00C9A7", letterSpacing: "0.15em" }}
        >
          Get started today
        </p>

        {/* Headline */}
        <h2
          className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.0] mb-6 reveal"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
        >
          Ready to deliver exceptional
          <br />
          answers with Ansera?
        </h2>

        <p
          className="text-xl mb-12 max-w-[560px] mx-auto reveal"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Join 500+ teams who've transformed their website into an AI-powered answer engine.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal">
          <button
            className="btn-teal px-8 py-4 rounded-xl text-base font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", minWidth: "200px" }}
          >
            Start free trial
          </button>
          <button
            className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              fontFamily: "'Space Grotesk', sans-serif",
              minWidth: "200px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
            }}
          >
            Request a demo
          </button>
        </div>

        {/* Trust note */}
        <p
          className="mt-8 text-sm reveal"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>
    </section>
  );
}
