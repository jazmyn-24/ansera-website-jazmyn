/*
 * LogoBar — Platform integrations bar
 * Light section showing compatible platforms
 */

export default function LogoBar() {
  const platforms = [
    { name: "WordPress", icon: "W" },
    { name: "Webflow", icon: "Wf" },
    { name: "Wix", icon: "Wx" },
    { name: "Squarespace", icon: "Sq" },
    { name: "Shopify", icon: "Sh" },
    { name: "HubSpot", icon: "Hs" },
    { name: "Ghost", icon: "Gh" },
  ];

  return (
    <section
      className="py-12 border-b"
      style={{ background: "#fff", borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 -1px 0 rgba(0,0,0,0.04)" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center gap-6">
          <p
            className="text-sm font-medium uppercase tracking-widest"
            style={{ color: "rgba(0,0,0,0.35)" }}
          >
            Works seamlessly with your favorite platforms
          </p>
          <div className="flex items-center gap-8 flex-wrap justify-center">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 group transition-all duration-200"
                style={{ opacity: 0.5 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "#0D1B2A",
                    color: "#00C9A7",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {p.icon}
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
