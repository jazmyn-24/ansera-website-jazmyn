/*
 * StatsSection — Front.com-inspired metric-driven customer story cards
 * Dark navy band, large stat callouts, customer attribution
 */

import { useEffect, useRef, useState } from "react";

const stories = [
  {
    stat: "35%",
    metric: "increase in conversions",
    quote: "Ansera transformed how visitors interact with our site. Questions that used to go unanswered now convert.",
    name: "Sarah Chen",
    role: "Head of Growth",
    company: "Meridian SaaS",
    initials: "SC",
    color: "#00C9A7",
  },
  {
    stat: "60%",
    metric: "reduction in support tickets",
    quote: "Our support team went from drowning in repetitive questions to focusing on complex, high-value issues.",
    name: "Marcus Webb",
    role: "VP Customer Success",
    company: "Stackline",
    initials: "MW",
    color: "#7FFFD4",
  },
  {
    stat: "5 min",
    metric: "average install time",
    quote: "I installed it on our Webflow site during a coffee break. By the time I finished my cup, it was live.",
    name: "Priya Nair",
    role: "Founder",
    company: "Luma Studio",
    initials: "PN",
    color: "#a78bfa",
  },
  {
    stat: "4.9/5",
    metric: "customer satisfaction score",
    quote: "Our visitors love it. The quality of answers is consistently impressive — it knows our product better than some of our team.",
    name: "Tom Okafor",
    role: "CTO",
    company: "Beacon Health",
    initials: "TO",
    color: "#fbbf24",
  },
];

function AnimatedCounter({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isVisible) return;
    // Extract numeric part
    const match = value.match(/[\d.]+/);
    if (!match) { setDisplay(value); return; }
    const num = parseFloat(match[0]);
    const prefix = value.slice(0, value.indexOf(match[0]));
    const suffix = value.slice(value.indexOf(match[0]) + match[0].length);
    const steps = 50;
    const duration = 1800;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;
      const formatted = num % 1 === 0 ? Math.round(current).toString() : current.toFixed(1);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span>{display}</span>;
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
      ref={ref}
    >
      {/* Background radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,201,167,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 reveal">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#00C9A7", letterSpacing: "0.15em" }}
            >
              Real Results
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-[1.05]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
            >
              Trusted by teams who care about every visitor.
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-medium flex-shrink-0 flex items-center gap-2"
            style={{ color: "#00C9A7" }}
          >
            Read customer stories
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Story cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((s, i) => (
            <div
              key={s.name}
              className={`reveal delay-${(i + 1) * 100} rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 group`}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = `${s.color}33`;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Stat */}
              <div>
                <div
                  className="text-5xl font-bold mb-1 leading-none"
                  style={{ color: s.color, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
                >
                  <AnimatedCounter value={s.stat} isVisible={isVisible} />
                </div>
                <div
                  className="text-sm font-medium mb-5"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {s.metric}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  "{s.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: `${s.color}22`, color: s.color, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.initials}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{s.name}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{s.role}, {s.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
