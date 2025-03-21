import React from 'react'
import Product from './Component/Product'
import { createContext } from 'react'
import ChildA from './Component/ChildA';
import { useState } from 'react';
import './App.css'
const themeContext=createContext();
const App = () => {
 const [theme,setTheme]=useState('light');
  return (
   <div>
      <themeContext.Provider value={{theme,setTheme}}>
        <Product/>
        <ChildA/>
      </themeContext.Provider>
   </div>
  )
}

export default App
export {themeContext};
