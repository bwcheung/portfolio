import { Card } from "../ui/card"
import experiencesJson from "../../portfolio-jsons/experience.json"

export const Experience = () => {

  const getExperiences = () => {
    const elements = []
    experiencesJson.forEach((exp, i) => {
      elements.push(
        <Card
          key={i}
          primary={exp.primary}
          secondary={exp.secondary}
          description={exp.description}
          badges={exp.skills}
          date={exp.date}
        />
      )
    })
    return elements
  }

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Building amazing products at innovative companies
          </p>
        </div>
        
        <div className="space-y-8">
          {getExperiences()}
        </div>
      </div>
    </section>
  )
}