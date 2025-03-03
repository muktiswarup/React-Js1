/* import React, { useState } from 'react'

const Form = () => {
    const [items, setItems] = useState([]);
    const [name, setNames] = useState("")

    const submitForm=(e)=>{
        e.preventDefault();
        let objItem = { id: items.length + 1, value: name };
        setItems([...items, objItem])
    }
    const handleChange = (e) => {
        let data = e.target.value;
        setNames(data);
        };
  return (
    <div>
        <form onSubmit={submitForm}>
            <input type="text"  id="name" value={name} onChange={handleChange}  />
            <button type="submit">Add Item</button>
        </form>
        <ul>
        {items.map((item) => (
        <li key={item.id}>
        ID: {item.id}, Value: {item.value}
        </li>
 ))}
 </ul>
    </div>
  )
}

export default Form */


/* import React, { useState } from 'react'

const Form = () => {
    const [name,setName]= useState('');
    const [item,setItem]=useState([]);
    const handleInput=(e)=>{
        const data= e.target.value;
        setName(data);
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const objItem= {id:item.length+1,value:name};
        setItem([...item,objItem]);
    }
  return (
    <div>
        <form onSubmit={submitForm}>
            <input type="text"  value={name} onChange={handleInput} />
            <button type='submit'>Add</button>
        </form>
        <ul>
            {
                item.map((i)=>(
                    <li key={i.id}>
                        id: {i.id} value :{i.value}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Form */

/* import React, { useRef } from 'react'

const Form = () => {
    const ref=useRef();
    const submit=(e)=>{
        e.preventDefault();
        alert(ref.current.value);
    }
  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" ref={ref}/>
            <button type='submit'>Hii</button>
        </form>
    </div>
  )
}

export default Form */

/* import React, { useState, useEffect } from 'react';
function Form() {
const [data, setData] = useState(null);
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => setData(data));
}, []); // Runs after the component renders
return <div>Data: {data ? JSON.stringify(data) : 'Loading...'}</div>;
}
export default Form;
 */

/* import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [items, setItems] = useState([]);
    const [name, setNames] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        let objItem = { id: items.length + 1, value: name };
        setItems([...items, objItem]);

        // Use axios to send a POST request
        axios.post('https://jsonplaceholder.typicode.com/posts', objItem)
            .then(response => {
                console.log('Data posted successfully:', response.data);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    const handleChange = (e) => {
        let data = e.target.value;
        setNames(data);
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" id="name" value={name} onChange={handleChange} />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        ID: {item.id}, Value: {item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Form; */

import React from 'react'


const Form = () => {
  return (
    <div>
       Form
    </div>
  )
}

export default Form