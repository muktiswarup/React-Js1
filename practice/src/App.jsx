import Debounce from "./Component/Debounce";
import ReactIcon from "./Component/ReactIcon";
import State from "./Component/State";
import StopWatch from "./Component/StopWatch";
import Form from "./Component/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Product from "./Component/Product";
const App =()=>{
  const name = "Ashok Babu";
  const user = {
    name : "Amit Bhadana",
    age: 25
  }
  return (
<>


<BrowserRouter>
<State name= {name} user = {user}/>
<ReactIcon />
<StopWatch />
<Debounce/>
<Form/>
<Link to="/product">Prduct page</Link>
<Routes>
    <Route path="/product" element={< Product/>} />
</Routes>
</BrowserRouter>
</>

  )
}
export default App;
