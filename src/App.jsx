import { Main } from './components/sections/main'
import { Projects } from './components/sections/projects'
import { Skills } from './components/sections/skills'
import { Experience } from './components/sections/experience'
import { About } from './components/sections/about'

function App() {
  return (
    <div className='min-h-screen'>
      <Main />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
