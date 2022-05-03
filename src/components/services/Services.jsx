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
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="services">
          <div className ="service_head">
            <h3>HOBBIES</h3>
          </div>

          <ul className ="service_list">
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
            <li>
              <AiOutlineCheckCircle className ="service_list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </li>
          </ul>
        </article>
        {/* END OF HOBBIES */}
      </div>
    </section>
  )
}

export default Services