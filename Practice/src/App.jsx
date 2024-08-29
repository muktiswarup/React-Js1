/* import React from 'react'
import { useState } from 'react'

const App = () => {
  const[count,setCount]= useState(0)
  const handleadd= ()=>{
    setCount(count+1);
    }
    const handlesub=()=>{
      setCount(count-1);
      }
  return (
    <div>
        <h2>
            count:{count}
            <button onClick={handleadd}>Increment</button>
            <button onClick={handlesub}>Decrement</button>
            </h2>
            </div>
            )
            }
            
            export default App */
//.................................................................................................

/* import React, { useState } from 'react';
            
            function App() {
              const [inputValue, setInputValue] = useState('');
              
              const handleChange = (e) => {
                setInputValue(e.target.value);
                };
                
                return (
                  <div>
                  <input type="text" value={inputValue} onChange={handleChange} />
                  <p>Entered Text: {inputValue}</p>
                  </div>
                  );
                  }
                  
                  export default App; */

/* import React, { useState } from 'react';
                  
                  function calculateInitialValue() {
                    console.log('Calculating initial value...');
                    return 10;
                    }
                    
                    function App() {
                      const [value, setValue] = useState(() => calculateInitialValue());
                      
                      return (
                        <div>
                        <p>Value: {value}</p>
                        <button onClick={() => setValue(value + 1)}>Increment</button>
                        </div>
                        );
                        }
                        
                        export default App; */

/* import React, { useState } from 'react';
                        
                        function App() {
                          const [isDarkMode, setIsDarkMode] = useState(false);
                          
                          const toggleTheme = () => {
                            setIsDarkMode(!isDarkMode);
                            };
                            
                            return (
                              <div style={{ background: isDarkMode ? '#333' : '#FFF', color: isDarkMode ? '#FFF' : '#000' }}>
                              <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
                              <button onClick={toggleTheme}>Toggle Theme</button>
                              </div>
                              );
                              }
                              
                              export default App; */

/* import React, { Component } from 'react'
                              import  Axios  from 'axios'
                              class App extends Component {
                                state = {
                                  users:[]
                                  } 
                                  getUsers = ()=>{
                                    Axios.get('https://jsonplaceholder.typicode.com/users')
                                    .then((resp)=>{
                                      this.setState({users:resp.data})
                                      })
                                      .catch()
                                      }
                                      render() {
                                        return <div>
                                        <h3>Users Component</h3>
            <pre>{JSON.stringify(this.state.users)}</pre>
            <button onClick={this.getUsers}>GetUsers</button>
            </div>
            }
            }
            
            export default App */

/* import React from "react";
import User from "./User";

const App = () => {
  return (
    <div>
      <User></User>
    </div>
  );
};

export default App; */










import React from 'react'
import Login from './Component/Login'

const App = () => {
  return (
    <div>
      <Login/>
    </div>
  )
}

export default App
