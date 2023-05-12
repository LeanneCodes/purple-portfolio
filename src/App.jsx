import './App.css'
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Link
// } from 'react-router-dom';

import { Contact, Footer, Intro, Navbar, Projects, Skills } from './containers'
// import { Awards, NavLinks, ProjectCard, TechStack } from './components'

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
          <div className="hr"></div>
          <Skills />
        </div>
        <div>
        <div className="hr"></div>
          <Projects />
        </div>
        <div>
        <div className="hr"></div>
          <Contact />
        </div>
        <div>
        < Footer />
        </div>
      </div>
    </>
  )
}

export default App
