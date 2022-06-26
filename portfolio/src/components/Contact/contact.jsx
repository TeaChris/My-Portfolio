import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_t6xi25h', 'template_nz5tmva', form.current, 'Iu9wpTOkwZiPgHVzL')
    
  e.target.reset()
};

  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
        <HiOutlineMailOpen className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>teechris110@gmail.com</h5>
            <a href="mailto: olasunkanmiboluwatife110@gmail.com" target='blank'>Send a message</a>
        </article>
        <article className="contact__option">
        <BsMessenger contact__option-icon/>
          <h4>Messanger</h4>
          <h5>Olasunkanmi</h5>
            <a href="https://www.facebook.com/profile.php?id=100063758204860" target='blank'>Send a message</a>
        </article>
        <article className="contact__option">
        <BsWhatsapp contact__option-icon/>
          <h4>Whatsapp</h4>
          <h5>Bermuda</h5>
            <a href="https://api.whatsapp.com/send?phone=+23408146913991" target='blank'>Send a message</a>
        </article>
      </div>
      {/* ======= CONTACT FORM ========= */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name'  placeholder='Olasunkanmi' required />
        <input type="email" name='email'  placeholder='Olasunkanmiboluwatife110@gmail.com' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact