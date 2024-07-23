/* import ChildA from "./Component/ChildA";
const App = ()=>{
const name= 'Vinod Kamboli'
  return(
    <div>
      <h1>Hi i am Parent Component</h1>
      <ChildA name={name}/>
    </div>
  )
}
export default App; */
//..............................................................................................

import { createContext } from "react";
import ChildA from "./Component/ChildA";

const DataContext = createContext();
const DataContext1= createContext();
const App = ()=>{
const name= 'Yoshita Agarwal';
const age = 25;
  return(
    <div>
      
      <DataContext.Provider value={name}>
      <DataContext1.Provider value={age}>
      <ChildA/>
      </DataContext1.Provider>
      
      </DataContext.Provider>
      
    </div>
  )
}
export default App;
export {DataContext,DataContext1};