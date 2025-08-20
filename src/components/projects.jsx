import projectsJson from "../portfolio-jsons/projects.json"
import { Card } from "./ui/card"

export const Projects = () => {
  const getExperiences = () => {
    const elements = []
    projectsJson.forEach((proj, i) => {
      elements.push(
        <Card
          key={i}
          primary={proj.primary}
          description={proj.description}
          badges={proj.skills}
          links={{github: proj.githubUrl, live: proj.liveUrl}}
          image={proj.image}
        />
      )
    })
    return elements
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing my past projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getExperiences()}
        </div>
      </div>
    </section>
  )
}