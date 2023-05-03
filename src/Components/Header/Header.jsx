import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <body>
        <nav>
            <div className="logo">
                <Link to='/'><img src="/images/Logo1.png" alt="" /></Link>
            </div>

            <input type="checkbox" id='check' />

            <ul>
                <Link to='/project'><li>Projects</li></Link>
                <Link to="/education"><li>Education</li></Link>
                <Link to="/link"><li>Project-Links</li></Link>
                <Link to="/about"><li>About Me</li></Link>
            </ul>

            <div className='ham'>
              <label for="check">
              <i class='bx bx-menu ham-open'></i>
              <i class='bx bx-x ham-close'></i>
              </label>
            </div>

        </nav>
    </body>
      
    </>
  )
}

export default Header
