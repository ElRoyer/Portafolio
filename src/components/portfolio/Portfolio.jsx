import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portafolio1.jpg'
import IMG2 from '../../assets/portafolio2.jpg'
import IMG3 from '../../assets/portafolio3.jpg'
import IMG4 from '../../assets/portafolio4.jpg'
import IMG5 from '../../assets/portafolio5.jpg'
import IMG6 from '../../assets/portafolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Agency Perfect',
    github: 'https://github.com/ElRoyer/elroyer_agency.github.io.git',
    demo: 'https://elroyer.github.io/elroyer_agency.github.io/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Interior de diseños',
    github: 'https://github.com/ElRoyer/InteriorDesign.git',
    demo: 'https://elroyer.github.io/InteriorDesign/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Speed Sport Cycle',
    github: 'https://github.com/ElRoyer/Speed.git',
    demo: 'https://elroyer.github.io/Speed/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Gym Fitness',
    github: 'https://github.com/ElRoyer/Gym.git',
    demo: 'https://elroyer.github.io/Gym/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Rento Car',
    github: 'https://github.com/ElRoyer/Car.git',
    demo: 'https://elroyer.github.io/Car/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Business Oriented',
    github: 'https://github.com/ElRoyer/Business.git',
    demo: 'https://elroyer.github.io/Business/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi Reciente Trabajo</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio