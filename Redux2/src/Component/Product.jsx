import React from 'react'
import  Products from '../data'
import { useDispatch,useSelector } from 'react-redux'
import {addtocart} from '../redux/cartslice';
import { selectitems } from '../redux/cartslice';

const Product = () => {
    const dispatch=useDispatch();
const cartitems=useSelector(selectitems)
console.log(cartitems)
const handleAddToCart=(item)=>{
    dispatch(addtocart(item))
   
}
  return (
    <>   
       <div className="container my-5">
        <div className="row">
            {
                Products.map((item)=>{
                    return(
                        <div className="container col-md-4 mt-3" key={item.id}>
                            
                            <div className="card bg-dark d-flex justify-content-center align-items-center" style={{width: '18rem',borderRadius:"10px"}}>
                                <div><img className="card-img-top" src={item.imgSrc} alt="Card image cap" style={{width:'200px',height:'200px'}} /></div>
  
  <div className="card-body text-light text-center">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <button className='btn btn-primary mx-3'>{item.price}</button>
    <button className='btn btn-warning' onClick={()=>handleAddToCart(item)}>Add to Card</button>
  </div>
</div>
                        </div>
                    )
                })
            }
        </div>
       </div>
    </>
  )
}

export default Product


/* 2. Passing item to addtocart (Redux Action)
Purpose: Once the handleAddToCart function receives the item, it needs to pass that item to the Redux addtocart action. This action is responsible for updating the Redux store with the new item.
How it works: Inside handleAddToCart, the item is passed to the addtocart action when dispatch is called. The action then updates the state by adding the item to the items array in the Redux store.

1. Passing item to handleAddToCart (Button Click Event)
Purpose: When a user clicks the "Add to Cart" button, the handleAddToCart function needs to know which specific product (item) the user intends to add to the cart.
How it works: The onClick event handler in the button calls the handleAddToCart function and passes the item as an argument. */