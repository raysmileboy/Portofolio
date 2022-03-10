import React from 'react'
import './Services.css'
import {BsJournalCheck} from 'react-icons/bs'



const Services = () => {
  return (
    <section id='services'>
        <h5>Electronic Book</h5>
        <h2>Services</h2>
      <div className="container services__container">
          <article className='service'>
            <div className="service__head">
              <h3>Networking engineer</h3>
              </div>
                <ul className='service__list'>
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Head First Networking</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Cisco ASA, 2nd Edition</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Cisco IOS XR Fundamentals</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Cisco Router Configuration Handbook, 2nd Edition</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Networking All-in-One For Dummies, 4th Edition</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Software Networks</p>
                  </li>  
                </ul>
          </article>

      {/* END OF NETWORKING */}

         <article className='service'>
            <div className="service__head">
              <h3>Web Development</h3>
              </div>
                <ul className='service__list'>
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Front-End Architecture</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Head First Web Design</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Reliable JavaScript</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Transitions and Animations in CSSt</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Pro CSS3 Layout Techniques</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Learning PHP, MySQL &amp; JavaScript, 4th Edition</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Pro HTML5 Games</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Getting MEAN with Mongo, Express, Angular, and Node</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Beginning JavaScript, 5th Edition</p>
                  </li>  
                </ul>
          </article>

      {/* END WEB DEVELOPMENT */}

         <article className='service'>
            <div className="service__head">
              <h3>Data Scientist</h3>
              </div>
                <ul className='service__list'>
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>File Management Made Simple, Windows Edition </p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Designing Efficient BPM Applications</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Big Data, Data Mining, and Machine Learning</p>
                  </li>  
                  <li>
                      <BsJournalCheck className='service__list-icon ' />  
                      <p>Scalable Big Data Architecture</p>
                  </li>  
                </ul>
          </article>

      {/* END OF DATA SCIENTIC */}

      </div>
    
    </section>

  )
}

export default Services