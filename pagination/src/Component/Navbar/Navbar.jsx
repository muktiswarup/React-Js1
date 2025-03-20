import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className='navbar'>
        <div className='left' >
        <Link className='link' to='/'>My Website</Link>
        </div>
        
        <div className='right'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/product '>Product</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/contact'>Contact</Link>
        </div>
    </div>
    </>
    
  )
}

export default Navbar