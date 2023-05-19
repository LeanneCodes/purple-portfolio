import React from 'react'
import './projectcard.css'
import { SiGithub } from 'react-icons/si'
import { BiLink } from 'react-icons/bi'

const ProjectCard = ({ img, name, tech, summary, code, live }) => {
  return (
    <div className='project-card'>
      <div className='project-image'>
        <img src={img} alt="project-image" />
      </div>
      <div className='project-content'>
        <div className='project-info'>
          <h3>{name}</h3>
          <h5>{tech}</h5>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard