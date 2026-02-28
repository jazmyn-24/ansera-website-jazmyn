/*
 * ProblemSection — "The Problem With Traditional Search"
 * Light background, dark cards with icon accents
 */

import { TrendingDown, HeadphonesIcon, XCircle } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "High Bounce Rates",
    description:
      "Visitors can't find what they need, so they leave. Every failed search is a visitor you've permanently lost to a competitor.",
    stat: "68%",
    statLabel: "of visitors leave after a failed search",
  },
  {
    icon: HeadphonesIcon,
    title: "Support Overload",
    description:
      "The same questions asked repeatedly, day after day. Your team spends hours answering what your site should handle automatically.",
    stat: "4.2x",
    statLabel: "more support tickets from poor search",
  },
  {
    icon: XCircle,
    title: "Lost Conversions",
    description:
      "Prospects get frustrated and go to competitors. Every bad search experience is a lost deal — and you never even know it happened.",
    stat: "$2.1M",
    statLabel: "average annual revenue lost to poor UX",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24" style={{ background: "#f8f9fa" }}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(220, 38, 38, 0.08)",
              border: "1px solid rgba(220, 38, 38, 0.2)",
              color: "#dc2626",
            }}
          >
            The Problem
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
          >
            Your search is costing you
            <br />
            <span style={{ color: "#dc2626" }}>real money.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(13,27,42,0.6)", lineHeight: 1.7 }}
          >
            Traditional keyword search was built for a different era. Today's visitors expect
            instant, intelligent answers — not a list of vague results.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className={`reveal delay-${(i + 1) * 100} rounded-2xl p-8 transition-all duration-300`}
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "rgba(220, 38, 38, 0.08)" }}
              >
                <problem.icon size={22} style={{ color: "#dc2626" }} />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(13,27,42,0.6)" }}>
                {problem.description}
              </p>
              <div
                className="pt-5 border-t"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}
              >
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#dc2626", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {problem.stat}
                </div>
                <div className="text-xs" style={{ color: "rgba(13,27,42,0.5)" }}>
                  {problem.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
