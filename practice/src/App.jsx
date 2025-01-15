import State from "./Component/State";
const App =()=>{
  const name = "Ashok Babu";
  const user = {
    name : "Amit Bhadana",
    age: 25
  }
  return (
<>
<h1>Hello</h1>
<State name= {name} user = {user}/>
</>

  )
}
export default App;
