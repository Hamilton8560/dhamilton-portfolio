"use client"

import { useRef } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socials } from "@/data/socials"
import { useGsapFadeInUp } from "@/hooks/use-gsap-scroll"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useGsapFadeInUp(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Let&apos;s Work Together
        </h2>

        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
          I&apos;m currently available for freelance work and full-time
          opportunities.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild>
            <a
              href={`mailto:${socials.email}`}
              className="bg-lime-400 text-zinc-950 hover:bg-lime-500 font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-[var(--shadow-glow-md)]"
            >
              Get in Touch
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="border-lime-400/50 text-lime-400 hover:bg-lime-400/10 font-semibold px-8 py-3 rounded-lg transition-all"
            >
              Book a Call
            </a>
          </Button>
        </div>

        <div className="mt-10 flex gap-6 justify-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-lime-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-lime-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="text-zinc-500 hover:text-lime-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
