"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowRight, Calendar } from "lucide-react"
import { socials } from "@/data/socials"

// Scramble text component - characters scramble then resolve
function ScrambleText({ 
  text, 
  className, 
  delay = 0 
}: { 
  text: string
  className?: string
  delay?: number 
}) {
  const [displayText, setDisplayText] = useState("")
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"
  
  useEffect(() => {
    let iteration = 0
    const originalText = text
    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < iteration) return originalText[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )
      iteration += 1 / 2
      if (iteration >= originalText.length) {
        clearInterval(interval)
        setDisplayText(originalText)
      }
    }, 30)
    
    const timeout = setTimeout(() => {
      interval
    }, delay * 1000)
    
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [text, delay])
  
  return <span className={className}>{displayText || text.split("").map(() => " ").join("")}</span>
}

// Cycling words that rotate through options
function CycleWord({ 
  words, 
  className 
}: { 
  words: string[]
  className?: string 
}) {
  const [index, setIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 200)
    }, 2500)
    
    return () => clearInterval(interval)
  }, [words.length])
  
  return (
    <span className={`inline-block min-w-[200px] ${className}`}>
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ 
          opacity: isAnimating ? 0 : 1, 
          y: isAnimating ? -20 : 0,
          filter: isAnimating ? "blur(10px)" : "blur(0px)"
        }}
        transition={{ duration: 0.3 }}
        className="inline-block text-lime-400"
      >
        {words[index]}
      </motion.span>
    </span>
  )
}

// Floating code brackets animation
function FloatingBracket({ 
  children, 
  className,
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  return (
    <motion.div
      className={`absolute text-lime-400/20 font-mono text-6xl md:text-8xl font-bold pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        y: [-10, 10, -10],
        rotate: [-5, 5, -5]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Typing cursor component
function Cursor() {
  return (
    <motion.span
      className="inline-block w-[3px] h-[1em] bg-lime-400 ml-1"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity }}
    />
  )
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const locationWords = ["oil fields", "gym floors", "factory floors", "trucking yards", "wellheads"]

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(163,230,53,0.15),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />
      </div>

      {/* Floating brackets */}
      {mounted && (
        <>
          <FloatingBracket className="top-[15%] left-[10%]" delay={0}>&lt;/&gt;</FloatingBracket>
          <FloatingBracket className="top-[25%] right-[15%]" delay={1}>{`{ }`}</FloatingBracket>
          <FloatingBracket className="bottom-[20%] left-[20%]" delay={2}>[ ]</FloatingBracket>
          <FloatingBracket className="bottom-[30%] right-[10%]" delay={3}>( )</FloatingBracket>
          <motion.div 
            className="absolute top-[40%] left-[5%] text-lime-400/10 font-mono text-2xl"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            const
          </motion.div>
          <motion.div 
            className="absolute top-[60%] right-[8%] text-lime-400/10 font-mono text-2xl"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          >
            return
          </motion.div>
          <motion.div 
            className="absolute bottom-[40%] left-[15%] text-lime-400/10 font-mono text-xl"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            async
          </motion.div>
        </>
      )}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(163,230,53,0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(163,230,53,0.5) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Pre-header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            Available for projects
          </span>
        </motion.div>

        {/* Main headline with scramble effect */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {mounted ? (
                <ScrambleText text="I BUILD SOFTWARE" delay={0.3} />
              ) : (
                "I BUILD SOFTWARE"
              )}
            </motion.div>
          </div>
          <div className="overflow-hidden mt-2">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {mounted ? (
                <ScrambleText text="THAT POWERS" delay={0.6} />
              ) : (
                "THAT POWERS"
              )}
            </motion.div>
          </div>
          <div className="overflow-hidden mt-2">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lime-400"
            >
              {mounted ? (
                <ScrambleText text="REAL BUSINESSES" delay={0.9} />
              ) : (
                "REAL BUSINESSES"
              )}
            </motion.div>
          </div>
        </h1>

        {/* Animated subtitle with cycling words */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light">
            From{" "}
            <CycleWord 
              words={locationWords} 
              className="font-medium text-white" 
            />
            {" "}to code — I ship full-stack platforms for{" "}
            <span className="text-white font-medium">blue collar</span> &{" "}
            <span className="text-white font-medium">fitness</span> brands.
            <Cursor />
          </h2>
        </motion.div>

        {/* Credentials bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500 font-mono"
        >
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            USMC Veteran
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            Georgetown MS
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            El Salvador
          </span>
        </motion.div>

        {/* Social icons */}
        <motion.div 
          className="mt-10 flex gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          {[
            { icon: Github, href: socials.github, label: "GitHub" },
            { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              className="p-3 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-lime-400 hover:border-lime-400/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="mt-10 flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <motion.a
            href={socials.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-lime-400 text-zinc-950 hover:bg-lime-300 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="w-4 h-4" />
            Let's Talk
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-700 text-white hover:border-lime-400/50 hover:text-lime-400 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <span className="text-zinc-600 text-xs uppercase tracking-widest font-mono">Scroll</span>
        <motion.div 
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
