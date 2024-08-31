import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [product,setProuct]=useState([]);
    useEffect(()=>{
        const fetchProduct= async ()=>{
            try {
                const response= await axios.get('https://fakestoreapi.com/products')
                setProuct(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct();
    })
  return (<>
        <div className="container-fluid mt-5">
            {product.length===0}
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <img src="https://cubanvr.com/wp-content/uploads/2023/07/ai-image-generators.webp" alt="Something" width='100%' />
                            <h4>Title</h4>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Category</p>
                            <h5>Price</h5>
                            <h6>rating</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
    
  )
}

export default Product