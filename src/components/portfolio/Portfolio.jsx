import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Login Page.png'
import IMG2 from '../../assets/Home page.png'
import IMG3 from '../../assets/Profile page.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'WeebSocial Login Page',
    github: 'https://github.com/Cosmin29/G11-WebAppProgramming-C.M.O./tree/main1.1',
  },
  {
    id: 2,
    image: IMG2,
    title: 'WeebSocial Home Page',
    github: 'https://github.com/Cosmin29/G11-WebAppProgramming-C.M.O./tree/main1.1',
  },
  {
    id: 3,
    image: IMG3,
    title: 'WeebSocial Profile Page',
    github: 'https://github.com/Cosmin29/G11-WebAppProgramming-C.M.O./tree/main1.1',
    demo: ''
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">Github</a>
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