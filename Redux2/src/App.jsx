import React from 'react'
import NavBar from './Component/NavBar'
import Product from './Component/Product'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './Component/Cart'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Product/>}/>
        <Route path='/cart' element={ <Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App