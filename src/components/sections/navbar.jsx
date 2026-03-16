import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export const NavBar = () => {
  const sections = [
    { id: "main", label: "Main" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "exp", label: "Experience" },
    { id: "projects", label: "Projects" },
  ]

  const [active, setActive] = useState("main")

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top) }
      })
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActive(closest.id)
    }

  window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const activeIndex = sections.findIndex((s) => s.id === active)
  return (
    <nav className="fixed left-5 top-0 z-50 hidden h-screen flex-col items-center md:flex">
      <div className="flex h-16 items-center justify-center">
        <span className="text-sm font-semibold tracking-tight text-foreground"></span>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center gap-6">
        <motion.div
          className="absolute left-0 h-8 w-[2px]"
          animate={{ y: activeIndex * 44 }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          style={{ top: 0 }}
        />

        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={`text-[13px] font-medium cursor-pointer ${
              active === section.id
                ? "text-accent"
                : "text-muted-foreground"
            }`}
            style={{ height: "2rem", display: "flex", alignItems: "center" }}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="h-16" />
    </nav>
  )
}