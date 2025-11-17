import React, { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`burger ${isOpen ? 'open' : ''}`}></span>
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
