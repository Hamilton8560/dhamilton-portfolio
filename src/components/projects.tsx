"use client";

import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { useGsapStagger } from "@/hooks/use-gsap-scroll";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapStagger(sectionRef, ".project-card");

  return (
    <section id="projects" className="py-24 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-lime-400 mx-auto mb-12 rounded-full" />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="project-card opacity-0 bg-zinc-900 border-zinc-800 overflow-hidden hover:border-lime-400/30 transition-all duration-300 group"
            >
              {/* Image area */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technology badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links row */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-lime-400 hover:text-lime-300 text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-lime-400 hover:text-lime-300 text-sm transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
