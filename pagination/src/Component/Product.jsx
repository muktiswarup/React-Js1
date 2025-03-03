/* import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const selectedPage = (selected) => {
    setPage(selected);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products?limit=100');
      console.log(res.data);
      setProduct(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const selectedProducts = product.slice(startIndex, startIndex + itemsPerPage);

  return (

    <div>
      {selectedProducts.length > 0 ? (
        <>
          {selectedProducts.map((item, index) => (
            <div key={index} className='pro' style={{ border: '2px solid black', width: '50vh', height: '30vh' }}>
              <div className='proo'>
                <img src={item.images} alt={item.title} style={{ height: '20vh', width: '20vh' }} />
                {item.title}
                {item.price}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>No Product</>
      )}
      {product.length > 0 && (
        <>
          <span onClick={() => selectedPage(page > 1 ? page - 1 : 1)} style={{ cursor: 'pointer' }}>
            previous
          </span>
          {[...Array(Math.ceil(product.length / itemsPerPage))].map((_, i) => (
            <span
              key={i}
              onClick={() => selectedPage(i + 1)}
              style={{ border: '2px solid black', marginLeft: '10px', cursor: 'pointer' }}
            >
              {i + 1}
            </span>
          ))}
          <span onClick={() => selectedPage(page < Math.ceil(product.length / itemsPerPage) ? page + 1 : page)} style={{ marginLeft: '30px', cursor: 'pointer' }}>
            next
          </span>
        </>
      )}
    </div>
  );
};

export default Product; */

/* import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Product = () => {
  const [product,setProduct]=useState([]);
  const [page,setPage]=useState(1);
  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      console.log(res);
      setProduct(res.data.products)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

const selectedPage=(p)=>{
  setPage(p)
}
const spage=10;
const startPage=(page-1)*spage;
const select = product.slice(startPage,startPage+spage)
  return <div>
    {
      select.length>0 ? <>
        {
          select.map((item,index)=>(
            <div key={index}>
              <div>
                {item.title}
              </div>
            </div>
          ))
        }
      </>  : <>No data Available</>
    }
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

    <span onClick={() => selectedPage(page < Math.ceil(product.length / spage) ? page + 1 : page)} style={{border:"2px solid red",marginLeft:"5px",cursor:"pointer"}}>NEXT PAGE</span>
    <span >
      {[...Array(Math.ceil(product.length/10))].map((_,i)=>(
        <span onClick={()=>{selectedPage(i+1)}} key={i} style={{border:"2px solid red",marginLeft:"5px",cursor:"pointer"}}>
          {i+1}
        </span>
      ))}
    </span>
    <span  onClick={() => selectedPage(page > 1 ? page - 1 : 1)} style={{border:"2px solid red",marginLeft:"5px",cursor:"pointer"}}>PREVIOUS PAGE</span>
    </div>
    
  </div>;
};

export default Product; */


/* import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Product = () => {
  const [product,setProduct]=useState([]);
  const [page,setPage]=useState(1);

  const fetchData= async()=>{
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=100")
      console.log(res.data)
      setProduct(res.data.products);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  const currentPage=(p)=>{
    setPage(p);
    console.log(p)
  }


  let pageLimit=10;
  let startIndex = (page-1)*pageLimit;
  let selectedItem = product.slice(startIndex,startIndex+pageLimit)
  return (
    <div>
      {
        selectedItem.length >0 ? <>
            {
              selectedItem.map((item,i)=>(
                <div key={i}>
                  {
                    <h1>Title: {item.title}</h1>
                  }
                </div>
              ))
            }
        </> : <>NO PRODUCT IS THE CART </>
      }

      <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
          {
            product.length >0 &&(
              <>
                <span onClick={()=>{currentPage(page>1?page-1:1)}} style={{border:"2px solid black",cursor:"pointer"}}>previous</span>
                {
                  [...Array(Math.ceil(product.length/10))].map((_,i)=>(
                  <span onClick={()=>{currentPage(i+1)}} key={i} style={{border:"2px solid black",marginLeft:"5px",cursor:"pointer"}}>
                    {i+1}
                  </span>
                  ))
                }
                <span onClick={()=>currentPage(page < Math.ceil(product.length /10) ? page + 1 : page)} style={{border:"2px solid black",cursor:"pointer"}}>Next</span>
              </>
            )
          }
      </div>
    </div>

    
  )
}

export default Product */



import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Product = () => {
  const [product,setProduct]=useState([])
  const [page,setPage]=useState(1);
  const fetchProduct= async()=>{
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=100")
      setProduct(res.data.products);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchProduct()
  },[])

  const currentPage=(p)=>{
    setPage(p)
    console.log(p)
  }
  let pageLimit =10;
  let startindex = (page-1)*pageLimit;
  let selectedItems = product.slice(startindex,startindex+pageLimit)
  return (
    <div>
      {
        selectedItems.length > 0 ? <>
        {
          selectedItems.map((item,index)=>(
            <div key={index}>
              {item.title}
            </div>
          ))
        }
        </> : <>No product</>
      }
      <div>
        <span onClick={()=>{currentPage(page>1?page-1:1)}} style={{marginLeft:"10px" ,cursor:"pointer"}}>Previous</span>
        {
          [...Array(Math.ceil(product.length/10))].map((_,i)=>(
            <span onClick={()=>{currentPage(i+1)}} key={i} style={{marginLeft:"10px" ,cursor:"pointer"}}>
               {i+1}
            </span>
          ))
        }
        <span  style={{marginLeft:"10px" ,cursor:"pointer"}} onClick={()=>{currentPage(Math.ceil(product.length/10)>page?page+1:page)}}>Next</span>
      </div>
    </div>
  )
}

export default Product