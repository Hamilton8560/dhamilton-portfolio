"use client";

import { useRef } from "react";
import { Code2, Server, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";
import { useGsapStagger } from "@/hooks/use-gsap-scroll";

const iconMap: Record<string, React.ElementType> = { Code2, Server, Wrench };

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapStagger(sectionRef, ".skill-card");

  return (
    <section id="about" className="py-24 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Technical Background
        </h2>
        <div className="w-20 h-1 bg-lime-400 mx-auto mb-12 rounded-full" />

        {/* Brief about paragraph */}
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16 text-lg">
          Marine veteran turned full stack developer with a passion for building
          impactful digital experiences.
        </p>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;

            return (
              <Card
                key={category.title}
                className="skill-card opacity-0 bg-zinc-900 border-zinc-800 hover:border-lime-400/50 transition-all duration-300 hover:shadow-[var(--shadow-glow-sm)]"
              >
                <CardHeader>
                  <IconComponent className="w-8 h-8 text-lime-400 mb-3" />
                  <CardTitle className="text-white text-lg">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
