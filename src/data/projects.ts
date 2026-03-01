export interface Project {
  title: string
  description: string
  image: string
  demo: string
  github?: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    title: "Angel Trust - Legal Services Platform",
    description: "A comprehensive legal services platform specializing in wills and trusts. Features include SEO optimization, automated document generation, and secure client portal. Increased client acquisition by 200% through optimized user journey and search engine visibility.",
    image: "/images/angeltrust.png",
    demo: "https://angel-trust.netlify.app",
    technologies: ["React", "SEO Optimization", "Netlify", "Tailwind CSS", "Legal Document Generation", "Analytics Integration"]
  },
  {
    title: "Muscle Map",
    description: "An AI-powered fitness application built with Angular and Firebase. Features include personalized workout generation, nutrition planning, and Stripe payment integration.",
    image: "/images/musclemapLOGO.png",
    demo: "https://musclemap.net",
    technologies: ["Angular", "Firebase", "Stripe", "AI Integration", "TypeScript"]
  },
  {
    title: "Southern Strength Gym",
    description: "A fully functional gym website with integrated membership management system. Built with React and features secure payment processing, class scheduling, and responsive design.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1280",
    demo: "https://southernstrengthgym.com",
    technologies: ["React", "Node.js", "Payment Processing", "Scheduling System", "Member Portal"]
  },
  {
    title: "Harvey SSG - Digital Programs",
    description: "A custom influencer platform for Southern Strength Gym, enabling digital program sales and online consultations. Features Stripe integration and personalized content delivery.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=1280",
    demo: "https://harvey.southernstrengthgym.com",
    technologies: ["React", "Stripe", "Content Management", "User Authentication", "Analytics"]
  }
]
