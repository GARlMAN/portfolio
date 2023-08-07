import React from 'react'
import './About.css'
function About() {
  const myComponentStyle = {
    color: 'rgb(40,233,140)'
  }
  return (
    <div className='About' id='about'>
        <button className='title'>About</button>
        <h1 className='title-heading'><span style={myComponentStyle}>About</span> Me</h1>
        <p className='Sub-Text'>Hello there! I'm  Gariman Johal, a final-year Computer Science student at the SRM University. I am a tech enthusiast with a deep passion for developing innovative applications and collaborating with like-minded individuals.
        Throughout my academic journey, I have constantly sought opportunities to challenge myself and stay updated with the latest advancements in the world of technology. My coursework has equipped me with a strong foundation in programming languages, software development methodologies, and problem-solving techniques.</p>
    </div>
  )
}

export default About