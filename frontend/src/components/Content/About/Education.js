import React from 'react'
import './Education.css'
function Education() {
  const myComponentStyle = {
    color: 'rgb(40,233,140)'
  }
  return (
    <div>
        <button className='title' id='education'>Education</button>
        <h1 className='title-heading'>My <span style={myComponentStyle}>Education</span></h1>
        {/* <ul class="custom-list">
          <li><h3>&bull; B-Tech in Computer Science and Engineering</h3></li>
          <li><h3>&bull; Class XII(CBSE)</h3></li>
          <li><h3>&bull; Class X(CBSE)</h3></li>
        </ul> */}
        <ul>
          <li><span class='line'></span><span class='number'></span>
            <div class='blob'>
              <h3>B-Tech in Computer Science and Engineering</h3>
              <h4>SRM university</h4>
              <p className='Sub-Text'>2020-2024</p>
            </div>
          </li>
          <li><span class='line'></span><span class='number'></span>
            <div class='blob'>
              <h3>Class XII(CBSE)</h3>
              <h4>Bal Bharti Public School, Kharghar</h4>
              <p className='Sub-Text'>2017-2018</p>
            </div>
          </li>
          <li><span class='line'></span><span class='number'></span>
            <div class='blob'>
              <h3>Class X(CBSE)</h3>
              <h4>Bal Bharti Public School, Kharghar</h4>
              <p className='Sub-Text'>2019-2020</p>
            </div>
          </li>
        </ul>

    </div>
  )
}

export default Education