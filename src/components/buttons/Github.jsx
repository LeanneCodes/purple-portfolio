import React from 'react'
import './buttons.css'
import { SiGithub } from 'react-icons/si'

const Github = ({ code }) => {
  return (
    <button>
        <p><SiGithub/> {code}</p>
    </button>
  )
}

export default Github