/*
 * ProblemSection — Ansera AI
 * High-contrast dark section with large visual numbers and editorial typography
 * Three problems presented as bold numbered statements
 */

export default function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "Traditional search is broken.",
      detail:
        "Keyword search dumps a list of links. Visitors have to sort through them, guess which one answers their question, and click away — often to a competitor.",
    },
    {
      num: "02",
      title: "Chatbots are pushy and clunky.",
      detail:
        "Nobody wants a pop-up salesperson the second they land on your site. And when that chatbot can only answer three pre-canned questions, it makes things worse.",
    },
    {
      num: "03",
      title: "Every failed search is a lost customer.",
      detail:
        "Frustrated visitors don't come back. They leave, they bounce, and they go find an answer somewhere else — usually your competitor's site.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#060C18" }}
    >
      {/* Top edge fade from hero */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #080E1A, transparent)",
        }}
      />

      {/* Feature glow background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663390113999/SS6w9n9Gp9eGiveEMGxHyC/ansera-feature-glow-hwucU7ww6U9X6MeL64ASFP.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl py-32">
        {/* Section label */}
        <div className="mb-20 reveal">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#00C9A7", letterSpacing: "0.2em" }}
          >
            The Problem
          </p>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.05] max-w-3xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
          >
            Your website is losing visitors{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>every single day.</span>
          </h2>
        </div>

        {/* Problems — large numbered rows */}
        <div className="space-y-0">
          {problems.map((p, i) => (
            <div
              key={p.num}
              className="reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="grid lg:grid-cols-[120px_1fr_1fr] gap-8 lg:gap-16 items-start py-10 transition-all duration-300"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderTopColor = "rgba(0,201,167,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderTopColor = "rgba(255,255,255,0.06)";
                }}
              >
                {/* Number */}
                <div
                  className="text-7xl font-bold leading-none select-none transition-all duration-300 group-hover:opacity-100"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "rgba(0,201,167,0.15)",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {p.num}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl lg:text-3xl font-bold text-white leading-tight pt-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
                >
                  {p.title}
                </h3>

                {/* Detail */}
                <p
                  className="text-base leading-relaxed pt-1"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {p.detail}
                </p>
              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
        </div>

        {/* Bottom CTA link */}
        <div className="mt-14 reveal">
          <div
            className="inline-flex items-center gap-3 text-sm font-semibold cursor-pointer group"
            style={{ color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span>See how Ansera fixes this</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
