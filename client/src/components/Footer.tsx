/*
 * Footer — Ansera AI
 * Dark navy, organized link columns
 */

export default function Footer() {
  const links = {
    Product: ["Features", "Pricing", "Security", "Changelog", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Press", "Contact"],
    Resources: ["Documentation", "API Reference", "Status", "Community"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"],
  };

  return (
    <footer style={{ background: "#080F18" }}>
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #00C9A7 0%, #00A88C 100%)",
                  color: "#0D1B2A",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                A
              </div>
              <span
                className="text-white font-semibold text-lg"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ansera
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              AI-powered answers for your website. Stop losing visitors to broken search.
            </p>
            <a
              href="mailto:info@ansera.ai"
              className="text-sm transition-colors duration-200"
              style={{ color: "#00C9A7" }}
            >
              info@ansera.ai
            </a>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-sm font-semibold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 Ansera AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00C9A7")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
