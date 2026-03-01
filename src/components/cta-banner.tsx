"use client"

import { useRef } from "react"
import { Calendar, ArrowRight, MapPin, GraduationCap, Shield } from "lucide-react"
import { socials } from "@/data/socials"
import { useGsapFadeInUp } from "@/hooks/use-gsap-scroll"

export function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null)
  useGsapFadeInUp(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-4 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(163,230,53,0.06)_0%,_transparent_60%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-lime-400 font-mono text-sm tracking-widest uppercase">
          Let&apos;s Talk
        </span>

        <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 text-glow-lime">
          Ready to Build
          <br />
          Something Real?
        </h2>

        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          I bring US-quality engineering at competitive rates from El Salvador.
          Georgetown-educated, Marine-disciplined, and obsessively focused on
          shipping software that works for your business.
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-zinc-300">
            <GraduationCap className="w-4 h-4 text-lime-400" />
            Georgetown MS
          </div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-zinc-300">
            <Shield className="w-4 h-4 text-lime-400" />
            USMC Veteran
          </div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-zinc-300">
            <MapPin className="w-4 h-4 text-lime-400" />
            El Salvador
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-10">
          <a
            href={socials.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-lime-400 text-zinc-950 hover:bg-lime-300 font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105 text-lg"
          >
            <Calendar className="w-5 h-5" />
            Book a Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <a
          href={`mailto:${socials.email}`}
          className="text-zinc-500 hover:text-lime-400 transition-colors font-mono text-sm"
        >
          or email me at {socials.email}
        </a>
      </div>
    </section>
  )
}
