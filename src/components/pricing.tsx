"use client"

import { useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { socials } from "@/data/socials"

const tiers = [
  {
    name: "Foundation",
    price: "$100",
    priceNote: "– $150/mo",
    description: "Professional site that ranks on Google and captures leads while you work.",
    features: ["SEO-optimized site", "Lead capture forms", "Mobile-first design", "Analytics dashboard"],
    popular: false,
  },
  {
    name: "Business",
    price: "$150",
    priceNote: "– $200/mo",
    description: "Everything in Foundation plus a back-office that handles the paperwork you hate.",
    features: ["Everything in Foundation", "Admin dashboard", "Scheduling & dispatch", "Invoicing & payments", "Client management"],
    popular: true,
  },
  {
    name: "Autonomous",
    price: "$200",
    priceNote: "– $300/mo",
    description: "AI agents that run your entire operation. A Telegram bot becomes your office.",
    features: ["Everything in Business", "AI sales agents", "24/7 support bot", "Process automation", "Custom mobile app"],
    popular: false,
  },
]

export function Pricing() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section id="pricing" className="py-28 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            className="text-neon font-mono text-sm tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple Pricing
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            One flat monthly fee.
            <br />
            <span className="text-zinc-500">No surprises.</span>
          </motion.h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl p-6 ${
                tier.popular 
                  ? "bg-neon text-zinc-950" 
                  : "bg-zinc-900/40 border border-zinc-800 text-white"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center gap-1.5 bg-zinc-950 text-neon text-xs font-semibold px-3 py-1 rounded-full border border-neon/20">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <p className={`text-sm font-medium mb-4 ${tier.popular ? "text-zinc-700" : "text-zinc-500"}`}>
                {tier.name}
              </p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className={`text-lg ${tier.popular ? "text-zinc-700" : "text-zinc-500"}`}>
                  {tier.priceNote}
                </span>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 ${tier.popular ? "text-zinc-800" : "text-zinc-400"}`}>
                {tier.description}
              </p>

              {/* Features - clean list */}
              <ul className="space-y-2.5 mb-8">
                {tier.features.map((feature) => (
                  <li 
                    key={feature} 
                    className={`text-sm ${tier.popular ? "text-zinc-800" : "text-zinc-300"}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={socials.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  tier.popular
                    ? "bg-zinc-950 text-white hover:bg-zinc-800"
                    : "bg-neon text-zinc-950 hover:bg-neon-hover"
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p 
          className="text-center text-zinc-500 text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Not sure which fits?{" "}
          <a 
            href={socials.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon hover:underline"
          >
            Book a free call
          </a>
          {" "}— no pressure, just straight answers.
        </motion.p>
      </div>
    </section>
  )
}
