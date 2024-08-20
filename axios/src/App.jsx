import React, { useState } from "react"
import axios from "axios"
const App=()=>{
const [product,setProduct]= useState([]);
const fetch=async()=>{
 try {
  const response=await axios.get('https://fakestoreapi.com/products')
  const data=  response.data;
  setProduct(data);
  console.log(data);
 } catch (error) {
  
  console.log('Something error there',error);
 }
 
}

  const fetchData=()=>{
    fetch();
  }
  return(
    <>
    <h1>  Welcome to the product store</h1>
    <button onClick={fetchData}>Fetch Data</button>
    <div style={{display:'flex', flexWrap:'flex-wrap'}}>
      {product.map((prod,index)=>(<div key={index}><img src={prod.image} alt="Products" width='150'height='150' />Product id:{prod.id} details:{prod.description}price:{prod.price}</div>))}
    </div>
    </>
  )
}
export default App;