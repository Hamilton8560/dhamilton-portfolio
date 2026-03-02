"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Code2, 
  Server, 
  Database, 
  Container,
  Terminal,
  Sparkles,
  Zap,
  Globe
} from "lucide-react"
import { TechLogo } from "./tech-logos"

interface SkillItem {
  name: string
  level: "expert" | "pro" | "fluent"
  logo?: string
}

interface SkillZone {
  id: string
  title: string
  subtitle: string
  icon: React.ElementType
  color: string
  glowColor: string
  skills: SkillItem[]
  size: "large" | "medium" | "small"
  floatingIcons?: React.ElementType[]
}

const skillZones: SkillZone[] = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "UI/UX Architecture",
    icon: Code2,
    color: "#00D4FF",
    glowColor: "rgba(0, 212, 255, 0.15)",
    size: "large",
    floatingIcons: [Sparkles, Zap, Globe],
    skills: [
      { name: "React", level: "expert", logo: "react" },
      { name: "Next.js", level: "expert", logo: "nextjs" },
      { name: "TypeScript", level: "expert", logo: "typescript" },
      { name: "Tailwind", level: "expert", logo: "tailwind" },
      { name: "Angular", level: "pro" },
      { name: "Framer Motion", level: "pro" },
    ],
  },
  {
    id: "backend",
    title: "Backend & AI",
    subtitle: "Systems & Intelligence",
    icon: Server,
    color: "#60a5fa",
    glowColor: "rgba(96, 165, 250, 0.15)",
    size: "medium",
    skills: [
      { name: "Node.js", level: "expert", logo: "nodejs" },
      { name: "Python", level: "expert", logo: "python" },
      { name: "NestJS", level: "pro" },
      { name: "C# / .NET", level: "pro" },
      { name: "Django", level: "fluent" },
      { name: "scikit-learn", level: "pro" },
    ],
  },
  {
    id: "data",
    title: "Data Layer",
    subtitle: "Persistence & Query",
    icon: Database,
    color: "#f472b6",
    glowColor: "rgba(244, 114, 182, 0.15)",
    size: "medium",
    skills: [
      { name: "PostgreSQL", level: "expert", logo: "postgres" },
      { name: "MySQL", level: "expert" },
      { name: "MongoDB", level: "pro" },
      { name: "SQL Server", level: "pro" },
      { name: "Redis", level: "fluent" },
    ],
  },
  {
    id: "infra",
    title: "Infrastructure",
    subtitle: "DevOps & Deployment",
    icon: Container,
    color: "#fb923c",
    glowColor: "rgba(251, 146, 60, 0.15)",
    size: "small",
    skills: [
      { name: "Docker", level: "pro", logo: "docker" },
      { name: "CI/CD", level: "pro" },
      { name: "AWS", level: "fluent" },
      { name: "On-Prem", level: "expert" },
    ],
  },
  {
    id: "tools",
    title: "Tooling",
    subtitle: "Workflow & Code",
    icon: Terminal,
    color: "#c084fc",
    glowColor: "rgba(192, 132, 252, 0.15)",
    size: "small",
    skills: [
      { name: "Git", level: "expert", logo: "git" },
      { name: "Linux", level: "pro" },
      { name: "Bash", level: "pro" },
      { name: "Vim", level: "fluent" },
    ],
  },
]

const levelDots = {
  expert: 3,
  pro: 2,
  fluent: 1,
}

function FloatingIcon({ icon: Icon, color, delay }: { icon: React.ElementType; color: string; delay: number }) {
  return (
    <motion.div
      className="absolute opacity-20"
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: [-10, 10, -10], 
        opacity: [0.1, 0.25, 0.1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut"
      }}
      style={{ color }}
    >
      <Icon className="w-6 h-6" />
    </motion.div>
  )
}

function AnimatedGrid({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${color}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${color})`} />
      </svg>
    </div>
  )
}

function SkillPill({ skill, color }: { skill: SkillItem; color: string }) {
  return (
    <motion.div
      layout
      className="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-all cursor-default"
      whileHover={{ scale: 1.05, y: -2 }}
    >
      {skill.logo && (
        <div className="opacity-80 group-hover:opacity-100 transition-opacity">
          <TechLogo name={skill.logo} className="w-4 h-4" />
        </div>
      )}
      <span className="text-zinc-300 text-sm font-medium">{skill.name}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: levelDots[skill.level] }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

function ZoneCard({ zone, index }: { zone: SkillZone; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = zone.icon

  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  }

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden ${sizeClasses[zone.size]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Animated background grid */}
      <AnimatedGrid color={zone.color} />
      
      {/* Floating icons */}
      {zone.floatingIcons?.map((FloatingIconComponent, i) => (
        <div
          key={i}
          className="absolute"
          style={{ 
            top: `${20 + i * 25}%`, 
            right: `${10 + i * 15}%`,
          }}
        >
          <FloatingIcon 
            icon={FloatingIconComponent} 
            color={zone.color} 
            delay={i * 0.5}
          />
        </div>
      ))}
      
      {/* Glass card */}
      <motion.div 
        className="relative h-full min-h-[180px] p-5 border border-zinc-800/60 bg-zinc-950/50 backdrop-blur-sm rounded-2xl transition-colors"
        animate={{ 
          borderColor: isHovered ? `${zone.color}40` : 'rgba(39, 39, 42, 0.6)',
          backgroundColor: isHovered ? 'rgba(9, 9, 11, 0.7)' : 'rgba(9, 9, 11, 0.5)'
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at 50% 0%, ${zone.glowColor} 0%, transparent 70%)`,
          }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex items-center gap-3">
            <motion.div 
              className="p-2.5 rounded-xl border"
              style={{ 
                backgroundColor: `${zone.color}15`,
                borderColor: `${zone.color}30`,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon 
                className="w-5 h-5" 
                style={{ color: zone.color }}
              />
            </motion.div>
            <div>
              <h3 className="text-white font-semibold">{zone.title}</h3>
              <p className="text-zinc-500 text-xs">{zone.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Skills cloud */}
        <div className="flex flex-wrap gap-2 relative z-10">
          <AnimatePresence>
            {zone.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
              >
                <SkillPill skill={skill} color={zone.color} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom corner accent */}
        <div 
          className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 100% 100%, ${zone.color} 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  )
}

function TechMarquee() {
  const tools = [
    "VS Code", "Figma", "Postman", "TablePlus", "GitHub", "Vercel", 
    "Linear", "Notion", "Docker Desktop", "iTerm", "Chrome DevTools"
  ]

  return (
    <div className="mt-16 overflow-hidden">
      <p className="text-center text-zinc-600 text-xs font-mono uppercase tracking-wider mb-4">
        Daily drivers
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...tools, ...tools].map((tool, i) => (
            <span key={i} className="text-zinc-500 text-sm whitespace-nowrap flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon/60" />
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export function SkillsBento() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            className="text-neon font-mono text-sm tracking-widest uppercase inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            Tech Stack
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Tools I Ship With
          </motion.h2>
          <motion.p 
            className="text-zinc-400 mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Not just libraries I&apos;ve used — these are the technologies 
            I build production systems with every day.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {skillZones.map((zone, index) => (
            <ZoneCard key={zone.id} zone={zone} index={index} />
          ))}
        </div>

        {/* Legend */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-zinc-500 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 rounded-full bg-neon" />
              <div className="w-1 h-1 rounded-full bg-neon" />
              <div className="w-1 h-1 rounded-full bg-neon" />
            </div>
            <span>Expert — Daily driver</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 rounded-full bg-zinc-400" />
              <div className="w-1 h-1 rounded-full bg-zinc-400" />
            </div>
            <span>Pro — Production ready</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 rounded-full bg-zinc-600" />
            </div>
            <span>Fluent — Can work with</span>
          </div>
        </motion.div>

        {/* Marquee of tools */}
        <TechMarquee />
      </div>
    </section>
  )
}
