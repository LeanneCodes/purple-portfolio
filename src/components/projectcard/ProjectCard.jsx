import React from 'react'
import './projectcard.css'

const ProjectCard = ({ img, name, tech, summary, url  }) => {
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
        <button><a target='_blank'>{url}</a></button>
      </div>
    </div>
  )
}

export default ProjectCard