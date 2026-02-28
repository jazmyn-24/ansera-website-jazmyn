/*
 * SecuritySection — "Enterprise Security. Built In."
 * Split layout: text left, security image right
 */

import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Invisible CAPTCHA Protection",
    description: "Protects your AI from abuse and bot traffic without friction for real users.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Encryption",
    description: "All data encrypted in transit and at rest using AES-256 and TLS 1.3.",
  },
  {
    icon: Eye,
    title: "Zero Data Exposure",
    description: "Your content stays yours. We never train models on your proprietary data.",
  },
  {
    icon: CheckCircle,
    title: "GDPR & SOC 2 Compliant",
    description: "Full compliance documentation available. Ready for enterprise procurement.",
  },
];

export default function SecuritySection() {
  return (
    <section className="py-24" style={{ background: "#f8f9fa" }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="reveal-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: "rgba(0, 201, 167, 0.08)",
                border: "1px solid rgba(0, 201, 167, 0.25)",
                color: "#00A88C",
              }}
            >
              Enterprise Security
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
            >
              Enterprise security.{" "}
              <span style={{ color: "#00C9A7" }}>Built in.</span>
            </h2>
            <p
              className="text-lg mb-10 leading-relaxed"
              style={{ color: "rgba(13,27,42,0.6)" }}
            >
              Your data and your visitors are protected with enterprise-grade security
              from day one. No configuration required.
            </p>

            <div className="space-y-6">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(0, 201, 167, 0.1)" }}
                  >
                    <feature.icon size={18} style={{ color: "#00C9A7" }} />
                  </div>
                  <div>
                    <h4
                      className="font-semibold mb-1"
                      style={{ color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(13,27,42,0.6)" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: "rgba(0,0,0,0.05)",
                  color: "rgba(13,27,42,0.7)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                SOC 2 Type II
              </div>
              <div
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: "rgba(0,0,0,0.05)",
                  color: "rgba(13,27,42,0.7)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                GDPR Ready
              </div>
              <div
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: "rgba(0,0,0,0.05)",
                  color: "rgba(13,27,42,0.7)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                CCPA Compliant
              </div>
            </div>
          </div>

          {/* Right: Security visual */}
          <div className="reveal-right">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 24px 64px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390113999/SS6w9n9Gp9eGiveEMGxHyC/ansera-security-bg-44rzFYAShNRHriYj7FezkT.webp"
                alt="Enterprise Security"
                className="w-full h-80 object-cover"
              />
              {/* Overlay card */}
              <div
                className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl"
                style={{
                  background: "rgba(13,27,42,0.9)",
                  border: "1px solid rgba(0,201,167,0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    All systems secure
                  </span>
                </div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Last security audit: 7 days ago · 0 vulnerabilities found
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
