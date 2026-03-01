"use client"

import { useRef } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { projects, type Project } from "@/data/projects"
import { useGsapStagger } from "@/hooks/use-gsap-scroll"

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useGsapStagger(sectionRef, ".project-card")

  return (
    <section id="projects" className="py-28 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-lime-400 font-mono text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card opacity-0 glass-card rounded-xl overflow-hidden group">
      {/* Image area */}
      <div className="aspect-video overflow-hidden relative">
        {project.scrollImage ? (
          /* Scrolling preview: full-page screenshot scrolls on hover */
          <div className="w-full h-full relative">
            <img
              src={project.scrollImage}
              alt={project.title}
              className="w-full object-cover object-top absolute inset-0 ease-in-out group-hover:object-bottom"
              style={{
                height: "100%",
                objectFit: "cover",
                transitionProperty: "object-position",
                transitionDuration: `${project.scrollDuration ?? 8}s`,
                transitionTimingFunction: "ease-in-out",
              }}
            />
          </div>
        ) : (
          /* Static image with zoom */
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Browser dots decoration */}
        {project.scrollImage && (
          <div className="absolute top-3 left-4 flex gap-1.5 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600/80" />
          </div>
        )}

        {/* Floating link on hover */}
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 p-2.5 rounded-full bg-lime-400 text-zinc-950 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 hover:bg-lime-300 z-10"
        >
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="p-6">
        {/* Title with hover color */}
        <h3 className="text-xl font-semibold text-white group-hover:text-lime-400 transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-zinc-800/60 text-zinc-400 text-xs border border-zinc-700/50"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links row */}
        <div className="flex gap-4 pt-3 border-t border-zinc-800/50">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-lime-400 hover:text-lime-300 text-sm transition-colors group/link"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-lime-400 text-sm transition-colors group/link"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
