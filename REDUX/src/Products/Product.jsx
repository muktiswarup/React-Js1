import React from 'react'
import { useDispatch } from 'react-redux'
import { decAction, incAction } from '../redux/Products/product.action';

const Product = () => {
let dispatch= useDispatch();
    dHandler=()=>{
        dispatch(decAction())
    }
    iHandler=()=>{
        dispatch(incAction)
    }
  return (
    <div>
        <h4>Product component</h4>
        <button onClick={dHandler}>-</button>
        {1}
        <button onClick={iHandler}>+</button>
    </div>
  )
}

export default Product