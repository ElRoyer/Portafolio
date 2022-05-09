import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce más</h5>
      <h2>Acerca de mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME}/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>2+ Años Trabajando</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>5+ Diferentes Empresas</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projectos</h5>
              <small>20+ Completados</small>
            </article>
          </div>

          <p>
          Hola Mi nombre es Rodrigo y soy Ingeniero en Sistemas, a lo largo de mi carrera profesional he desarrollado muchos proyectos y adquirido 
          suficientes habilidades para poder brindarte un excelente servicio. No dudes en contactarme sí tienes un proyecto en mente.   
          </p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About