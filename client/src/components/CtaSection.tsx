/*
 * CtaSection — "Ready to Stop Losing Visitors?"
 * Dark navy with teal gradient background image
 */

import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663390113999/SS6w9n9Gp9eGiveEMGxHyC/ansera-cta-bg-kB9uH68icYfqnqw2cdhdhm.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.6) 50%, rgba(13,27,42,0.85) 100%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
        <div className="reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: "rgba(0, 201, 167, 0.12)",
              border: "1px solid rgba(0, 201, 167, 0.3)",
              color: "#00C9A7",
            }}
          >
            Get Started Today
          </div>
          <h2
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
          >
            Ready to stop losing
            <br />
            <span className="text-gradient-teal">visitors?</span>
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}
          >
            Get started for free. No credit card required. See results in days, not months.
            Join 500+ teams who've transformed their website experience.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="btn-teal flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Start Free Trial
              <ArrowRight size={18} />
            </button>
            <button
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
            >
              Schedule Demo
            </button>
          </div>

          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
