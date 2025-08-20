import { Badge } from "./badge"
import { getIcon } from "../../utils/iconHelper"

export const Card = (props) => {
  const { primary, secondary, badges, description = "", icon = null, date = null, image = null, links = null } = props

  const titleELement = () => {
    return (
      <div className="flex items-center gap-4">
        {icon ? 
          <div className="p-3 rounded-lg bg-accent text-accent-foreground group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div> 
        : ""}
        <div className="flex flex-col">
          <h3 className="font-semibold tracking-tight text-xl">{primary}</h3>
          {secondary ? <h3 className="text-xl font-semibold text-muted-foreground mb-3">{secondary}</h3> : ""}
        </div>
      </div>
    )
  }

  const dateElement = () => {
    if (!date) return ""
    return (
      <div className="flex gap-2 items-center text-sm text-muted-foreground ml-auto mb-auto">
        {getIcon("Calendar", 16)}
        {date}
      </div>
    )
  }

  const getBadges = () => {
    const elements = []
    if (!badges) return ""
    badges.forEach((badge, i) => {
      elements.push(<Badge key={i} name={badge}/>)
    })
    return elements
  }

  const getDescription = () => {
    if (!description) return ""
    return (
      <div className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </div>
    )
  }

  const getImage = () => {
    if (!image) return ""
    return (
      <div className="relative overflow-hidden">
        <img src={image} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"></img>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={links.live} 
            target="_blank" 
            className="inline-flex bg-accent text-accent-foreground items-center justify-center gap-2 whitespace-nowrap font-semibold h-14 rounded-lg px-10 text-lg hover:scale-105 transition-all duration-300"
          >
              Try it!
          </a>
          {links.github ? (
            <a 
              href={links.github} 
              target="_blank" 
              className="bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold h-14 rounded-lg px-10 text-lg hover:scale-105 transition-all duration-300"
            >
              Github
            </a>) : ""}
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-border bg-card-elevated text-card-foreground shadow-medium group hover:shadow-glow transition-all duration-500">
      {getImage()}
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center gap-4">
          {titleELement()}
          {dateElement()}
        </div>
      </div>
      <div className="p-6 pt-0">
        {getDescription()}
        <div className="flex flex-wrap gap-2">
          {getBadges()}
        </div>
      </div>
    </div>
  )
}