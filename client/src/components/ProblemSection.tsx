/*
 * ProblemSection — Linear.app-inspired
 * Dark background, large left-aligned headline, stat cards on right
 */

import { TrendingDown, MessageSquareX, DollarSign } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    stat: "68%",
    label: "of visitors leave after a failed search",
    detail: "Every failed search is a visitor permanently lost to a competitor.",
  },
  {
    icon: MessageSquareX,
    stat: "4.2×",
    label: "more support tickets from poor search",
    detail: "Your team spends hours answering questions your site should handle.",
  },
  {
    icon: DollarSign,
    stat: "$2.1M",
    label: "average annual revenue lost to poor UX",
    detail: "Frustrated prospects leave and never come back.",
  },
];

export default function ProblemSection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#080F18" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: headline */}
          <div className="reveal-left">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "#00C9A7", letterSpacing: "0.15em" }}
            >
              The Problem
            </p>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-[1.05]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
            >
              Your website is losing visitors every single day.
            </h2>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Traditional keyword search was built for a different era. Today's visitors expect instant, intelligent answers — not a list of vague results that sends them to your competitor.
            </p>
            <div
              className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer"
              style={{ color: "#00C9A7" }}
            >
              See how Ansera fixes this
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="space-y-4 reveal-right">
            {problems.map((p, i) => (
              <div
                key={p.stat}
                className={`reveal delay-${(i + 1) * 100} flex items-start gap-5 p-6 rounded-2xl transition-all duration-300`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(0,201,167,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(239,68,68,0.1)" }}
                >
                  <p.icon size={20} style={{ color: "#ef4444" }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span
                      className="text-3xl font-bold"
                      style={{ color: "#ef4444", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
                    >
                      {p.stat}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {p.label}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {p.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
