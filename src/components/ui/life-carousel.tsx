"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface LifePhase {
  src: string
  label: string
  date: string
}

interface LifeCarouselProps {
  phases: LifePhase[]
  autoAdvance?: number
}

export function LifeCarousel({ phases, autoAdvance = 4000 }: LifeCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % phases.length)
  }, [phases.length])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + phases.length) % phases.length)
  }, [phases.length])

  // Auto-advance
  useEffect(() => {
    if (!autoAdvance) return
    const timer = setInterval(next, autoAdvance)
    return () => clearInterval(timer)
  }, [autoAdvance, next])

  const phase = phases[current]

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Image area */}
      <div className="relative flex-1 overflow-hidden rounded-t-[32px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={phase.src}
              alt={phase.label}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-zinc-950/60 border border-zinc-700/50 text-white/70 hover:text-lime-400 hover:border-lime-400/40 transition-all backdrop-blur-sm cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-zinc-950/60 border border-zinc-700/50 text-white/70 hover:text-lime-400 hover:border-lime-400/40 transition-all backdrop-blur-sm cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom bar: label + dots */}
      <div className="bg-zinc-950 rounded-b-[32px] px-5 py-4 flex items-center justify-between">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <span className="text-white font-semibold text-sm block leading-tight">
                {phase.label}
              </span>
              <span className="text-zinc-500 text-xs font-mono">{phase.date}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-1.5">
          {phases.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1)
                setCurrent(i)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? "bg-lime-400 scale-125"
                  : "bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
