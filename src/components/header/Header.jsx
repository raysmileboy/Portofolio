import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Me.png'
import HeaderSocial from './HeaderSosial'




const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Raenaldy</h1>
        <h5>Web Develover</h5>
        <CTA />
        <HeaderSocial />


        <div className="me">
          <img src={ME} alt="me" />
        </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header