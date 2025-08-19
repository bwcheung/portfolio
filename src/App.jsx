import { Main } from './components/main'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'

function App() {
  return (
    <div className='min-h-screen w-screen'>
      <Main />
      <Skills />
      <Experience />
      <Projects />
      <Experience />
    </div>
  )
}

export default App
