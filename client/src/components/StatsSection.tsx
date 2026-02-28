/*
 * StatsSection — "Real Results, Real Revenue"
 * Dark navy full-width band with animated counters
 */

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 35,
    suffix: "%",
    label: "Increase in Conversions",
    description: "Visitors who use Ansera convert at dramatically higher rates",
    prefix: "",
  },
  {
    value: 60,
    suffix: "%",
    label: "Reduction in Support Tickets",
    description: "Common questions answered automatically, 24/7",
    prefix: "",
  },
  {
    value: 5,
    suffix: " min",
    label: "Average Install Time",
    description: "From zero to live AI search — no developer needed",
    prefix: "",
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "Customer Satisfaction",
    description: "Rated by 500+ teams across industries",
    prefix: "",
  },
];

function AnimatedCounter({ value, suffix, prefix, isVisible }: {
  value: number;
  suffix: string;
  prefix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  const display = value % 1 === 0 ? Math.round(count) : count.toFixed(1);

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
      ref={ref}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #00C9A7 0%, transparent 50%), radial-gradient(circle at 80% 50%, #00C9A7 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
          >
            Real results,{" "}
            <span className="text-gradient-teal">real revenue.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)" }}>
            Companies see measurable impact within the first week
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal delay-${(i + 1) * 100} rounded-2xl p-8 text-center group transition-all duration-300`}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,201,167,0.06)";
                e.currentTarget.style.borderColor = "rgba(0,201,167,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div
                className="text-5xl font-bold mb-3"
                style={{
                  color: "#00C9A7",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  isVisible={isVisible}
                />
              </div>
              <div
                className="text-sm font-semibold mb-2"
                style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stat.label}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
