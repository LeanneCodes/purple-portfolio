import React from 'react'
import './footer.css'
import FooterIcons from '../../components/footer-icons/FooterIcons';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <h1>Leanne <span className='special-text'>Goldsmith</span></h1>
        <h3>Junior Frontend Developer</h3>
        <ul>
          <li><a href="https://github.com/LeanneCodes" target='_blank'><FooterIcons icon={ <SiGithub/>}/></a></li>
          <li><a href="https://www.linkedin.com/in/leanne-goldsmith-98b965a5/" target='_blank'><FooterIcons icon={ <SiLinkedin/>}/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer