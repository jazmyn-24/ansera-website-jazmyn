/**
 * Ansera Pricing Page
 * Design: Inspired by front.com/pricing
 * - Large left headline + pricing cards on the right (above the fold)
 * - Monthly/Annual billing toggle with savings badge
 * - Full feature comparison table
 * - FAQ accordion
 * - Blog resources strip at bottom
 */

import { useState, useEffect } from "react";
import { Check, Minus, ChevronDown, ChevronUp, ArrowRight, Zap, Building2, Rocket, Crown } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────

const plans = [
  {
    id: "free",
    name: "Free",
    icon: Zap,
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Try Ansera on your site with no commitment.",
    cta: "Install Free",
    ctaHref: "https://wordpress.org/plugins/ansera",
    highlight: false,
    badge: null,
    color: "#60A5FA",
    features: [
      "100 queries / month",
      "1 website",
      "WordPress plugin",
      "Basic chat widget",
      "Ansera branding",
      "Community support",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    icon: Rocket,
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For growing websites that need reliable AI answers.",
    cta: "Get Started",
    ctaHref: "https://ansera.ai/pricing",
    highlight: false,
    badge: null,
    color: "#00C9A7",
    features: [
      "2,500 queries / month",
      "1 website",
      "WordPress, Webflow, Wix, Squarespace",
      "Custom widget styling",
      "Remove Ansera branding",
      "Lead capture forms",
      "Email notifications",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    icon: Crown,
    monthlyPrice: 99,
    annualPrice: 79,
    description: "For high-traffic sites that need full AI power.",
    cta: "Get Started",
    ctaHref: "https://ansera.ai/pricing",
    highlight: true,
    badge: "Most Popular",
    color: "#00C9A7",
    features: [
      "10,000 queries / month",
      "3 websites",
      "All platforms + code snippet",
      "Custom widget styling",
      "Remove Ansera branding",
      "Lead capture + CRM export",
      "External content (PDFs, YouTube, Dropbox)",
      "Advanced analytics & content gaps",
      "Priority email support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    monthlyPrice: null,
    annualPrice: null,
    description: "Custom limits, SLA, and dedicated onboarding for large teams.",
    cta: "Contact Sales",
    ctaHref: "mailto:info@ansera.ai",
    highlight: false,
    badge: null,
    color: "#A78BFA",
    features: [
      "Unlimited queries",
      "Unlimited websites",
      "All platforms",
      "White-label widget",
      "Custom branding & domain",
      "SSO / SAML",
      "SLA & uptime guarantee",
      "Dedicated onboarding",
      "24/7 priority support",
    ],
  },
];

// Feature comparison table
const featureGroups = [
  {
    group: "Usage",
    rows: [
      { label: "Monthly queries", free: "100", standard: "2,500", pro: "10,000", enterprise: "Unlimited" },
      { label: "Websites", free: "1", standard: "1", pro: "3", enterprise: "Unlimited" },
      { label: "Query overage", free: false, standard: "$0.02 / query", pro: "$0.01 / query", enterprise: "Custom" },
    ],
  },
  {
    group: "Platforms",
    rows: [
      { label: "WordPress plugin", free: true, standard: true, pro: true, enterprise: true },
      { label: "Webflow, Wix, Squarespace", free: false, standard: true, pro: true, enterprise: true },
      { label: "Any site (code snippet)", free: false, standard: false, pro: true, enterprise: true },
    ],
  },
  {
    group: "Widget & Branding",
    rows: [
      { label: "Chat widget", free: "Basic", standard: "Custom styled", pro: "Custom styled", enterprise: "White-label" },
      { label: "Remove Ansera branding", free: false, standard: true, pro: true, enterprise: true },
      { label: "Custom domain", free: false, standard: false, pro: false, enterprise: true },
    ],
  },
  {
    group: "Content & AI",
    rows: [
      { label: "Auto-index website content", free: true, standard: true, pro: true, enterprise: true },
      { label: "PDF & document ingestion", free: false, standard: false, pro: true, enterprise: true },
      { label: "YouTube video indexing", free: false, standard: false, pro: true, enterprise: true },
      { label: "Dropbox / Google Drive", free: false, standard: false, pro: true, enterprise: true },
      { label: "Content gap analytics", free: false, standard: "Basic", pro: "Advanced", enterprise: "Advanced" },
    ],
  },
  {
    group: "Lead Capture",
    rows: [
      { label: "Lead capture forms", free: false, standard: true, pro: true, enterprise: true },
      { label: "Email notifications", free: false, standard: true, pro: true, enterprise: true },
      { label: "CRM export (CSV)", free: false, standard: false, pro: true, enterprise: true },
      { label: "CRM integrations", free: false, standard: false, pro: false, enterprise: true },
    ],
  },
  {
    group: "Security & Support",
    rows: [
      { label: "Invisible CAPTCHA", free: true, standard: true, pro: true, enterprise: true },
      { label: "SSO / SAML", free: false, standard: false, pro: false, enterprise: true },
      { label: "SLA & uptime guarantee", free: false, standard: false, pro: false, enterprise: true },
      { label: "Support", free: "Community", standard: "Email", pro: "Priority email", enterprise: "24/7 dedicated" },
    ],
  },
];

const faqs = [
  {
    q: "Is there a free trial for paid plans?",
    a: "Yes — all paid plans come with a 14-day free trial. No credit card required to start. You can upgrade, downgrade, or cancel at any time during the trial.",
  },
  {
    q: "What counts as a query?",
    a: "A query is any question a visitor submits to the Ansera widget on your site. Browsing your site, loading the widget, or typing without submitting does not count as a query.",
  },
  {
    q: "What happens if I exceed my monthly query limit?",
    a: "On Standard and Pro plans, additional queries are billed at $0.02 and $0.01 per query respectively. You'll receive an email notification when you reach 80% of your limit. You can also upgrade your plan at any time.",
  },
  {
    q: "Can I use Ansera on a non-WordPress site?",
    a: "Yes. Standard plan supports Webflow, Wix, and Squarespace. Pro and Enterprise plans support any website via a lightweight JavaScript code snippet.",
  },
  {
    q: "How does Ansera train on my content?",
    a: "After installation, Ansera automatically crawls and indexes your website's pages, posts, and custom content types. It re-indexes your content whenever you publish or update pages. No manual training or configuration required.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Ansera uses enterprise-grade encryption in transit and at rest. Your content is never used to train shared AI models. Enterprise plans include SSO, SAML, and a dedicated security review.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly plans can be cancelled at any time with no penalty. Annual plans are non-refundable after the first 14 days but can be cancelled to prevent renewal.",
  },
  {
    q: "Do you offer discounts for nonprofits or startups?",
    a: "Yes — we offer 50% discounts for registered nonprofits and early-stage startups (under $1M ARR). Contact info@ansera.ai with proof of eligibility.",
  },
];

// ─── Cell renderer ────────────────────────────────────────────────────────────

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={16} style={{ color: "#00C9A7", margin: "0 auto" }} />;
  if (value === false) return <Minus size={14} style={{ color: "rgba(255,255,255,0.2)", margin: "0 auto" }} />;
  return <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{value}</span>;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#060C16", color: "#fff" }}>
      <Navbar />

      {/* ── Hero + Cards ── */}
      <section style={{ paddingTop: "80px" }}>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(0,201,167,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.6 }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(0,201,167,0.05) 0%, transparent 70%)" }} />

          <div className="container relative z-10 mx-auto px-6 max-w-7xl pt-16 pb-20">
            <div className="grid lg:grid-cols-[1fr_2.2fr] gap-16 items-start">

              {/* Left: headline */}
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.25)", color: "#00C9A7" }}>
                  Pricing Plans
                </div>
                <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
                  Simple pricing.<br />No surprises.
                </h1>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "280px" }}>
                  Start free, upgrade when you're ready. All plans include a 14-day free trial.
                </p>

                {/* Billing toggle */}
                <div className="flex items-center gap-3">
                  <span className="text-sm" style={{ color: annual ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.85)" }}>Monthly</span>
                  <button
                    onClick={() => setAnnual(!annual)}
                    className="relative w-12 h-6 rounded-full transition-all"
                    style={{ background: annual ? "#00C9A7" : "rgba(255,255,255,0.15)" }}
                  >
                    <span
                      className="absolute top-1 w-4 h-4 rounded-full transition-all"
                      style={{ background: "#fff", left: annual ? "calc(100% - 20px)" : "4px" }}
                    />
                  </button>
                  <span className="text-sm" style={{ color: annual ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.4)" }}>Annual</span>
                  {annual && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(0,201,167,0.15)", color: "#00C9A7" }}>
                      Save ~20%
                    </span>
                  )}
                </div>

                {/* Trust note */}
                <div className="mt-10 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                  <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Trusted by 2,000+ websites</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00C9A7"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                    <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.45)" }}>4.9 / 5 on WordPress.org</span>
                  </div>
                </div>
              </div>

              {/* Right: pricing cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {plans.map((plan) => {
                  const Icon = plan.icon;
                  const price = annual ? plan.annualPrice : plan.monthlyPrice;
                  return (
                    <div
                      key={plan.id}
                      className="relative rounded-2xl p-6 flex flex-col transition-all duration-300 reveal"
                      style={{
                        background: plan.highlight ? "rgba(0,201,167,0.07)" : "rgba(255,255,255,0.03)",
                        border: plan.highlight ? "1px solid rgba(0,201,167,0.35)" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {plan.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold" style={{ background: "#00C9A7", color: "#060C16" }}>
                          {plan.badge}
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${plan.color}15` }}>
                            <Icon size={16} style={{ color: plan.color }} />
                          </div>
                          <span className="font-bold text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{plan.name}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        {price === null ? (
                          <div className="text-2xl font-extrabold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Custom</div>
                        ) : price === 0 ? (
                          <div className="text-2xl font-extrabold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Free</div>
                        ) : (
                          <div className="flex items-end gap-1">
                            <span className="text-3xl font-extrabold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>${price}</span>
                            <span className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>/mo</span>
                          </div>
                        )}
                        {annual && price !== null && price > 0 && (
                          <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>billed annually</p>
                        )}
                        <p className="text-xs mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{plan.description}</p>
                      </div>

                      <a
                        href={plan.ctaHref}
                        target={plan.ctaHref.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block text-center py-2.5 rounded-xl text-sm font-semibold mb-5 transition-all hover:opacity-90"
                        style={plan.highlight
                          ? { background: "#00C9A7", color: "#060C16" }
                          : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.12)" }
                        }
                      >
                        {plan.cta}
                      </a>

                      <ul className="space-y-2.5 flex-1">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                            <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Compare plans ── */}
      <section className="py-20 border-t reveal" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-extrabold mb-2 text-center" style={{ fontSize: "1.75rem", fontFamily: "'Space Grotesk', sans-serif" }}>
            Compare plans
          </h2>
          <p className="text-sm text-center mb-12" style={{ color: "rgba(255,255,255,0.4)" }}>
            Everything you need to make the right choice.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <th className="text-left py-4 pr-6 font-medium w-1/3" style={{ color: "rgba(255,255,255,0.4)" }}>Feature</th>
                  {plans.map((p) => (
                    <th key={p.id} className="text-center py-4 px-3 font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: p.highlight ? "#00C9A7" : "rgba(255,255,255,0.85)" }}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureGroups.map((group) => (
                  <>
                    <tr key={group.group}>
                      <td colSpan={5} className="pt-8 pb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                        {group.group}
                      </td>
                    </tr>
                    {group.rows.map((row, ri) => (
                      <tr key={ri} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        <td className="py-3 pr-6 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{row.label}</td>
                        <td className="py-3 px-3 text-center"><Cell value={row.free} /></td>
                        <td className="py-3 px-3 text-center"><Cell value={row.standard} /></td>
                        <td className="py-3 px-3 text-center" style={{ background: "rgba(0,201,167,0.03)" }}><Cell value={row.pro} /></td>
                        <td className="py-3 px-3 text-center"><Cell value={row.enterprise} /></td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 border-t reveal" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-extrabold mb-2 text-center" style={{ fontSize: "1.75rem", fontFamily: "'Space Grotesk', sans-serif" }}>
            Frequently asked questions
          </h2>
          <p className="text-sm text-center mb-12" style={{ color: "rgba(255,255,255,0.4)" }}>
            Can't find the answer? <a href="mailto:info@ansera.ai" style={{ color: "#00C9A7" }}>Email us</a> and we'll get back to you within 24 hours.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all"
                style={{ border: `1px solid ${openFaq === i ? "rgba(0,201,167,0.25)" : "rgba(255,255,255,0.07)"}`, background: openFaq === i ? "rgba(0,201,167,0.04)" : "rgba(255,255,255,0.02)" }}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold pr-4" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Space Grotesk', sans-serif" }}>
                    {faq.q}
                  </span>
                  {openFaq === i
                    ? <ChevronUp size={16} style={{ color: "#00C9A7", flexShrink: 0 }} />
                    : <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.35)", flexShrink: 0 }} />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resources strip ── */}
      <section className="py-16 border-t reveal" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem" }}>
              Helpful resources
            </h2>
            <Link href="/blog">
              <span className="flex items-center gap-1.5 text-sm font-medium cursor-pointer transition-opacity hover:opacity-70" style={{ color: "#00C9A7" }}>
                See all posts <ArrowRight size={14} />
              </span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "How to Reduce Support Tickets by 40%", cat: "Support", slug: "reduce-support-tickets" },
              { title: "AI Answer Engines vs. Chatbots: What's the Difference?", cat: "Product", slug: "ai-search-vs-chatbots" },
              { title: "Lead Capture Without the Friction", cat: "Growth", slug: "lead-capture-without-friction" },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div
                  className="group p-5 rounded-xl border cursor-pointer transition-all"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,0.3)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)")}
                >
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-3 inline-block" style={{ background: "rgba(0,201,167,0.1)", color: "#00C9A7" }}>
                    {post.cat}
                  </span>
                  <h4 className="text-sm font-semibold leading-snug mb-3" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Space Grotesk', sans-serif" }}>
                    {post.title}
                  </h4>
                  <span className="text-xs flex items-center gap-1 transition-all group-hover:gap-2" style={{ color: "#00C9A7" }}>
                    Read <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 border-t reveal" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
            Start answering your visitors' questions today.
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
            Free plan available. No credit card required. Up and running in under 5 minutes.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://wordpress.org/plugins/ansera"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: "#00C9A7", color: "#060C16" }}
            >
              Install Free on WordPress
            </a>
            <a
              href="mailto:info@ansera.ai"
              className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Talk to sales <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
