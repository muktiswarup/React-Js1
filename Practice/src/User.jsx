import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const User = () => {
    const [user,setUser]= useState([])
    const getUsers=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setUser(res.data)
        }).catch((err)=>{console.log(err)})
    
    }
  return (
    <div>
        <pre>{JSON.stringify(user)}</pre>
        <div>
            <button onClick={getUsers}>GetUsers</button>
        </div>

        <div>
            {
                user.map((user,index)=>{
                
              return  ( <table border={1} index={index}>
                        <thead >
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>email</th>
                            </tr>
                            
                        </thead>
                        <tbody id={user.id}>
                            {<tr >
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>}
                        </tbody>
                    </table>)
                })
            }
        </div>
    </div>
    
  )
}

export default User
