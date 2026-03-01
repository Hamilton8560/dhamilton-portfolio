"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, GraduationCap, MapPin, Eye } from "lucide-react"

import { SkillsBento } from "./skills-bento"
import { PixelatedCanvas } from "@/components/ui/pixel-art-image-component"
import { LifeCarousel, type LifePhase } from "@/components/ui/life-carousel"

const credentials = [
  { icon: Shield, label: "USMC Veteran" },
  { icon: GraduationCap, label: "CS — Maryland" },
  { icon: GraduationCap, label: "MS — Georgetown" },
  { icon: MapPin, label: "El Salvador" },
]

const lifePhases: LifePhase[] = [
  { src: "/images/david-soi.png", label: "School of Infantry", date: "Camp Lejeune, 2008" },
  { src: "/images/david-barracks-code.png", label: "First Lines of Code", date: "Barracks, 29 Palms California" },
  { src: "/images/david-afghanistan.png", label: "Afghanistan", date: "Helmand Province, 2010" },
  { src: "/images/david-athens.png", label: "Athens, Greece", date: "Liberty Call" },
  { src: "/images/david-crew.png", label: "The Crew", date: "Overseas" },
  { src: "/images/david-wellhead.png", label: "On the Wellhead", date: "Bakken Shale, ND" },
  { src: "/images/david-blizzard.png", label: "The Blizzard", date: "North Dakota" },
  { src: "/images/david-oilfield.png", label: "Roughneck & Father", date: "Williston, ND" },
  { src: "/images/david-ironlife.jpeg", label: "American Iron", date: "El Salvador, 2025" },
  { src: "/images/david-deadlift.png", label: "Present Day", date: "El Salvador" },
]

export function About() {
  const [showCarousel, setShowCarousel] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <section id="about" className="py-28 px-4">
      {/* Section heading */}
      <div className="text-center mb-16">
        <span className="text-lime-400 font-mono text-sm tracking-widest uppercase">
          Why Work With Me
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
          The Full Picture
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent mx-auto mt-6 rounded-full" />
      </div>

      {/* Bio + Photo area */}
      <div className="max-w-6xl w-full px-0 md:px-10 relative z-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 w-full items-center">
          {/* Text Content */}
          <motion.div
            className="flex flex-col items-start gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-white text-3xl md:text-[40px] font-semibold leading-tight md:leading-[53px]">
              Marines to manufacturing
              <br />
              floors to writing code.
            </h3>

            <div className="text-zinc-400 text-sm md:text-[15px] leading-6 space-y-5">
              <p>
                Computer Science from Maryland, MS in IT Management from Georgetown.
                I&apos;ve operated coil tubing rigs, scaled a trucking company from 1 to
                8 trucks in the Bakken Shale, and built software for manufacturing
                floors. Now based in El Salvador running American Iron — with access
                to top-tier talent that means maximum value for every dollar you invest.
              </p>

              {/* Credential badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {credentials.map((cred) => {
                  const Icon = cred.icon
                  return (
                    <span
                      key={cred.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-medium"
                    >
                      <Icon className="w-3 h-3" />
                      {cred.label}
                    </span>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Photo: PixelatedCanvas → Carousel on hover */}
          <motion.div
            className="relative mx-auto w-full max-w-[340px] md:max-w-[420px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="relative w-full rounded-[32px] overflow-hidden border border-zinc-800/50 shadow-2xl shadow-lime-400/5 cursor-pointer"
              style={{ aspectRatio: "3 / 4" }}
              onClick={() => setShowCarousel((prev) => !prev)}
            >
              <AnimatePresence mode="wait">
                {!showCarousel ? (
                  <motion.div
                    key="pixel"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {mounted && (
                      <PixelatedCanvas
                        src="/images/david-oilfield.png"
                        width={420}
                        height={560}
                        cellSize={3}
                        dotScale={0.9}
                        shape="square"
                        backgroundColor="#09090b"
                        dropoutStrength={0.3}
                        interactive
                        distortionStrength={3}
                        distortionRadius={80}
                        distortionMode="swirl"
                        followSpeed={0.2}
                        jitterStrength={4}
                        jitterSpeed={4}
                        sampleAverage
                        tintColor="#a3e635"
                        tintStrength={0.08}
                        responsive
                        className="w-full h-full rounded-[32px]"
                      />
                    )}

                    {/* Hover hint */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent px-5 pb-4 pt-16">
                      <div className="flex items-center gap-2 text-zinc-400 text-xs">
                        <Eye className="w-3.5 h-3.5 text-lime-400" />
                        <span>Click to see the journey</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="carousel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <LifeCarousel phases={lifePhases} autoAdvance={4500} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Bento Grid */}
      <SkillsBento />
    </section>
  )
}
