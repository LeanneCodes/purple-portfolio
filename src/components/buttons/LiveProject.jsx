import React from 'react'
import './buttons.css'
import { BiLink } from 'react-icons/bi'

const LiveProject = ({ live }) => {
  return (
    <button>
        <p><BiLink/> {live}</p>
    </button>
  )
}

export default LiveProject