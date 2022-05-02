import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {RiFoldersLine} from 'react-icons/ri'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>10+</small>
            </article>

            <article className="about_card">
              <RiFoldersLine className="about_icon"/>
              <h5>Projects</h5>
              <small>2</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About