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
    description: "Extensive experience in building responsive, user-friendly web applications with modern JavaScript frameworks and libraries.",
    skills: ["React", "Angular", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Next.js", "Redux", "Material UI"]
  },
  {
    title: "Backend Development",
    icon: "Server",
    description: "Strong foundation in server-side programming, API development, and database management.",
    skills: ["Node.js", "Python", "C#", "Express", "Django", "Laravel", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Database & DevOps",
    icon: "Wrench",
    description: "Experience with various database systems and modern DevOps practices.",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Docker", "AWS", "CI/CD", "Git", "Linux"]
  }
]
