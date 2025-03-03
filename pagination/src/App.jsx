import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Product from './Component/Product'
import Form from './Component/Form'
const App = () => {
  return (
    <>
    <BrowserRouter>
     <Link to="/product">Product Page</Link>
     <Link to ="/form" >Form</Link>
      <Routes>
        <Route path="/form" element={<Form/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App