import React from 'react'
import './about.css'
import profile from '../../assets/post-it-note.png'
import stamp from '../../assets/stamp.png'

const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className='about-info'>
            <h2>About <span className='special-text'>Me</span></h2>
            <p>I'm Leanne, a Junior Frontend Developer and Dynamic Creative Manager experienced in strategising digital ad campaigns and implementing engaging HTML, CSS, and vanilla JavaScript ad formats.</p>
            <p>As part of my training in Frontend development, I also earned a <a href='https://www.credential.net/abe70729-0419-4049-a752-62b032d231eb#gs.y4bm8n' target='_blank' style={{ color: '#9384D1', fontWeight: 600 }}>diploma</a> in Fullstack eCommerce. I'm continually seeking out resources to help me develop my knowledge, so I'm up-to-date with the latest technologies.</p>
            <p>I am a go-getter and will always put in the effort to meet deadlines. And my favourite thing about working and collaborating with many people is that there is always more to learn, and I can bring some fresh, out-of-the-box thinking to the team and other stakeholders.</p>
            <p><a href='#skills' style={{ color: '#9384D1', fontWeight: 600 }}>Below</a> are the technologies I am proficient in.</p>
        </div>
        <div className='about-image'>
            <img src={profile} alt="Leanne" className='post-it'/>
            <img src={stamp} alt="Leanne" className='stamp'/>
        </div>
    </div>
  )
}

export default About