import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseby1, increaseby1 } from '../redux/countslice/countslice'

const Counter = () => {
    const count=useSelector((state)=>{
        return state.Counter
    })
    const dispatch=useDispatch()
  return (
    <div>
        <h1>Count Value Is ={count}</h1>
        <button onClick={()=>{dispatch(increaseby1())}}>Increase By One</button>
        <button onClick={()=>{dispatch(decreaseby1())}}>Decrease By One</button>
    </div>
  )
}

export default Counter