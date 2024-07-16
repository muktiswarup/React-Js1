import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import './App.css'
const App = () => {
  const [right, setRight] = useState(-450);
  const handleDrawer = () => {
    setRight(0);
  };
  const closeDrawer = () => {
    setRight(-450);
  };
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "grey" }}>
      <div
        style={{
          width: "60%",
          backgroundColor: "white",
          padding: "32",
          margin: " 32px auto",
        }}
      >
        <h1 style={{ padding: 0, margin: 0, textAlign: "center" }}>
          Coding Platform
        </h1>
        <button
          onClick={handleDrawer}
          style={{
            margin:'15px 0',
            border: "none",
            background: "rgb(238,174,202)",
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 62%, rgba(148,187,233,1) 100%)",
            padding: "10px",
            borderRadius: "10px",
            width: "120px",
          }}
        >
          <i className="ri-user-add-fill"></i>
          New Student
        </button>
        <table className="crud-app">
          <thead>
            <th>S/no</th>
            <th>Student's Name</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Roll No.</th>
            <th>Dob</th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr>
            <td>1</td>
            <td>Sourav Joshi</td>
            <td>Mathematics</td>
            <td>10</td>
            <td>1</td>
            <td>12.02.2009</td>
            <td>
              <div >
                <button style={{color:'green',background:'white',cursor:'pointer',border:'none'}}>
                <i className="ri-edit-line"></i>
                </button>
                <button style={{marginLeft:10,color:'red',background:'white',cursor:'pointer',border:'none'}} >
                <i className="ri-delete-bin-6-fill"></i>
                </button>
              
              </div>
            </td>
            </tr>
           
          </tbody>
        </table>
      </div>
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: right,
          width: 350,
          background: "white",
          height: "100%",
          boxShadow: "0 0 40px rgba(0.0,0,0.5)",
          padding: 32,
          boxSizing: "border-box",
          transition: '1s',
        }}
      >
        <h1>
          <i
            onClick={closeDrawer}
            style={{ padding: "0 5px" }}
            className="ri-close-circle-fill"
          ></i>
          New Student
        </h1>
        <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
      <input
        required
        name="FullName"
        type="text"
        placeholder="Enter Your Name"
        style={{
          border: '1px solid #ccc',
          padding: 16,
          borderRadius: 4,
        }}
      />

      <input
        required
        name="Class"
        type="number"
        placeholder="Enter Your Class"
        style={{
          border: '1px solid #ccc',
          padding: 16,
          borderRadius: 4,
        }}
      />

      <input
        required
        name="Sujbect"
        type="number"
        placeholder="Enter Your Subject"
        style={{
          border: '1px solid #ccc',
          padding: 16,
          borderRadius: 4,
        }}
      />

    <input
        required
        name="Dob"
        type="date"
    
        style={{
          border: '1px solid #ccc',
          padding: 16,
          borderRadius: 4,
        }}
      />
      <button style={{
        border:'none',
        padding:12,
        background: "rgb(238,174,202)",
        background:
              "radial-gradient(circle, rgba(238,174,202,1) 62%, rgba(148,187,233,1) 100%)",
        borderRadius: '12px',
        color: '#000000'
         }}>
        Submit
      </button>
    </form>
      </aside>
    </div>
  );
};
export default App;
