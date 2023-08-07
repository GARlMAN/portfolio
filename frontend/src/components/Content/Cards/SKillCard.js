import React from 'react';
import './SkillCard.css';

function SKillCard({image, Name, Percentage}) {
  return (
    <div className='SKillCard'>
      <div className='SKillCard-content'>
          <img src={image}></img>
          <h2>{Percentage}%</h2>
          <h3>{Name}</h3>
      </div>
    </div>
  )
}

export default SKillCard