import React from "react";
import { useSelector } from "react-redux";
import { selectcarttotalprice, selectitems } from "../redux/cartslice";
import { Link } from "react-router-dom";
const NavBar = () => {
  const cartItem = useSelector(selectitems);
  const totalprice = useSelector(selectcarttotalprice);
  return (
    <>
      <div className="Nav_bar sticky-top">
        <Link className="left navbar-brand" to='/'>
          <h3>Redux-Tool-Kit</h3>
        </Link>
        <div className="middle">
          <button className="btn btn-warning p-2">
            Card items Total Price {totalprice} ₹
          </button>
        </div>
        <Link className="right car" to='/cart'>
          <button type="button" className="btn btn-primary position-relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItem.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
