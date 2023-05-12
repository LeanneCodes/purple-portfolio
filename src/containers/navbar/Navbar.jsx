import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#skills'>Skills</a></p>
    <p><a href='#projects'>Projects</a></p>
    <p><a href='#contact'>Contact</a></p>
    <p><a href='cv.pdf' target='_blank'>CV</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar-container'>
      <div className='navbar-links'>
        <div className='navbar-link-container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-toggle'>
        {toggleMenu
          ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu-container'>
            <div className='navbar-menu-container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar