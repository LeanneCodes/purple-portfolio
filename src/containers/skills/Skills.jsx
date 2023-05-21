import React from 'react'
import TechStack from '../../components/techstack/TechStack'
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import './skills.css'

const Skills = () => {
  return (
    <div className='skills-container' id='skills'>
      <div className='skills-header'>
        <h2>My <span className='special-text'>Skills</span></h2>
        <h3 style={{ marginTop: '1rem' }}>Current techstack that I engage with most frequently, either through my current role or via personal projects.</h3>
      </div>
      <div className='skills-flex'>
        <div className='skills-techstack grid-container'>
          <div className='grid-item'><TechStack image={<SiHtml5 />} name="HTML5"/></div>
          <div className='grid-item'><TechStack image={<SiCss3 />} name="CSS3"/></div>
          <div className='grid-item'><TechStack image={<SiTailwindcss />} name="Tailwind"/></div>
          <div className='grid-item'><TechStack image={<SiJavascript />} name="JavaScript"/></div>
          <div className='grid-item'><TechStack image={<SiReact />} name="ReactJs"/></div>
          <div className='grid-item'><TechStack image={<SiFigma />} name="Figma"/></div>
          <div className='grid-item'><TechStack image={<SiAdobephotoshop />} name="Photoshop"/></div>
          <div className='grid-item'><TechStack image={<SiGithub />} name="GitHub"/></div>
          <div className='grid-item'><TechStack image={<SiVisualstudio />} name="VS Code"/></div>
        </div>
      </div>
    </div>
  )
}

export default Skills