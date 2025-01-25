/* import React,{useState} from 'react'

const State = ({name,user}) => {
    // const [state,setState]= useState(0);
    const [profile, setProfile] = useState({
        name: "John Doe",
        age: 30,
        address: {
          city: "New York",
          country: "USA",
        },
      });
    
      const updateName = () => {
        setProfile((prev) => ({ ...prev, name: "Jane Smith" }));
      };
    
      const updateCity = () => {
        setProfile((prev) => ({
          ...prev,
          address: { ...prev.address, city: "Los Angeles" },
        }));
      };
    
  return (
    // <div>
    //     <p>state: {state}</p>
    //     <button onClick={()=>setState(state+1)}>
    //         increment 
    //     </button>
    //     <h1>My name is {name}.</h1>
    //     <h2>My name is {user.name} and my age is {user.age}</h2>
    //</div>
    <div>
      <h2>Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>City: {profile.address.city}</p>
      <p>Country: {profile.address.country}</p>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateCity}>Update City</button>
    </div>
  )
}

export default State */

import { useState } from "react";

/* import React, { useState } from 'react';

function State() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
  });

  const updateName = () => {
    setProfile((prevProfile) => ({ ...prevProfile, name: 'Jane Smith' }));
  };

  const updateCity = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      address: { ...prevProfile.address, city: 'Los Angeles' },
    }));
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>City: {profile.address.city}</p>
      <p>Country: {profile.address.country}</p>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateCity}>Update City</button>
    </div>
  );
}

export default State; */
/* 
import { useState } from 'react'
const State = () => {
  const [profile,setProfile]= useState({
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
  })

  const updateName= ()=>{
    setProfile((prev)=>({...prev,name:"Ashok Lila"}))
  }
  const updateAge= ()=>{
    setProfile((prev)=>({
      ...prev,age:32
    }))
  
  }
  const updateCity=()=>{
    setProfile((prev)=>({
      ...prev,address:{...prev.city,city:'florida'}
    }))
  }
  return (
    <>
      <div>
          <h1>name:{profile.name}</h1>
          <h1>age:{profile.age}</h1>
          <h1>city:{profile.address.city}</h1>
          <button onClick={updateName}>UpdateName</button>
          <button onClick={updateAge}>UpdateAge</button>
          <button onClick={updateCity}>UpdateAddress</button>
      </div>
    </>
  )
}

export default State */

/* const State=()=>{
  const [profile,setProfile]=useState({
    name :"Rakesh Roshan",
    Age:32,
    Gender:"Male",
    address:{
      city:'Mumbai',
      country:'india'
    }
  })
  const updateName= ()=>{
    setProfile((prev)=>({
      ...prev,name:"Kailash Mohanty"
    }))
  }
  const updateGender=()=>{
    setProfile((prev)=>({
      ...prev,Gender:"Female"
    }))
  }
  const updateCity=()=>{
    setProfile((prev)=>({
      ...prev,address:{...prev.city,city:"Buguda"}
    }))
  }


  return(
    <div>
      <h1>name: {profile.name} <br />
      age:{profile.Age}  <br />
      gender:{profile.Gender} <br />
      address:{profile.address.city} <br /></h1>
      <button onClick={updateName}>updateName</button>
      <button onClick={updateGender}>updateGender</button>
      <button onClick={updateCity}>UpdateCity</button>
    </div>
  )
}
export default State; */


/* const State = () => {
  const [quantity,setQuantity]=useState(1);
  const [price,setPrice]=useState(100);
  const totalPrice=quantity * price ;

  return (
    <div style={{justifyContent:'center',textAlign:'center'}}>
      <h1 >Welcome to the User interface</h1><hr />
      <label htmlFor="">
        <input type="number" value={quantity} onChange={setQuantity((e)=>Number(e.target.value))} /> <hr />
        <input type="number" value={price} onChange={setPrice((e)=>Number(e.target.value))} /> <br />
      </label>
    </div>
  )
}

export default State */



function State() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(100);

  const updateQuantity= (e)=>{
    setQuantity(Number(e.target.value))
  }
  const updatePrice= (e)=>{
    setPrice(Number(e.target.value))
  }

  const totalPrice = quantity * price;

  return (
    <div>
      <h2>Price Calculator</h2>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={updateQuantity}
        />
      </label>
      <br />
      <label>
        Price per Unit:
        <input
          type="number"
          value={price}
          onChange={updatePrice}
        />
      </label>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default State;
