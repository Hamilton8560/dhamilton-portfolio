"use client"

import { useRef } from "react"
import { Factory, Fuel, Truck, Cog, TrendingUp, Users, ArrowRight, DollarSign, Clock, Video, ExternalLink, Instagram, CheckCircle2 } from "lucide-react"
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
          <span className="text-lime-400 font-mono text-sm tracking-widest uppercase">
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
              <Factory className="w-6 h-6 text-lime-400" />
              <h3 className="text-2xl font-bold text-white">Blue Collar & Industrial</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-8">
              I lived this world — oil fields, frack sand hauling, manufacturing floors.
              I went from coil tubing operator to founding an 8-truck fracking services
              fleet to building the software that runs these businesses.
            </p>

            <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
              <li className="flex items-center gap-3 py-4">
                <Fuel className="w-5 h-5 text-lime-400 shrink-0" />
                <span className="text-zinc-200">Oil & gas operations and field logistics</span>
              </li>
              <li className="flex items-center gap-3 py-4">
                <Truck className="w-5 h-5 text-lime-400 shrink-0" />
                <span className="text-zinc-200">Fleet management, DOT compliance & dispatch</span>
              </li>
              <li className="flex items-center gap-3 py-4">
                <Cog className="w-5 h-5 text-lime-400 shrink-0" />
                <span className="text-zinc-200">Manufacturing management & automation</span>
              </li>
              <li className="flex items-center gap-3 py-4">
                <TrendingUp className="w-5 h-5 text-lime-400 shrink-0" />
                <span className="text-zinc-200">Payroll, inventory & operational tools</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3 text-zinc-500 text-sm font-mono">
              <span>Raider Trucking</span>
              <span className="text-zinc-700">/</span>
              <span>Loudoun Stairs</span>
              <span className="text-zinc-700">/</span>
              <span>Coil Tubing Solutions</span>
            </div>

            {/* Blue Collar CTA */}
            <div className="mt-10 p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <p className="text-zinc-200 font-medium leading-snug">
                  Still running your business off spreadsheets, whiteboards, and phone calls?
                </p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                You don&apos;t need to understand tech — you need someone who understands
                <span className="text-white"> your</span> business. I&apos;ve been on the rig floor,
                behind the wheel, and on the shop floor. I&apos;ll build you a system that handles
                scheduling, invoicing, compliance, and lead generation while you&apos;re in the field.
                No more paperwork bottlenecks. No more missed calls turning into missed revenue.
              </p>
              <a
                href="https://calendly.com/davidhamilton473/el-salvador-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-lime-400 text-zinc-950 hover:bg-lime-300 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105"
              >
                Let&apos;s automate your operation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Fitness */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FitnessIcon className="w-6 h-6 text-lime-400" />
              <h3 className="text-2xl font-bold text-white">Fitness & Wellness Brands</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-8">
              From gym management platforms to influencer coaching apps — I build
              the tech that lets fitness professionals scale their business
              online and in person.
            </p>

            <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
              <li className="flex items-center gap-3 py-4">
                <Users className="w-5 h-5 text-lime-400 shrink-0" />
                <span className="text-zinc-200">Client management & session booking</span>
              </li>
              <li className="flex items-center gap-3 py-4">
                <TrendingUp className="w-5 h-5 text-lime-400 shrink-0" />
                <span className="text-zinc-200">AI-powered nutrition & meal planning</span>
              </li>
              <li className="flex items-center gap-3 py-4">
                <Cog className="w-5 h-5 text-lime-400 shrink-0" />
                <span className="text-zinc-200">Payment processing & program sales</span>
              </li>
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

            {/* Fitness CTA */}
            <div className="mt-10 p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
              <div className="flex items-start gap-3 mb-3">
                <DollarSign className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <p className="text-zinc-200 font-medium leading-snug">
                  You have the followers. You just don&apos;t have the platform to monetize them.
                </p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                Coaching DMs, free content with no paywall, Venmo for payments — that&apos;s
                leaving money on the table every single day. I build you a branded app
                where clients buy programs, book sessions, track nutrition, and pay you
                automatically. Turn your audience into recurring revenue without learning
                a single line of code.
              </p>
              <a
                href="https://calendly.com/davidhamilton473/el-salvador-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-lime-400 text-zinc-950 hover:bg-lime-300 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105"
              >
                Let&apos;s monetize your brand
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
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
            <Video className="w-6 h-6 text-lime-400" />
            <span className="text-lime-400 font-mono text-sm tracking-widest uppercase">
              Bonus Service
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            Real videography.
            <br />
            <span className="text-zinc-400">Not AI slop from Fiverr.</span>
          </h3>

          <p className="text-zinc-400 leading-relaxed mb-6">
            Through my network in El Salvador, I connect you with talented
            videographers and editors at rates that don&apos;t exist stateside.
            Real footage, real editing, real brand content — not the AI-generated
            stock video garbage flooding Fiverr and Upwork from overseas content farms.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-sm">Professional gym, product & lifestyle shoots</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-sm">Social media reels, ads & brand content</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-sm">Fraction of US production costs — same quality</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-sm">Bundled with your app build for a complete brand launch</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/americanironsv/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 glass text-lime-400 hover:bg-lime-400/10 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:border-lime-400/40"
            >
              <Instagram className="w-4 h-4" />
              @americanironsv
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href="https://calendly.com/davidhamilton473/el-salvador-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-lime-400 text-zinc-950 hover:bg-lime-300 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-[var(--shadow-glow-lg)] hover:scale-105"
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
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden transition-all duration-300 group-hover:border-lime-400/30 group-hover:shadow-[0_0_40px_rgba(163,230,53,0.08)]">
            {/* Profile header */}
            <div className="px-5 py-4 flex items-center gap-4 border-b border-zinc-800/80">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-lime-400 via-emerald-500 to-lime-600 p-[2px] shrink-0">
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
              <div className="text-zinc-400 group-hover:text-lime-400 transition-colors">
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
              <span className="text-zinc-500 text-xs group-hover:text-lime-400 transition-colors">
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
              "Professional reels, ads, and brand content — shot on location in El Salvador at a fraction of US production costs.",
              "Bundled with your app or site build for a complete digital brand launch.",
            ],
            extra: (
              <div className="flex flex-wrap gap-3 mt-4 justify-center">
                <a
                  href="https://calendly.com/davidhamilton473/el-salvador-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-lime-400 text-zinc-950 hover:bg-lime-300 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300"
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
