import { Github, Linkedin, Mail } from "lucide-react"
import { socials } from "@/data/socials"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-sm font-mono">
          &copy; 2026 David Hamilton
        </p>

        <div className="flex gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-lime-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-lime-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="text-zinc-600 hover:text-lime-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-zinc-700 text-xs font-mono">
          Premium results, tailored to your budget &amp; scope —{" "}
          <a
            href="https://calendly.com/davidhamilton473/el-salvador-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-lime-400 transition-colors underline underline-offset-2"
          >
            book a free consultation
          </a>
        </p>
      </div>
    </footer>
  )
}
