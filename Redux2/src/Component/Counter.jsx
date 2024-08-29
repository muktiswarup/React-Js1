import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseBy1 } from '../redux/Counterslide';

const Counter = () => {
    const count=useSelector((state)=>state. Counters)
    const dispatch=useDispatch();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increaseBy1())}>IncreaseByOne</button>
        <button onClick={()=>dispatch(decreaseBy1())}>DecreaseByOne</button>
        <button onClick={()=>dispatch(increaseBy10())}>DecreaseByTen</button>
        <button onClick={()=>dispatch(decreaseBy10())}>DecreaseByTen</button>
    </div>
  )
}

export default Counter