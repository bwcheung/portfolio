import { Card } from "./ui/card"
import { getIcon } from "../utils/iconHelper"
import skillsJson from "../portfolio-jsons/skills.json"

export const Skills = () => {

  const getSkills = () => {
    const elements = []
    skillsJson.forEach((skill, i) => {
      elements.push(
        <Card 
          key={i} 
          icon={getIcon(skill.icon)} 
          primary={skill.primary} 
          badges={skill.skills}
        />
      )
    })
    return elements
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getSkills()}
        </div>
      </div>
    </section>
  )
}