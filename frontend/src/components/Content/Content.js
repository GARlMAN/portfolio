import React from 'react'
import './Content.css'
import Summary from './Summary/Summary.js'
import About from './About/About.js'
import Education from './About/Education.js'
import Skills from './About/Skills.js'
import Projects from './About/Projects.js'
function Content() {
  return (
    <div className='Content'>
        <Summary />
        <About />
        <Education />
        <Skills />
        <Projects/>
    </div>
  )
}

export default Content