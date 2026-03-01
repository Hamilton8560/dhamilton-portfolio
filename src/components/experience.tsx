"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/experience";
import { useGsapStagger } from "@/hooks/use-gsap-scroll";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapStagger(sectionRef, ".timeline-entry");

  return (
    <section id="experience" className="py-24 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Experience
        </h2>
        <div className="w-20 h-1 bg-lime-400 mx-auto mb-16 rounded-full" />

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-zinc-800" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={`${exp.organization}-${exp.period}`}
                className={`timeline-entry opacity-0 relative flex flex-col md:flex-row md:items-start mb-16 last:mb-0 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-lime-400 border-4 border-zinc-950 z-10 shadow-[0_0_10px_rgba(163,230,53,0.5)]" />

                {/* Content card */}
                <Card
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] bg-zinc-900 border-zinc-800 ${
                    isEven
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <CardContent>
                    <span className="text-lime-400 font-mono text-sm">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">
                      {exp.title}
                    </h3>
                    <p className="text-zinc-400 mt-1">{exp.organization}</p>
                    <p className="text-zinc-400 mt-3 text-sm">
                      {exp.description}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-zinc-400 text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-1.5 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
