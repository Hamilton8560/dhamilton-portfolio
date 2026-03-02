"use client"

import { cn } from "@/lib/utils"
import { ParticleField } from "@/components/ui/particle-field"

interface AuroraBackgroundProps {
  className?: string
  children?: React.ReactNode
}

export function AuroraBackground({ className, children }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Aurora gradient layers */}
      <div className="absolute inset-0 aurora-container">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <div className="aurora-blob aurora-blob-4" />
      </div>

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-zinc-950/50" />

      {/* Floating particles */}
      <ParticleField
        className="z-[5]"
        particleCount={80}
        connectionDistance={150}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
