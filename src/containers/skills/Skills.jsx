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
        <h1>My Skillset</h1>
        <h3>I have a <a className='link' href='https://www.credential.net/abe70729-0419-4049-a752-62b032d231eb' target='_blank'>Diploma</a> as a Fullstack Developer.</h3>
        <h5>Below are the skills I have developed while in my current role.</h5>
      </div>
      <div className='skills-techstack'>
        <div><TechStack image={<SiHtml5 />} name="HTML5"/></div>
        <div><TechStack image={<SiCss3 />} name="CSS3"/></div>
        <div><TechStack image={<SiTailwindcss />} name="Tailwind"/></div>
        <div><TechStack image={<SiJavascript />} name="JavaScript"/></div>
        <div><TechStack image={<SiReact />} name="ReactJs"/></div>
        <div><TechStack image={<SiGreensock />} name="GSAP"/></div>
        <div><TechStack image={<SiFigma />} name="Figma"/></div>
        <div><TechStack image={<SiAdobephotoshop />} name="Photoshop"/></div>
        <div><TechStack image={<SiGithub />} name="GitHub"/></div>
        <div><TechStack image={<SiVisualstudio />} name="VS Code"/></div>
      </div>
    </div>
  )
}

export default Skills