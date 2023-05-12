import React from 'react'
import './intro.css'
import Leanne from '../../assets/leanne.png'

const Intro = () => {
  return (
    <div className='intro-container' id='home'>
      <div className='info'>
        <h1>Leanne Goldsmith</h1>
        <h3>Junior Frontend Developer</h3>
        <p>I have a diploma as a Fullstack eCommerce developer, with a passion for JavaScript, ReactJs and Figma.<br/><br/>In my current role, I build display banner ads for a range of clients, using designs from Figma and Photoshop and I find great joy in this.<br/><br/>Therefore, I am looking for opportunities to grow as a FrontEnd developer.</p>
        <button type='button'><a href='#'>Download CV</a></button>
      </div>
      <div className='intro-image'>
        <img src={Leanne} alt="headshot" />
      </div>
    </div>
  )
}

export default Intro