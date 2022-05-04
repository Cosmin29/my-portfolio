import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className ="container services_containers">
        <article className="services">
          <div className ="service_head">
            <h3>UI Design</h3>
          </div>

          <ul className ="service_list">
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Modern and Visually attractive graphical layout.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Fastest delivery.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Quick response.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>24/7 customer support.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI */}
        <article className="services">
          <div className ="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className ="service_list">
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Responsive apps.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Full-Stack WEB DEVELOPMENT Services.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Custom Web Application.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="services">
          <div className ="service_head">
            <h3>Mentorship</h3>
          </div>

          <ul className ="service_list">
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>6 hours/week mentorship.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Work with people over 6 years old.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Homework and logic understanding of programming.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Fun working environment.</p>
            </li>
          </ul>
        </article>
        {/* END OF MENTORSHIP */}
      </div>
    </section>
  )
}

export default Services