import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'
import {BiConversation} from 'react-icons/bi'




const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    
      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>  
        </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className='about__card'>
            <CgWebsite className='about__icon'/>
            <h5>Website</h5>
            <small>6</small>
          </article>

          <article className='about__card'>
            <BiConversation className='about__icon'/>
            <h5>Projects</h5>
            <small>0</small>
          </article>
        </div>
        <p>
        Hello Friend, My name is Raenaldy, my nick is name aldy,  i'm 26 Years Old, I'm a Web Developer, I'm Single. I'm A Muslim
        my Home Address is Jln Smpn 13 Depok, My Hobies Are Playing Badminton and Games, My Favorite Food Are Noodles and Baso, 
        My Favorite Movies Are Lord Of the Ring and Avengers That's All About Me.</p>
        <p>I believe that I meet all the requirements that your company needs. As a graduate informatics from Jakarta Veterans National Development University <q>UPNVJ</q>, I have great knowledge about operating computers, web development and network engineer. 
        I have previously worked at PT Bonafide Mandiri esports for 4 months. My CV has been attached which outlines all my qualifications in detail. I would appreciate every opportunity to discuss myself and continue the next recruitment process. I will look forward to hearing from you soon. Thank you. </p> 
      
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About