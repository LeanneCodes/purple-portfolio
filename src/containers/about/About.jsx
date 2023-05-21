import React from 'react'
import './about.css'
import stamp from '../../assets/stamp.png'

const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className='about-info'>
            <h2>About <span className='special-text'>Me</span></h2>
            <p>I'm Leanne, a Junior Frontend Developer and Dynamic Creative Manager experienced in creating HTML, CSS, and JavaScript display ads for a few notable clients.</p>
            <p>To understand and implement code in my day-to-day, I earned a <a href='https://www.credential.net/abe70729-0419-4049-a752-62b032d231eb#gs.y4bm8n' target='_blank' style={{ color: '#9384D1', fontWeight: 600, textDecoration: 'underline' }}>diploma</a> as a Fullstack eCommerce developer. During this course, I thoroughly enjoyed frontend development and I'm continually seeking out resources to help me develop my knowledge, so I'm up-to-date with the latest technologies.</p>
            <p>I am a team player and my favourite thing about working and collaborating with many people is that there is always more to learn, and I can bring some fresh, out-of-the-box thinking to the team and other stakeholders.</p>
            <p><a href='#skills' style={{ color: '#9384D1', fontWeight: 600, textDecoration: 'underline' }}>Below</a> are the technologies I am proficient in.</p>
        </div>
        <div className='about-image'>
            <img src={stamp} alt="Leanne" className='stamp'/>
        </div>
    </div>
  )
}

export default About