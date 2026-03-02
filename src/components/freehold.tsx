"use client"

import { useRef } from "react"
import { ExternalLink, Sparkles, Zap, Layers, ArrowRight, Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useGsapFadeInUp } from "@/hooks/use-gsap-scroll"

const features = [
  {
    icon: Sparkles,
    title: "Zen-Inspired Design",
    description: "Minimal aesthetics that reduce cognitive load.",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description: "Built-in patterns for forms, data flows, and state.",
  },
  {
    icon: Layers,
    title: "Rapid Development",
    description: "Pre-built components that cut dev time dramatically.",
  },
]

export function Freehold() {
  const sectionRef = useRef<HTMLElement>(null)
  useGsapFadeInUp(sectionRef)

  return (
    <section id="freehold" className="py-28 px-4 relative" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0, 212, 255,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <Badge
              variant="secondary"
              className="bg-neon/10 text-neon border border-neon/20 mb-6"
            >
              My Open Source Project
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Freehold
            </h2>

            <p className="text-zinc-400 mt-5 text-lg leading-relaxed max-w-lg">
              My open-source UI framework — calm interfaces, automated workflows, rapid iteration.
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-5">
              {features.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-neon/10 border border-neon/20 shrink-0">
                      <IconComponent className="w-5 h-5 text-neon" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://freehold.netlify.app/showcase"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-neon text-zinc-950 hover:bg-neon-hover font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105"
              >
                View Component Showcase
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://freehold.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 glass text-neon hover:bg-neon/10 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:border-neon/40"
              >
                Visit Freehold
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right — decorative card grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Big card top-left */}
            <div className="col-span-2 glass-card rounded-2xl p-8 text-center group">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-neon/10 border border-neon/20 group-hover:bg-neon/20 transition-colors mb-4">
                <Package className="w-10 h-10 text-neon" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Build Apps Faster</h3>
              <p className="text-zinc-400 text-sm">
                Zen-inspired components with automation baked in.
              </p>
            </div>

            {/* Stat cards */}
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-black text-neon text-glow-neon mb-1">50+</div>
              <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Components</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-black text-neon text-glow-neon mb-1">DX</div>
              <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">First</div>
            </div>

            {/* Code snippet card */}
            <div className="col-span-2 glass-card rounded-xl p-5 font-mono text-sm">
              <div className="text-zinc-500 mb-1">{'// get started'}</div>
              <div>
                <span className="text-neon">npm install</span>{' '}
                <span className="text-zinc-300">freehold-ui</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
