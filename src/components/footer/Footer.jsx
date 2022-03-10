import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonial">Motivation</a></li>
          <li><a href="#contact">Contact Me</a></li>
      </ul>
    <div className="footer__sosial">
          <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
          <a href="https://www.instagram.com/raenaldy40/" target="_blank"><FiInstagram /></a>
          <a href="https://twitter.com/home?lang=id" target="_blank"><BsTwitter/></a>
          </div>

      <div className="footer__copyright">
          <small>&copy;2022  Raenaldy Portofolio. All right reserved.</small>

        </div>



    </footer>
  )
}

export default Footer