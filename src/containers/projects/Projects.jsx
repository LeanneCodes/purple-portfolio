import React from 'react'
import './projects.css'
import ProjectCard from '../../components/projectcard/ProjectCard'
import P1 from '../../assets/gpt-3.png'

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <div className='projects-header'>
        <div className="hr"></div>
        <h1>My Projects</h1>
      </div>
      <div className='projects'>
        <ProjectCard img={P1} name="Project 1" tech="JS" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." url="View project on GitHub" />
        <ProjectCard img={P1} name="Project 1" tech="JS" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." url="View project on GitHub" />
        <ProjectCard img={P1} name="Project 1" tech="JS" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." url="View project on GitHub" />
        <ProjectCard img={P1} name="Project 1" tech="JS" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." url="View project on GitHub" />
      </div>
    </div>
  )
}

export default Projects