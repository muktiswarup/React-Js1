/* 
import { useState } from "react";

function App() {
  const data = { name: "", email: "", pwd: "" };
  const [feild, setFeild] = useState(data);

  const handleChange = (e) => {
    setFeild({ ...feild, [e.target.name]: e.target.value });
    console.log(feild);
    console.log(e.target.name);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(feild);
  };

  return (
    <>
      <form
        style={{ display: "grid", justifyContent: "center", width: "100%",  marginTop: "5rem"}}
        onSubmit={submitHandler}
      >
        <div
          style={{ display: "grid", justifyContent: "center", width: "50%" }}
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            value={feild.name}
            onChange={handleChange}
            name="name"
            style={{ marginBottom: "10px" }}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            value={feild.email}
            onChange={handleChange}
            name="email"
            style={{ marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            value={feild.pwd}
            onChange={handleChange}
            name="pwd"
            style={{ marginBottom: "10px" }}
          />
          <input type="submit" value="Submit" style={{ cursor: "pointer" }} />
          
        </div>
      </form>
    </>
  );
}

export default App; */

/* import { useState } from "react";

function App() {
  const data = { name: "", email: "", pwd: "" };
  const [feild, setFeild] = useState(data);
  
  const handleChange = (e) => {
    setFeild({ ...feild, [e.target.name]: e.target.value });
    };
    
    const submitHandler = (e) => {
      e.preventDefault();
    console.log(feild);
    // Optionally reset the form fields after submission
    setFeild(data);
    };
    
    return (
      
    <>
    <form
    style={{ display: "grid", justifyContent: "center", width: "100%", marginTop: "10rem " }}
    onSubmit={submitHandler}
    >
    <div
    style={{ display: "grid", justifyContent: "center", width: "50%" }}
    >
    <input
    type="text"
    placeholder="Enter Your Name"
    required
    value={feild.name}
    onChange={handleChange}
    name="name"
    style={{ marginBottom: "10px", padding:'10px' }}
    />
    <input
    type="email"
    placeholder="Enter Your Email"
    required
    value={feild.email}
    onChange={handleChange}
    name="email"
    style={{ marginBottom: "10px",padding:'10px' }}
    />
          <input
          type="password"
          placeholder="Enter Your Password"
          required
          value={feild.pwd}
          onChange={handleChange}
          name="pwd"
          style={{ marginBottom: "10px", padding:'10px' }}
          />
          <input type="submit" value="Submit" style={{ cursor: "pointer", background:'green', padding:'5px' }} />
          </div>
          </form>
          </>
          );
          }
          
          export default App;
          */
         
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment, useState } from 'react'

const App = () => {
    let [user,setUser]=useState({name:"",mobile:"",dob:"",checked:false})
    let updateHandler= (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    let checkBoxHandler = (event)=>{
        setUser({...user,checked:event.target.checked})
    }
  return <Fragment>
           <div className="container mt-3">
           <pre>{JSON.stringify(user)}</pre>
           <div className="row">
            <div className="col-md-4">
               <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4>Registration Page</h4>
                </div>
                <div className="card-body">
                    <form >
                        <div className='form-group'>
                         <input onChange={updateHandler} name="name" type="text" className='form-control' placeholder='User Name' />
                        </div>
                        <div className='form-group'>
                         <input onChange={updateHandler} name="mobile" type="text" className='form-control' placeholder='Mobile Number' />
                        </div>
                        <div className='form-group'>
                         <input onChange={updateHandler} name="dob" type="date" className='form-control' placeholder='DOB' />
                        </div>
                        
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" name="checked" onInput={checkBoxHandler} />
                            <label class="form-check-label" for="exampleCheck1">Please Accept T&C</label>
                        </div>
                        <input type="submit" value={"Registration"} className='btn btn-warning' />
                    </form>
                </div>
               </div>
            </div>
           </div>
           </div>
           

         </Fragment>
}

export default App;