import { type RefObject } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface ScrollAnimationOptions {
  start?: string
  toggleActions?: string
  duration?: number
  ease?: string
  y?: number
}

interface StaggerAnimationOptions extends ScrollAnimationOptions {
  stagger?: number
}

export function useGsapFadeInUp(
  ref: RefObject<HTMLElement | null>,
  options?: ScrollAnimationOptions
) {
  const {
    start = "top 85%",
    toggleActions = "play none none none",
    duration = 0.8,
    ease = "power2.out",
    y = 40,
  } = options ?? {}

  useGSAP(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions,
        },
      }
    )
  }, { scope: ref, dependencies: [] })
}

export function useGsapStagger(
  containerRef: RefObject<HTMLElement | null>,
  childSelector: string,
  options?: StaggerAnimationOptions
) {
  const {
    start = "top 85%",
    toggleActions = "play none none none",
    duration = 0.8,
    ease = "power2.out",
    y = 40,
    stagger = 0.15,
  } = options ?? {}

  useGSAP(() => {
    if (!containerRef.current) return

    const children = containerRef.current.querySelectorAll(childSelector)
    if (children.length === 0) return

    gsap.fromTo(
      children,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions,
        },
      }
    )
  }, { scope: containerRef, dependencies: [] })
}
