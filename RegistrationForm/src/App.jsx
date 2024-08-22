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


import { useState } from "react";

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
