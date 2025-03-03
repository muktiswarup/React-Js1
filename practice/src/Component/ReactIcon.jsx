import React from 'react'
import { AiFillAccountBook } from "react-icons/ai";
import { AiFillBug } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ReactIcon = () => {

    function notify(){
        toast('Hello everyone !')
    }
    function danger(){
        toast('Hey you are in danger..')
    }
  return (
    <div>
        <AiFillAccountBook  color="red" size="10rem"/>
        <AiFillBug  color='blue' size='10rem'/>
        <button onClick={notify}>Noatify</button>
        <button onClick={danger}>Danger</button>
        <ToastContainer/>

       

        
    </div>
  )
}

export default ReactIcon