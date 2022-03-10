import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar0.jpg'
import AVTR2 from '../../assets/avatar1.jpg'
import AVTR3 from '../../assets/avatar2.jpg'
import AVTR4 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
  {
    avatar: AVTR1,
    name: 'Elon Musk',
    riview: 'People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working. ' 
  },

  {
    avatar: AVTR2, 
    name: 'Albert Estein',
    riview: 'We cannot solve our problems with the same thinking we used when we created them.'
  },
  
  {
    avatar: AVTR3, 
    name: 'Jeff Bezos',
    riview: 'very frequently get the question: Whats going to change in the next 10 years?'
  },

  {
    avatar: AVTR4, 
    name: 'Alan Turing',
    riview: 'Sometimes it is the people no one imagines anything of who do the things that no-one can imagine'
  },
]



const Testimonials = () => {
  return (
    <section id='testimonial'>
        <h5>Quote</h5>
        <h2>Motivation</h2>

      <Swiper className='container testimonials__container'
              // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}          
      
      > 
        {
          data.map(({avatar, name, riview}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__riview'><q>{riview}</q></small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials