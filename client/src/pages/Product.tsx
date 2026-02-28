/**
 * Ansera Product Page
 * Design: front.com/product layout adapted to Ansera dark teal aesthetic
 * Structure:
 *   1. Hero — centered headline + subtitle + CTAs + large product mockup below
 *   2. Trust bar — "Used by X websites" + platform logos
 *   3. 3-column value props — "Built to answer visitors instantly"
 *   4. "How Ansera works" — horizontal pill tabs + large switching screenshot
 *   5. Left-side vertical tabs — 6 capabilities with interactive mockup on right
 *   6. Integrations grid
 *   7. Final CTA
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, Settings, BarChart3, Mail, ExternalLink, Shield,
  CheckCircle2, ArrowRight, Play, ChevronRight,
  Search, MessageSquare, FileText, Youtube, Upload, Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const valueProps = [
  {
    icon: Zap,
    title: "Live in under 5 minutes",
    desc: "Install the WordPress plugin, connect your site, and Ansera starts indexing your content automatically. No backend work, no AI expertise needed.",
    link: "See how setup works",
  },
  {
    icon: MessageSquare,
    title: "Answers from your content",
    desc: "Ansera reads your actual pages, posts, and docs — then delivers precise, contextual answers. It understands intent, not just keywords.",
    link: "See how answers work",
  },
  {
    icon: BarChart3,
    title: "Insights that improve your site",
    desc: "Every visitor question is a data point. Ansera surfaces content gaps, top queries, and unanswered questions so you can continuously improve.",
    link: "See analytics",
  },
];

const workflowTabs = [
  {
    id: "install",
    label: "Install",
    headline: "One-click install. Zero configuration.",
    body: "Install the Ansera plugin from the WordPress Plugin Marketplace in a single click. Ansera automatically scans and indexes your entire site — blog posts, product pages, help docs, PDFs — and starts answering questions immediately. No API keys, no backend setup, no ongoing maintenance.",
    bullets: [
      "WordPress Plugin Marketplace install",
      "Webflow, Wix & Squarespace via code snippet",
      "Auto-indexes HTML pages and PDF files",
      "Live in under 5 minutes",
    ],
    mockup: "install",
  },
  {
    id: "answers",
    label: "Instant Answers",
    headline: "Real answers. Not links. Not guesses.",
    body: "When a visitor asks a question, Ansera doesn't return a list of links — it reads your content and delivers a direct, accurate answer sourced from your actual pages. Every response cites the source so visitors can verify and explore further.",
    bullets: [
      "Understands intent, not just keywords",
      "Cites the source page for every answer",
      "Handles follow-up questions in context",
      "Supports 50+ languages automatically",
    ],
    mockup: "answers",
  },
  {
    id: "customize",
    label: "Customize",
    headline: "Your brand. Your style. Your widget.",
    body: "Choose from three widget styles — search icon, chat widget, or footer bar. Set your brand color, configure default questions, and control every aspect of the experience with point-and-click controls. No code required.",
    bullets: [
      "Search icon, chat widget, or footer bar",
      "Custom brand color and typography",
      "Set up to 5 default suggested questions",
      "Control placement and behavior",
    ],
    mockup: "customize",
  },
  {
    id: "capture",
    label: "Lead Capture",
    headline: "Turn questions into qualified leads.",
    body: "Ansera can ask for a visitor's name and email before or after answering — turning every interaction into a lead opportunity. Configure email notifications, set custom follow-up messages, and sync leads directly to your CRM.",
    bullets: [
      "Configurable lead capture forms",
      "Email notifications for new leads",
      "Custom follow-up message templates",
      "CRM integration via webhooks",
    ],
    mockup: "capture",
  },
  {
    id: "insights",
    label: "Insights",
    headline: "Know exactly what your visitors want.",
    body: "The Ansera analytics dashboard shows you every question asked, which ones were answered, and which ones exposed content gaps. Use this data to improve your site, fill content holes, and boost SEO.",
    bullets: [
      "Full query history and answer rate",
      "Content gap detection",
      "Top queries by volume and trend",
      "Export data for further analysis",
    ],
    mockup: "insights",
  },
  {
    id: "external",
    label: "External Sources",
    headline: "Answer from beyond your website.",
    body: "Augment Ansera's knowledge base with external content — PDFs, YouTube videos, Vimeo, podcasts, Google Drive documents, and Dropbox files. Ansera indexes it all and answers from the combined knowledge base.",
    bullets: [
      "PDFs, Word docs, and spreadsheets",
      "YouTube and Vimeo video transcripts",
      "Google Drive and Dropbox files",
      "Podcast and audio transcription",
    ],
    mockup: "external",
  },
];

const integrations = [
  { name: "WordPress", icon: "W", color: "#21759B" },
  { name: "Webflow", icon: "Wf", color: "#4353FF" },
  { name: "Wix", icon: "Wx", color: "#FAAD00" },
  { name: "Squarespace", icon: "Sq", color: "#ffffff" },
  { name: "Shopify", icon: "Sh", color: "#96BF48" },
  { name: "HubSpot", icon: "Hs", color: "#FF7A59" },
  { name: "Ghost", icon: "Gh", color: "#738A94" },
  { name: "Framer", icon: "Fr", color: "#0099FF" },
];

// ─── Mockup Components ────────────────────────────────────────────────────────

function InstallMockup() {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(0,201,167,0.2)", background: "#0A1628" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#060E1C" }}>
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>WordPress Plugin Marketplace</span>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4 p-4 rounded-lg mb-4" style={{ background: "rgba(0,201,167,0.06)", border: "1px solid rgba(0,201,167,0.15)" }}>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0" style={{ background: "rgba(0,201,167,0.15)", color: "#00C9A7" }}>A</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-white text-sm">Ansera Search</span>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(0,201,167,0.15)", color: "#00C9A7" }}>v2.4.1</span>
            </div>
            <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>AI-powered answer engine · by ansera01</p>
            <div className="flex items-center gap-1 text-yellow-400 text-xs mb-3">
              {"★★★★★"} <span style={{ color: "rgba(255,255,255,0.4)" }}>(9)</span>
            </div>
            <button className="px-4 py-2 rounded-lg text-xs font-semibold transition-all" style={{ background: "#00C9A7", color: "#060C16" }}>
              Install Now
            </button>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { label: "Blog posts", count: "142 pages", done: true },
            { label: "Product pages", count: "89 pages", done: true },
            { label: "Help docs", count: "234 pages", done: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2 px-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center ${item.done ? "bg-teal-500/20" : "border border-white/20"}`}>
                  {item.done && <CheckCircle2 size={10} className="text-teal-400" />}
                </div>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{item.label}</span>
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnswersMockup() {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(0,201,167,0.2)", background: "#0A1628" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#060E1C" }}>
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>ansera-widget.live</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs" style={{ color: "#00C9A7" }}>Active</span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex justify-end">
          <div className="px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[80%]" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)" }}>
            What's your return policy?
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1" style={{ background: "rgba(0,201,167,0.2)", color: "#00C9A7" }}>A</div>
          <div className="flex-1">
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm text-sm" style={{ background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", color: "rgba(255,255,255,0.85)" }}>
              We offer a <span style={{ color: "#00C9A7" }}>30-day money-back guarantee</span> on all orders. Simply visit your order history, select the item, and click "Start Return." Refunds are processed within 3–5 business days.
            </div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {["Start a return", "Track my order", "Contact support"].map(a => (
                <button key={a} className="px-3 py-1 rounded-full text-xs border transition-colors" style={{ borderColor: "rgba(0,201,167,0.3)", color: "#00C9A7" }}>{a}</button>
              ))}
            </div>
            <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#00C9A7" }} />
              Sourced from your Returns Policy page
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl mt-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Search size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>Ask anything...</span>
        </div>
      </div>
    </div>
  );
}

function CustomizeMockup() {
  const [activeStyle, setActiveStyle] = useState("Search Icon");
  const styles = ["Search Icon", "Chat Widget", "Footer Bar"];
  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(0,201,167,0.2)", background: "#0A1628" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#060E1C" }}>
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Appearance Settings</span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <p className="text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Widget Style</p>
          <div className="flex gap-2">
            {styles.map(s => (
              <button key={s} onClick={() => setActiveStyle(s)} className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all" style={activeStyle === s ? { background: "#00C9A7", color: "#060C16" } : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)" }}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Brand Color</p>
          <div className="flex gap-2">
              {["#00C9A7", "#6366F1", "#F59E0B", "#EF4444", "#3B82F6"].map(c => (
                <div key={c} className="w-7 h-7 rounded-full cursor-pointer" style={{ background: c, outline: c === "#00C9A7" ? `2px solid ${c}` : "none", outlineOffset: "2px" }} />
              ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Default Questions (up to 5)</p>
          <div className="space-y-1.5">
            {["What's your pricing?", "How do I get started?", "Do you offer a free trial?"].map(q => (
              <div key={q} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.6)" }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00C9A7" }} />
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaptureMockup() {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(0,201,167,0.2)", background: "#0A1628" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#060E1C" }}>
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Lead Capture · ansera-widget.live</span>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex gap-3">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "rgba(0,201,167,0.2)", color: "#00C9A7" }}>A</div>
          <div className="px-4 py-3 rounded-2xl rounded-tl-sm text-sm" style={{ background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", color: "rgba(255,255,255,0.85)" }}>
            Before I answer — would you like me to send this to your email?
          </div>
        </div>
        <div className="space-y-2 px-2">
          <input readOnly className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }} placeholder="Your name" />
          <input readOnly className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }} placeholder="your@email.com" />
          <button className="w-full py-2.5 rounded-lg text-sm font-semibold" style={{ background: "#00C9A7", color: "#060C16" }}>
            Send me the answer →
          </button>
          <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>or <span style={{ color: "#00C9A7", cursor: "pointer" }}>skip and answer now</span></p>
        </div>
        <div className="mt-3 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Recent leads captured</p>
          {[{ name: "Sarah M.", time: "2m ago" }, { name: "James K.", time: "14m ago" }].map(l => (
            <div key={l.name} className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ background: "rgba(0,201,167,0.15)", color: "#00C9A7" }}>{l.name[0]}</div>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{l.name}</span>
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{l.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InsightsMockup() {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(0,201,167,0.2)", background: "#0A1628" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#060E1C" }}>
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Analytics Dashboard · Live</span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[{ label: "Searches", val: "2,847" }, { label: "Answered", val: "94%" }, { label: "Avg response", val: "1.2s" }].map(s => (
            <div key={s.label} className="p-3 rounded-lg text-center" style={{ background: "rgba(0,201,167,0.06)", border: "1px solid rgba(0,201,167,0.12)" }}>
              <div className="text-lg font-bold" style={{ color: "#00C9A7" }}>{s.val}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Top queries this week</p>
        <div className="space-y-2">
          {[{ q: "return policy", n: 342, w: 90 }, { q: "pricing plans", n: 218, w: 58 }, { q: "how to integrate", n: 156, w: 41 }, { q: "bulk discounts", n: 89, w: 24 }].map(item => (
            <div key={item.q} className="flex items-center gap-3">
              <span className="text-xs w-28 truncate" style={{ color: "rgba(255,255,255,0.7)" }}>{item.q}</span>
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: `${item.w}%`, background: "#00C9A7" }} />
              </div>
              <span className="text-xs w-8 text-right" style={{ color: "rgba(255,255,255,0.4)" }}>{item.n}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>1 unanswered query — <span style={{ color: "#00C9A7" }}>create content to fill gap →</span></span>
        </div>
      </div>
    </div>
  );
}

function ExternalMockup() {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(0,201,167,0.2)", background: "#0A1628" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#060E1C" }}>
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>External Sources · Knowledge Base</span>
      </div>
      <div className="p-5 space-y-3">
        <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Connected sources</p>
        {[
          { icon: FileText, label: "Product Manual v3.pdf", size: "2.4 MB", status: "Indexed" },
          { icon: Youtube, label: "Getting Started Tutorial", size: "YouTube", status: "Indexed" },
          { icon: Upload, label: "FAQ Document.docx", size: "Google Drive", status: "Syncing..." },
          { icon: Globe, label: "Help Center Articles", size: "18 pages", status: "Indexed" },
        ].map((src) => (
          <div key={src.label} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,201,167,0.1)" }}>
              <src.icon size={14} style={{ color: "#00C9A7" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate" style={{ color: "rgba(255,255,255,0.8)" }}>{src.label}</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{src.size}</p>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: src.status === "Indexed" ? "rgba(0,201,167,0.12)" : "rgba(251,191,36,0.12)", color: src.status === "Indexed" ? "#00C9A7" : "#FBBF24" }}>
              {src.status}
            </span>
          </div>
        ))}
        <button className="w-full py-2.5 rounded-lg text-xs font-medium border border-dashed" style={{ borderColor: "rgba(0,201,167,0.3)", color: "#00C9A7" }}>
          + Add external source
        </button>
      </div>
    </div>
  );
}

const mockupMap: Record<string, React.ReactElement> = {
  install: <InstallMockup />,
  answers: <AnswersMockup />,
  customize: <CustomizeMockup />,
  capture: <CaptureMockup />,
  insights: <InsightsMockup />,
  external: <ExternalMockup />,
};

// ─── Hero Mockup ──────────────────────────────────────────────────────────────

function HeroMockup() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Escalations", "Handoffs", "Workflows", "Insights"];

  useEffect(() => {
    const interval = setInterval(() => setActiveTab(t => (t + 1) % tabs.length), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Browser chrome */}
      <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(0,201,167,0.2)", background: "#0A1628", boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,201,167,0.08)" }}>
        {/* Title bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#060E1C" }}>
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-4">
            <div className="mx-auto max-w-xs px-3 py-1 rounded-md text-xs text-center" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)" }}>
              ansera-dashboard.app
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs" style={{ color: "#00C9A7" }}>Live</span>
          </div>
        </div>

        {/* Tab row */}
        <div className="flex border-b px-5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="px-4 py-3 text-xs font-medium transition-all border-b-2"
              style={activeTab === i ? { color: "#00C9A7", borderColor: "#00C9A7" } : { color: "rgba(255,255,255,0.4)", borderColor: "transparent" }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-5">
            {[
              { label: "Total Queries", val: "12,847", trend: "+18%" },
              { label: "Answer Rate", val: "94.2%", trend: "+3.1%" },
              { label: "Avg Response", val: "1.2s", trend: "-0.3s" },
            ].map(stat => (
              <div key={stat.label} className="p-4 rounded-xl" style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.1)" }}>
                <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>{stat.label}</p>
                <p className="text-xl font-bold" style={{ color: "#fff" }}>{stat.val}</p>
                <p className="text-xs mt-1" style={{ color: "#00C9A7" }}>{stat.trend} this week</p>
              </div>
            ))}
          </div>

          {/* Query list */}
          <div className="space-y-2">
            <p className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Recent visitor questions</p>
            {[
              { q: "What's your return policy?", answered: true, time: "2s ago" },
              { q: "Do you offer bulk discounts?", answered: true, time: "14s ago" },
              { q: "How do I cancel my subscription?", answered: true, time: "1m ago" },
              { q: "Is there a free trial available?", answered: false, time: "3m ago" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.answered ? "bg-teal-400" : "bg-yellow-400"}`} />
                <span className="flex-1 text-sm truncate" style={{ color: "rgba(255,255,255,0.75)" }}>{item.q}</span>
                <span className="text-xs flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)" }}>{item.time}</span>
                <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: item.answered ? "rgba(0,201,167,0.12)" : "rgba(251,191,36,0.12)", color: item.answered ? "#00C9A7" : "#FBBF24" }}>
                  {item.answered ? "Answered" : "Gap found"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Product() {
  const [activeCapability, setActiveCapability] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#060C16", color: "#fff" }}>
      <Navbar />

      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden" style={{ paddingTop: "80px" }}>
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(0,201,167,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.4 }} />
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,201,167,0.06) 0%, transparent 70%)" }} />

        <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center pt-20 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.25)", color: "#00C9A7" }}>
            <Zap size={13} />
            WordPress Plugin · Also available for Webflow, Wix & Squarespace
          </div>

          <h1 className="font-extrabold leading-[1.05] tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
            Everything you need to<br />
            <span style={{ color: "#00C9A7" }}>answer visitors instantly.</span>
          </h1>

          <p className="text-lg mx-auto mb-10 max-w-2xl" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
            Six powerful capabilities that turn your website into an intelligent answer engine — with no code, no AI expertise, and no ongoing maintenance.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://wordpress.org/plugins/ansera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: "#00C9A7", color: "#060C16" }}
            >
              Install Free on WordPress <ArrowRight size={15} />
            </a>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-white/5" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
              <Play size={13} /> Watch demo
            </button>
          </div>

          {/* Capability pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {["Instant setup", "No-code config", "Content insights", "No-code customization", "Lead capture", "External sources"].map(cap => (
              <span key={cap} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Large hero mockup */}
        <div className="container mx-auto px-6 max-w-5xl pb-0">
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, transparent, #060C16)" }} />
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* ── 2. Trust bar ── */}
      <section className="py-14 border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-center text-sm mb-8 font-medium" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}>
            USED BY 2,000+ WEBSITES WORLDWIDE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {integrations.map(p => (
              <div key={p.name} className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity">
                <div className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold" style={{ background: p.color + "22", color: p.color, border: `1px solid ${p.color}33` }}>
                  {p.icon}
                </div>
                <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Value props ── */}
      <section className="py-24 reveal">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
              Built to answer visitors instantly
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              One plugin. Six capabilities. Zero ongoing maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map((vp) => (
              <div key={vp.title} className="p-7 rounded-2xl border transition-all hover:border-teal-500/30 group" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(0,201,167,0.1)" }}>
                  <vp.icon size={18} style={{ color: "#00C9A7" }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{vp.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>{vp.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: "#00C9A7" }}>
                  {vp.link} <ChevronRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Capabilities tabs (Front.com Deflect/Route/Resolve/Measure style) ── */}
      <section className="py-24 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }} ref={sectionRef}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 reveal">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#00C9A7", letterSpacing: "0.2em" }}>Six Capabilities</p>
            <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
              How Ansera works for you
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              Every capability is designed to work together — from first install to ongoing improvement.
            </p>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
            {/* Left: vertical tabs */}
            <div className="space-y-1">
              {workflowTabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCapability(i)}
                  className="w-full text-left px-5 py-4 rounded-xl transition-all flex items-center gap-3 group"
                  style={activeCapability === i
                    ? { background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.25)" }
                    : { background: "transparent", border: "1px solid transparent" }
                  }
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0 transition-all" style={{ background: activeCapability === i ? "#00C9A7" : "rgba(255,255,255,0.2)" }} />
                  <span className="font-semibold text-sm transition-colors" style={{ color: activeCapability === i ? "#fff" : "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}>
                    {tab.label}
                  </span>
                  {activeCapability === i && <ChevronRight size={14} className="ml-auto" style={{ color: "#00C9A7" }} />}
                </button>
              ))}
            </div>

            {/* Right: content + mockup */}
            <div className="reveal">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-8">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#00C9A7", letterSpacing: "0.2em" }}>
                      {workflowTabs[activeCapability].label}
                    </p>
                    <h3 className="font-extrabold mb-4 leading-tight" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {workflowTabs[activeCapability].headline}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "520px" }}>
                      {workflowTabs[activeCapability].body}
                    </p>
                    <ul className="space-y-2.5">
                      {workflowTabs[activeCapability].bullets.map(b => (
                        <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                          <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#00C9A7" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {mockupMap[workflowTabs[activeCapability].mockup]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Integrations ── */}
      <section className="py-24 border-t reveal" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
              Works where you already are
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              Install directly from your platform's marketplace or add a single code snippet. No developer needed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "W", name: "WordPress", desc: "Install from the Plugin Marketplace in one click", color: "#21759B" },
              { icon: "Wf", name: "Webflow", desc: "Available in the Webflow App Marketplace", color: "#4353FF" },
              { icon: "Wx", name: "Wix", desc: "Add via Wix App Market or custom code", color: "#FAAD00" },
              { icon: "Sq", name: "Squarespace", desc: "Paste a single code snippet in your settings", color: "#fff" },
            ].map(p => (
              <div key={p.name} className="p-5 rounded-2xl border transition-all hover:border-teal-500/30" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold mb-4" style={{ background: p.color + "18", color: p.color, border: `1px solid ${p.color}30` }}>
                  {p.icon}
                </div>
                <h4 className="font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Also works with external content from:</p>
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              {["PDFs", "YouTube", "Vimeo", "Google Drive", "Dropbox", "Podcasts", "Word Docs"].map(s => (
                <span key={s} className="px-3 py-1.5 rounded-full text-xs" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Final CTA ── */}
      <section className="py-28 border-t reveal" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-extrabold mb-5 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to answer every<br />visitor question, instantly?
          </h2>
          <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            Start free. No credit card required. Live in under 5 minutes.
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
