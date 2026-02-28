/*
 * HeroSection — Ansera AI
 * Dark navy with teal accents, animated AI demo widget
 * Split layout: headline left, demo right
 * Real content from ansera.ai
 */

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const DEMO_CONVERSATIONS = [
  {
    q: "What's your return policy?",
    a: "We offer a 30-day money-back guarantee on all orders. Simply visit your order history, select the item, and click 'Start Return.' Refunds are processed within 3–5 business days.",
  },
  {
    q: "How do I upgrade my plan?",
    a: "Go to your account dashboard, click 'Billing', then 'Change Plan'. Your new plan takes effect immediately and you'll be charged the prorated difference.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! Our Basic plan is completely free — no credit card required. You get up to 100 queries per month to try Ansera on your site.",
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
        background: "#080E1A",
        paddingBottom: 0,
      }}
    >
      {/* CSS-only deep space background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 65% 40%, rgba(0,201,167,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(0,100,80,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(0,201,167,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.4,
        }}
      />

      {/* Teal glow orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "#00C9A7" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: "#00C9A7" }}
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
              AI Answer Engine for Websites
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-6xl xl:text-[5rem] font-bold text-white leading-[1.02] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.05em" }}
            >
              Smarter than search.{" "}
              <br className="hidden lg:block" />
              <span className="text-gradient-teal">Simpler than chatbots.</span>
            </h1>

            <p
              className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Turn your existing site into an intelligent answer engine that gives visitors exactly what they're looking for — powered by your own content.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                className="btn-teal flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Install Free — No Credit Card
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
              <span className="text-white/40 text-sm">1-click install on:</span>
              {["WordPress", "Webflow", "Wix", "Squarespace"].map((p) => (
                <span
                  key={p}
                  className="text-sm font-medium"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Animated demo widget */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating stat badges */}
            <div
              className="absolute -left-4 top-8 px-4 py-2.5 rounded-xl text-sm font-semibold z-20 flex items-center gap-2"
              style={{
                background: "rgba(0,201,167,0.15)",
                border: "1px solid rgba(0,201,167,0.3)",
                color: "#00C9A7",
                backdropFilter: "blur(10px)",
              }}
            >
              ↑ More engaged visitors
            </div>
            <div
              className="absolute -right-2 bottom-16 px-4 py-2.5 rounded-xl text-sm font-semibold z-20 flex items-center gap-2"
              style={{
                background: "rgba(0,201,167,0.12)",
                border: "1px solid rgba(0,201,167,0.25)",
                color: "#00C9A7",
                backdropFilter: "blur(10px)",
              }}
            >
              ↓ Fewer support tickets
            </div>

            {/* Demo widget */}
            <div
              className="w-full max-w-lg rounded-2xl overflow-hidden"
              style={{
                background: "rgba(10,18,32,0.85)",
                border: "1px solid rgba(0,201,167,0.15)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,201,167,0.1), 0 0 60px rgba(0,201,167,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Widget header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "linear-gradient(135deg, #00C9A7, #00A88C)",
                        color: "#0D1B2A",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      A
                    </div>
                    <span className="text-white/70 text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Ansera AI — Live Demo
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Active</span>
                </div>
              </div>

              {/* Chat area */}
              <div className="p-6 min-h-[240px]">
                {/* User question */}
                <div className="flex justify-end mb-4">
                  <div
                    className="max-w-xs px-4 py-3 rounded-2xl rounded-tr-sm text-sm"
                    style={{
                      background: "rgba(0,201,167,0.15)",
                      color: "rgba(255,255,255,0.9)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {typedText}
                    {isTyping && (
                      <span
                        className="inline-block w-0.5 h-4 ml-0.5 animate-pulse"
                        style={{ background: "#00C9A7", verticalAlign: "text-bottom" }}
                      />
                    )}
                  </div>
                </div>

                {/* AI answer */}
                {showAnswer && (
                  <div className="flex gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, #00C9A7, #00A88C)",
                        color: "#0D1B2A",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      A
                    </div>
                    <div
                      className="flex-1 px-4 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.8)",
                        fontFamily: "'DM Sans', sans-serif",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {DEMO_CONVERSATIONS[currentDemo].a}
                    </div>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.3)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Ask anything...
                </div>
                <button
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D1B2A" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .text-gradient-teal {
          background: linear-gradient(135deg, #00C9A7 0%, #00E5C9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .btn-teal {
          background: linear-gradient(135deg, #00C9A7 0%, #00A88C 100%);
          color: #0D1B2A;
          transition: all 0.2s ease;
        }
        .btn-teal:hover {
          box-shadow: 0 0 30px rgba(0,201,167,0.4);
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
