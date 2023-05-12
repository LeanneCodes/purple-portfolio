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
          <h2>{name}</h2>
          <h4>{tech}</h4>
          <p>{summary}</p>
        </div>
        <div className='external-link'>
          <button>
            <p><SiGithub/> </p>
            <a className="pc-icons" target='_blank'>{code}</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard