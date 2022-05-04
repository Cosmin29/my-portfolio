import React from 'react'
import './about.css'
import Me from '../../assets/me.jpg'
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
            <img src={Me} alt="About" />
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
            Hello, my name is Cosmin, I am insightful Computer Science student from Romania and I am passionate about web development.<br></br>
            My journey starts in high school, where I learned to write C ++ code.<br></br> Since then, I have fallen in love with the world of programming.    
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About