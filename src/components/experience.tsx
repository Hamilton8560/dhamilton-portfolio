"use client"

import { experiences } from "@/data/experience"
import { ScrollTimeline } from "@/components/ui/scroll-timeline"

export function Experience() {
  const entries = experiences.map((exp) => ({
    title: exp.title,
    subtitle: exp.organization,
    period: exp.period,
    content: (
      <div>
        <p className="text-zinc-400 mb-4 leading-relaxed">{exp.description}</p>
        <div className="glass-card rounded-xl p-5">
          <ul className="space-y-3">
            {exp.highlights.map((highlight) => (
              <li
                key={highlight}
                className="text-zinc-300 text-sm flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neon mt-2 shrink-0 shadow-[0_0_6px_rgba(0, 212, 255,0.5)]" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  }))

  return (
    <section id="experience" className="py-28 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-20">
          <span className="text-neon font-mono text-sm tracking-widest uppercase">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* Scroll-driven timeline */}
        <ScrollTimeline entries={entries} />
      </div>
    </section>
  )
}
