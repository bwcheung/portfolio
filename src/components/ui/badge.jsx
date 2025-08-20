export const Badge = (props) => {
  const {name} = props
  return (
    <div className="flex flex-wrap gap-2">
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-accent text-accent-foreground hover:shadow-glow hover:scale-105 transition-transform duration-200">
        {name}
      </div>
    </div>
  )
}