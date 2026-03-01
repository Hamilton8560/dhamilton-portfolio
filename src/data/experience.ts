export interface Experience {
  title: string
  organization: string
  period: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    title: "Infantry Machine Gunner",
    organization: "United States Marine Corps",
    period: "2008 - 2012",
    description: "Combat veteran with deployments to Afghanistan.",
    highlights: [
      "Led direct fire support operations during combat deployments in Afghanistan",
      "Demonstrated exceptional leadership as vehicle commander in high-stress environments",
      "Completed specialized training including Mountain Warfare School and Machine Gun Leaders Course",
      "Developed strong problem-solving and decision-making skills in critical situations"
    ]
  }
]
