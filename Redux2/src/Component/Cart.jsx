import React from "react";
import { clearcart, selectitems } from "../redux/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector(selectitems);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems == 0 && (
        <>
          <h2>Your cart is empty please continue the shopping </h2>
          <Link to="/" className="btn btn-warning">
            Please Continue Shopping
          </Link>
        </>
      )}
      {cartItems !=0 &&(
        <><button
        className="btn btn-warning mx-2"
        onClick={() => dispatch(clearcart())}
        
      >
        Clear from Cart
      </button></>
      )}
      <div className="container" style={{ width: "500px" }}>
        {cartItems.map((item) => (
          
          <div
            className="row d-flex mt-5"
            key={item.id}
            style={{ boxShadow:'5px 10px #888888'}}
          >

            <div className="col-sm-6 d-flex align-items-center">
              <img
                className="card-img-top"
                src={item.imgSrc}
                alt="Card image cap"
                style={{ width: "200px", height: "200px", marginRight: "10px" }} // Add margin for spacing
              />
            </div>
            <div className="col-sm-6">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <div className="d-flex justify-content-end">
                  {/* Align buttons to the right */}
                  <button className="btn btn-primary mx-1">{item.price}</button>
                  <button className="btn btn-success mx-2">Buy Now</button>
                  
                </div>
              </div>
            </div>
            
          </div>
          
        ))}
      </div>
    
    </>
  );
};

export default Cart;
