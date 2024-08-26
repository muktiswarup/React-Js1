import React from 'react'
import { useDispatch } from 'react-redux'
import { gmAction,gEAction } from '../redux/Messages/message.action';

const Message = () => {

    let dispatch= useDispatch();
    const gmHandler=()=>{
        dispatch(gmAction())
    }
    const gnHandler=()=>{
        dispatch(gEAction())
    }
  return (
    <div>
        <button onClick={gmHandler}>
            Gm
        </button>
        <button onClick={gnHandler}>
            Gn
        </button>
    </div>
  )
}

export default Message