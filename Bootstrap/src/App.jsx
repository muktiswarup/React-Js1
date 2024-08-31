import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Component/Product';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Home from './Component/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/index' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App