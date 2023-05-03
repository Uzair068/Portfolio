import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
    <body>
        <nav>
            <div className="logo">
                <img src="/images/Logo1.png" alt="" />
            </div>

            <input type="checkbox" id='check' />

            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>School</li>
                <li>Market</li>
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
