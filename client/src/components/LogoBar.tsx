/*
 * LogoBar — "Trusted by teams everywhere"
 * Linear.app-inspired: scrolling marquee, dark background, monochrome logos
 */

const logos = [
  { name: "WordPress", icon: "W" },
  { name: "Webflow", icon: "Wf" },
  { name: "Wix", icon: "Wx" },
  { name: "Squarespace", icon: "Sq" },
  { name: "Shopify", icon: "Sh" },
  { name: "HubSpot", icon: "Hs" },
  { name: "Ghost", icon: "Gh" },
  { name: "Framer", icon: "Fr" },
];

// Duplicate for seamless loop
const allLogos = [...logos, ...logos];

export default function LogoBar() {
  return (
    <section
      className="py-10 overflow-hidden"
      style={{
        background: "#0a1520",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl mb-6">
        <p
          className="text-center text-xs font-medium tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em" }}
        >
          Integrates with the platforms you already use
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a1520, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a1520, transparent)" }}
        />

        <div className="marquee-track flex gap-10 items-center">
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-200"
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {logo.icon}
              </div>
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
