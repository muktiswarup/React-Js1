import React, { createContext } from 'react'
import A from './Component/A'

const Data = createContext();
const Data1 = createContext();
function App() {
  const name= " Yoshita Agarwal";
  const age= 25;
  return (
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
      <div>
      <A> </A>
      </div>
      </Data1.Provider>
       
    </Data.Provider>
   
  )
}

export default App
export {Data,Data1}