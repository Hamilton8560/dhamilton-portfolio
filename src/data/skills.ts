export interface SkillCategory {
  title: string
  icon: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "Code2",
    description:
      "Building responsive, user-friendly web applications with modern JavaScript frameworks.",
    skills: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML/CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & AI",
    icon: "Server",
    description:
      "Server-side development, API design, and AI/ML pipeline engineering.",
    skills: [
      "Node.js",
      "NestJS",
      "Python",
      "C#",
      "Django",
      "Flask",
      ".NET",
      "scikit-learn",
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: "Wrench",
    description:
      "Database management, server infrastructure, and deployment pipelines.",
    skills: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "SQL Server",
      "CI/CD",
      "On-Prem Servers",
      "RESTful APIs",
      "Git",
    ],
  },
]
