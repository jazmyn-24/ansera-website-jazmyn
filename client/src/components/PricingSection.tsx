/*
 * PricingSection — Real Ansera pricing
 * Dark background, 4 tiers: Basic (Free), Standard ($49/mo), Pro ($99/mo), Enterprise (Contact)
 * Real content from ansera.ai/pricing
 */

import { Check, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    monthlyPrice: "Free",
    annualPrice: "Free",
    description: "Get started with AI-powered answers on your website. No credit card required.",
    queries: "Up to 100 queries/month",
    features: [
      "One Click WordPress Plugin",
      "Full Customization",
      "User Analytics",
    ],
    cta: "Get Started Free",
    popular: false,
    isEnterprise: false,
  },
  {
    name: "Standard",
    monthlyPrice: 49,
    annualPrice: 499,
    description: "For growing websites that need more queries and external media support.",
    queries: "Up to 500 queries/month",
    features: [
      "One Click WordPress Plugin",
      "Full Customization",
      "User Analytics",
      "External Media Integration (Video, Audio, Documents)",
    ],
    cta: "Choose Standard",
    popular: false,
    isEnterprise: false,
  },
  {
    name: "Pro",
    monthlyPrice: 99,
    annualPrice: 999,
    description: "For high-traffic sites that need maximum query capacity and all features.",
    queries: "Up to 1,000 queries/month",
    features: [
      "One Click WordPress Plugin",
      "Full Customization",
      "User Analytics",
      "External Media Integration (Video, Audio, Documents)",
    ],
    cta: "Choose Pro",
    popular: true,
    isEnterprise: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description: "For large organizations with custom needs, workflow integrations, and high volume.",
    queries: "More than 1,000 queries/month",
    features: [
      "All Features of Pro",
      "Custom Applications",
      "Workflow Integration",
      "Dedicated Support",
    ],
    cta: "Contact Us",
    popular: false,
    isEnterprise: true,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="py-28"
      style={{ background: "#0D1B2A" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#00C9A7", letterSpacing: "0.15em" }}
          >
            Pricing
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
          >
            Plans that scale as you grow.
          </h2>
          <p
            className="text-lg max-w-xl mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}
          >
            Choose the plan that fits your website needs. Start free — upgrade or downgrade anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <button
              onClick={() => setAnnual(false)}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: !annual ? "rgba(255,255,255,0.12)" : "transparent",
                color: !annual ? "#fff" : "rgba(255,255,255,0.4)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
              style={{
                background: annual ? "rgba(255,255,255,0.12)" : "transparent",
                color: annual ? "#fff" : "rgba(255,255,255,0.4)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Annual
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{ background: "#00C9A7", color: "#0D1B2A" }}
              >
                Save ~15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal delay-${(i + 1) * 100} rounded-2xl p-7 relative transition-all duration-300`}
              style={{
                background: plan.popular ? "rgba(0,201,167,0.07)" : "rgba(255,255,255,0.03)",
                border: plan.popular
                  ? "1px solid rgba(0,201,167,0.35)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: plan.popular
                  ? "0 20px 60px rgba(0,201,167,0.12)"
                  : "none",
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"
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
                  color: plan.popular ? "#00C9A7" : "rgba(255,255,255,0.6)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-1">
                {plan.isEnterprise || plan.monthlyPrice === "Free" ? (
                  <span
                    className="text-4xl font-bold"
                    style={{
                      color: "#fff",
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {plan.monthlyPrice === "Free" ? "Free" : "Custom"}
                  </span>
                ) : (
                  <>
                    <span
                      className="text-4xl font-bold"
                      style={{
                        color: "#fff",
                        fontFamily: "'Space Grotesk', sans-serif",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {annual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`}
                    </span>
                    <span
                      className="text-sm mb-1.5"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {annual ? "/yr" : "/mo"}
                    </span>
                  </>
                )}
              </div>

              {/* Queries */}
              <div
                className="text-xs font-medium mb-3 px-2.5 py-1 rounded-lg inline-block"
                style={{
                  background: "rgba(0,201,167,0.08)",
                  color: "#00C9A7",
                  border: "1px solid rgba(0,201,167,0.15)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {plan.queries}
              </div>

              <p
                className="text-xs mb-6 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {plan.description}
              </p>

              {/* CTA */}
              <button
                className="w-full py-3 rounded-xl text-sm font-semibold mb-6 transition-all duration-200"
                style={{
                  background: plan.popular
                    ? "linear-gradient(135deg, #00C9A7, #00A88C)"
                    : "transparent",
                  color: plan.popular ? "#0D1B2A" : "rgba(255,255,255,0.8)",
                  border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.2)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0,201,167,0.4)";
                  } else {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.boxShadow = "none";
                  } else {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                  }
                }}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="space-y-2.5">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: plan.popular ? "rgba(0,201,167,0.15)" : "rgba(0,201,167,0.1)" }}
                    >
                      <Check size={9} style={{ color: "#00C9A7" }} />
                    </div>
                    <span
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.6)" }}
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
        <p className="text-center text-sm mt-10" style={{ color: "rgba(255,255,255,0.3)" }}>
          All plans include full customization and user analytics. Upgrade or downgrade anytime.
        </p>
      </div>
    </section>
  );
}
