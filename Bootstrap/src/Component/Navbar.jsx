import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-dark navbar-dark navbar-expand-lg">
        <Link className='navbar-brand ' to='/index'><h2>Logo</h2></Link>
        <div className="ml-auto">
            <ul className='navbar-nav'>
              <li ><Link className='nav-link' to='/index'>Home</Link></li>
              <li ><Link className='nav-link' to='/product'>Product</Link></li>
              <li ><Link className='nav-link' to='/signin'>SignIn</Link></li>
              <li ><Link className='nav-link' to='/signup'>SignUp</Link></li>
            
            </ul>
        </div>
    </div>
  )
}

export default Navbar