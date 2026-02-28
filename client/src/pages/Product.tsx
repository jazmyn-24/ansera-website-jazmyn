/*
 * Product Page — Ansera AI
 * Design: Premium editorial dark aesthetic
 * Inspired by linear.app/build and front.com/product
 * Full-bleed hero, alternating split feature sections, dramatic CTA
 * Fonts: Space Grotesk (display) + DM Sans (body)
 * Colors: #080E1A base, #00C9A7 teal accent
 */

import { useEffect, useRef, useState } from "react";
import {
  Zap, BarChart3, Sliders, Users, Globe, Shield, ArrowRight, Check, Play,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Mockup shell ──────────────────────────────────────────── */
function MockupShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden w-full" style={{ background: "rgba(8,16,28,0.95)", border: "1px solid rgba(0,201,167,0.15)", boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,201,167,0.06), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
      <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
        <div className="flex gap-1.5">
          {[0,1,2].map(i => <div key={i} className="w-3 h-3 rounded-full" style={{ background: "#2a2a2a" }} />)}
        </div>
        <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>{title}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function ChatMockup() {
  return (
    <MockupShell title="ansera-widget.live">
      <div className="space-y-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,201,167,0.25)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>What's your return policy?</span>
          <div className="ml-auto w-1.5 h-4 rounded-sm animate-pulse" style={{ background: "#00C9A7" }} />
        </div>
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ background: "linear-gradient(135deg,#00C9A7,#00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk',sans-serif" }}>A</div>
          <div className="flex-1 text-sm leading-relaxed p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.06)" }}>
            We offer a <span style={{ color: "#00C9A7", fontWeight: 600 }}>30-day money-back guarantee</span> on all orders. Simply visit your order history, select the item, and click "Start Return." Refunds are processed within 3–5 business days.
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {["Start a return","Track my order","Contact support"].map(s => (
            <button key={s} className="text-xs px-3 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.08)" }}>{s}</button>
          ))}
        </div>
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs" style={{ background: "rgba(0,201,167,0.06)", border: "1px solid rgba(0,201,167,0.12)", color: "rgba(255,255,255,0.4)" }}>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          Sourced from your Returns Policy page
        </div>
      </div>
    </MockupShell>
  );
}

function SetupMockup() {
  return (
    <MockupShell title="WordPress Plugin Marketplace">
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "rgba(0,201,167,0.06)", border: "1px solid rgba(0,201,167,0.15)" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg,#00C9A7,#00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk',sans-serif" }}>A</div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>Ansera Search</div>
            <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>AI-powered answer engine · by ansera01</div>
            <div className="flex">{[1,2,3,4,5].map(s => <span key={s} style={{ color: "#00C9A7", fontSize: "10px" }}>★</span>)}<span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.25)" }}>(9)</span></div>
          </div>
          <div className="px-4 py-2 rounded-lg text-xs font-semibold flex-shrink-0" style={{ background: "linear-gradient(135deg,#00C9A7,#00A88C)", color: "#0D1B2A" }}>Activate</div>
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color: "#00C9A7" }}>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Scanning and indexing your content...
        </div>
        <div className="space-y-1.5">
          {[["Blog posts","142 pages"],["Product pages","89 pages"],["Help docs","234 pages"],["PDFs","18 files"]].map(([label,count]) => (
            <div key={label} className="flex items-center justify-between text-xs py-2 px-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
              <span style={{ color: "#00C9A7", fontWeight: 600 }}>{count}</span>
            </div>
          ))}
        </div>
        <div className="text-xs text-center py-2 rounded-lg" style={{ background: "rgba(0,201,167,0.08)", color: "#00C9A7", border: "1px solid rgba(0,201,167,0.15)" }}>
          ✓ Ready — 483 pages indexed in 4 minutes
        </div>
      </div>
    </MockupShell>
  );
}

function AnalyticsMockup() {
  return (
    <MockupShell title="Analytics Dashboard · Last 30 days">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[["2,847","Searches"],["94%","Answered"],["1.2s","Avg response"]].map(([v,l]) => (
            <div key={l} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="text-xl font-bold mb-0.5" style={{ color: "#00C9A7", fontFamily: "'Space Grotesk',sans-serif" }}>{v}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{l}</div>
            </div>
          ))}
        </div>
        <div className="text-xs font-semibold mb-1" style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Top queries this week</div>
        {[{q:"return policy",count:342,answered:true},{q:"pricing plans",count:218,answered:true},{q:"how to integrate",count:156,answered:true},{q:"bulk discounts",count:89,answered:false}].map(item => (
          <div key={item.q} className="flex items-center justify-between gap-3 py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <span className="text-sm flex-1" style={{ color: "rgba(255,255,255,0.6)" }}>{item.q}</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>{item.count}</span>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.answered?"#22c55e":"rgba(255,255,255,0.15)" }} />
          </div>
        ))}
        <div className="pt-1 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          1 unanswered query — <span style={{ color: "#00C9A7" }}>create content to fill gap →</span>
        </div>
      </div>
    </MockupShell>
  );
}

function CustomizeMockup() {
  return (
    <MockupShell title="Appearance Settings">
      <div className="space-y-5">
        <div>
          <div className="text-xs mb-3 font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>Widget Style</div>
          <div className="flex gap-2">
            {["Search Icon","Chat Widget","Footer Bar"].map((style,i) => (
              <button key={style} className="px-3 py-2 rounded-lg text-xs font-medium" style={{ background: i===0?"rgba(0,201,167,0.15)":"rgba(255,255,255,0.04)", color: i===0?"#00C9A7":"rgba(255,255,255,0.35)", border: i===0?"1px solid rgba(0,201,167,0.3)":"1px solid rgba(255,255,255,0.06)" }}>{style}</button>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs mb-3 font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>Brand Color</div>
          <div className="flex gap-2.5">
            {["#00C9A7","#3B82F6","#8B5CF6","#F59E0B"].map((color,i) => (
              <div key={color} className="w-7 h-7 rounded-full cursor-pointer" style={{ background: color, outline: i===0?"2px solid rgba(255,255,255,0.6)":"none", outlineOffset: "2px" }} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs mb-3 font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>Default Questions (up to 5)</div>
          {["What's your pricing?","How do I get started?","Do you offer a free trial?"].map(q => (
            <div key={q} className="flex items-center gap-2 px-3 py-2.5 rounded-lg mb-2 text-xs" style={{ background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00C9A7" }} />{q}
            </div>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

function LeadsMockup() {
  return (
    <MockupShell title="Lead Capture Settings">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Capture visitor emails</span>
          <div className="w-10 h-6 rounded-full relative" style={{ background: "linear-gradient(135deg,#00C9A7,#00A88C)" }}>
            <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
          </div>
        </div>
        <div>
          <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Email capture prompt</div>
          <div className="px-3 py-2.5 rounded-lg text-xs" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}>Enter your email to get your answer instantly</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[["1,247","Leads captured"],["34%","Conversion rate"],["41","Avg. per day"]].map(([v,l]) => (
            <div key={l} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="text-lg font-bold mb-0.5" style={{ color: "#00C9A7", fontFamily: "'Space Grotesk',sans-serif" }}>{v}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
          Syncing with Mailchimp · 1,247 contacts exported
        </div>
      </div>
    </MockupShell>
  );
}

function ExternalMockup() {
  return (
    <MockupShell title="External Content Sources">
      <div className="space-y-3">
        {[{label:"PDF Documents",sub:"Dropbox, Google Drive, OneDrive",icon:"📄",active:true},{label:"Video Content",sub:"YouTube, Vimeo embeds",icon:"🎬",active:true},{label:"Podcasts & Audio",sub:"MP3, MP4 audio files",icon:"🎙️",active:true},{label:"Presentations",sub:"PPT, XLS, DOC files",icon:"📊",active:false}].map(item => (
          <div key={item.label} className="flex items-center gap-4 p-3.5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${item.active?"rgba(0,201,167,0.12)":"rgba(255,255,255,0.05)"}` }}>
            <div className="text-xl flex-shrink-0">{item.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white mb-0.5" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{item.label}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{item.sub}</div>
            </div>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.active?"#22c55e":"rgba(255,255,255,0.15)" }} />
          </div>
        ))}
        <div className="pt-1 text-xs text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
          3 sources connected · <span style={{ color: "#00C9A7" }}>36 documents indexed</span>
        </div>
      </div>
    </MockupShell>
  );
}

/* ─── Feature sections data ─────────────────────────────────── */
const featureData = [
  {
    id: "answers",
    icon: Zap,
    eyebrow: "Core Intelligence",
    headline: "Real answers from your content.\nNot generic AI guesses.",
    body: "Ansera reads and understands your website's actual content — product pages, blog posts, help docs — and delivers precise, contextual answers in real time. It understands intent, not just keywords.",
    bullets: ["Real-time content analysis and intelligent response generation","Understands visitor intent — not just keyword matching","Trains on external content: PDFs, YouTube, Vimeo, podcasts"],
    mockup: <ChatMockup />,
    flip: false,
    bg: "#080E1A",
  },
  {
    id: "setup",
    icon: Zap,
    eyebrow: "Instant Setup",
    headline: "Live in under five minutes.\nNo developer needed.",
    body: "Install directly from the WordPress Plugin Marketplace and Ansera automatically scans, indexes, and trains on your existing content. No backend work, no external AI training, no code.",
    bullets: ["Install directly from the WordPress Plugin Marketplace","Webflow, Wix, and Squarespace supported via code snippet","Automatically syncs with HTML pages and PDF files"],
    mockup: <SetupMockup />,
    flip: true,
    bg: "#0C1624",
  },
  {
    id: "analytics",
    icon: BarChart3,
    eyebrow: "Content Intelligence",
    headline: "Know exactly what your\nvisitors want to know.",
    body: "Ansera's built-in analytics dashboard shows you every question your visitors are asking — including the ones your content can't answer yet. Use that data to close content gaps and improve SEO.",
    bullets: ["View real-time analytics on what users are asking","Spot content gaps based on missed or unsupported queries","Use data to guide your editorial and SEO content strategy"],
    mockup: <AnalyticsMockup />,
    flip: false,
    bg: "#080E1A",
  },
  {
    id: "customize",
    icon: Sliders,
    eyebrow: "No-Code Customization",
    headline: "Style it your way.\nNo code, no complexity.",
    body: "Ansera works right out of the box, but gives you full point-and-click control over how it looks and behaves on your site. Match your brand identity in minutes.",
    bullets: ["Choose from search icon, chat widget, or footer bar display styles","Revise colors and fonts to match your brand identity","Set up to 5 default questions to guide visitors"],
    mockup: <CustomizeMockup />,
    flip: true,
    bg: "#0C1624",
  },
  {
    id: "leads",
    icon: Users,
    eyebrow: "Lead Capture",
    headline: "Turn every visitor question\ninto a qualified lead.",
    body: "Collect viable leads while helping your visitors — by turning every interaction into an opportunity. Ansera captures emails, personalizes responses, and tracks visitor data so your CRM stays full.",
    bullets: ["Embed custom lead forms within the answer flow","Personalize responses with email template customization","Connect to your CRM or email marketing tool via integrations"],
    mockup: <LeadsMockup />,
    flip: false,
    bg: "#080E1A",
  },
  {
    id: "external",
    icon: Globe,
    eyebrow: "External Content",
    headline: "Augment answers with content\nbeyond your website.",
    body: "Ansera doesn't just read your web pages. Connect it to your external content library — whitepapers, webinar recordings, pricing tables, presentations — and it will answer from all of it.",
    bullets: ["External video and audio: YouTube, Vimeo, and podcasts","Documents on Dropbox, Google Drive, and Microsoft OneDrive","Support for PDF, PPT, DOC, XLS, MP3, and MP4 file formats"],
    mockup: <ExternalMockup />,
    flip: true,
    bg: "#0C1624",
  },
];

/* ─── Feature section component ─────────────────────────────── */
function FeatureSection({ feature, index }: { feature: typeof featureData[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: feature.bg, borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{ width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 70%)", top: "50%", left: feature.flip?"auto":"-15%", right: feature.flip?"-15%":"auto", transform: "translateY(-50%)" }} />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl py-28 lg:py-36">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${feature.flip?"lg:[&>*:first-child]:order-2":""}`}>

          {/* Text side */}
          <div style={{ opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(32px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,201,167,0.12)", border: "1px solid rgba(0,201,167,0.2)" }}>
                <feature.icon size={15} style={{ color: "#00C9A7" }} />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#00C9A7", letterSpacing: "0.15em", fontFamily: "'Space Grotesk',sans-serif" }}>{feature.eyebrow}</span>
            </div>

            {/* Headline — newlines become <br> */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-[1.08]" style={{ fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "-0.04em" }}>
              {feature.headline.split("\n").map((line, i) => (
                <span key={i}>{line}{i < feature.headline.split("\n").length - 1 && <br />}</span>
              ))}
            </h2>

            {/* Body */}
            <p className="text-base lg:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif", maxWidth: "480px" }}>{feature.body}</p>

            {/* Bullets */}
            <ul className="space-y-3.5">
              {feature.bullets.map(b => (
                <li key={b} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,201,167,0.12)", border: "1px solid rgba(0,201,167,0.2)" }}>
                    <Check size={10} style={{ color: "#00C9A7" }} strokeWidth={3} />
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans',sans-serif" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup side */}
          <div className="relative" style={{ opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(40px)", transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s" }}>
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%,rgba(0,201,167,0.1) 0%,transparent 65%)", transform: "scale(1.15)", filter: "blur(40px)" }} />
            <div className="relative">{feature.mockup}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
function ProductHero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section className="relative overflow-hidden" style={{ background: "#060C16", paddingTop: "80px" }}>
      {/* CSS-only dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(0,201,167,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.45 }} />
      {/* Teal radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(0,201,167,0.07) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(0,80,60,0.05) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to bottom,transparent,#060C16)" }} />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8" style={{ background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.25)", color: "#00C9A7", fontFamily: "'Space Grotesk',sans-serif", opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(16px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
            <Zap size={12} />
            WordPress Plugin · Also available for Webflow, Wix & Squarespace
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.02] mb-8" style={{ fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "-0.05em", opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(20px)", transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s" }}>
            Everything you need to{" "}
            <span style={{ background: "linear-gradient(135deg,#00C9A7 0%,#7FFFD4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              answer visitors instantly.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-lg lg:text-xl leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif", maxWidth: "540px", opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(20px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
            Six powerful capabilities that turn your website into an intelligent answer engine — with no code, no AI expertise, and no ongoing maintenance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4" style={{ opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(20px)", transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s" }}>
            <a href="https://wordpress.org/plugins/ansera" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold" style={{ background: "linear-gradient(135deg,#00C9A7,#00A88C)", color: "#060C16", fontFamily: "'Space Grotesk',sans-serif", boxShadow: "0 0 30px rgba(0,201,167,0.3)" }}>
              Install Free on WordPress <ArrowRight size={16} />
            </a>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.12)", fontFamily: "'Space Grotesk',sans-serif" }}>
              <Play size={14} /> Watch demo
            </button>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(6,12,22,0.85)", backdropFilter: "blur(10px)" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap">
            {[["Instant setup","< 5 minutes"],["No-code config","Point & click"],["Content insights","Real-time analytics"],["Lead capture","Built-in forms"],["External sources","PDFs, video, audio"],["Enterprise security","CAPTCHA protected"]].map(([label,sub],i) => (
              <div key={label} className="flex-1 min-w-[120px] px-5 py-4" style={{ borderLeft: i>0?"1px solid rgba(255,255,255,0.05)":"none" }}>
                <div className="text-xs font-semibold text-white mb-0.5" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{label}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Capabilities overview ─────────────────────────────────── */
function CapabilitiesStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const caps = [
    { icon: Zap, label: "Instant AI answers" },
    { icon: Zap, label: "1-click setup" },
    { icon: BarChart3, label: "Content insights" },
    { icon: Sliders, label: "No-code customization" },
    { icon: Users, label: "Lead capture" },
    { icon: Globe, label: "External content" },
  ];

  return (
    <section ref={ref} className="py-20 relative" style={{ background: "#0A1420", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12" style={{ opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Space Grotesk',sans-serif" }}>Six capabilities. One plugin. Zero complexity.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {caps.map((cap,i) => (
            <div key={cap.label} className="flex flex-col items-center gap-3 p-5 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(24px)", transition: `opacity 0.6s ease ${i*0.07}s, transform 0.6s ease ${i*0.07}s` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.15)" }}>
                <cap.icon size={18} style={{ color: "#00C9A7" }} />
              </div>
              <span className="text-xs font-semibold text-white leading-tight" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{cap.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Security callout ──────────────────────────────────────── */
function SecurityCallout() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{ background: "#080E1A", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="rounded-3xl p-12 lg:p-16 relative overflow-hidden" style={{ background: "rgba(0,201,167,0.04)", border: "1px solid rgba(0,201,167,0.12)", opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(32px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle,rgba(0,201,167,0.08) 0%,transparent 70%)", transform: "translate(30%,-30%)" }} />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,201,167,0.12)", border: "1px solid rgba(0,201,167,0.2)" }}>
                  <Shield size={18} style={{ color: "#00C9A7" }} />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#00C9A7", letterSpacing: "0.15em" }}>Enterprise Security</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "-0.04em" }}>Built for security from the ground up.</h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif" }}>Ansera uses invisible CAPTCHA technology to protect your site from spam and abuse, with enterprise-grade infrastructure that keeps your data safe and your visitors' privacy intact.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["Invisible CAPTCHA","Spam protection without friction"],["Data privacy","No visitor data stored or sold"],["HTTPS encrypted","All traffic secured end-to-end"],["GDPR ready","Compliant with EU data regulations"]].map(([label,desc]) => (
                <div key={label} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00C9A7" }} />
                    <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{label}</span>
                  </div>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Product CTA ───────────────────────────────────────────── */
function ProductCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-36" style={{ background: "#060C16" }}>
      {/* Dark teal radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(0,201,167,0.08) 0%,transparent 70%)" }} />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center" style={{ opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(32px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#00C9A7", letterSpacing: "0.2em", fontFamily: "'Space Grotesk',sans-serif" }}>Get started today</p>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-[1.05]" style={{ fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "-0.04em" }}>
          Your website should answer questions.
          <br />
          <span style={{ background: "linear-gradient(135deg,#00C9A7 0%,#7FFFD4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Not lose customers.</span>
        </h2>
        <p className="text-lg leading-relaxed mb-12 mx-auto" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif", maxWidth: "480px" }}>Install Ansera in under five minutes and start converting visitors into customers today.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://wordpress.org/plugins/ansera" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold" style={{ background: "linear-gradient(135deg,#00C9A7,#00A88C)", color: "#060C16", fontFamily: "'Space Grotesk',sans-serif", boxShadow: "0 0 40px rgba(0,201,167,0.35)" }}>
            Install Free on WordPress <ArrowRight size={16} />
          </a>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold" style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.12)", fontFamily: "'Space Grotesk',sans-serif" }}>
            View pricing
          </button>
        </div>
        <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>Free plan available · No credit card required · Cancel anytime</p>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Product() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: "#060C16" }}>
      <Navbar />
      <ProductHero />
      <CapabilitiesStrip />
      {featureData.map((feature, index) => (
        <FeatureSection key={feature.id} feature={feature} index={index} />
      ))}
      <SecurityCallout />
      <ProductCTA />
      <Footer />
    </div>
  );
}
