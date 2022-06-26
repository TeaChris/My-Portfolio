import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBook} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {IoMdContacts} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><FiBook /></a>
      <a href="#services"  onClick={() => setActiveNav('services')} className={activeNav === 'about' ? 'services' : ''}><RiServiceLine /></a>
      <a href="#contact"  onClick={() => setActiveNav('contact')} className={activeNav === 'about' ? 'contact' : ''}><IoMdContacts /></a>
    </nav>
  )
}

export default Nav