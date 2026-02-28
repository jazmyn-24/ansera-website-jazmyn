/*
 * TestimonialsSection — Front.com-inspired
 * Dark background, large featured quote, 3-column secondary grid
 */

const featured = {
  quote:
    "After adding Ansera, we saw a 35% increase in demo requests within the first two weeks. Visitors were getting answers to questions we didn't even know they had. It's the best conversion tool we've ever deployed.",
  name: "Sarah Chen",
  role: "Head of Growth",
  company: "Meridian SaaS",
  initials: "SC",
};

const testimonials = [
  {
    quote: "Our support team went from drowning in repetitive questions to focusing on complex, high-value issues. Ansera handles the rest.",
    name: "Marcus Webb",
    role: "VP Customer Success",
    company: "Stackline",
    initials: "MW",
    stars: 5,
  },
  {
    quote: "I installed it on our Webflow site during a coffee break. By the time I finished my cup, it was live and already answering questions.",
    name: "Priya Nair",
    role: "Founder",
    company: "Luma Studio",
    initials: "PN",
    stars: 5,
  },
  {
    quote: "The multilingual support alone was worth it. We serve customers in 12 countries and Ansera handles every language flawlessly.",
    name: "Tom Okafor",
    role: "CTO",
    company: "Beacon Health",
    initials: "TO",
    stars: 5,
  },
  {
    quote: "We replaced our old FAQ page with Ansera. Bounce rate dropped 40% and time-on-site went up significantly.",
    name: "Elena Vasquez",
    role: "Product Manager",
    company: "Orbit Commerce",
    initials: "EV",
    stars: 5,
  },
  {
    quote: "The analytics dashboard is a goldmine. We discovered three major content gaps in our first week that we immediately fixed.",
    name: "James Park",
    role: "Content Strategist",
    company: "Northlight Media",
    initials: "JP",
    stars: 5,
  },
  {
    quote: "Setup took 4 minutes. I timed it. The ROI was visible within 48 hours. I've never seen a tool deliver value this fast.",
    name: "Aisha Osei",
    role: "Head of Marketing",
    company: "Kova Labs",
    initials: "AO",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#fbbf24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00C9A7 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16 reveal">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#00C9A7", letterSpacing: "0.15em" }}
          >
            Customer Stories
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-[1.05] max-w-2xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
          >
            Teams that switched to Ansera never look back.
          </h2>
        </div>

        {/* Featured quote */}
        <div
          className="reveal rounded-3xl p-10 lg:p-14 mb-10 relative overflow-hidden"
          style={{
            background: "rgba(0,201,167,0.05)",
            border: "1px solid rgba(0,201,167,0.15)",
          }}
        >
          {/* Large quote mark */}
          <div
            className="absolute top-6 right-10 text-[120px] leading-none select-none pointer-events-none"
            style={{ color: "rgba(0,201,167,0.08)", fontFamily: "Georgia, serif" }}
          >
            "
          </div>

          <div className="relative z-10 max-w-3xl">
            <Stars count={5} />
            <p
              className="text-2xl lg:text-3xl font-medium text-white mt-6 mb-8 leading-[1.4]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            >
              "{featured.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: "rgba(0,201,167,0.2)", color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {featured.initials}
              </div>
              <div>
                <div className="font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{featured.name}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{featured.role}, {featured.company}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${(i % 3 + 1) * 100} p-7 rounded-2xl flex flex-col justify-between transition-all duration-300`}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(0,201,167,0.15)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div>
                <Stars count={t.stars} />
                <p className="text-sm leading-relaxed mt-4 mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: "rgba(0,201,167,0.12)", color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{t.name}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
