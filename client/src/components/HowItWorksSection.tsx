/*
 * HowItWorksSection — Step-by-step visual flow
 * Light background with numbered steps and connecting lines
 */

import { Download, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install in 1 Click",
    description:
      "Add Ansera to your website with a single plugin install or a small JavaScript snippet. No developer required. Works with WordPress, Webflow, Wix, Squarespace, and more.",
    detail: "Average install time: 5 minutes",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Indexes Your Content",
    description:
      "Ansera automatically crawls and indexes your entire website — pages, blog posts, FAQs, documentation, and product descriptions. Your content becomes its knowledge base.",
    detail: "Indexing completes in minutes",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Visitors Get Instant Answers",
    description:
      "Your visitors ask questions in natural language and get precise, contextual answers instantly. The AI understands intent, not just keywords. Conversions go up, support tickets go down.",
    detail: "Results visible within 24 hours",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24"
      style={{ background: "#fff" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(0, 201, 167, 0.08)",
              border: "1px solid rgba(0, 201, 167, 0.25)",
              color: "#00A88C",
            }}
          >
            How It Works
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
          >
            Up and running in{" "}
            <span style={{ color: "#00C9A7" }}>minutes, not months.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(13,27,42,0.6)", lineHeight: 1.7 }}
          >
            Three simple steps from installation to your first AI-powered answer.
            No technical expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 z-0"
            style={{
              background: "linear-gradient(90deg, transparent, #00C9A7, #00C9A7, transparent)",
              opacity: 0.3,
            }}
          />

          <div className="grid lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal delay-${(i + 1) * 100} text-center lg:text-left`}
              >
                {/* Step number + icon */}
                <div className="flex flex-col items-center lg:items-start mb-6">
                  <div className="relative mb-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #00C9A7 0%, #00A88C 100%)",
                        boxShadow: "0 8px 24px rgba(0, 201, 167, 0.3)",
                      }}
                    >
                      <step.icon size={28} style={{ color: "#0D1B2A" }} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "#0D1B2A",
                        color: "#00C9A7",
                        fontFamily: "'Space Grotesk', sans-serif",
                        border: "2px solid #00C9A7",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div
                    className="text-5xl font-bold opacity-10"
                    style={{ color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(13,27,42,0.6)" }}
                >
                  {step.description}
                </p>
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(0, 201, 167, 0.08)",
                    color: "#00A88C",
                  }}
                >
                  ✓ {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
