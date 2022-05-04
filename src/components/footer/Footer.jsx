import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {FaSnapchatGhost} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Cosmin Oancea</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://facebook.com'><BsFacebook /></a>
        <a href='https://instagram.com'><GrInstagram /></a>
        <a href='https://snapchat.com'><FaSnapchatGhost /></a>
      </div>
      
        <div className="footer_copyright">
          <small>&copy; WeebSocial. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer