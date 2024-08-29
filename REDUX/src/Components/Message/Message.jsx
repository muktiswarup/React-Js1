import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../../Redux/Message/message.action';

const Message = () => {
    const dispatch=useDispatch();
   const message= useSelector((state)=>{
        return state.msz
    })
    const handleGm=()=>{
        dispatch(gmAction());
    }
    const handleGn=()=>{
        dispatch(gnAction());
    }
  return (
    <div>
        <h1>
            message component
        </h1>
        <h2>{message}</h2>
        <button onClick={handleGm}>GM</button>
        <button onClick={handleGn}>GN</button>
    </div>
  )
}

export default Message 