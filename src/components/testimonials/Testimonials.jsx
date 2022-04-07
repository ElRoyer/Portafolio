import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/2.jpg'
import AVTR2 from '../../assets/3.jpg'
import AVTR3 from '../../assets/1.jpg'
import AVTR4 from '../../assets/4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Manuel Terron',
    review: 'Es impresionante como hace paracer que es muy sencillo su trabajo, es un muy buen trabajo recomendado.'
  },
  {
    avatar: AVTR2,
    name: 'Dennise Ramirez',
    review: '100% Recomendado, muy satisfecha con los resultados.'
  },
  {
    avatar: AVTR3,
    name: 'Deyanira Vargas',
    review: 'Excelente trabajo, esta muy guapo y besa muy rico, 5 estrellas.'
  },
  {
    avatar: AVTR4,
    name: 'Erick Arellano',
    review: 'Excelente trabajo, eficaz y organizado. Realiza soluciones optimas.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Comentarios de Clientes</h5>
      <h2>Testimonios</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="#"/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials