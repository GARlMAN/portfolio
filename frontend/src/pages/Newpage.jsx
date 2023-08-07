import React from 'react'
import Description from '../components/Description/Description'
import Navbar from '../components/Navbar/Navbar.js'
import Content from '../components/Content/Content.js'
import "./Newpage.css";

function Newpage() {
  return (
    <div className='Home'>
        <Description />
        <Content />
        <Navbar />
    </div>

  )
}

export default Newpage