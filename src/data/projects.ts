export interface Project {
  title: string
  description: string
  image: string
  scrollImage?: string
  scrollDuration?: number // seconds for scroll animation
  demo: string
  github?: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    title: "American Iron",
    description:
      "A bilingual fitness platform with custom CRM, AI-powered meal planning, session booking, and payment processing — engineered for international operations in El Salvador.",
    image: "/images/americaniron-preview.png",
    scrollImage: "/images/americaniron-full.jpg",
    scrollDuration: 16,
    demo: "https://americaniron.online",
    technologies: ["React", "Node.js", "MySQL", "AI Integration", "Bilingual"],
  },
  {
    title: "Fit For Him",
    description:
      "An online fitness coaching and nutrition platform providing personalized training programs, meal planning, and progress tracking for clients.",
    image: "/images/fitforhim-preview.png",
    scrollImage: "/images/fitforhim-full.jpg",
    demo: "https://fitforhim.com",
    technologies: ["React", "Node.js", "Custom CMS", "Nutrition AI", "Stripe"],
  },
  {
    title: "Angel Trust - Legal Services Platform",
    description:
      "A comprehensive legal services platform specializing in wills and trusts. Features SEO optimization, automated document generation, and secure client portal. Increased client acquisition by 200%.",
    image: "/images/angeltrust-preview.png",
    scrollImage: "/images/angeltrust-full.jpg",
    demo: "https://angel-trust.netlify.app",
    technologies: [
      "React",
      "SEO Optimization",
      "Netlify",
      "Tailwind CSS",
      "Legal Docs",
    ],
  },
  {
    title: "Muscle Map",
    description:
      "An AI-powered fitness application with personalized workout generation, nutrition planning, and Stripe payment integration.",
    image: "/images/musclemap-preview.png",
    scrollImage: "/images/musclemap-full.jpg",
    demo: "https://musclemap.net",
    technologies: ["Angular", "Firebase", "Stripe", "AI Integration", "TypeScript"],
  },
  {
    title: "Southern Strength Gym",
    description:
      "A gym website with integrated membership management, secure payment processing, class scheduling, and digital program sales via custom influencer platform.",
    image: "/images/southernstrength-preview.png",
    scrollImage: "/images/southernstrength-full.jpg",
    demo: "https://southernstrengthgym.com",
    technologies: [
      "React",
      "Node.js",
      "Stripe",
      "Scheduling",
      "Content Management",
    ],
  },
]
