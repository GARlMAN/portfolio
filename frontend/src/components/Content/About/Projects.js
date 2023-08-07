import React from 'react'
import ProjectCard1 from '../Cards/ProjectCard1.js'
import ProjectCard2 from '../Cards/ProjectCard2.js'
import './Projects.css';
import Ecom from '../../../images/Ecommerce.png'
import FasalSetu from '../../../images/FasalSetu.png'
import Seq from '../../../images/seq2seq.png'
import siamese from '../../../images/siamese.png'
const myComponentStyle = {
    color: 'rgb(40,233,140)'
  }
function Projects({image}) {
  return (
    <div>
        <button className='title' id='projects'>Projects</button>
        <h1 className='title-heading'>My <span style={myComponentStyle}>Projects</span></h1>
        <div className='ProjectCards'>

            <ProjectCard2 image = {Ecom} title="Ecommerce" description="This is a fully functional Ecommerce website using mern stack "
              link = "https://github.com/GARlMAN/E-Commerce-website"/>


            <ProjectCard1 image = {Seq} title="Machine Traslation" description="Machine Translation using Seq 2 Seq Neural Network Architecture using pytorch"
              link = "https://github.com/GARlMAN/Machine-Translation-Seq2Seq-" 
            />
            <ProjectCard1 image = {siamese} title="Face Recognition" description="Face recognition using one shot learning done in keras "
              link = "https://github.com/GARlMAN/Face-Recognition" 
            />

            <ProjectCard2 image = {FasalSetu}  title="Fasal Setu" description="An AgroTech Platform that bridges the gap between
    the farmers and the urbanites " link = "https://fasal-setu-dshack.netlify.app/" />



              
              
            
            
 
        </div>
    </div>
  )
}

export default Projects