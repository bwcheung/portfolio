import { Main } from './components/main'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { About } from './components/about'

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
