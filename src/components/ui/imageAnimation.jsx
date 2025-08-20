export const ImageAnimation = (props) => {
  const {base, hover, name} = props
  return (
    <div class="relative overflow-hidden group">
      <img 
        src={base}
        alt={name}
        class="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
      />
      <img 
        src={hover}
        alt={name + " Back"}
        class="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" 
      />
    </div>
  )
}