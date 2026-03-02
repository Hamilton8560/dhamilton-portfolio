"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Bot, Activity, Zap, CheckCircle2, Clock, CircleDot, FileText, Brain, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// --- Agent data with cycling task messages ---
const agentConfigs = [
  {
    name: "Data Pipeline",
    icon: Activity,
    status: "running" as const,
    tasks: [
      "Processing batch 847...",
      "Processing batch 848...",
      "Indexing 1,204 records...",
      "Processing batch 849...",
      "Validating schema integrity...",
    ],
    baseProgress: 78,
    progressSpeed: 0.4,
  },
  {
    name: "NLP Classifier",
    icon: Brain,
    status: "running" as const,
    tasks: [
      "Training epoch 12/20...",
      "Training epoch 13/20...",
      "Evaluating validation set...",
      "Training epoch 14/20...",
      "Computing loss gradients...",
    ],
    baseProgress: 60,
    progressSpeed: 0.25,
  },
  {
    name: "Compliance Bot",
    icon: Shield,
    status: "complete" as const,
    tasks: ["Scanned 2,847 documents"],
    baseProgress: 100,
    progressSpeed: 0,
  },
]

const activityMessages = [
  { time: "09:41", message: "Pipeline processed 200 records" },
  { time: "09:38", message: "NLP model accuracy → 94.2%" },
  { time: "09:35", message: "Compliance scan complete" },
  { time: "09:32", message: "New data source connected" },
  { time: "09:28", message: "Agent pool scaled to 3 workers" },
  { time: "09:24", message: "Batch 846 committed to store" },
  { time: "09:21", message: "Schema migration applied v2.4" },
  { time: "09:18", message: "NLP model checkpoint saved" },
]

const metricTargets = [
  { label: "Tasks", target: 24, suffix: "", icon: FileText },
  { label: "Uptime", target: 99.8, suffix: "%", decimals: 1, icon: Clock },
  { label: "Tokens", target: 1.2, suffix: "M", decimals: 1, icon: Zap },
]

// --- Animated counter hook ---
function useCounter(target: number, duration: number, active: boolean, decimals = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    const steps = Math.ceil(duration / 16)
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = Math.min(step / steps, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Number((target * eased).toFixed(decimals)))
      if (step >= steps) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active, decimals])

  return value
}

export function AiDashboardMockup() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [taskIndices, setTaskIndices] = useState([0, 0, 0])
  const [progresses, setProgresses] = useState([0, 0, 0])
  const [visibleLogs, setVisibleLogs] = useState(0)
  const [typingText, setTypingText] = useState("")
  const [typingLogIndex, setTypingLogIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  // IntersectionObserver to trigger animations when scrolled into view
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Animate progress bars filling up
  useEffect(() => {
    if (!visible) return
    const timer = setInterval(() => {
      setProgresses((prev) =>
        prev.map((p, i) => {
          const config = agentConfigs[i]
          if (config.status === "complete") return config.baseProgress
          const target = config.baseProgress
          if (p >= target) return target
          return Math.min(p + 1.5, target)
        })
      )
    }, 30)
    return () => clearInterval(timer)
  }, [visible])

  // Cycle task messages for running agents
  useEffect(() => {
    if (!visible) return
    const timer = setInterval(() => {
      setTaskIndices((prev) =>
        prev.map((idx, i) => {
          const config = agentConfigs[i]
          if (config.status === "complete") return 0
          return (idx + 1) % config.tasks.length
        })
      )
      // Bump progress bars slightly on task change
      setProgresses((prev) =>
        prev.map((p, i) => {
          const config = agentConfigs[i]
          if (config.status === "complete") return 100
          // Oscillate: go up, then reset lower, simulating real work
          return p >= config.baseProgress + 8
            ? config.baseProgress - 5
            : p + 3
        })
      )
    }, 3500)
    return () => clearInterval(timer)
  }, [visible])

  // Type out activity log entries one at a time
  const typeNextLog = useCallback(() => {
    if (typingLogIndex >= 4) return // show 4 entries max
    const message = activityMessages[typingLogIndex].message
    let charIdx = 0
    setTypingText("")
    const charTimer = setInterval(() => {
      charIdx++
      setTypingText(message.slice(0, charIdx))
      if (charIdx >= message.length) {
        clearInterval(charTimer)
        // Commit this log entry and start next
        setTimeout(() => {
          setVisibleLogs((prev) => prev + 1)
          setTypingText("")
          setTypingLogIndex((prev) => prev + 1)
        }, 400)
      }
    }, 35)
    return () => clearInterval(charTimer)
  }, [typingLogIndex])

  useEffect(() => {
    if (!visible) return
    // Stagger start: begin typing after progress bars fill
    const delay = typingLogIndex === 0 ? 1800 : 200
    const timer = setTimeout(typeNextLog, delay)
    return () => clearTimeout(timer)
  }, [visible, typingLogIndex, typeNextLog])

  // Animated metric counters
  const counter0 = useCounter(metricTargets[0].target, 2000, visible)
  const counter1 = useCounter(metricTargets[1].target, 2200, visible, 1)
  const counter2 = useCounter(metricTargets[2].target, 2400, visible, 1)
  const counterValues = [
    `${counter0}`,
    `${counter1}%`,
    `${counter2}M`,
  ]

  if (!mounted) {
    return <div className="w-full h-full bg-zinc-950 rounded-[32px]" />
  }

  return (
    <div
      ref={ref}
      className="w-full h-full bg-zinc-950 rounded-[32px] overflow-hidden flex flex-col text-[10px] md:text-xs select-none"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 md:px-5 py-3 md:py-3.5 border-b border-zinc-800/80 shrink-0">
        <div className="flex items-center gap-2">
          <div className="p-1 md:p-1.5 rounded-md bg-neon/10">
            <Bot className="w-3 h-3 md:w-3.5 md:h-3.5 text-neon" />
          </div>
          <span className="font-semibold text-white text-[11px] md:text-sm tracking-tight">
            AI Agent Hub
          </span>
        </div>
        <Badge className="bg-neon/10 text-neon border-neon/20 text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5">
          <CircleDot className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1 animate-pulse" />
          3 Active
        </Badge>
      </div>

      {/* Metrics row — animated counters */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 px-4 md:px-5 py-3 md:py-4 border-b border-zinc-800/60 shrink-0">
        {metricTargets.map((m, i) => {
          const Icon = m.icon
          return (
            <div key={m.label} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Icon className="w-2.5 h-2.5 md:w-3 md:h-3 text-zinc-500" />
                <span className="text-white font-bold text-sm md:text-lg leading-none tabular-nums">
                  {counterValues[i]}
                </span>
              </div>
              <span className="text-zinc-500 text-[8px] md:text-[10px] uppercase tracking-wider font-medium">
                {m.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Agent list — animated progress + cycling tasks */}
      <div className="flex-1 overflow-hidden px-4 md:px-5 py-3 md:py-4 space-y-2.5 md:space-y-3">
        {agentConfigs.map((agent, i) => {
          const Icon = agent.icon
          const isComplete = agent.status === "complete"
          const currentTask = agent.tasks[taskIndices[i]]
          const progress = visible ? progresses[i] : 0

          return (
            <Card key={agent.name} className="bg-zinc-900/60 border-zinc-800/50 p-0">
              <CardHeader className="px-3 py-2 md:px-3.5 md:py-2.5 pb-0 space-y-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-neon" />
                    <span className="font-medium text-white text-[10px] md:text-xs">{agent.name}</span>
                  </div>
                  {isComplete ? (
                    <span className="flex items-center gap-0.5 text-neon-blue text-[9px] md:text-[10px]">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      Done
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5 text-neon text-[9px] md:text-[10px]">
                      <CircleDot className="w-2.5 h-2.5 animate-pulse" />
                      Running
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="px-3 pb-2.5 md:px-3.5 md:pb-3 pt-1.5">
                <p className="text-zinc-500 text-[9px] md:text-[10px] mb-1.5 transition-opacity duration-300">
                  {currentTask}
                  {!isComplete && (
                    <span className="inline-block w-[3px] h-[10px] bg-neon/70 ml-0.5 align-middle animate-blink" />
                  )}
                </p>
                <div className="w-full h-1 md:h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ease-out ${
                      isComplete
                        ? "bg-neon-blue"
                        : "bg-gradient-to-r from-neon to-neon-blue"
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Activity log — typing effect */}
      <div className="px-4 md:px-5 py-2.5 md:py-3 border-t border-zinc-800/60 shrink-0">
        <span className="text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-wider font-medium block mb-1.5">
          Recent Activity
        </span>
        <div className="space-y-1">
          {/* Already typed entries */}
          {activityMessages.slice(0, visibleLogs).map((entry, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-[9px] md:text-[10px] animate-fade-in"
            >
              <span className="text-zinc-600 font-mono shrink-0">{entry.time}</span>
              <span className="text-zinc-400 truncate">{entry.message}</span>
            </div>
          ))}
          {/* Currently typing entry */}
          {typingLogIndex < 4 && typingText && (
            <div className="flex items-start gap-2 text-[9px] md:text-[10px]">
              <span className="text-zinc-600 font-mono shrink-0">
                {activityMessages[typingLogIndex].time}
              </span>
              <span className="text-neon/80 truncate">
                {typingText}
                <span className="inline-block w-[3px] h-[10px] bg-neon/70 ml-px align-middle animate-blink" />
              </span>
            </div>
          )}
          {/* Placeholder lines for entries not yet shown */}
          {Array.from({ length: Math.max(0, 4 - visibleLogs - (typingText ? 1 : 0)) }).map((_, i) => (
            <div key={`placeholder-${i}`} className="h-[14px]" />
          ))}
        </div>
      </div>
    </div>
  )
}
