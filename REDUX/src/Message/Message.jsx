/* import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux/Messages/message.action';

const Message = () => {
    const dispatch=useDispatch();
    const message=useSelector((state)=>{
        return state
    })
    const gmHandler=()=>{
        dispatch(gmAction());
    }
    const gnHandler=()=>{
        dispatch(gnAction());
    }
  return (
    <div>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message */


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gmAction, gnAction } from '../redux/Messages/message.action';

const Message = () => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.msz);  // Accessing the specific state value

    const gmHandler = () => {
        dispatch(gmAction());  // Call the function to get the action object
    };
    const gnHandler = () => {
        dispatch(gnAction());  // Call the function to get the action object
    };

    return (
        <div>
            <h2>{message}</h2> {/* Display the current message */}
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    );
};

export default Message;
