import React, { useState } from "react";

const Signin = () => {
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card" style={{ marginTop: "7rem" }}>
            <div className="card-body">
              <h2 style={{ textAlign: "center", color: "red" }}>
                Please Login
              </h2>
              <div className="form-group mt-4 ">
                <label htmlFor="Email">Email*</label>
                <input type="email" className="form-control bg-dark" name='email' onChange={emailHandler} />
                <label htmlFor="Email">Password*</label>
                <input type="password" className="form-control bg-dark " name="password" onChange={emailHandler}/>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-success d-flex justify-content-center"
                    type="submit"
                    style={{ padding: 10, width: 100, marginTop: "2rem" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
