
import {useState,useContext } from 'react'
import { themeContext } from '../Context/themeContext'
const Registration = () => {
    let [user,setUser]=useState({name:"",mobile:"",dob:"",checked:false})
        let updateHandler= (event)=>{
            setUser({...user,[event.target.name]:event.target.value})
        }
        let checkBoxHandler = (event)=>{
            setUser({...user,checked:event.target.checked})
        }
        const {theme,setTheme}=useContext(themeContext);
        function changeColor(){
            setTheme((prev)=>(prev==='light'?'dark':'light'))
        }
  return (
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
                        
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" name="checked" onInput={checkBoxHandler} />
                            <label className="form-check-label" htmlFor="exampleCheck1">Please Accept T&C</label>
                        </div>
                        <input type="submit" value={"Registration"} className='btn btn-warning' />
                    </form>
                </div>
               </div>
            </div>
           </div>
           <button className="mode" onClick={changeColor}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
           </div>
  )
}

export default Registration