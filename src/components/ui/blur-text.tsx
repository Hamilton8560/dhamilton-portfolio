"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function BlurText({
  text,
  className,
  delay = 0,
  staggerDelay = 0.04,
}: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const letters = text.split("")

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {letters.map((letter, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-700 ease-out"
          style={{
            transitionDelay: isVisible ? `${delay + i * staggerDelay}s` : "0s",
            filter: isVisible ? "blur(0px)" : "blur(12px)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(8px)",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  )
}
