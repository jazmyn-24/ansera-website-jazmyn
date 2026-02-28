/*
 * Navbar — Ansera AI
 * Dark navy background, teal accent CTA
 * Sticky with backdrop blur on scroll
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [location] = useLocation();

  const navLinks = [
    { label: "Product", href: "/product", isRoute: true },
    { label: "Solutions", href: "/solutions", isRoute: true },
    { label: "How It Works", href: "#how-it-works", isRoute: false },
    { label: "Pricing", href: "#pricing", isRoute: false },
  ];

  const scrollTo = (href: string, isRoute: boolean) => {
    setMobileOpen(false);
    if (isRoute) return; // handled by Link
    if (location !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(13, 27, 42, 0.95)"
          : "rgba(13, 27, 42, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-200 group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00C9A7 0%, #00A88C 100%)",
              color: "#0D1B2A",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            A
          </div>
          <span
            className="text-white font-semibold text-lg tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ansera
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.7)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00C9A7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href, link.isRoute)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.7)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00C9A7")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                {link.label}
              </button>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          >
            Sign In
          </button>
          <button
            className="btn-teal text-sm px-5 py-2.5 rounded-lg font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Get Started Free
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(13, 27, 42, 0.98)" }}
        >
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-left text-white/80 py-2 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href, link.isRoute)}
                className="text-left text-white/80 hover:text-white py-2 text-sm font-medium"
              >
                {link.label}
              </button>
            )
          )}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <button className="text-white/80 py-2 text-sm text-left">Sign In</button>
            <button className="btn-teal py-3 rounded-lg text-sm font-semibold">
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
