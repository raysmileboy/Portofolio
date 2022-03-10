import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'


const HeaderSosial = () => {
  return (
    <div className='header__sosial'>
        <a href="https://www.linkedin.com/in/raenaldy-55b101123/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/raysmileboy" target="blank"><FaGithub/></a>
        <a href="https://www.youtube.com/channel/UCCaBhnI9kMWTFhjnmGkvxew" target="blank"><BsYoutube/></a>

    </div>
  )
}

export default HeaderSosial