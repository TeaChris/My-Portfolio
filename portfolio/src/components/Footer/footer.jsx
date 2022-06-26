import React from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import{BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const footer = () => {
  return (
    <footer id="footer">
    <a href="#" className='footer__logo'>Bermuda</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

   <div className="footer__socials">
     <a href="https://facebook.com"><ImFacebook /></a> 
     <a href="https://instagram.com"><BsInstagram /></a> 
     <a href="https://twitter.com"><AiFillTwitterCircle /></a> 
    </div> 

    <div className="footer__copyright">
      <small>Bermuda | Techie</small>
    </div>
  </footer>
  )
}

export default footer