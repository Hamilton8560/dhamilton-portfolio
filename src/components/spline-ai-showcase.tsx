'use client'

import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight"
import { Bot, Zap, MessageSquare, ArrowRight, Brain, Workflow } from "lucide-react"
import { motion } from "framer-motion"
import { socials } from "@/data/socials"
import { LookingRobot } from "./looking-robot"
 
export function SplineAIShowcase() {
  return (
    <section id="ai-agents" className="py-28 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0, 212, 255,0.08)_0%,_transparent_60%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span 
            className="text-neon font-mono text-sm tracking-widest uppercase inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Bot className="w-4 h-4" />
            AI Agents
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Your Autonomous Workforce
          </motion.h2>
          <motion.p 
            className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            AI agents running sales, support, and automation 24/7.
          </motion.p>
        </div>

        {/* Desktop: 3D Spline Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block"
        >
          <div className="w-full h-[700px] bg-zinc-950/[0.96] relative overflow-hidden rounded-3xl">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="#00D4FF"
            />
            
            <div className="flex h-full flex-row">
              {/* Left content */}
              <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon/10 border border-neon/20 text-neon text-xs font-mono mb-6 w-fit">
                  <Zap className="w-3 h-3" />
                  Now Available
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  AI That Works While You Sleep
                </h3>
                <p className="mt-4 text-neutral-400 max-w-md leading-relaxed">
                  Telegram and WhatsApp bots that answer questions, book appointments, and process payments — automatically.
                </p>
                
                <ul className="mt-6 space-y-3">
                  {[
                    { icon: Bot, text: "AI Sales Agent — qualifies leads 24/7" },
                    { icon: MessageSquare, text: "Support Bot — instant customer replies" },
                    { icon: Zap, text: "Process Automation — never miss a deadline" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-300 text-sm">
                      <div className="p-1.5 rounded-lg bg-neon/10">
                        <item.icon className="w-4 h-4 text-neon" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>

                <a
                  href={socials.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 bg-neon text-zinc-950 hover:bg-neon-hover font-semibold px-6 py-3 rounded-full transition-all duration-300 w-fit"
                >
                  Build Your AI Agent
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Right content - 3D Scene */}
              <div className="flex-1 relative">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile: Robot looking around + features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden"
        >
          <div className="w-full bg-zinc-950/[0.96] relative overflow-hidden rounded-2xl p-6">
            {/* Robot in corner */}
            <div className="absolute top-4 right-4 z-0 opacity-60">
              <LookingRobot />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon/10 border border-neon/20 text-neon text-xs font-mono mb-4">
                <Zap className="w-3 h-3" />
                Now Available
              </div>
              
              <h3 className="text-2xl font-bold text-white pr-20">
                AI That Works While You Sleep
              </h3>
              <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                Bots that answer questions, book appointments, and process payments — automatically.
              </p>
              
              {/* Mobile feature grid */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: Bot, text: "Sales Agent" },
                  { icon: MessageSquare, text: "Support Bot" },
                  { icon: Brain, text: "Multi-Model" },
                  { icon: Workflow, text: "Automation" },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-2 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <item.icon className="w-4 h-4 text-neon" />
                    <span className="text-neutral-300 text-xs font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href={socials.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center justify-center gap-2 bg-neon text-zinc-950 hover:bg-neon-hover font-semibold px-6 py-3 rounded-full transition-all duration-300 w-full"
              >
                Build Your AI Agent
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-zinc-500 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            Model-agnostic architecture
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            Telegram & WhatsApp Integration
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            Custom-trained on your business
          </span>
        </motion.div>
      </div>
    </section>
  )
}
