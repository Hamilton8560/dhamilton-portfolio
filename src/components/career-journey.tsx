"use client"

import { Shield, Fuel, Truck, Code, Brain, FlaskConical, Factory, Dumbbell, GraduationCap } from "lucide-react"
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"

const careerData = [
  {
    id: 1,
    title: "USMC",
    date: "2008 – 2012",
    content: "Infantry Machine Gunner. Afghanistan combat veteran.",
    category: "Military",
    icon: Shield,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Oil Fields",
    date: "2012 – 2016",
    content: "Coil tubing operator in the Bakken Shale, North Dakota.",
    category: "Energy",
    icon: Fuel,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Raider Trucking",
    date: "2016 – 2018",
    content: "Founded a fracking services fleet — grew from 1 to 8 trucks.",
    category: "Entrepreneurship",
    icon: Truck,
    relatedIds: [2, 4, 5],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "CS Degree",
    date: "2018 – 2020",
    content: "Computer Science, University of Maryland.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Seven Cipher / AI",
    date: "2020 – 2024",
    content: "AI-driven compliance software. Python ML pipelines.",
    category: "Engineering",
    icon: Brain,
    relatedIds: [4, 6, 7],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 6,
    title: "NIH Contract",
    date: "2023",
    content: "Developer contract at the National Institutes of Health.",
    category: "Government",
    icon: FlaskConical,
    relatedIds: [5],
    status: "completed" as const,
    energy: 70,
  },
  {
    id: 7,
    title: "Loudoun Stairs",
    date: "2023 – Present",
    content: "Senior Software Engineer. Full-stack manufacturing apps.",
    category: "Manufacturing",
    icon: Factory,
    relatedIds: [5, 8, 9],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 8,
    title: "Georgetown MS",
    date: "2024 – Present",
    content: "MS in IT Management, Georgetown University.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [7, 9],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 9,
    title: "American Iron",
    date: "2025 – Present",
    content: "Founded a gym and fitness tech company in El Salvador.",
    category: "Entrepreneurship",
    icon: Dumbbell,
    relatedIds: [7, 8],
    status: "in-progress" as const,
    energy: 100,
  },
]

export function CareerJourney() {
  return (
    <section id="journey" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-8">
          <span className="text-neon font-mono text-sm tracking-widest uppercase">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            The Journey
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Click any node to explore. Each chapter connects to the next.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto mt-6 rounded-full" />
        </div>

        <RadialOrbitalTimeline timelineData={careerData} />
      </div>
    </section>
  )
}
