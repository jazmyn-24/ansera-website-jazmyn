/**
 * Ansera Solutions Page
 * Design: Stripe-style card grid overview + per-industry deep-dive sections
 * Inspired by front.com/industries but with a distinct approach:
 *   - Hero with industry selector pill grid (not nav dropdown)
 *   - Scrollable card grid overview of all 6 verticals
 *   - Each vertical gets a full section with tailored chat mockup + bullet points
 *   - Shared stats bar + final CTA
 * Industries: Agencies, Law Offices, Medical Offices, eCommerce, SaaS, Education
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase, Scale, Heart, ShoppingBag, Code2, GraduationCap,
  CheckCircle2, ArrowRight, ChevronRight, Search, MessageSquare,
  Clock, TrendingUp, Users, Star, ArrowDown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

// ─── Industry Data ────────────────────────────────────────────────────────────

const industries = [
  {
    id: "agencies",
    icon: Briefcase,
    label: "Agencies",
    tagline: "Stop losing prospects to unanswered questions.",
    headline: "Your portfolio answers for itself.",
    subheadline: "Prospective clients visit your agency website at all hours. Ansera turns every visit into a conversation — answering questions about services, process, pricing, and past work instantly, so no lead goes cold overnight.",
    pain: "Prospects bounce when they can't find answers about your process, pricing, or past work — and they don't come back.",
    stat: { val: "3×", label: "more qualified discovery calls" },
    color: "#00C9A7",
    bullets: [
      "Answer \"What does your agency specialize in?\" with precision",
      "Explain your process and timeline without a sales call",
      "Surface relevant case studies based on the visitor's question",
      "Capture lead info before they leave — name, email, project type",
    ],
    questions: [
      "What industries do you work with?",
      "How long does a typical project take?",
      "Do you offer ongoing retainers?",
    ],
    answers: [
      "We specialize in B2B SaaS, eCommerce, and professional services. Our team has delivered 200+ projects across these verticals.",
      "Most projects run 6–12 weeks depending on scope. We'll give you a detailed timeline in your discovery call.",
      "Yes — about 60% of our clients move to a monthly retainer after launch. Plans start at $2,500/month.",
    ],
  },
  {
    id: "law",
    icon: Scale,
    label: "Law Offices",
    tagline: "Answer client questions. Build trust before the consultation.",
    headline: "Your expertise, available 24/7.",
    subheadline: "Potential clients research attorneys late at night and on weekends. Ansera answers their questions about practice areas, fees, and process from your actual website content — building trust before they ever pick up the phone.",
    pain: "Potential clients research attorneys at midnight. If your site can't answer their questions, they call your competitor in the morning.",
    stat: { val: "68%", label: "of legal searches happen outside business hours" },
    color: "#818CF8",
    bullets: [
      "Answer practice area and jurisdiction questions instantly",
      "Explain fee structures and consultation process clearly",
      "Surface relevant case outcomes and attorney bios",
      "Capture intake information before the first consultation",
    ],
    questions: [
      "Do you handle personal injury cases in Texas?",
      "What are your consultation fees?",
      "How long does a typical case take?",
    ],
    answers: [
      "Yes, we handle personal injury cases across Texas including Dallas, Houston, and Austin. We work on a contingency fee basis — you pay nothing unless we win.",
      "Initial consultations are free and typically last 30–45 minutes. We'll review your case and explain your options at no charge.",
      "Most personal injury cases settle in 6–18 months. Complex cases may take longer. We'll give you a realistic timeline after reviewing your situation.",
    ],
  },
  {
    id: "medical",
    icon: Heart,
    label: "Medical Offices",
    tagline: "Reduce front desk calls. Improve patient experience.",
    headline: "Patient questions answered before they call.",
    subheadline: "Your front desk spends hours answering the same questions about insurance, procedures, and appointments. Ansera handles these instantly from your website — freeing your staff for the patients who need them most.",
    pain: "Front desk staff spend 40% of their time answering repetitive questions about insurance, procedures, and hours — time that could go to patient care.",
    stat: { val: "40%", label: "reduction in front desk call volume" },
    color: "#F472B6",
    bullets: [
      "Answer insurance and billing questions from your actual policy",
      "Explain procedures, prep instructions, and recovery times",
      "Provide hours, location, and parking information instantly",
      "Capture new patient intake information before the first visit",
    ],
    questions: [
      "Do you accept Blue Cross Blue Shield?",
      "What should I expect before a colonoscopy?",
      "How do I request my medical records?",
    ],
    answers: [
      "Yes, we accept Blue Cross Blue Shield PPO and HMO plans. We also accept Medicare, Aetna, Cigna, and United Healthcare. Please bring your insurance card to your first visit.",
      "You'll need to follow a clear liquid diet the day before and complete a bowel prep kit. We'll send detailed instructions when you schedule. The procedure itself takes about 30 minutes.",
      "You can request records online through our patient portal, by fax, or in person. Allow 5–7 business days for processing. There's no fee for the first copy.",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "eCommerce",
    tagline: "Answer product questions. Reduce cart abandonment.",
    headline: "Every question answered. Every sale captured.",
    subheadline: "Shoppers abandon carts when they can't find answers about sizing, shipping, returns, and compatibility. Ansera answers these questions instantly from your product pages and policies — keeping buyers moving toward checkout.",
    pain: "78% of shoppers abandon their cart when they can't find answers about sizing, shipping, or returns. Every unanswered question is a lost sale.",
    stat: { val: "5–10%", label: "increase in conversion rate" },
    color: "#FB923C",
    bullets: [
      "Answer sizing, fit, and compatibility questions from product pages",
      "Explain shipping times, costs, and international availability",
      "Surface return and exchange policies instantly",
      "Recommend related products based on visitor questions",
    ],
    questions: [
      "What's your return policy?",
      "Do you ship to Canada?",
      "Will this fit a 6'2\" person?",
    ],
    answers: [
      "We offer free returns within 30 days of delivery. Items must be unworn and in original packaging. Start your return in 2 clicks from your order history.",
      "Yes, we ship to Canada! Standard shipping takes 7–10 business days and costs $12.99. Express (3–5 days) is $24.99. Duties and taxes may apply at the border.",
      "Based on our size guide, we'd recommend a Large for someone 6'2\". The inseam runs 32\" and the chest measures 42–44\". Check our fit guide for more details.",
    ],
  },
  {
    id: "saas",
    icon: Code2,
    label: "SaaS",
    tagline: "Self-serve support that actually works.",
    headline: "Docs that answer back.",
    subheadline: "Support tickets and onboarding friction slow your growth. Ansera turns your documentation, help center, and product pages into an intelligent answer layer — so users find answers instantly and your team focuses on what matters.",
    pain: "Support tickets cost $15–$40 each to resolve. Most of them ask questions that are already answered somewhere in your docs.",
    stat: { val: "$22", label: "average cost per support ticket eliminated" },
    color: "#60A5FA",
    bullets: [
      "Answer integration and API questions from your actual docs",
      "Guide users through onboarding steps with contextual answers",
      "Surface relevant help articles based on what users are trying to do",
      "Reduce ticket volume by deflecting common questions at the source",
    ],
    questions: [
      "How do I connect to the REST API?",
      "Can I export my data to CSV?",
      "What's the difference between the Starter and Pro plans?",
    ],
    answers: [
      "To connect to the REST API, go to Settings → API Keys and generate a new key. Pass it as a Bearer token in your Authorization header. Full documentation is in our API Reference.",
      "Yes — go to Data → Export, choose your date range and format (CSV or JSON), and click Export. Large exports are emailed to you within a few minutes.",
      "The main differences are: Starter includes up to 3 users and 10GB storage. Pro includes unlimited users, 100GB storage, priority support, and SSO. See the full comparison on our pricing page.",
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    label: "Education",
    tagline: "Let students find answers. Let instructors teach.",
    headline: "Every student question, answered instantly.",
    subheadline: "Students ask the same questions about enrollment, curriculum, and requirements hundreds of times. Ansera answers them from your actual course pages and policies — so your admissions team and instructors can focus on education, not repetition.",
    pain: "Admissions teams spend 60% of their time answering the same enrollment and curriculum questions. That's time not spent on actual education.",
    stat: { val: "60%", label: "fewer repetitive admissions inquiries" },
    color: "#A78BFA",
    bullets: [
      "Answer enrollment, prerequisites, and deadline questions instantly",
      "Explain course structure, curriculum, and learning outcomes",
      "Surface financial aid and scholarship information accurately",
      "Capture prospective student information for follow-up",
    ],
    questions: [
      "What are the prerequisites for the UX Design course?",
      "When does the next cohort start?",
      "Do you offer payment plans?",
    ],
    answers: [
      "The UX Design course has no formal prerequisites. We recommend basic computer literacy and an interest in problem-solving. Many students come from non-design backgrounds.",
      "The next cohort starts March 15th. Applications close March 8th. We run cohorts every 8 weeks — if you miss this one, the next starts May 10th.",
      "Yes — we offer 3-month and 6-month payment plans at 0% interest. You can also apply for income share agreements where you pay after you land a job.",
    ],
  },
];

// ─── Chat Mockup ──────────────────────────────────────────────────────────────

function IndustryMockup({ industry }: { industry: typeof industries[0] }) {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    setVisibleMessages(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    industry.questions.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleMessages(i * 2 + 1), i * 1200));
      timers.push(setTimeout(() => setVisibleMessages(i * 2 + 2), i * 1200 + 600));
    });
    return () => timers.forEach(clearTimeout);
  }, [industry.id]);

  return (
    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(0,201,167,0.15)", background: "#0A1628", boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,201,167,0.04)" }}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#060E1C" }}>
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <div className="flex items-center gap-2 ml-3">
          <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${industry.color}20` }}>
            <industry.icon size={11} style={{ color: industry.color }} />
          </div>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Ansera · {industry.label}</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: industry.color }} />
          <span className="text-xs" style={{ color: industry.color }}>Live</span>
        </div>
      </div>

      {/* Messages */}
      <div className="p-5 space-y-4 min-h-[320px]">
        {industry.questions.map((q, i) => (
          <div key={i}>
            {/* Visitor question */}
            <AnimatePresence>
              {visibleMessages > i * 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end mb-3"
                >
                  <div className="px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[80%]" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)" }}>
                    {q}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ansera answer */}
            <AnimatePresence>
              {visibleMessages > i * 2 + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 mb-3"
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5" style={{ background: `${industry.color}20`, color: industry.color }}>A</div>
                  <div className="flex-1">
                    <div className="px-4 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed" style={{ background: `${industry.color}10`, border: `1px solid ${industry.color}25`, color: "rgba(255,255,255,0.82)" }}>
                      {industry.answers[i]}
                    </div>
                    <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: industry.color }} />
                      Sourced from your website content
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Input */}
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl mt-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Search size={13} style={{ color: "rgba(255,255,255,0.3)" }} />
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>Ask anything about {industry.label.toLowerCase()}...</span>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Solutions() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndustry = (index: number) => {
    setActiveIndustry(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ background: "#060C16", color: "#fff" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ paddingTop: "80px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(0,201,167,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.5 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(0,201,167,0.05) 0%, transparent 70%)" }} />

        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center pt-20 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.25)", color: "#00C9A7" }}>
            <Briefcase size={13} />
            Solutions by Industry
          </div>

          <h1 className="font-extrabold leading-[1.05] tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
            Built for the way your<br />
            <span style={{ color: "#00C9A7" }}>industry actually works.</span>
          </h1>

          <p className="text-lg mx-auto mb-10 max-w-2xl" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            Every industry has its own questions, its own friction points, and its own way visitors look for answers. Ansera adapts to yours — trained on your content, answering in your voice.
          </p>

          {/* Industry pill selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {industries.map((ind, i) => (
              <button
                key={ind.id}
                onClick={() => scrollToIndustry(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={activeIndustry === i
                  ? { background: `${ind.color}18`, border: `1px solid ${ind.color}50`, color: ind.color }
                  : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }
                }
              >
                <ind.icon size={14} />
                {ind.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            <ArrowDown size={14} />
            <span>Scroll to explore each industry</span>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-12 border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "78%", label: "of visitors abandon when they can't find answers" },
              { val: "5–10%", label: "increase in lead conversion rate" },
              { val: "< 5 min", label: "to install and go live" },
              { val: "2,000+", label: "websites across all industries" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold mb-1" style={{ color: "#00C9A7", fontFamily: "'Space Grotesk', sans-serif" }}>{s.val}</div>
                <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry sections ── */}
      {industries.map((ind, i) => (
        <section
          key={ind.id}
          id={ind.id}
          ref={(el) => { sectionRefs.current[i] = el; }}
          className="py-28 border-b"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
          onMouseEnter={() => setActiveIndustry(i)}
        >
          <div className="container mx-auto px-6 max-w-6xl">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>

              {/* Text side */}
              <div className={`reveal ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                {/* Industry badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}30` }}>
                    <ind.icon size={16} style={{ color: ind.color }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: ind.color }}>{ind.label}</span>
                </div>

                {/* Headline */}
                <h2 className="font-extrabold mb-4 leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {ind.headline}
                </h2>

                {/* Pain point callout */}
                <div className="flex gap-3 p-4 rounded-xl mb-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-1 rounded-full flex-shrink-0" style={{ background: ind.color }} />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {ind.pain}
                  </p>
                </div>

                {/* Subheadline */}
                <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {ind.subheadline}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-8">
                  {ind.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: ind.color }} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Stat highlight */}
                <div className="flex items-center gap-4 p-5 rounded-2xl mb-8" style={{ background: `${ind.color}08`, border: `1px solid ${ind.color}20` }}>
                  <div className="text-4xl font-extrabold" style={{ color: ind.color, fontFamily: "'Space Grotesk', sans-serif" }}>{ind.stat.val}</div>
                  <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{ind.stat.label}</div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://wordpress.org/plugins/ansera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                    style={{ background: ind.color, color: "#060C16" }}
                  >
                    Get started free <ArrowRight size={14} />
                  </a>
                  <Link href="/product" className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                    See all features <ChevronRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Mockup side */}
              <div className={`reveal ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <IndustryMockup industry={ind} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Comparison callout ── */}
      <section className="py-24 reveal" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
              Why not just use a chatbot or search bar?
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              Traditional tools weren't built to answer questions from your specific content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                label: "Traditional Search",
                icon: Search,
                color: "rgba(255,255,255,0.2)",
                points: [
                  "Returns a list of links, not answers",
                  "Requires visitors to read and interpret",
                  "No understanding of intent",
                  "High bounce rate when results are poor",
                ],
                verdict: "Outdated",
                verdictColor: "#EF4444",
              },
              {
                label: "Generic Chatbots",
                icon: MessageSquare,
                color: "rgba(255,255,255,0.2)",
                points: [
                  "Scripted flows that frustrate users",
                  "Can't answer questions outside the script",
                  "Aggressive sales tactics erode trust",
                  "Expensive to build and maintain",
                ],
                verdict: "Frustrating",
                verdictColor: "#F59E0B",
              },
              {
                label: "Ansera",
                icon: Star,
                color: "#00C9A7",
                points: [
                  "Direct answers from your actual content",
                  "Understands intent and context",
                  "Works across all your pages automatically",
                  "Live in under 5 minutes",
                ],
                verdict: "The right tool",
                verdictColor: "#00C9A7",
              },
            ].map((col) => (
              <div key={col.label} className="p-6 rounded-2xl border" style={{ background: col.color === "#00C9A7" ? "rgba(0,201,167,0.05)" : "rgba(255,255,255,0.02)", border: col.color === "#00C9A7" ? "1px solid rgba(0,201,167,0.25)" : "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <col.icon size={16} style={{ color: col.color }} />
                    <span className="font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif", color: col.color === "#00C9A7" ? "#fff" : "rgba(255,255,255,0.7)" }}>{col.label}</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: `${col.verdictColor}15`, color: col.verdictColor }}>
                    {col.verdict}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: col.verdictColor }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-28 reveal">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-extrabold mb-5 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to see Ansera<br />working for your industry?
          </h2>
          <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            Install free in under 5 minutes. No credit card required.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://wordpress.org/plugins/ansera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all hover:opacity-90"
              style={{ background: "#00C9A7", color: "#060C16" }}
            >
              Install Free on WordPress <ArrowRight size={15} />
            </a>
            <Link href="/#pricing" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all hover:bg-white/5" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
              View pricing
            </Link>
          </div>
          <p className="text-xs mt-6" style={{ color: "rgba(255,255,255,0.3)" }}>
            Free plan available · No credit card required · Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
