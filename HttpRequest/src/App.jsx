import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        setUserData(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <h1>Http Request</h1>
      </div>
      <div>
        <button onClick={fetchUserData}>Fetch Data</button>
      </div>
      <div
        style={{
          width: "100vh",
          border: "solid black",
          boxShadow: "black",
          margin: "10px 0",
        }}
      >
        {userData.map((user) => (
          <div
            key={user.id}
            style={{
              margin: "0 auto",
              justifyContent: "center",
              alignItems: "center",
              width: "50vh",
              boxShadow: "red",
            }}
          >
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
