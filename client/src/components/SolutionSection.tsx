/*
 * SolutionSection — "Ansera Is The Answer"
 * Dark navy background, teal accents
 */

import { Zap, Settings, MessageCircle, Brain, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Answers",
    description:
      "Visitors get exactly what they need in seconds. No more clicking through 10 pages or reading irrelevant results.",
  },
  {
    icon: Settings,
    title: "Works Out of the Box",
    description:
      "1-click install. Your content is indexed and live immediately. No configuration, no developer needed.",
  },
  {
    icon: MessageCircle,
    title: "Conversational AI",
    description:
      "Feels like talking to a human expert. Understands context, follow-ups, and nuance across every conversation.",
  },
  {
    icon: Brain,
    title: "Learns Your Content",
    description:
      "Automatically indexes your entire site and stays up to date as you publish new content. Always accurate.",
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    description:
      "See exactly what visitors are searching for. Identify content gaps and optimize your site with real data.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Serve visitors in their native language. Ansera automatically detects and responds in 40+ languages.",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00C9A7 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(0, 201, 167, 0.12)",
              border: "1px solid rgba(0, 201, 167, 0.3)",
              color: "#00C9A7",
            }}
          >
            The Solution
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
          >
            Ansera is{" "}
            <span className="text-gradient-teal">the answer.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
          >
            AI that understands your content. Answers that convert. Built for teams who
            care about every visitor's experience.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal delay-${(i % 3 + 1) * 100} rounded-2xl p-7 group transition-all duration-300`}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,201,167,0.06)";
                e.currentTarget.style.borderColor = "rgba(0,201,167,0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: "rgba(0, 201, 167, 0.12)",
                }}
              >
                <feature.icon size={20} style={{ color: "#00C9A7" }} />
              </div>
              <h3
                className="text-lg font-semibold text-white mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
