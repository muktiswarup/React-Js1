/* import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
      } catch (error) {
        setError(error);
        console.error("There is an error:", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <div className="container mt-5">
        {error && <p>There is an error: {error.message}</p>}
        {product.length === 0 ? (
          <p>Loading the Data...</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {product.map((product, index) => {
              return (
                <div className="col mt-3" key={index}>
                  <div className="card h-100 ">
                    <div className="card-header text-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="product-img"
                        width='50%'
                      />
                      <h6>{product.title}</h6>
                    </div>
                    <div className="card-body text-center ">
                      <p>Category: {product.category}</p>
                      <h6>Price: ${product.price}</h6>
                      <h6>Rating: {product.rating.rate}</h6>
                      <button className="btn btn-success">Add to cart</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
 */




// src/components/Product.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      {error && <p>There is an error: {error}</p>}
      {loading ? (
        <p>Loading the Data...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product, index) => (
            <div className="col mt-3" key={index}>
              <div className="card h-100">
                <div className="card-header text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-img"
                    width="50%"
                  />
                  <h6>{product.title}</h6>
                </div>
                <div className="card-body text-center">
                  <p>Category: {product.category}</p>
                  <h6>Price: ${product.price}</h6>
                  <h6>Rating: {product.rating.rate}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;


