"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/lib/gsap"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socials } from "@/data/socials"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      const tl = gsap.timeline()

      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-tagline",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-socials",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
    },
    { scope: containerRef, dependencies: [] }
  )

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center relative px-4"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(163, 230, 53, 0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(163,230,53,0.08)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="hero-title opacity-0 text-6xl md:text-8xl font-black text-white text-glow-lime">
          David Hamilton
        </h1>

        <h2 className="hero-subtitle opacity-0 text-2xl md:text-4xl text-zinc-400 mt-4">
          Full Stack Developer
        </h2>

        <p className="hero-tagline opacity-0 text-lg md:text-xl text-zinc-500 mt-6 max-w-2xl mx-auto">
          Building exceptional digital experiences that make an impact
        </p>

        {/* Social icons */}
        <div className="hero-socials opacity-0 mt-8 flex gap-6 justify-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-lime-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-lime-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-lime-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Buttons */}
        <div className="hero-buttons opacity-0 mt-10 flex gap-4 justify-center flex-wrap">
          <Button asChild>
            <a
              href="#projects"
              className="bg-lime-400 text-zinc-950 hover:bg-lime-500 font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-[var(--shadow-glow-md)]"
            >
              View My Work
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="border-lime-400/50 text-lime-400 hover:bg-lime-400/10 font-semibold px-8 py-3 rounded-lg transition-all"
            >
              Book a Call
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8">
        <ChevronDown className="animate-bounce text-zinc-600 w-8 h-8" />
      </div>
    </section>
  )
}
