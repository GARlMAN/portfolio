import React from 'react'
import SKillCard from '../Cards/SKillCard.js'
import './Skills.css';
import ReactLogo from '../../../images/React.png'
import JS from '../../../images/JS.png'
import Python from '../../../images/Python.png'
import TF from '../../../images/TF.png'
import Pytorch from '../../../images/Pytorch.png'
import CPP from '../../../images/CPP.png'
import Mongo from '../../../images/Mongo.png'
import SQL from '../../../images/SQL.png'
function Skills() {
  const myComponentStyle = {
    color: 'rgb(40,233,140)'
  }
  return (

    <div className='Skills'>
        <button className='title' id='skills'>Skills</button>
        <h1 className='title-heading'>My <span style={myComponentStyle}>Skills</span></h1>
        <div className='SkillCards'>
          <SKillCard image={ReactLogo} Name='React' Percentage='80'/>
          <SKillCard image={JS} Name='JS' Percentage='70'/>
          <SKillCard image={Python} Name='Python' Percentage='85'/>
          <SKillCard image={TF} Name='TF' Percentage='70'/>
          <SKillCard image={Pytorch} Name='Pytorch' Percentage='70'/>
          <SKillCard image={CPP} Name='CPP' Percentage='90'/>
          <SKillCard image={Mongo} Name='MongoDB' Percentage='75'/>
          <SKillCard image={SQL} Name='SQL' Percentage='70'/>
        </div>

    </div>
  )
}

export default Skills