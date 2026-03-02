"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { socials } from "@/data/socials";

const menuItems = [
  { label: "Services", href: "#services" },
  { label: "AI Agents", href: "#ai-agents" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo / Name */}
          <button
            onClick={scrollToTop}
            className="font-bold text-white text-lg cursor-pointer hover:text-neon transition-colors"
          >
            David Hamilton
          </button>

          {/* Desktop — Clean CTA only */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-neon text-zinc-950 hover:bg-neon-hover font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105 text-sm"
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile hamburger - simplified */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-zinc-400 rounded-full" />
            <span className="w-6 h-0.5 bg-zinc-400 rounded-full" />
            <span className="w-6 h-0.5 bg-zinc-400 rounded-full" />
          </button>
        </div>
      </nav>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-zinc-950 md:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 -left-20 w-64 h-64 bg-neon/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-neon/5 rounded-full blur-[100px]" />
            </div>

            {/* Header */}
            <div className="relative flex items-center justify-between px-4 py-4 flex-shrink-0">
              <span className="font-bold text-white text-lg">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-neon hover:border-neon/30 transition-all"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu content - scrollable if needed */}
            <div className="relative flex-1 flex flex-col px-8 py-8 overflow-y-auto">
              {/* Main nav items */}
              <nav className="flex-1 flex flex-col justify-center">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="group flex items-center justify-between w-full py-5 text-left border-b border-zinc-900"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-600 font-mono text-sm">
                        0{index + 1}
                      </span>
                      <span className="text-3xl font-bold text-white group-hover:text-neon transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-neon group-hover:translate-x-1 transition-all" />
                  </motion.button>
                ))}
              </nav>

              {/* Bottom section */}
              <div className="mt-8 pt-8">
                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-zinc-500 text-sm mb-4 font-mono">
                    Ready to build something?
                  </p>
                  <a
                    href={socials.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="group inline-flex items-center gap-3 bg-neon text-zinc-950 hover:bg-neon-hover font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  >
                    Book a Call
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>

                {/* Footer info */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-zinc-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center justify-between text-xs text-zinc-600 font-mono">
                    <span>El Salvador</span>
                    <span>{socials.email}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
