/*
 * FaqSection — Frequently Asked Questions
 * Light background, accordion style
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Ansera work?",
    answer:
      "Ansera uses advanced AI to crawl and index your website's content. When a visitor asks a question, our AI understands the intent behind the query and retrieves the most relevant answer from your content — not just keyword matches. It's like having a knowledgeable team member available 24/7.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most customers are live in under 5 minutes. Install the plugin (WordPress, Webflow, Wix) or add a single JavaScript snippet to your site. Ansera automatically indexes your content and is ready to answer questions immediately.",
  },
  {
    question: "Will Ansera work with my existing website?",
    answer:
      "Yes! Ansera works with virtually any website. We have native plugins for WordPress, Webflow, Wix, and Squarespace. For other platforms, a simple JavaScript snippet is all you need. We support Shopify, HubSpot, Ghost, and custom-built sites.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. Ansera uses enterprise-grade AES-256 encryption for all data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II certified and GDPR compliant. We never use your content to train our AI models — your data stays yours.",
  },
  {
    question: "What happens when my content changes?",
    answer:
      "Ansera automatically re-indexes your content whenever you publish or update pages. There's no manual action required. Changes are typically reflected in the AI's knowledge base within minutes.",
  },
  {
    question: "Can I customize how Ansera looks on my site?",
    answer:
      "Yes, on Growth and Enterprise plans you can fully customize the widget's appearance to match your brand — colors, fonts, logo, and placement. You can also customize the AI's tone and response style.",
  },
  {
    question: "What if I need more than the plan limits?",
    answer:
      "You can upgrade your plan at any time from your dashboard. If you need custom limits or have specific enterprise requirements, contact our sales team and we'll build a custom plan for you.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! All plans come with a 14-day free trial. No credit card required. You can explore all features and see real results before committing to a paid plan.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24" style={{ background: "#f8f9fa" }}>
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(0, 201, 167, 0.08)",
              border: "1px solid rgba(0, 201, 167, 0.25)",
              color: "#00A88C",
            }}
          >
            FAQ
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
          >
            Frequently asked{" "}
            <span style={{ color: "#00C9A7" }}>questions.</span>
          </h2>
          <p style={{ color: "rgba(13,27,42,0.6)" }}>
            Everything you need to know about Ansera. Can't find the answer?{" "}
            <a href="#" style={{ color: "#00C9A7", textDecoration: "underline" }}>
              Talk to our team.
            </a>
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: "#fff",
                border: openIndex === i
                  ? "1px solid rgba(0,201,167,0.3)"
                  : "1px solid rgba(0,0,0,0.06)",
                boxShadow: openIndex === i
                  ? "0 4px 20px rgba(0,201,167,0.08)"
                  : "0 2px 8px rgba(0,0,0,0.03)",
              }}
            >
              <button
                className="w-full flex items-center justify-between px-7 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="font-semibold pr-4"
                  style={{
                    color: openIndex === i ? "#00A88C" : "#0D1B2A",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.95rem",
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: openIndex === i ? "#00C9A7" : "rgba(13,27,42,0.4)",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease, color 0.2s ease",
                    flexShrink: 0,
                  }}
                />
              </button>
              {openIndex === i && (
                <div
                  className="px-7 pb-6 text-sm leading-relaxed"
                  style={{ color: "rgba(13,27,42,0.65)" }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
