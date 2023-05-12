import React from 'react'
import './intro.css'
import Leanne from '../../assets/leanne.png'

const Intro = () => {
  return (
    <div className='intro-container' id='home'>
      <div className='info'>
        <h1>Leanne Goldsmith</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus suscipit, eius dolor sunt magni nulla voluptatem, quis obcaecati asperiores impedit corrupti fugit enim. Vitae vel quisquam, ratione eveniet sunt reiciendis.</p>
        <button type='button'><a href='#'>Download CV</a></button>
      </div>
      <div className='intro-image'>
        <img src={Leanne} alt="headshot" />
      </div>
    </div>
  )
}

export default Intro