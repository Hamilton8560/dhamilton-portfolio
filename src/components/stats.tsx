"use client"

import { useRef, useState, useEffect } from "react"
import { useGsapFadeInUp } from "@/hooks/use-gsap-scroll"

const stats = [
  { value: 17, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Shipped" },
  { value: 50, suffix: "+", label: "Components Built" },
  { value: 3, suffix: "", label: "Industries Mastered" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 1500
          const increment = Math.ceil(target / (duration / 50))
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              start = target
              clearInterval(timer)
            }
            setCount(start)
          }, 50)
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  useGsapFadeInUp(sectionRef)

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-neon text-glow-neon mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-zinc-400 text-sm font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
