import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByValue } from '../../Feature/CounterSlice';

const Home = () => {
  const [input,setInput]=useState(0);
  const value=useSelector((state)=>state.Counter.value)
  const dispatch=useDispatch();
  const incrementt=()=>{
    dispatch(increment());
  }
  const decrementt=()=>{
    dispatch(decrement());
  }
  const handleInput=(e)=>{
    setInput(e.target.value);
  }
  const valuetoadd=(num)=>{
    dispatch(incrementByValue(Number(num)))
  }
  return (
    <div>
      <div>
        <button onClick={incrementt }>INCREMENT</button>
        <h3>Value:{value}</h3>
        <button onClick={decrementt}>DECREMENT</button><br />
        <input type="number" onChange={handleInput} /><br />
        <button onClick={() => valuetoadd(input)}>ValueToAdd</button>
      </div>
    </div>
  )
}

export default Home