/*
 * PricingSection — Tiered pricing plans
 * Light background, highlighted popular plan
 */

import { Check, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    annualPrice: 23,
    description: "Perfect for small websites and blogs getting started with AI search.",
    features: [
      "Up to 500 pages indexed",
      "1,000 AI queries/month",
      "1 website",
      "Basic analytics",
      "Email support",
      "WordPress & Webflow",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    monthlyPrice: 79,
    annualPrice: 63,
    description: "For growing businesses that need more power and insights.",
    features: [
      "Up to 5,000 pages indexed",
      "10,000 AI queries/month",
      "3 websites",
      "Advanced analytics",
      "Priority email support",
      "All platforms supported",
      "Custom branding",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 249,
    annualPrice: 199,
    description: "For large teams with advanced security and compliance needs.",
    features: [
      "Unlimited pages indexed",
      "Unlimited AI queries",
      "Unlimited websites",
      "Enterprise analytics",
      "Dedicated support",
      "All platforms supported",
      "Custom branding",
      "Full API access",
      "SSO & SAML",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="py-24"
      style={{ background: "#fff" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(0, 201, 167, 0.08)",
              border: "1px solid rgba(0, 201, 167, 0.25)",
              color: "#00A88C",
            }}
          >
            Pricing
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
          >
            Simple, transparent{" "}
            <span style={{ color: "#00C9A7" }}>pricing.</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto mb-8"
            style={{ color: "rgba(13,27,42,0.6)", lineHeight: 1.7 }}
          >
            Start free. No credit card required. Upgrade when you're ready.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl" style={{ background: "#f3f4f6" }}>
            <button
              onClick={() => setAnnual(false)}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: !annual ? "#fff" : "transparent",
                color: !annual ? "#0D1B2A" : "rgba(13,27,42,0.5)",
                boxShadow: !annual ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
              style={{
                background: annual ? "#fff" : "transparent",
                color: annual ? "#0D1B2A" : "rgba(13,27,42,0.5)",
                boxShadow: annual ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Annual
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{ background: "#00C9A7", color: "#0D1B2A" }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal delay-${(i + 1) * 100} rounded-2xl p-8 relative transition-all duration-300`}
              style={{
                background: plan.popular ? "#0D1B2A" : "#fff",
                border: plan.popular
                  ? "2px solid #00C9A7"
                  : "1px solid rgba(0,0,0,0.08)",
                boxShadow: plan.popular
                  ? "0 20px 60px rgba(0,201,167,0.15)"
                  : "0 4px 24px rgba(0,0,0,0.04)",
                transform: plan.popular ? "scale(1.02)" : "scale(1)",
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: "linear-gradient(135deg, #00C9A7, #00A88C)",
                    color: "#0D1B2A",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  <Zap size={12} />
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <div
                className="text-sm font-semibold mb-2"
                style={{
                  color: plan.popular ? "#00C9A7" : "#00A88C",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span
                  className="text-5xl font-bold"
                  style={{
                    color: plan.popular ? "#fff" : "#0D1B2A",
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "-0.04em",
                  }}
                >
                  ${annual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span
                  className="text-sm mb-2"
                  style={{ color: plan.popular ? "rgba(255,255,255,0.5)" : "rgba(13,27,42,0.4)" }}
                >
                  /mo
                </span>
              </div>

              <p
                className="text-sm mb-8 leading-relaxed"
                style={{ color: plan.popular ? "rgba(255,255,255,0.55)" : "rgba(13,27,42,0.55)" }}
              >
                {plan.description}
              </p>

              {/* CTA */}
              <button
                className="w-full py-3.5 rounded-xl text-sm font-semibold mb-8 transition-all duration-200"
                style={{
                  background: plan.popular
                    ? "linear-gradient(135deg, #00C9A7, #00A88C)"
                    : "transparent",
                  color: plan.popular ? "#0D1B2A" : "#0D1B2A",
                  border: plan.popular ? "none" : "1.5px solid #0D1B2A",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0,201,167,0.4)";
                  } else {
                    e.currentTarget.style.background = "#0D1B2A";
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.boxShadow = "none";
                  } else {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#0D1B2A";
                  }
                }}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: plan.popular ? "rgba(0,201,167,0.15)" : "rgba(0,201,167,0.1)" }}
                    >
                      <Check size={11} style={{ color: "#00C9A7" }} />
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: plan.popular ? "rgba(255,255,255,0.75)" : "rgba(13,27,42,0.7)" }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm mt-10" style={{ color: "rgba(13,27,42,0.4)" }}>
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
