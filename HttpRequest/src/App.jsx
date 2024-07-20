import { useState,useEffect } from "react";
import axios from "axios"

/* const App = () => {
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
 */

//..........................................................................................


/* const App=()=>{
  const[data,setData]=useState([])
  const fetchh=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      return res.json();
    })
    .then((user)=>{
      setData(user);
      // console.log(user);
    })
    .catch((err)=>{
      console.log(err)
    })
  }

return(
  <div>
    <h1>
      Hello coding 
    </h1><hr />
    <button onClick={fetchh}>Fetch the Data</button><hr />

    {data.map((user,index)=>(<div key={index}>
   <h1>Name:{user.name}</h1>
   <p>Email:{user.email}</p>
   <p>phno:{user.phone}</p><hr />
 </div> 

    ))}
  </div>

)
} 
export default App; */
  

//................................................................................................


//HttpRequest by handling try catch 
/* const App = () => {
  const [userPhoto, setUserPhoto] = useState([]);
useEffect(()=>test,[])
  const test = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setUserPhoto(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <h1>Hello coding platform</h1>
      <button onClick={test}>Fetch The Data</button>
      <div>
        {userPhoto.map((user, index) => (
          <div key={index}>
            <h2>Title: {user.title}</h2>
            <img src={user.image} alt={user.title} width='100' />
            <h3>Price: {user.price}</h3>
            <h4>Description: {user.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
 */

const App = () => {
  const [userPhoto, setUserPhoto] = useState([]);
  const [loading,setLoading]= useState(false);
  const [count,setCount]= useState(0);
useEffect(()=>test,[])
useEffect(()=>{
const interval= setInterval(() => {
     setCount((initialValue)=>initialValue=initialValue+1)
}, 1000);
return ()=>{ clearInterval(interval)}

},[])
  const test =async () => {
    try{
      setLoading(true);
      const response=await axios.get("https://fakestoreapi.com/products")
      const store= response.data;
      setUserPhoto(store);
    }catch(error){
      console.log("error",error)
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Hello coding platform</h1>
      <button onClick={test}>Fetch The Data</button>
        {loading && <h2>loading...</h2>}
        <h2>count:{count}</h2>
      <div>
        {userPhoto.map((user, index) => (
          <div key={index}>
            <h2>Title: {user.title}</h2>
            <img src={user.image} alt={user.title} width='100' />
            <h3>Price: {user.price}</h3>
            <h4>Description: {user.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;