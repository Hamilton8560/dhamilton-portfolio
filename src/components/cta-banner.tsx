"use client"

import { useRef } from "react"
import { Calendar, ArrowRight, MapPin, GraduationCap, Shield } from "lucide-react"
import { socials } from "@/data/socials"
import { useGsapFadeInUp } from "@/hooks/use-gsap-scroll"

export function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null)
  useGsapFadeInUp(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className="py-36 px-4 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0, 212, 255,0.06)_0%,_transparent_60%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-neon font-mono text-sm tracking-widest uppercase">
          Let&apos;s Talk
        </span>

        <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-10 text-glow-neon">
          Ready to Build
          <br />
          Something Real?
        </h2>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-zinc-300">
            <GraduationCap className="w-4 h-4 text-neon" />
            Georgetown MS
          </div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-zinc-300">
            <Shield className="w-4 h-4 text-neon" />
            USMC Veteran
          </div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-zinc-300">
            <MapPin className="w-4 h-4 text-neon" />
            El Salvador
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-10">
          <div className="relative">
            <div className="absolute -inset-3 bg-neon/20 rounded-full blur-xl animate-pulse" />
            <a
              href={socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-3 bg-neon text-zinc-950 hover:bg-neon-hover font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105 text-lg"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <a
          href={`mailto:${socials.email}`}
          className="text-zinc-500 hover:text-neon transition-colors font-mono text-sm"
        >
          or email me at {socials.email}
        </a>
      </div>
    </section>
  )
}
