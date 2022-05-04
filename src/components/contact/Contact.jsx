import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiDiscord} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hozq9t8', 'template_cxrdaza', form.current, 'F2Xo3MlzlZ62dqQef')
    
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>o.cosmin434@gmail.com</h5>
          <a href="mailto:o.cosmin434@gmail.com">Send a mail</a>
        </article>
        <article className="contact_option">
          <SiDiscord className='contact_option-icon'/>
          <h4>Discord</h4>
          <h5>Cosmin#3383</h5>
          <a href="https://discordapp.com/users/612876091069169680/">Let's talk on Discord</a>
        </article>
        <article className="contact_option">
          <IoLogoWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+40 735 021 451</h5>
          <a href="https://api.whatsapp.com/send?phone=40735021451">Send a message</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact