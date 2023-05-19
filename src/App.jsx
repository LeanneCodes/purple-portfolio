import './App.css'
import { Footer, Intro, Navbar, Projects, Skills, About } from './containers'

function App() {

  return (
    <>
      <div className='paper'>
        <div>
          <Navbar />
        </div>
        <div>
          <Intro />
        </div>
        <div>
          <About />
        </div>
        <div>
          <div className="hr"></div>
          <Skills />
        </div>
        <div>
        <div className="hr"></div>
          <Projects />
        </div>
        <div className="hr"></div>
        <div>
        < Footer />
        </div>
      </div>
    </>
  )
}

export default App
