import { useState } from "react"


function App() {
  const data={name:'',email:'',pwd:''}
 const [feild,setFeild]=useState(data);
 const handleInput=(e)=>{
    setFeild({...feild,[e.target.name]:e.target.value})
    console.log(feild);
    console.log(e.target.name)
 }

  return (
    <>
      <form style={{display:"grid",justifyContent:'center', marginLeft:'100%',width:'100%',alignContent:'center'}}>
        <div style={{display:"grid",justifyContent:'center', marginLeft:'50%',width:'50%',alignContent:'center'}}>
        <input type="text"  placeholder="Enter Your Name" required value={feild.name} onChange={handleInput} style={{alignContent:'center'}} name='name'/><br />
        <input type="email"placeholder="Enter Your Email" required value={feild.email}  onChange={handleInput} email='email'/><br />
        <input type="number"  placeholder="Enter Your password" required value={feild.pwd}  onChange={handleInput} password='pwd'/><br />
        <button>Submit</button>
        </div>
       

      </form>
    </>
  )
}

export default App
