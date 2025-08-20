import { getIcon } from "../utils/iconHelper"
import GitHubSVG from "../assets/github-mark-white.svg"
import InPNG from "../assets/inBug-White.png"

export const Main = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 opacity-90" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div>
          <p className="text-accent font-medium text-lg mb-4 tracking-wide">
            Hello, I'm
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Brandon Cheung
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Software Developer
          </h2>
          
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about clean code, elegant design, and innovative solutions.
          </p>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com" 
              className="text-gray-300 hover:text-accent"
              aria-label="GitHub Profile"
            >
              <img src={GitHubSVG} width={24} height={24}></img>
            </a>
            <a 
              href="https://www.linkedin.com/in/bwcheung/" 
              className="text-gray-300 hover:text-accent"
              aria-label="LinkedIn Profile"
            >
              <img src={InPNG} width={24} height={24}></img>
            </a>
            <a 
              href="mailto:bwcheung8@gmail.com" 
              className="text-gray-300 hover:text-accent"
              aria-label="Email Contact"
            >
              {getIcon("Mail")}
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        {getIcon("ArrowDown", 24, "opacity-70")}
      </div>
    </section>
  );
}