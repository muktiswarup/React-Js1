import ReactIcon from "./Component/ReactIcon";
import State from "./Component/State";
import StopWatch from "./Component/StopWatch";
const App =()=>{
  const name = "Ashok Babu";
  const user = {
    name : "Amit Bhadana",
    age: 25
  }
  return (
<>
<State name= {name} user = {user}/>
<ReactIcon />
<StopWatch />
</>

  )
}
export default App;
