/**
 * Ansera Blog Page
 * Design: Dark navy, editorial layout inspired by Linear/Stripe blog
 * - Featured post hero at top
 * - Category filter pills
 * - 3-column card grid for remaining posts
 * - Newsletter CTA at bottom
 */

import { useState, useEffect } from "react";
import { ArrowRight, Clock, Calendar, Tag, Search, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Blog Data ────────────────────────────────────────────────────────────────

export const blogPosts = [
  {
    id: "future-of-websites",
    slug: "future-of-websites",
    title: "Is the Future of Websites a Chat Interface?",
    excerpt: "The digital landscape is experiencing a fundamental shift in how users interact with information online. As AI reshapes expectations for instant answers, websites must adapt — or get left behind.",
    category: "Trends",
    author: "Ayesha",
    authorRole: "Co-founder, Ansera",
    date: "August 18, 2025",
    readTime: "7 min read",
    featured: true,
    content: `
The digital landscape is experiencing a fundamental shift in how users interact with information online. As artificial intelligence reshapes our expectations for instant, precise answers, we're witnessing what may be the most significant change in web interaction since the invention of the search button. The question isn't whether this transformation is coming — it's how quickly websites will adapt to meet users' evolving expectations.

## From Directories to PageRank to AI

Early internet directories were manually curated lists, requiring lots of clicking. Google changed that with PageRank — a smarter way to sort links. But even Google's results are based on a model designed to generate traffic, not deliver instant answers.

ChatGPT changed everything. For the first time, users experienced precise, complete answers instantly. No jumping through links, no wasted effort. It wasn't just smarter tech — it redefined what users expect from websites.

Google began showing AI-generated answers at the top of search results. These synthesize information from multiple sources to give users a complete, accurate answer — no clicks required.

## Why Your Website Is Falling Behind

Why should your website make users work harder than a search engine? Traditional models — long menus, poor search, "Contact Us" forms — feel outdated in the age of AI. Users now expect intelligent, real-time answers on your website.

Old-style chatbots offer preselected questions, scripted replies, and frustration loops. They feel like pushy salespeople. What users want now is a Gen-AI engine that listens first, responds smartly, and helps before selling. Trust-building, not lead-pushing.

## What the Shift Means for Your Business

The shift is bigger than layout — it's behavioral. Websites using AI chat interfaces will:

- Increase engagement by keeping visitors on-site longer
- Lower bounce rates by answering questions before visitors leave
- Improve conversions by removing friction from the decision process
- Stand out competitively in a world where most sites still use keyword search

Users now expect chat-like answers directly from your website. Not a chatbot. Not just a search bar. A real-time answer engine trained on your content.

## How Ansera Fits In

Ansera is built specifically for this shift. Unlike generic AI tools, Ansera trains exclusively on your website's content — your pages, posts, docs, and PDFs. Every answer it gives is grounded in what you've actually written, not hallucinated from the internet.

The result is an answer engine that feels like a knowledgeable member of your team — available 24/7, never frustrated, always accurate.

> "We added Ansera and our support tickets dropped by 40%." — Ansera customer

The future of websites isn't a better search bar. It's a site that answers back.
    `,
  },
  {
    id: "reduce-support-tickets",
    slug: "reduce-support-tickets",
    title: "How to Reduce Support Tickets by 40% Without Hiring More Staff",
    excerpt: "Support tickets are expensive — $15–$40 each to resolve. Most of them ask questions already answered on your website. Here's how to fix that without adding headcount.",
    category: "Support",
    author: "Ansera Team",
    authorRole: "Ansera",
    date: "September 3, 2025",
    readTime: "5 min read",
    featured: false,
    content: `
Support tickets are expensive. Industry estimates put the average cost of a single support ticket at $15–$40 when you factor in staff time, tooling, and overhead. For a company handling 500 tickets a month, that's $7,500–$20,000 in support costs — every single month.

The frustrating part? Most of those tickets ask questions that are already answered somewhere on your website.

## The Root Cause: Your Website Doesn't Answer Questions

Visitors land on your site with specific questions. They look for answers using your search bar (which returns a list of links, not answers), browse your FAQ page (which never has the exact question they're asking), or give up and submit a support ticket.

The ticket isn't a failure of your support team. It's a failure of your website to answer the question before the visitor gave up.

## The Fix: An Answer Engine, Not a Search Bar

An AI answer engine like Ansera works differently from a search bar. Instead of returning a list of links, it reads your question, understands your intent, and returns a direct answer — sourced from your actual website content.

When a visitor asks "Do you accept Blue Cross Blue Shield?", they get an immediate answer from your insurance page. When they ask "What's your return policy?", they get the exact policy text, not a link to a page they have to read.

## What a 40% Reduction Actually Looks Like

Ansera customers consistently report 30–50% reductions in support ticket volume within the first 30 days. Here's why:

**Deflection at the source.** Questions get answered on the website before the visitor reaches for the "Contact Us" button.

**24/7 availability.** Most support tickets are submitted outside business hours. An answer engine is always on.

**Consistent accuracy.** Every answer comes directly from your content — no misremembered policies, no outdated information.

## Getting Started

Installing Ansera takes under 5 minutes. Connect it to your WordPress site, let it index your content, and it starts answering questions immediately. No training, no scripting, no ongoing maintenance.

The 40% reduction isn't a promise — it's what happens when your website finally answers the questions your visitors are already asking.
    `,
  },
  {
    id: "wordpress-ai-search-guide",
    slug: "wordpress-ai-search-guide",
    title: "The Complete Guide to AI-Powered Search for WordPress Sites",
    excerpt: "WordPress's default search is notoriously bad. Here's everything you need to know about upgrading it to an AI answer engine — and why the difference matters more than you think.",
    category: "WordPress",
    author: "Ansera Team",
    authorRole: "Ansera",
    date: "September 15, 2025",
    readTime: "9 min read",
    featured: false,
    content: `
WordPress powers 43% of the web. And WordPress's default search is, to put it charitably, not great.

It does a basic keyword match against your post titles and content. It doesn't understand synonyms. It doesn't understand intent. It doesn't understand that "how do I cancel my subscription" and "cancellation policy" are the same question. It just looks for the exact words you typed.

This guide covers everything you need to know about upgrading WordPress search to an AI-powered answer engine.

## Why Default WordPress Search Fails

The core problem is that WordPress search was designed for a different era. It was built to help site administrators find their own content — not to help visitors find answers.

When a visitor types a question into your search bar, they want an answer. WordPress gives them a list of posts that contain some of the words they typed. These are fundamentally different things.

## What AI-Powered Search Does Differently

An AI answer engine like Ansera doesn't search for keywords. It reads the question, understands what the visitor is actually trying to find out, and returns a direct answer from your content.

The difference in user experience is dramatic. Instead of "Here are 12 posts that mention the word 'return'", the visitor gets "Our return policy allows free returns within 30 days of delivery. Items must be unworn and in original packaging."

## Installation and Setup

Ansera installs as a standard WordPress plugin in under 5 minutes. After activation, it automatically crawls and indexes your entire site — pages, posts, custom post types, and PDFs. No configuration required.

The widget appears as a search icon, chatbot bubble, or footer bar — your choice. Visitors can ask questions in natural language and get immediate answers.

## Measuring the Impact

After installing Ansera, track these metrics in your analytics:

- **Bounce rate** on pages where the widget appears
- **Time on site** for visitors who use the widget vs. those who don't
- **Support ticket volume** in the weeks following installation
- **Conversion rate** for your primary CTA

Most sites see measurable improvements within the first two weeks.
    `,
  },
  {
    id: "ai-search-vs-chatbots",
    slug: "ai-search-vs-chatbots",
    title: "AI Answer Engines vs. Chatbots: What's the Difference and Which Do You Need?",
    excerpt: "Chatbots and AI answer engines both use AI, but they solve fundamentally different problems. Here's how to tell them apart — and which one is right for your website.",
    category: "Product",
    author: "Ansera Team",
    authorRole: "Ansera",
    date: "October 2, 2025",
    readTime: "6 min read",
    featured: false,
    content: `
"AI chatbot" has become a catch-all term for anything that uses AI to communicate with website visitors. But there's a meaningful difference between a chatbot and an AI answer engine — and choosing the wrong one can actually hurt your conversion rate.

## What a Chatbot Actually Is

A traditional chatbot is a scripted conversation flow. You define the questions it can handle, write the responses, and build a decision tree that guides visitors through a predetermined path.

Modern "AI chatbots" use large language models to make these conversations feel more natural, but the fundamental model is the same: the chatbot is trying to guide visitors toward a specific outcome (usually a lead form or a sales call).

The problem is that visitors can tell. When a chatbot responds to "What's your pricing?" with "I'd love to help you find the right plan! Can I get your name and email first?", visitors feel manipulated. Trust erodes. They leave.

## What an AI Answer Engine Is

An AI answer engine has a different goal: answer the question. Not capture a lead. Not book a demo. Just answer the question the visitor actually asked.

Ansera reads your website content, understands what visitors are asking, and returns direct answers sourced from your actual pages and docs. It doesn't have a script. It doesn't have a sales agenda. It just answers.

This distinction matters enormously for trust. When visitors get a direct, accurate answer to their question, they trust your brand more. They stay on your site longer. They're more likely to convert — on their own terms.

## When to Use Each

**Use a chatbot when:** You have a complex sales process that requires qualification, you need to route visitors to different teams, or you're running a high-touch B2B sales motion.

**Use an AI answer engine when:** You want to reduce support tickets, improve self-service, increase engagement, or help visitors find information faster.

For most websites — especially those with a lot of content — an AI answer engine delivers better results with far less setup and maintenance.
    `,
  },
  {
    id: "content-gaps-seo",
    slug: "content-gaps-seo",
    title: "How Visitor Questions Reveal Your Biggest Content Gaps",
    excerpt: "Every unanswered question on your website is a missed opportunity — for SEO, for conversion, and for customer trust. Here's how to use Ansera's analytics to find and fix them.",
    category: "SEO",
    author: "Ansera Team",
    authorRole: "Ansera",
    date: "October 20, 2025",
    readTime: "5 min read",
    featured: false,
    content: `
Your visitors are telling you exactly what content you're missing. They're just doing it through unanswered questions, not feedback forms.

Every time a visitor asks your website a question and doesn't get a satisfying answer, they're revealing a gap in your content. A page you haven't written. A FAQ entry you forgot. A product detail you assumed was obvious.

## The Problem with Traditional Content Strategy

Most content strategies are built around keyword research — finding terms people search for on Google and writing content that ranks for those terms. This is valuable, but it's incomplete.

Keyword research tells you what people search for before they reach your site. It doesn't tell you what questions they have after they arrive.

## What Visitor Questions Tell You

Ansera logs every question visitors ask. Questions that get answered well tell you your content is working. Questions that get poor answers — or no answer — tell you exactly where to focus your content efforts.

Common patterns we see:

**Pricing questions without clear answers.** Visitors ask "How much does the Pro plan cost?" and the answer is vague. This is a conversion killer.

**Process questions.** "How long does onboarding take?" "What happens after I sign up?" These questions reveal anxiety in your funnel.

**Comparison questions.** "How is this different from [competitor]?" These are high-intent questions from visitors close to a decision.

## Turning Gaps into Content

For each unanswered question category, the fix is usually one of three things:

1. **Add a FAQ entry** for simple factual questions
2. **Write a dedicated page** for complex topics that deserve full treatment
3. **Update existing content** to be more explicit about information you assumed was obvious

After updating your content, Ansera automatically re-indexes it. The next visitor who asks the same question gets a real answer.

## The SEO Bonus

Content written to answer specific visitor questions tends to rank well for long-tail search queries. When you write a page that directly answers "How long does onboarding take for a 50-person team?", you're also likely to rank for that exact phrase on Google.

Visitor questions are a goldmine for both conversion and SEO. Ansera's analytics make them visible.
    `,
  },
  {
    id: "lead-capture-without-friction",
    slug: "lead-capture-without-friction",
    title: "Lead Capture Without the Friction: How to Collect Emails When Visitors Are Already Engaged",
    excerpt: "Most lead capture forms interrupt visitors at the worst possible moment. Here's a better approach: capture information after you've already delivered value.",
    category: "Growth",
    author: "Ansera Team",
    authorRole: "Ansera",
    date: "November 5, 2025",
    readTime: "4 min read",
    featured: false,
    content: `
The standard approach to lead capture is to interrupt visitors as early as possible. Pop-ups appear within 5 seconds of landing. Chat widgets immediately ask "Can I get your name and email?" before saying anything useful.

This approach is based on a flawed assumption: that capturing contact information is the goal. It isn't. The goal is to start a relationship. And relationships don't start with demands.

## The Better Approach: Value First

Ansera's lead capture works differently. Instead of asking for contact information upfront, it delivers value first — answering the visitor's question completely and accurately. Then, after the visitor has received something useful, it offers to send them more.

"Based on your question about our enterprise pricing, would you like me to send you a detailed breakdown? Just drop your email and I'll send it over."

This is a fundamentally different dynamic. The visitor has already received value. The request for their email is framed as an extension of that value, not a toll to access it.

## Why This Converts Better

The conversion rate difference between friction-first and value-first lead capture is significant. Here's why:

**Trust is already established.** The visitor has seen that Ansera gives accurate, helpful answers. They trust that what you're offering to send them will also be valuable.

**The request is contextual.** You're not asking for their email to send them a generic newsletter. You're offering to send them something specific and relevant to the question they just asked.

**The timing is right.** The visitor is engaged. They're in the middle of researching. This is the moment when they're most receptive to hearing more.

## Setting It Up

Ansera's lead capture triggers can be configured to appear after specific types of questions — pricing questions, comparison questions, or any question you define. You can customize the follow-up offer and the email template that gets sent.

The result is a lead list of people who are genuinely interested in what you offer — not people who clicked "X" to dismiss a pop-up and accidentally submitted their email.
    `,
  },
];

// ─── Category colors ──────────────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
  Trends: "#00C9A7",
  Support: "#60A5FA",
  WordPress: "#A78BFA",
  Product: "#FB923C",
  SEO: "#34D399",
  Growth: "#F472B6",
};

// ─── Blog Card ────────────────────────────────────────────────────────────────

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  const color = categoryColors[post.category] || "#00C9A7";
  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        className="group h-full rounded-2xl border p-6 flex flex-col transition-all duration-300 cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.02)",
          borderColor: "rgba(255,255,255,0.07)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
          (e.currentTarget as HTMLElement).style.background = `${color}05`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
        }}
      >
        {/* Category + read time */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: `${color}15`, color }}
          >
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            <Clock size={11} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-bold mb-3 leading-snug flex-1"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.92)" }}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: `${color}20`, color }}
            >
              {post.author[0]}
            </div>
            <div>
              <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{post.author}</div>
              <div className="text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                <Calendar size={9} />
                {post.date}
              </div>
            </div>
          </div>
          <span
            className="flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
            style={{ color }}
          >
            Read <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = blogPosts.find((p) => p.featured)!;
  const filtered = blogPosts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter((p) =>
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen" style={{ background: "#060C16", color: "#fff" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ paddingTop: "80px" }}>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(0,201,167,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.5 }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(0,201,167,0.06) 0%, transparent 70%)" }} />
          <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center pt-16 pb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.25)", color: "#00C9A7" }}>
              <Tag size={13} />
              Ansera Blog
            </div>
            <h1 className="font-extrabold leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
              Insights on AI, search,<br />and the future of websites.
            </h1>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              Practical guides and thinking from the Ansera team.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured post ── */}
      <section className="pb-16 reveal">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link href={`/blog/${featured.slug}`}>
            <div
              className="group rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300"
              style={{ background: "rgba(0,201,167,0.04)", borderColor: "rgba(0,201,167,0.2)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,0.4)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,0.2)")}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: content */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(0,201,167,0.15)", color: "#00C9A7" }}>
                        {featured.category}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
                        Featured
                      </span>
                    </div>
                    <h2 className="font-extrabold mb-4 leading-tight" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {featured.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "rgba(0,201,167,0.2)", color: "#00C9A7" }}>
                        {featured.author[0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>{featured.author}</div>
                        <div className="text-xs flex items-center gap-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                          <span>{featured.date}</span>
                          <span>·</span>
                          <span>{featured.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5" style={{ color: "#00C9A7" }}>
                      Read article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Right: decorative */}
                <div className="hidden md:flex items-center justify-center p-10" style={{ background: "rgba(0,201,167,0.03)", borderLeft: "1px solid rgba(0,201,167,0.1)" }}>
                  <div className="w-full max-w-xs rounded-xl p-5" style={{ background: "#0A1628", border: "1px solid rgba(0,201,167,0.15)" }}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                      <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>ansera.ai</span>
                    </div>
                    <div className="space-y-3 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                      <div className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }}>
                        <span style={{ color: "rgba(255,255,255,0.35)" }}>Visitor:</span> Is the future of websites a chat interface?
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.15)" }}>
                        <span style={{ color: "#00C9A7" }}>Ansera:</span> Yes — and it's already happening. AI answer engines are replacing traditional search bars across the web...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10 reveal">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const color = cat === "All" ? "#00C9A7" : (categoryColors[cat] || "#00C9A7");
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="text-xs font-medium px-3.5 py-1.5 rounded-full transition-all"
                    style={activeCategory === cat
                      ? { background: `${color}18`, border: `1px solid ${color}50`, color }
                      : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)" }
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Search size={13} style={{ color: "rgba(255,255,255,0.35)" }} />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm outline-none w-40"
                style={{ color: "rgba(255,255,255,0.8)" }}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
            {filtered.length > 0 ? (
              filtered.map((post) => <BlogCard key={post.id} post={post} />)
            ) : (
              <div className="col-span-3 text-center py-16" style={{ color: "rgba(255,255,255,0.35)" }}>
                No posts found matching your search.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-20 border-t reveal" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-extrabold mb-3" style={{ fontSize: "1.75rem", fontFamily: "'Space Grotesk', sans-serif" }}>
            Get new posts in your inbox.
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
            Practical guides on AI, search, and growing your website. No spam, unsubscribe anytime.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
            />
            <button
              className="px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all hover:opacity-90"
              style={{ background: "#00C9A7", color: "#060C16" }}
            >
              Subscribe <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
