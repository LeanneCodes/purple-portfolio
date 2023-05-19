import React from 'react'
import './intro.css'

const Intro = () => {
  return (
    <div className='intro-container' id='home'>
      <div className='intro'>
        <h1>Leanne <span className='special-text'>Goldsmith</span></h1>
        <h3>Junior Frontend Developer</h3>
      </div>
      <div className='topline'>
        <p>Driven by my passion for blending technology and design, I am enthusiastic about progressing as a Junior Frontend Developer to create visually captivating and user-centric digital experiences.</p>
        <button type='button'><a href='cv.pdf' target='_blank'>Preview CV</a></button>
        <div className='intro-arrow'>
          <div className="down-arrow"></div>
        </div>
      </div>
    </div>
  )
}

export default Intro