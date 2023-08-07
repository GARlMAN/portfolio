import React from 'react';
import "./Toppart.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail }  from "react-icons/bi";
import { SiLeetcode }  from "react-icons/si";

function Description() {
  const myComponentStyle = {
    color: 'rgb(40,233,140)'
  }

  function sendEmail() {
    window.location = "mailto:xyz@garimanjohall@gmail.com";
  }

  return (
    <div className='topPartDiscrition'>
      <div className='Name-Disc'>
        <h1 className='title-heading'><span style={myComponentStyle}>Gariman</span></h1>
        <p>Full stack developer </p>
        <p> & ML enthusiast </p>
      </div>
      <div className='Links'>
        <a href="https://github.com/GARlMAN" target="_blank" rel="noopener noreferrer" >
          <AiFillGithub size="20px" className="Icons"/>
        </a>
        <a href="https://www.linkedin.com/in/gariman-johal-566065238/" target="_blank" rel="noopener noreferrer" >
          <AiFillLinkedin size="20px" className="Icons"/>
        </a>
        <a href="mailto:garimanjohall@gmail.com" >
          <BiLogoGmail size="20px" className="Icons"/>
        </a>
        <a href="https://leetcode.com/Ovain/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode size="20px"  className="Icons" />
        </a>
      </div>
      <p className='Email'>garimanjohall@gmail.com</p>
      <button className='Desc-Button' onClick={sendEmail}>HIRE ME!</button>
    </div>
  );
}

export default Description;
