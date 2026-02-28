/*
 * HeroSection — Ansera AI
 * Dark navy with teal accents, animated AI demo widget
 * Split layout: headline left, demo right
 */

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, MessageSquare, Send } from "lucide-react";

const DEMO_CONVERSATIONS = [
  {
    q: "How do I reset my password?",
    a: "Go to Settings → Security → Change Password. Enter your current password, then your new one. Changes take effect immediately.",
  },
  {
    q: "What's your refund policy?",
    a: "We offer a 30-day money-back guarantee on all plans. No questions asked. Contact support@ansera.ai to initiate a refund.",
  },
  {
    q: "Can I integrate with WordPress?",
    a: "Yes! Install the Ansera plugin from the WordPress directory, add your API key, and you're live in under 5 minutes.",
  },
];

export default function HeroSection() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const cycle = () => {
      setShowAnswer(false);
      setTypedText("");
      setIsTyping(false);

      // Show question after brief pause
      setTimeout(() => {
        setIsTyping(true);
        const question = DEMO_CONVERSATIONS[currentDemo].q;
        let i = 0;
        const typeInterval = setInterval(() => {
          setTypedText(question.slice(0, i + 1));
          i++;
          if (i >= question.length) {
            clearInterval(typeInterval);
            setIsTyping(false);
            // Show answer after question is typed
            setTimeout(() => setShowAnswer(true), 600);
          }
        }, 40);
      }, 500);
    };

    cycle();

    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % DEMO_CONVERSATIONS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentDemo]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D1B2A 0%, #0F2035 50%, #0D1B2A 100%)",
        paddingBottom: 0,
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663390113999/SS6w9n9Gp9eGiveEMGxHyC/ansera-hero-bg-78Crfg2PWyZaXRUHcBj5nW.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,27,42,0.9) 0%, rgba(13,27,42,0.6) 50%, rgba(13,27,42,0.85) 100%)",
        }}
      />

      {/* Teal glow orb */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #00C9A7 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Headline */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: "rgba(0, 201, 167, 0.12)",
                border: "1px solid rgba(0, 201, 167, 0.3)",
                color: "#00C9A7",
              }}
            >
              <Sparkles size={14} />
              AI-Powered Search for Websites
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
            >
              Stop losing visitors to{" "}
              <span className="text-gradient-teal">broken search.</span>
            </h1>

            <p
              className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Your website's search is costing you conversions. Ansera replaces it with AI
              that actually understands what visitors want — and delivers answers instantly.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                className="btn-teal flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Start Free Trial
                <ArrowRight size={18} />
              </button>
              <button
                className="flex items-center gap-2 px-7 py-4 rounded-xl text-base font-medium transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.85)",
                  background: "rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                Schedule Demo
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 flex-wrap">
              <span className="text-white/40 text-sm">Works with:</span>
              {["WordPress", "Webflow", "Wix", "Squarespace"].map((p) => (
                <span
                  key={p}
                  className="text-sm font-medium"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Right: AI Demo Widget */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,201,167,0.1)",
              }}
            >
              {/* Widget header */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold"
                    style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A" }}
                  >
                    A
                  </div>
                  <span className="text-white/60 text-xs font-medium">Ansera AI — Live Demo</span>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs">Active</span>
                </div>
              </div>

              {/* Chat area */}
              <div className="p-5 space-y-4 min-h-64">
                {/* User question */}
                <div className="flex justify-end">
                  <div
                    className="max-w-xs px-4 py-3 rounded-2xl rounded-tr-sm text-sm"
                    style={{
                      background: "rgba(0, 201, 167, 0.15)",
                      border: "1px solid rgba(0, 201, 167, 0.25)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {typedText}
                    {isTyping && (
                      <span
                        className="inline-block w-0.5 h-4 ml-0.5 align-middle"
                        style={{
                          background: "#00C9A7",
                          animation: "blink 1s step-end infinite",
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* AI Answer */}
                {showAnswer && (
                  <div className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, #00C9A7, #00A88C)",
                        color: "#0D1B2A",
                      }}
                    >
                      A
                    </div>
                    <div
                      className="flex-1 px-4 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {DEMO_CONVERSATIONS[currentDemo].a}
                    </div>
                  </div>
                )}
              </div>

              {/* Input area */}
              <div
                className="px-5 py-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <MessageSquare size={16} className="text-white/30" />
                  <span className="text-white/30 text-sm flex-1">Ask anything...</span>
                  <button
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                    style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)" }}
                  >
                    <Send size={13} style={{ color: "#0D1B2A" }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating stat badges */}
            <div
              className="absolute -left-6 top-1/4 px-4 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: "rgba(13,27,42,0.9)",
                border: "1px solid rgba(0,201,167,0.3)",
                color: "#00C9A7",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              }}
            >
              ↑ 35% Conversions
            </div>
            <div
              className="absolute -right-6 bottom-1/4 px-4 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: "rgba(13,27,42,0.9)",
                border: "1px solid rgba(0,201,167,0.3)",
                color: "#00C9A7",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              }}
            >
              ↓ 60% Support Tickets
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
