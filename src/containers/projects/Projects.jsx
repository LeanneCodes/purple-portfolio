import React from 'react'
import './projects.css'
import ProjectCard from '../../components/projectcard/ProjectCard'
import P1 from '../../assets/gpt-3.png'

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <div className='projects-header'>
        <h1>My Projects</h1>
      </div>
      <div className='projects'>
        <a href='#' target='_blank'><ProjectCard img={P1} name="Project 1" tech="JS" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." code="View Code" /></a>
        <a href='#' target='_blank'><ProjectCard img={P1} name="Project 2" tech="JS" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." code="View Code" /></a>
        <a href='#' target='_blank'><ProjectCard img={P1} name="Project 3" tech="JS" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." code="View Code" /></a>
        <a href='#' target='_blank'><ProjectCard img={P1} name="Project 4" tech="JS" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e." code="View Code" /></a>
      </div>
    </div>
  )
}

export default Projects