import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className='Nav_bar'>
        <div className="left"><h3>Redux-Tool-Kit</h3></div>
        <div className="middle"><button className='btn btn-warning'>Class items Total Price=0</button></div>
        <div className="right car">

        <button type="button" class="btn btn-primary position-relative">
        <span class="material-symbols-outlined">
shopping_cart
</span>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>

        </div>
    </div>
    </>
  )
}

export default NavBar