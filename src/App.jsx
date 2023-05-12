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
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
        <div>
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
