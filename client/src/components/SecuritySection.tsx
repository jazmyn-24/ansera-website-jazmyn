/*
 * SecuritySection — Linear.app-inspired
 * Dark background, large headline, 2-column feature grid
 */

import { Shield, Lock, Eye, RefreshCw, Server, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Independently audited security controls. Your data is protected to enterprise standards.",
  },
  {
    icon: Lock,
    title: "End-to-end encryption",
    description: "All data encrypted in transit and at rest using AES-256 and TLS 1.3.",
  },
  {
    icon: Eye,
    title: "No data training",
    description: "Your content is never used to train AI models. What's yours stays yours.",
  },
  {
    icon: RefreshCw,
    title: "GDPR compliant",
    description: "Full compliance with GDPR, CCPA, and other global privacy regulations.",
  },
  {
    icon: Server,
    title: "99.9% uptime SLA",
    description: "Enterprise-grade infrastructure with redundancy across multiple regions.",
  },
  {
    icon: CheckCircle,
    title: "Role-based access",
    description: "Fine-grained permissions so the right people have access to the right data.",
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
              Built for teams that can't afford to compromise.
            </h2>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Enterprise-grade security baked in from day one. Not bolted on after the fact.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {["SOC 2 Type II", "GDPR", "CCPA", "HIPAA Ready"].map(badge => (
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
