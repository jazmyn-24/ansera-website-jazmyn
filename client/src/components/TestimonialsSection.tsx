/*
 * TestimonialsSection — "Loved by Teams Everywhere"
 * Dark navy background, glass cards with star ratings
 */

const testimonials = [
  {
    quote:
      "Using Ansera has opened my eyes about critical content our site was missing. Knowing what questions visitors were asking helped guide our entire content strategy.",
    name: "Michael S.",
    role: "Content Marketing Strategist",
    initials: "MS",
    color: "#00C9A7",
    stars: 5,
  },
  {
    quote:
      "Many of our clients have installed Ansera on their WordPress sites and they love it! It's more intuitive than any chatbot solution and much easier to set up.",
    name: "Linda M.",
    role: "Digital Marketing Agency Owner",
    initials: "LM",
    color: "#7C3AED",
    stars: 5,
  },
  {
    quote:
      "We've been able to increase engagement with prospects who visit our site. They can easily get summaries of our whitepapers and webinars in seconds instead of hours.",
    name: "Ami A.",
    role: "Director of Sales Operations",
    initials: "AA",
    color: "#F59E0B",
    stars: 5,
  },
  {
    quote:
      "Installation took 5 minutes. Setup was automatic. Our content was indexed instantly and we're seeing higher conversions. What more could you ask for?",
    name: "David K.",
    role: "Product Manager",
    initials: "DK",
    color: "#EF4444",
    stars: 5,
  },
  {
    quote:
      "The analytics dashboard alone is worth it. We discovered that 40% of our visitors were asking about a feature we hadn't documented. Fixed it, saw a 20% conversion lift.",
    name: "Sarah T.",
    role: "Head of Growth",
    initials: "ST",
    color: "#3B82F6",
    stars: 5,
  },
  {
    quote:
      "Our support team used to spend 3 hours a day answering the same questions. Ansera handles 80% of them now. My team is focused on complex issues that actually need human attention.",
    name: "James R.",
    role: "Customer Success Manager",
    initials: "JR",
    color: "#10B981",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-8 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00C9A7 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(0, 201, 167, 0.12)",
              border: "1px solid rgba(0, 201, 167, 0.3)",
              color: "#00C9A7",
            }}
          >
            Customer Stories
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
          >
            Loved by teams{" "}
            <span className="text-gradient-teal">everywhere.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)" }}>
            See how teams are transforming their websites with Ansera
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${(i % 3 + 1) * 100} rounded-2xl p-7 flex flex-col transition-all duration-300`}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <StarRating count={t.stars} />
              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: "rgba(255,255,255,0.75)", fontStyle: "italic" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: t.color,
                    color: "#fff",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
