import React from 'react'
import CV from '../../assets/CV Oancea Cosmin-Mihai.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contacts" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}
 
export default CTA