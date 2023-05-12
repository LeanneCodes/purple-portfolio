import React from 'react'
import './projects.css'
import ProjectCard from '../../components/projectcard/ProjectCard'

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <div className='projects-header'>
        <h1>My Projects</h1>
      </div>
      <div className='projects'>
        <ProjectCard img="" name="Project 1" tech="JS" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." url="www.github.com" />
        <ProjectCard img="" name="Project 1" tech="JS" summary="some info about the project" url="www.github.com" />
        <ProjectCard img="" name="Project 1" tech="JS" summary="some info about the project" url="www.github.com" />
        <ProjectCard img="" name="Project 1" tech="JS" summary="some info about the project" url="www.github.com" />
      </div>
    </div>
  )
}

export default Projects