import React from 'react'
import './Education.css'

function Education() {
  return (
    <div className='edu-main'>
      <div className="out">
        <div className='list'>
          <h3>SECONDARY SCHOOL</h3>
          <h2>Dept Of Pre-University Education</h2>
          <p>2017 - 2018</p>
        </div>
        <div className='image'>
          <img style={{height:"280px"}} src="images/univ.png" alt="" />
        </div>
        
      </div>
      <div className="out">
        <div className='list'>
          <h3>BACHELOR OF ENGINEERING</h3>
          <h2>Indian Institute of Technology and Management.</h2>
          <p>2018 - 2022</p>
        </div>
        <div className='image'>
          <img style={{height:"280px"}} src="images/univ.png" alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default Education
