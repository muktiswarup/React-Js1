import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Swal from 'sweetalert2'


const ContactUs = () => {
    const [name,setName]=  useState("");
    const [email,setEmail]=  useState("");
    const [msz,setMsz]=  useState("");

const contact= (e)=>{
     e.preventDefault();
    console.log(name,email,msz)
    Swal.fire({
        title: 'Submit',
        text: 'We Will reach at you soon',
        icon: 'success'
      });
}

  return (
    <div>
      <Nav />
      <div
        style={{
          height: "100vh",
          display: "flex",
          backgroundColor: "#452c63",
        }}
      >
        <img src="./images/contact.svg" width="50%" style={{}} />
        <div>
          <form
          onSubmit={contact}
            style={{
              padding: "20%",
            }}
          >
            <label>Full Name*:</label>
            <br />
            <input
            onChange={(e)=>setName(e.target.value)}
              type="text"
              width="20%"
              required
              placeholder="Enter your Name"
              style={{
                padding: "10px",
                width: "220px",
                margin: "20px 0",
              }}
            />

            <label>Email*:</label>
            <br />
            <input
             onChange={(e)=>setEmail(e.target.value)}
              type="email"
              width="20%"
              required
              placeholder="Enter your email"
              style={{
                padding: "10px",
                width: "220px",
                margin: "20px 0",
              }}
            />

            <label>Message*:</label>
            <br />
            <textarea
             onChange={(e)=>setMsz(e.target.value)}
              type="text"
              required
              placeholder="Write your message"
              rows="5"
              style={{
                padding: "10px",
                width: "220px",
                margin: "20px 0",
              }}
            />

            <div>
              <button
                style={{
                  padding: 12,
                  width: 120,
                  margin: "20px 0",
                  background: "#fd5c63",
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
