import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsTelegram} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'




const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
           <div className="contact__options">
                <article className='contact__option'>
                    <MdOutlineMail  className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>Raenaldy40@gmail.com</h5>
                    <a href="mailto:raenaldy40@gmail.com" target="_blank">Send A Massage</a>
                  </article>
                <article className='contact__option'>
                    <BsTelegram  className='contact__option-icon' />
                    <h4>Telegram</h4>
                    <h5>Ray</h5>
                    <a href="raenaldy40@gmail.com" target="_blank">Send A Telegram</a>
                  </article>
                <article className='contact__option'>
                    <ImWhatsapp  className='contact__option-icon' />
                    <h4>Whatsapp</h4>
                    <h5>085815252594</h5>
                    <a href="https://api.whatsapp.com/send?phone=085815252594" target="_blank">Send A Massage</a>
                  </article>
             </div>
            {/* END OF CONTACT OPTIONS */}
            <form ref={form} onSubmit = {sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required/>  
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="message" rows="7" placeholder='Your Massage' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
      
      </section>
  )
}

export default Contact