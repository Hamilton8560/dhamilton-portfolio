export interface Experience {
  title: string
  organization: string
  period: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    title: "Founder & Lead Developer",
    organization: "American Iron",
    period: "November 2025 – Present",
    description: "Founded a strength training gym and fitness technology company in El Salvador, building the entire tech stack from the ground up.",
    highlights: [
      "Architected a custom CRM engineered to navigate El Salvador's banking limitations and international transaction challenges",
      "Built americaniron.online — a bilingual platform for session booking, AI-powered meal planning, and fitness tracking",
      "Integrated scheduling, trainer management, session rollover tracking, and automated client communications",
      "Implemented AI-driven nutrition planning generating personalized meal plans based on client goals",
    ],
  },
  {
    title: "Senior Software Engineer",
    organization: "Loudoun Stairs",
    period: "February 2023 – Present",
    description: "Lead developer for a manufacturing company's internal systems and full-stack applications.",
    highlights: [
      "Spearheaded a full-stack manufacturing management application using Vanilla JS, C#, Python, and MySQL",
      "Manage on-premise server infrastructure handling company-wide data and application hosting",
      "Developed Python automation scripts eliminating hours of repetitive manual tasks across departments",
      "Own full lifecycle development from requirements gathering through deployment using Agile methodologies",
    ],
  },
  {
    title: "Software Engineer (AI)",
    organization: "Seven Cipher",
    period: "January 2020 – February 2024",
    description: "Built AI-driven compliance and automation software. Started during COVID, later contracted to the NIH through this company.",
    highlights: [
      "Designed and implemented machine learning models to enhance AI-powered compliance software",
      "Developed automation pipelines for compliance workflows, including detection and response services",
      "Led Python development for data processing, model training, evaluation, and deployment",
      "Collaborated cross-functionally with security and product teams to integrate ML solutions",
    ],
  },
  {
    title: "Developer & Data Scientist",
    organization: "National Institutes of Health (Contract via Seven Cipher)",
    period: "March 2023 – July 2023",
    description: "4-month contract as a developer and data scientist at the NIH.",
    highlights: [
      "Developed authentication systems focusing on security and user experience",
      "Built RESTful API services improving data flow and system integration",
      "Participated in Agile sprints and stand-ups, consistently meeting project deadlines",
    ],
  },
  {
    title: "Founder & CEO",
    organization: "Raider Trucking LLC",
    period: "April 2016 – October 2018",
    description: "Founded a fracking services company in the Bakken Shale, Williston, ND. Grew from 1 truck to a fleet of 8, delivering frack sand with pneumatic trailers and sandboxes plus occasional OTR loads.",
    highlights: [
      "Scaled from a single truck to a fleet of 8 — managing drivers, dispatch, and logistics across the Bakken Shale",
      "Built automation and software systems to handle DOT permits, state compliance, and dispatch at scale",
      "Developed payroll and operational tools that enabled the company to take on more work without adding overhead",
      "First real introduction to using software for scalability — the origin of my engineering career",
    ],
  },
  {
    title: "Coil Tubing Operator",
    organization: "Coil Tubing Solutions (now Coil Tubing Partners)",
    period: "2012 – 2016",
    description: "Transitioned from the Marines to the oil field through the Leathernecks to Roughnecks program. Worked up from entry-level to coil operator in downhole well intervention.",
    highlights: [
      "Entered the oil field through the Leathernecks to Roughnecks veteran transition program",
      "Advanced to coil tubing operator — running downhole tools and well intervention operations",
      "Gained deep understanding of blue collar operations, field logistics, and crew management",
      "Experience that later shaped how I build software for industrial and blue collar businesses",
    ],
  },
  {
    title: "Infantry Machine Gunner",
    organization: "United States Marine Corps",
    period: "April 2008 – August 2012",
    description: "Combat veteran with deployments to Afghanistan.",
    highlights: [
      "Combat veteran (Afghanistan) with leadership experience as vehicle commander",
      "Completed Mountain Warfare School, Machine Gun Leaders Course, and Indirect Fire Course",
      "Developed decision-making skills under extreme pressure and led teams in high-stakes environments",
    ],
  },
]
