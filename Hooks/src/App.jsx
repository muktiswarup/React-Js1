import { useCallback, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
// import Student from "./Student";
import Callback from "./Callback";
import './App.css'

//........................................................
//1. useState
/* const App=()=>{
  const [color,setColor]=useState('red');
return(
  <>
  <div>
    <h1 style={{color:color}} >Hello Coding Platform</h1>
  </div>
  <div>
    <button onClick={()=>(setColor((col)=>col==='red'?'blue':'red'))}>{color==='red'?'blue':'red'}</button>
  </div>
  </>
)
}
export default App; */


//.........................................................
//2.useEffect
/* const App= ()=>{
const [count,setCount]= useState(0)
const [click,setClick]= useState('mukti')

useEffect(()=>{
  console.log('Hi i am mukti swarup jena')
},[click])
  const clickCount=()=>{
    setCount(count+1)
  }
const clickMe=()=>{
  setClick(click==='mukti'?'Chandra': 'mukti')
}
return(
<>
<div>
  <h1>Total no of count is:{count}</h1>
  <p>i am {click}</p>
  <button onClick={clickCount}>Count</button>
  <button onClick={clickMe}>click me </button>
</div>

</>

)
}
export default App; */

//................................................................

//3.useRef: Directly manipulate Dom element..


/* const App =()=>{
  const [number, setNumber]= useState(0);
  const element= useRef(0)
  const count=useRef(0);
  
  useEffect(()=>{
    count.current=count.current+1
  })

  const inputM=()=>{
    console.log(element.current);
    element.current.style.backgroundColor='blue'
  }

  return(
    <>
    <div >
        <button onClick={()=>{setNumber((pev)=>pev-1)}}>-</button>
        <h3>Number: {number}</h3>
        <button onClick={()=>{setNumber((pev)=>pev+1)}}>+</button>
    </div>

    <h2>no of count:{count.current}</h2>
    <input type="text" ref={element} />
    <button onClick={inputM}>Click Me</button>
    </>
  )
}
export default App; */
//.................................................................
//4. useMemo

/* const App =()=>{
const [number,setNumber]= useState(0);
const [count,setCount]= useState(0);
  function cube(num){
    console.log('calculation done!');
    return Math.pow(num,3)
  }
  const result=useMemo(()=>cube(number),[number]);

  return(
    <>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <h3>The power of the input number is:{result}</h3>
      <button onClick={()=>setCount(count+1)}>count++</button>
      <h3>The number of count is:{count}</h3>
    </>
  )
}
export default App; */
//................................................................

//props
/* const App= ()=>{

  return(
    <>
    <div className="prop">
      <Student name='Spancer Johnson' age={32} isStudent={false} />
      <Student name='Michel Phillips' age={20} isStudent={true} />
      <Student name='David Warner' age={10} isStudent={true} />
    </div>
    </>
  )
}
export default App; */

//..................................................................
// Use CallBack 
/* const App= ()=>{
  const [count,setCount]= useState(0);

 const Learning= useCallback(()=>{
 //some operation
 },[])
  return (
    <>
    <div>
      <h2>Number of Count is:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Count++</button>
    </div>
    <Callback Learning={Learning}/>
    </>
  )
}
export default App; */
