"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineEntry {
  title: string
  subtitle: string
  period: string
  content: React.ReactNode
}

interface ScrollTimelineProps {
  entries: TimelineEntry[]
  className?: string
}

export function ScrollTimeline({ entries, className }: ScrollTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* The progress line container */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px">
        {/* Background line */}
        <div className="absolute inset-0 bg-zinc-800" />
        {/* Animated fill */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-lime-400 via-lime-400 to-transparent origin-top"
          style={{ height: heightTransform }}
        />
      </div>

      {/* Timeline entries */}
      <div className="space-y-16 md:space-y-24">
        {entries.map((entry, index) => (
          <TimelineItem key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 50%"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <div ref={ref} className="relative pl-12 md:pl-20">
      {/* Node dot */}
      <motion.div
        className="absolute left-4 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-lime-400 border-[3px] border-zinc-950 z-10"
        style={{ opacity }}
      >
        <div className="absolute inset-0 rounded-full bg-lime-400 animate-ping opacity-20" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity, y }}>
        {/* Period badge */}
        <span className="inline-block text-lime-400 font-mono text-sm mb-3 px-3 py-1 bg-lime-400/10 rounded-full border border-lime-400/20">
          {entry.period}
        </span>

        {/* Title & subtitle */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
          {entry.title}
        </h3>
        <p className="text-zinc-400 text-lg mb-4">{entry.subtitle}</p>

        {/* Content */}
        <div className="text-zinc-400">{entry.content}</div>
      </motion.div>
    </div>
  )
}
