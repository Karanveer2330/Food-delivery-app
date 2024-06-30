import React from 'react'
import "./Info.css"
import { Link } from 'react-router-dom'
function info() {
  return (
    <div className='ri'>

    <div className='one' style={{paddingTop:"5em",paddingBottom:"4em"}}>
          <h1>
        THE FASTEST FOOD DELIVERS IN YOUR CITY.
        </h1>
    </div>
            

        <div className='two'>

        <Link class="nav-link" to="/login">
        <button type="button"  class="button">Join us</button>
          </Link>
    </div>
    </div>
  )
}

export default info
