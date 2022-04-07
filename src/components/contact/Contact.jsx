import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fjfb17', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Ponerse en</h5>
      <h2>Contacto conmigo</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>royy.hdez@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com">Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Rodrigo hdez</h5>
            <a href="https://m.me/ElRoyerman" target="_blank" rel="noreferrer" >Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+52 5545476654</h5>
            <a href="https://api.whatsapp.com/send?phone=+525545476654">Enviar Mensaje</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre Completo' required />
          <input type="email" name='email' placeholder='Correo Electronico' required />
          <textarea name="message" rows="7" placeholder='Tu mensaje' required ></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact