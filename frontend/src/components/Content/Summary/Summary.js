import React from 'react'
import ReactCurvedText from "react-curved-text";
import './Summary.css'
import circle from '../../../images/button.png'
const myComponentStyle = {
  color: 'rgb(40,233,140)'
}
function Summary() {
  return (
    <div className='Summary'>
        <button className='title' id='home'>Home</button>
        <h1>Hi, </h1>
         <h1>I'm <span style={myComponentStyle}>Gariman Johal</span></h1>
        <h1>A Full Stack Developer   </h1>
        <h1>and Machine Learning</h1>
        <h1>Enthusiast</h1>
        <p style={{opacity: '70%'}}>I like to code and meet new people</p>
        <h4 className='Image-text'>Projects</h4>
        <div className="rotating-image-container">
        <a href = "#projects">
          <img src={circle} alt="Rotating Image" className="rotating-image" />
        </a>
       
    </div>

      </div>

  )
}

export default Summary