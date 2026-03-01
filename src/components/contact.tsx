"use client"

import { useRef } from "react"
import { Github, Linkedin, Mail, ArrowRight, Calendar } from "lucide-react"
import { socials } from "@/data/socials"
import { useGsapFadeInUp } from "@/hooks/use-gsap-scroll"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useGsapFadeInUp(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-4 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(163,230,53,0.06)_0%,_transparent_60%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-lime-400 font-mono text-sm tracking-widest uppercase">
          Get In Touch
        </span>

        <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 text-glow-lime">
          Let&apos;s Work
          <br />
          Together
        </h2>

        <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          I&apos;m currently available for freelance work and full-time
          opportunities. Let&apos;s build something great.
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a
            href={`mailto:${socials.email}`}
            className="group inline-flex items-center gap-3 bg-lime-400 text-zinc-950 hover:bg-lime-300 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={socials.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 glass text-lime-400 hover:bg-lime-400/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:border-lime-400/40"
          >
            <Calendar className="w-5 h-5" />
            Book a Call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Social icons */}
        <div className="flex gap-4 justify-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass text-zinc-500 hover:text-lime-400 hover:border-lime-400/30 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass text-zinc-500 hover:text-lime-400 hover:border-lime-400/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="p-3 rounded-full glass text-zinc-500 hover:text-lime-400 hover:border-lime-400/30 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Email text */}
        <p className="mt-6 text-zinc-600 font-mono text-sm">
          {socials.email}
        </p>
      </div>
    </section>
  )
}
