/*
 * SecuritySection — Linear.app-inspired
 * Dark background, large headline, 2-column feature grid
 */

import { Shield, Lock, Eye, RefreshCw, Server, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Invisible CAPTCHA protection",
    description: "Invisible Google reCAPTCHA v3 silently blocks bots without disrupting your real visitors' experience.",
  },
  {
    icon: Lock,
    title: "Enterprise-grade security",
    description: "Ansera is designed with enterprise-grade security at its core — so you can confidently offer AI on your site.",
  },
  {
    icon: Eye,
    title: "No disruption to user flow",
    description: "Security runs silently in the background. Real visitors never see a CAPTCHA challenge or friction.",
  },
  {
    icon: RefreshCw,
    title: "Your content stays yours",
    description: "Ansera only answers from your site's content. No data is shared, sold, or used to train external models.",
  },
  {
    icon: Server,
    title: "Bot traffic blocked automatically",
    description: "Only real visitors interact with your content. Automated bots are silently blocked before they reach Ansera.",
  },
  {
    icon: CheckCircle,
    title: "Confidence at any scale",
    description: "Whether you're serving thousands of daily users or managing sensitive business content, Ansera keeps you safe.",
  },
];

export default function SecuritySection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#080F18" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div className="reveal-left">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#00C9A7", letterSpacing: "0.15em" }}
            >
              Security & Privacy
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
            >
              Security built with customers first — built for enterprise confidence.
            </h2>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Ansera is designed with enterprise-grade security at its core, so you can confidently offer AI-powered interaction on your site without sacrificing safety or performance.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {["Invisible reCAPTCHA v3", "Bot Protection", "Enterprise Security", "No Data Sharing"].map(badge => (
                <div
                  key={badge}
                  className="px-4 py-2 rounded-lg text-xs font-semibold"
                  style={{
                    background: "rgba(0,201,167,0.08)",
                    border: "1px solid rgba(0,201,167,0.2)",
                    color: "#00C9A7",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {badge}
                </div>
              ))}
            </div>

            {/* Status card */}
            <div
              className="mt-10 p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,201,167,0.15)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
                <span
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  All systems operational
                </span>
              </div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                Last security audit: 7 days ago · 0 vulnerabilities found
              </p>
            </div>
          </div>

          {/* Right: feature grid */}
          <div className="grid sm:grid-cols-2 gap-4 reveal-right">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`reveal delay-${(i % 4 + 1) * 100} p-5 rounded-xl transition-all duration-200`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,201,167,0.05)";
                  e.currentTarget.style.borderColor = "rgba(0,201,167,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "rgba(0,201,167,0.1)" }}
                >
                  <f.icon size={16} style={{ color: "#00C9A7" }} />
                </div>
                <h4
                  className="text-sm font-semibold text-white mb-1.5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {f.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
