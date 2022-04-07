import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrollo la interfaz de Usuario.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrollo de paginas Web.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrollo de Aplicaciones Moviles.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creo interacciones de elementos ux.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creacion de Marca de empresa.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bases de Datos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrollo de DApp.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ecommerce Services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data Mining Services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Soluciones Tecnologicas.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Gestion global de Social Media.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Marketing de Contenidos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Gestión de Proyectos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Campañas Digitales.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services