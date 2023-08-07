import React from 'react'

function ProjectCard1({image, title, description, link}) {
  return (
    <a className='ProjectCard1' href = {link}>
        <div class="col-md-6">
          <div class="card">
              <img class="card-img-top img-raised" src={image} alt="Open Project 1" />
              <div class="banner-content">
                <h3>{title}</h3>
                <p>{description}</p>

              </div><br />
          </div>
        </div>
    </a>
  )
}

export default ProjectCard1