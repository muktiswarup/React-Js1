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

import React, { useState } from 'react';

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

export default State;