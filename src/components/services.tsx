"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Factory, Fuel, Truck, Cog, TrendingUp, Users, ArrowRight, Video, ExternalLink, Instagram, CheckCircle2 } from "lucide-react"
import { FitnessIcon } from "./icons/fitness-icon"
import { useGsapFadeInUp } from "@/hooks/use-gsap-scroll"
import { HeroScrollVideo } from "@/components/ui/scroll-animated-video"

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  useGsapFadeInUp(sectionRef)

  return (
    <section id="services" className="py-28 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-20">
          <span className="text-neon font-mono text-sm tracking-widest uppercase">
            What I Build
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 max-w-2xl">
            Software for industries I&apos;ve actually worked in.
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl text-lg leading-relaxed">
            I don&apos;t build generic software. I build platforms for industries I know —
            with the domain expertise to get it right the first time.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Blue Collar */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Factory className="w-6 h-6 text-neon" />
              <h3 className="text-2xl font-bold text-white">Blue Collar & Industrial</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Oil fields to factory floors — I build the software because I lived the work.
            </p>

            <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
              {[
                { icon: Fuel, text: "Oil & gas operations and field logistics" },
                { icon: Truck, text: "Fleet management, DOT compliance & dispatch" },
                { icon: Cog, text: "Manufacturing management & automation" },
                { icon: TrendingUp, text: "Payroll, inventory & operational tools" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <item.icon className="w-5 h-5 text-neon shrink-0" />
                  <span className="text-zinc-200">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3 text-zinc-500 text-sm font-mono">
              <span>Raider Trucking</span>
              <span className="text-zinc-700">/</span>
              <span>Loudoun Stairs</span>
              <span className="text-zinc-700">/</span>
              <span>Coil Tubing Solutions</span>
            </div>

            <a
              href="https://calendly.com/davidhamilton473/el-salvador-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-neon text-zinc-950 hover:bg-neon-hover font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105 mt-8"
            >
              Let&apos;s automate your operation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Fitness */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FitnessIcon className="w-6 h-6 text-neon" />
              <h3 className="text-2xl font-bold text-white">Fitness & Wellness Brands</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Tech that turns fitness brands into scalable businesses.
            </p>

            <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
              {[
                { icon: Users, text: "Client management & session booking" },
                { icon: TrendingUp, text: "AI-powered nutrition & meal planning" },
                { icon: Cog, text: "Payment processing & program sales" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <item.icon className="w-5 h-5 text-neon shrink-0" />
                  <span className="text-zinc-200">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 text-zinc-500 text-sm font-mono">
              <span>American Iron</span>
              <span className="text-zinc-700">/</span>
              <span>Fit For Him</span>
              <span className="text-zinc-700">/</span>
              <span>Muscle Map</span>
              <span className="text-zinc-700">/</span>
              <span>Southern Strength</span>
            </div>

            <a
              href="https://calendly.com/davidhamilton473/el-salvador-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-neon text-zinc-950 hover:bg-neon-hover font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105 mt-8"
            >
              Let&apos;s monetize your brand
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        {/* Videography Section */}
        <VideographySection />
      </div>
    </section>
  )
}

// Instagram-style grid images for the mockup
const igGridImages = [
  "/images/gym-flexing.png",
  "/images/gym-dumbbells.png",
  "/images/gym-normal-reel.png",
  "/images/david-ironlife.jpeg",
  "/images/gym-personal-training.png",
  "/images/gym-back-muscles.png",
  "/images/gym-pecho.png",
  "/images/gym-flexing.png",
  "/images/gym-dumbbells.png",
]

function VideographySection() {
  const ref = useRef<HTMLDivElement>(null)
  useGsapFadeInUp(ref)

  return (
    <div className="mt-28" ref={ref}>
      {/* Copy + Instagram row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
        {/* Left — Copy */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Video className="w-6 h-6 text-neon" />
            <span className="text-neon font-mono text-sm tracking-widest uppercase">
              Bonus Service
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            Real videography.
            <br />
            <span className="text-zinc-400">Not AI slop from Fiverr.</span>
          </h3>

          <p className="text-zinc-400 leading-relaxed mb-6">
            Real footage and editing from El Salvador at rates that don&apos;t exist stateside. No AI stock slop.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-neon shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-sm">Professional gym, product & lifestyle shoots</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-neon shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-sm">Social media reels, ads & brand content</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-neon shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-sm">Fraction of US production costs — same quality</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-neon shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-sm">Bundled with your app build for a complete brand launch</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/americanironsv/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 glass text-neon hover:bg-neon/10 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:border-neon/40"
            >
              <Instagram className="w-4 h-4" />
              @americanironsv
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href="https://calendly.com/davidhamilton473/el-salvador-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-neon text-zinc-950 hover:bg-neon-hover font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105"
            >
              Ask about video packages
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right — Instagram Profile Mockup */}
        <a
          href="https://www.instagram.com/americanironsv/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden transition-all duration-300 group-hover:border-neon/30 group-hover:shadow-[0_0_40px_rgba(0, 212, 255,0.08)]">
            {/* Profile header */}
            <div className="px-5 py-4 flex items-center gap-4 border-b border-zinc-800/80">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon via-neon-blue to-soft-blue p-[2px] shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/david-ironlife.jpeg"
                    alt="American Iron"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-semibold text-sm">americanironsv</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                </div>
                <p className="text-zinc-500 text-xs truncate">American Iron Gym — El Salvador</p>
              </div>
              <div className="text-zinc-400 group-hover:text-neon transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 px-5 py-3 border-b border-zinc-800/60 text-center">
              <div>
                <span className="text-white font-bold text-sm block">41</span>
                <span className="text-zinc-500 text-[10px]">Posts</span>
              </div>
              <div>
                <span className="text-white font-bold text-sm block">2,452</span>
                <span className="text-zinc-500 text-[10px]">Followers</span>
              </div>
              <div>
                <span className="text-white font-bold text-sm block">9</span>
                <span className="text-zinc-500 text-[10px]">Following</span>
              </div>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-3 gap-[1px] bg-zinc-800/40">
              {igGridImages.map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                  />
                </div>
              ))}
            </div>

            {/* Footer hint */}
            <div className="px-5 py-3 text-center border-t border-zinc-800/60">
              <span className="text-zinc-500 text-xs group-hover:text-neon transition-colors">
                View on Instagram →
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Scroll-animated video demo */}
      <div className="relative">
        <HeroScrollVideo
          title="Your Brand in Motion"
          subtitle="Real Content, Real Results"
          meta="El Salvador Production"
          credits={
            <>
              <p>Produced by</p>
              <p>American Iron</p>
            </>
          }
          media="/videos/american-iron-reel.mp4"
          overlay={{
            caption: "VIDEO MARKETING • DEMO",
            heading: "This Is What We Build For You",
            paragraphs: [
              "Professional reels, ads, and brand content — shot in El Salvador at a fraction of US costs.",
            ],
            extra: (
              <div className="flex flex-wrap gap-3 mt-4 justify-center">
                <a
                  href="https://calendly.com/davidhamilton473/el-salvador-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neon text-zinc-950 hover:bg-neon-hover font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ),
          }}
          initialBoxSize={280}
          scrollHeightVh={200}
          smoothScroll={false}
          eases={{ container: "power2.out", overlay: "power2.out", text: "power2.out" }}
        />
      </div>
    </div>
  )
}
