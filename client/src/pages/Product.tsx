/*
 * ANSERA AI — Product Page
 * Design: Bold Tech-Forward (Deep Navy + Electric Teal)
 * Inspired by: linear.app/build + front.com/product
 * Fonts: Space Grotesk (display) + DM Sans (body)
 * Colors: Navy #0D1B2A | Teal #00C9A7 | White text on dark sections
 *
 * Sections:
 * 1. Hero — full-bleed dark with large headline + product UI
 * 2. Feature nav — sticky tab bar (like front.com/product)
 * 3. Instant Setup — split layout, left headline, right plugin mockup
 * 4. Contextual Answers — right headline, left chat mockup
 * 5. Flexible Configuration — left headline, right widget style picker
 * 6. Lead Capture — right headline, left form mockup
 * 7. Content Insights — left headline, right analytics mockup
 * 8. External Content — right headline, left source grid
 * 9. CTA band
 */

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Zap,
  MessageSquare,
  Palette,
  Users,
  BarChart2,
  Globe,
  Check,
  ArrowRight,
  ChevronRight,
  Star,
  FileText,
  Video,
  Music,
  Database,
} from "lucide-react";

/* ─── Feature nav items ─────────────────────────────────────────────────── */
const features = [
  { id: "setup",    icon: Zap,           label: "Instant Setup" },
  { id: "answers",  icon: MessageSquare, label: "Contextual Answers" },
  { id: "config",   icon: Palette,       label: "Configuration" },
  { id: "leads",    icon: Users,         label: "Lead Capture" },
  { id: "insights", icon: BarChart2,     label: "Content Insights" },
  { id: "external", icon: Globe,         label: "External Content" },
];

/* ─── Reusable section wrapper ───────────────────────────────────────────── */
function Section({
  id,
  children,
  bg = "#0D1B2A",
}: {
  id?: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <section
      id={id}
      className="py-28 relative overflow-hidden"
      style={{ background: bg }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

/* ─── Label chip ─────────────────────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold tracking-widest uppercase mb-5"
      style={{ color: "#00C9A7", letterSpacing: "0.15em" }}
    >
      {children}
    </p>
  );
}

/* ─── Section headline ───────────────────────────────────────────────────── */
function Headline({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white leading-[1.08] mb-6"
      style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
    >
      {children}
    </h2>
  );
}

/* ─── Body copy ──────────────────────────────────────────────────────────── */
function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
      {children}
    </p>
  );
}

/* ─── Check list ─────────────────────────────────────────────────────────── */
function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: "rgba(0,201,167,0.15)" }}
          >
            <Check size={11} style={{ color: "#00C9A7" }} />
          </div>
          <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ─── Glassy card ────────────────────────────────────────────────────────── */
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl p-1 ${className}`}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,201,167,0.06)",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Plugin install mockup ──────────────────────────────────────────────── */
function PluginMockup() {
  return (
    <GlassCard>
      <div className="rounded-xl overflow-hidden" style={{ background: "#0a1520" }}>
        {/* WP admin bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: "#1d2327", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#3c434a" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#3c434a" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#3c434a" }} />
          </div>
          <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>
            WordPress Plugin Marketplace
          </span>
        </div>
        {/* Plugin card */}
        <div className="p-5">
          <div className="flex items-start gap-4 mb-5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #00C9A7, #00A88C)",
                color: "#0D1B2A",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              A
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Ansera Search
              </div>
              <div className="text-xs mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                AI-powered answer engine · by ansera01
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#00C9A7" style={{ color: "#00C9A7" }} />
                ))}
                <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.4)" }}>(9)</span>
              </div>
            </div>
          </div>

          {/* Install button */}
          <button
            className="w-full py-2.5 rounded-lg text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A" }}
          >
            Install Now
          </button>

          {/* Content scan progress */}
          <div
            className="rounded-xl p-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="text-xs font-medium text-white mb-3">Scanning and indexing your content...</div>
            {[
              { label: "Blog posts", count: "142 pages" },
              { label: "Product pages", count: "89 pages" },
              { label: "Help docs", count: "234 pages" },
              { label: "PDFs", count: "18 files" },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{row.label}</span>
                <span className="text-xs font-medium" style={{ color: "#00C9A7" }}>{row.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Chat answer mockup ─────────────────────────────────────────────────── */
function ChatMockup() {
  return (
    <GlassCard>
      <div className="rounded-xl overflow-hidden" style={{ background: "#0a1520" }}>
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A
            </div>
            <span className="text-sm font-medium text-white">Ansera AI</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: "#00C9A7" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Active</span>
          </div>
        </div>

        {/* Messages */}
        <div className="p-5 space-y-4">
          {/* User question */}
          <div className="flex justify-end">
            <div
              className="px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[80%]"
              style={{ background: "rgba(0,201,167,0.15)", color: "rgba(255,255,255,0.85)" }}
            >
              What's your return policy?
            </div>
          </div>

          {/* AI answer */}
          <div className="flex gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A
            </div>
            <div
              className="px-4 py-3 rounded-2xl rounded-tl-sm text-sm flex-1"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)" }}
            >
              We offer a 30-day money-back guarantee on all orders. Simply visit your order history, select the item, and click "Start Return." Refunds are processed within 3–5 business days.
            </div>
          </div>

          {/* Quick action chips */}
          <div className="flex flex-wrap gap-2 pl-10">
            {["Start a return", "Track my order", "Contact support"].map((chip) => (
              <button
                key={chip}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                style={{
                  background: "rgba(0,201,167,0.1)",
                  border: "1px solid rgba(0,201,167,0.25)",
                  color: "#00C9A7",
                }}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Second question */}
          <div className="flex justify-end">
            <div
              className="px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[80%]"
              style={{ background: "rgba(0,201,167,0.15)", color: "rgba(255,255,255,0.85)" }}
            >
              Do you ship internationally?
            </div>
          </div>

          {/* Second AI answer */}
          <div className="flex gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A
            </div>
            <div
              className="px-4 py-3 rounded-2xl rounded-tl-sm text-sm flex-1"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)" }}
            >
              Yes! We ship to 40+ countries. International orders typically arrive in 7–14 business days. Shipping costs are calculated at checkout.
            </div>
          </div>
        </div>

        {/* Input */}
        <div
          className="px-5 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span className="text-sm flex-1" style={{ color: "rgba(255,255,255,0.3)" }}>Ask anything...</span>
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)" }}
            >
              <ArrowRight size={14} style={{ color: "#0D1B2A" }} />
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Widget style picker mockup ─────────────────────────────────────────── */
function ConfigMockup() {
  const [activeStyle, setActiveStyle] = useState(0);
  const styles = ["Search Icon", "Chat Widget", "Footer Bar"];

  return (
    <GlassCard>
      <div className="rounded-xl overflow-hidden" style={{ background: "#0a1520" }}>
        {/* Header */}
        <div
          className="px-5 py-4 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-sm font-medium text-white">Appearance Settings</span>
          <div
            className="px-2.5 py-1 rounded-full text-xs"
            style={{ background: "rgba(0,201,167,0.15)", color: "#00C9A7" }}
          >
            Live Preview
          </div>
        </div>

        <div className="p-5 space-y-5">
          {/* Widget style selector */}
          <div>
            <div className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Widget Style</div>
            <div className="flex gap-2">
              {styles.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setActiveStyle(i)}
                  className="flex-1 py-2 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background: activeStyle === i ? "rgba(0,201,167,0.2)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${activeStyle === i ? "rgba(0,201,167,0.4)" : "rgba(255,255,255,0.08)"}`,
                    color: activeStyle === i ? "#00C9A7" : "rgba(255,255,255,0.45)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Brand color */}
          <div>
            <div className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Brand Color</div>
            <div className="flex items-center gap-3">
              {["#00C9A7", "#3B82F6", "#8B5CF6", "#F59E0B", "#EF4444"].map((color) => (
                <div
                  key={color}
                  className="w-7 h-7 rounded-full cursor-pointer transition-transform hover:scale-110"
                  style={{
                    background: color,
                    outline: color === "#00C9A7" ? "2px solid white" : "none",
                    outlineOffset: "2px",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Default questions */}
          <div>
            <div className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Default Questions (up to 5)</div>
            <div className="space-y-2">
              {["What's your pricing?", "How do I get started?", "Do you offer a free trial?"].map((q) => (
                <div
                  key={q}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00C9A7" }} />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Lead capture mockup ────────────────────────────────────────────────── */
function LeadMockup() {
  return (
    <GlassCard>
      <div className="rounded-xl overflow-hidden" style={{ background: "#0a1520" }}>
        {/* Header */}
        <div
          className="px-5 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-sm font-medium text-white">Lead Capture Settings</span>
        </div>

        <div className="p-5 space-y-4">
          {/* Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white mb-0.5">Capture visitor emails</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Ask for email before answering</div>
            </div>
            <div
              className="w-11 h-6 rounded-full flex items-center px-1"
              style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)" }}
            >
              <div className="w-4 h-4 rounded-full bg-white ml-auto" />
            </div>
          </div>

          {/* Email template preview */}
          <div
            className="rounded-xl p-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="text-xs font-medium text-white mb-3">Email capture prompt</div>
            <div
              className="rounded-lg px-3 py-2.5 text-sm mb-3"
              style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              Enter your email to get your answer instantly
            </div>
            <div className="flex gap-2">
              <div
                className="flex-1 rounded-lg px-3 py-2 text-xs"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}
              >
                your@email.com
              </div>
              <button
                className="px-4 py-2 rounded-lg text-xs font-semibold"
                style={{ background: "linear-gradient(135deg, #00C9A7, #00A88C)", color: "#0D1B2A" }}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Leads captured", value: "1,247" },
              { label: "Conversion rate", value: "34%" },
              { label: "Avg. per day", value: "41" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-3 text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-lg font-bold text-white mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Analytics mockup ───────────────────────────────────────────────────── */
function AnalyticsMockup() {
  return (
    <GlassCard>
      <div className="rounded-xl overflow-hidden" style={{ background: "#0a1520" }}>
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-sm font-medium text-white">Analytics Dashboard</span>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
            style={{ background: "rgba(0,201,167,0.12)", color: "#00C9A7" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00C9A7" }} />
            Live
          </div>
        </div>

        <div className="p-5">
          {/* Stat row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "Searches", value: "2,847" },
              { label: "Answered", value: "94%" },
              { label: "Avg response", value: "1.2s" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-3 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Top queries */}
          <div className="mb-4">
            <div className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Top queries this week</div>
            <div className="space-y-2">
              {[
                { query: "return policy", count: 342, pct: 88 },
                { query: "pricing plans", count: 218, pct: 56 },
                { query: "how to integrate", count: 156, pct: 40 },
                { query: "bulk discounts", count: 89, pct: 23 },
              ].map((row) => (
                <div key={row.query} className="flex items-center gap-3">
                  <span className="text-xs w-32 flex-shrink-0" style={{ color: "rgba(255,255,255,0.6)" }}>{row.query}</span>
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${row.pct}%`, background: "linear-gradient(90deg, #00C9A7, #7FFFD4)" }}
                    />
                  </div>
                  <span className="text-xs w-8 text-right" style={{ color: "rgba(255,255,255,0.4)" }}>{row.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gap alert */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.2)" }}
          >
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00C9A7" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
              1 unanswered query — <span style={{ color: "#00C9A7" }}>create content to fill gap →</span>
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── External content source grid ──────────────────────────────────────── */
function ExternalMockup() {
  const sources = [
    { icon: FileText, label: "PDF Documents", detail: "Dropbox, Google Drive, OneDrive", color: "#00C9A7" },
    { icon: Video,    label: "Video Content", detail: "YouTube, Vimeo embeds",           color: "#00C9A7" },
    { icon: Music,    label: "Podcasts & Audio", detail: "MP3, MP4 audio files",          color: "#00C9A7" },
    { icon: Database, label: "Presentations", detail: "PPT, XLS, DOC files",             color: "#00C9A7" },
  ];

  return (
    <GlassCard>
      <div className="rounded-xl overflow-hidden" style={{ background: "#0a1520" }}>
        {/* Header */}
        <div
          className="px-5 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-sm font-medium text-white">External Content Sources</span>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-2 gap-3">
            {sources.map((src) => (
              <div
                key={src.label}
                className="rounded-xl p-4 transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "rgba(0,201,167,0.1)" }}
                >
                  <src.icon size={18} style={{ color: "#00C9A7" }} />
                </div>
                <div className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {src.label}
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{src.detail}</div>
              </div>
            ))}
          </div>

          {/* Connected indicator */}
          <div
            className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: "rgba(0,201,167,0.06)", border: "1px solid rgba(0,201,167,0.15)" }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: "#00C9A7" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              4 external sources connected · <span style={{ color: "#00C9A7" }}>36 documents indexed</span>
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Sticky feature nav ─────────────────────────────────────────────────── */
function FeatureNav({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <div
      className="sticky top-16 z-40 py-3"
      style={{
        background: "rgba(13,27,42,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {features.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => onSelect(f.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0"
                style={{
                  background: isActive ? "rgba(0,201,167,0.12)" : "transparent",
                  color: isActive ? "#00C9A7" : "rgba(255,255,255,0.5)",
                  border: isActive ? "1px solid rgba(0,201,167,0.25)" : "1px solid transparent",
                }}
              >
                <f.icon size={15} />
                {f.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────────────────────── */
export default function Product() {
  const [activeFeature, setActiveFeature] = useState("setup");

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Update active feature in nav based on which section is visible
            const id = entry.target.getAttribute("data-feature");
            if (id) setActiveFeature(id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -30% 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    document.querySelectorAll("[data-feature]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToFeature = (id: string) => {
    const el = document.getElementById(`feature-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveFeature(id);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: "#0D1B2A" }}>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #080F18 0%, #0D1B2A 100%)" }}
      >
        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,201,167,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10 mx-auto px-6 max-w-7xl text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
            style={{
              background: "rgba(0,201,167,0.1)",
              border: "1px solid rgba(0,201,167,0.25)",
              color: "#00C9A7",
            }}
          >
            <Zap size={12} />
            Product Overview
          </div>

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.04]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
          >
            Everything you need to
            <br />
            <span className="text-gradient-teal">answer visitors instantly.</span>
          </h1>

          <p
            className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Six powerful capabilities — from one-click install to deep content analytics — all built into a single WordPress plugin.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="btn-teal px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Install Free — No Credit Card
              <ArrowRight size={16} />
            </button>
            <button
              className="px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Schedule Demo
            </button>
          </div>

          {/* Feature grid preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-16 max-w-4xl mx-auto">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => scrollToFeature(f.id)}
                className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,201,167,0.08)";
                  e.currentTarget.style.borderColor = "rgba(0,201,167,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <f.icon size={20} style={{ color: "#00C9A7" }} />
                <span className="text-xs font-medium text-center leading-tight" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {f.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky feature nav ────────────────────────────────────────────── */}
      <FeatureNav active={activeFeature} onSelect={scrollToFeature} />

      {/* ── 1. Instant Setup ─────────────────────────────────────────────── */}
      <div id="feature-setup" data-feature="setup">
        <Section bg="#0D1B2A">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <Label>01 — Instant Setup</Label>
              <Headline>Live in under five minutes. No developer needed.</Headline>
              <Body>
                Install directly from the WordPress Plugin Marketplace and Ansera automatically scans, indexes, and trains on your existing content — no backend work, no external AI training, no code.
              </Body>
              <CheckList
                items={[
                  "Install directly from the WordPress Plugin Marketplace",
                  "Webflow: register and install from the Webflow Marketplace",
                  "Wix / Squarespace: add a single code snippet to your site",
                  "Automatically syncs with HTML pages and PDF files",
                  "No duplicate content or external AI training required",
                ]}
              />
              <button
                className="mt-8 flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                style={{ color: "#00C9A7" }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
              >
                Install the plugin now <ChevronRight size={16} />
              </button>
            </div>
            <div className="reveal-right">
              <PluginMockup />
            </div>
          </div>
        </Section>
      </div>

      {/* ── 2. Contextual Answers ─────────────────────────────────────────── */}
      <div id="feature-answers" data-feature="answers">
        <Section bg="#080F18">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 reveal-left">
              <ChatMockup />
            </div>
            <div className="order-1 lg:order-2 reveal-right">
              <Label>02 — Contextual Answers</Label>
              <Headline>Real answers from your content. Not generic AI guesses.</Headline>
              <Body>
                Ansera reads and understands your website's actual content — product pages, blog posts, help docs — and delivers precise, contextual answers in real time. It understands intent, not just keywords.
              </Body>
              <CheckList
                items={[
                  "Real-time content analysis and intelligent response generation",
                  "Instantly surfaces relevant answers based on your site's actual content",
                  "Understands context and visitor intent — not just keyword matching",
                  "Trains on external content: PDFs, YouTube/Vimeo videos, and podcasts",
                  "Answers update automatically when your content changes",
                ]}
              />
            </div>
          </div>
        </Section>
      </div>

      {/* ── 3. Flexible Configuration ─────────────────────────────────────── */}
      <div id="feature-config" data-feature="config">
        <Section bg="#0D1B2A">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <Label>03 — Flexible Configuration</Label>
              <Headline>Style it your way. No code, no complexity.</Headline>
              <Body>
                Ansera works right out of the box, but gives you full point-and-click control over how it looks and behaves on your site. Match your brand identity in minutes.
              </Body>
              <CheckList
                items={[
                  "Choose from search icon, chat widget, or footer bar display styles",
                  "Revise colors and fonts to match your brand identity",
                  "Set up to 5 default questions to guide visitors",
                  "Edit and update responses at any time from your dashboard",
                  "Easily include or exclude any content with a simple toggle",
                ]}
              />
            </div>
            <div className="reveal-right">
              <ConfigMockup />
            </div>
          </div>
        </Section>
      </div>

      {/* ── 4. Lead Capture ───────────────────────────────────────────────── */}
      <div id="feature-leads" data-feature="leads">
        <Section bg="#080F18">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 reveal-left">
              <LeadMockup />
            </div>
            <div className="order-1 lg:order-2 reveal-right">
              <Label>04 — Lead Capture</Label>
              <Headline>Turn every visitor question into a qualified lead.</Headline>
              <Body>
                Collect viable leads while helping your visitors — by turning every interaction into an opportunity. Ansera captures emails, personalizes responses, and tracks visitor data so your CRM stays full.
              </Body>
              <CheckList
                items={[
                  "Embed or integrate custom lead forms within the answer flow",
                  "Personalize responses with email template customization",
                  "Track anonymous visitor data like IP and location for analytics",
                  "Connect to your CRM or email marketing tool via integrations",
                  "See conversion rates and lead volume in your dashboard",
                ]}
              />
            </div>
          </div>
        </Section>
      </div>

      {/* ── 5. Content Insights ───────────────────────────────────────────── */}
      <div id="feature-insights" data-feature="insights">
        <Section bg="#0D1B2A">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <Label>05 — Content Insights</Label>
              <Headline>Know exactly what your visitors want to know.</Headline>
              <Body>
                Ansera's built-in analytics dashboard shows you every question your visitors are asking — including the ones your content can't answer yet. Use that data to close content gaps and improve SEO.
              </Body>
              <CheckList
                items={[
                  "View real-time analytics on what users are asking",
                  "Spot content gaps based on missed or unsupported queries",
                  "Use data to guide your editorial and SEO content strategy",
                  "Track answer rate, response time, and visitor satisfaction",
                  "Third-party integrations for tracking or outreach",
                ]}
              />
            </div>
            <div className="reveal-right">
              <AnalyticsMockup />
            </div>
          </div>
        </Section>
      </div>

      {/* ── 6. External Content ───────────────────────────────────────────── */}
      <div id="feature-external" data-feature="external">
        <Section bg="#080F18">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 reveal-left">
              <ExternalMockup />
            </div>
            <div className="order-1 lg:order-2 reveal-right">
              <Label>06 — External Content</Label>
              <Headline>Augment answers with content beyond your website.</Headline>
              <Body>
                Ansera doesn't just read your web pages. Connect it to your external content library — whitepapers, webinar recordings, pricing tables, presentations — and it will answer from all of it.
              </Body>
              <CheckList
                items={[
                  "External video and audio links including YouTube, Vimeo, and podcasts",
                  "Documents hosted on Dropbox, Google Drive, and Microsoft OneDrive",
                  "Support for PDF, PPT, DOC, XLS, MP3, and MP4 file formats",
                  "Include content from webinars, white papers, and pricing tables",
                  "All external sources update automatically when content changes",
                ]}
              />
            </div>
          </div>
        </Section>
      </div>

      {/* ── CTA band ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0a2a1f 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(0,201,167,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
          >
            Ready to turn your website
            <br />
            <span className="text-gradient-teal">into an answer engine?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
            Join thousands of websites already using Ansera to convert more visitors with instant, intelligent answers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="btn-teal px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Install Free — No Credit Card
              <ArrowRight size={18} />
            </button>
            <button
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Schedule Demo
            </button>
          </div>
          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            Free plan available · No credit card required · Live in under 5 minutes
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
