import React from 'react'
import './projects.css'
import ProjectCard from '../../components/projectcard/ProjectCard'
import Github from '../../components/buttons/Github'
import LiveProject from '../../components/buttons/LiveProject'
import P1 from '../../assets/gpt-3.png'
import P2 from '../../assets/Gintopia.png'

// const Projects = () => {
//   return (
//     <div className='projects-container' id='projects'>
//       <div className='projects-header'>
//         <h1>My Projects</h1>
//       </div>
//       <div className='projects'>
//         <a href='#' target='_blank'><ProjectCard img={P1} name="Responsive website using UI/UX designs" tech="HTML5, CSS3, JS, ReactJs, Tailwind, Figma" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." code="View Code" /></a>
//         <a href='#' target='_blank'><ProjectCard img={P1} name="Modern Restaurant Application" tech="HTML5, CSS3, JS, ReactJs, Figma" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." code="View Code" /></a>
//         <a href='https://github.com/LeanneCodes/GinTopia_NEW' target='_blank'><ProjectCard img={P2} name="GinTopia" tech="HTML5, CSS3, JS, Python3, Django, Postgres" summary="During my Diploma, I created this website that involved frontend and backend technologies, which demonstrated my ability to use databases with frontend tech. This project is designed to takes on bookings using the CRUD system. However, for users to make a booking, they must be signed in." code="View Code" /></a>
//         <a href='https://github.com/LeanneCodes/GPT-3' target='_blank'><ProjectCard img={P1} name="Designing a website from a Figma design" tech="HTML5, CSS3, JS, ReactJs, Figma" summary="The aim was to take a Figma design and replicate the static design into a website. This was a great opportunity to showcase my CSS skills and how I managed to display this website with React components." code="View Code" /></a>
//       </div>
//       <ExternalLinks />
//     </div>
//   )
// }

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <div className='projects-header'>
        <h1>My Projects</h1>
      </div>
      <div className='projects'>
        <div>
          <ProjectCard
            img={P1}
            name="Designing a website from a Figma design"
            tech="HTML5, CSS3, JS, ReactJs, Figma"
            summary="Decription here."
          />
          <a href='https://github.com/LeanneCodes/GPT-3' target='_blank'>
            <Github code="View Code" />
          </a>
          <a href='https://github.com/LeanneCodes/GPT-3' target='_blank'>
            <LiveProject live="Live Project" />
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Projects