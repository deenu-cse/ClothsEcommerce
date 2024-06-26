import React from 'react'
import '../nav/nav.css'
import t from '../../images3/icons8-t-shirt-64.png'

export default function Nav() {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container">
          <h3><img src={t} /><span>Tee</span>Flick</h3>
          <div className='navbtn'>
            <button>Sign-Up</button>
            <button>Log-In</button>
            <button>Create <span>T-Shirt</span></button>
          </div>
        </div>
      </nav>
    </>
  )
}
