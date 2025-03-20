// import React, { useState } from 'react'

// const Contact = () => {
//   const [form,setform]=useState({
//     name:"",
//     email:"",
//     password:"",
//     gender:"",
//     city:""
//   })
//   const handleInput=(e)=>{
//     const {name,value,type,checked}=e.target;
//     setform({
//       ...form,[name]:type==="radio"?(checked?value:""):value
//     })
//   }
//   const handlesubmit=(e)=>{
//     e.preventDefault();
//     console.log(form)
//   }
//   return (
//     <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",}}>
//       <div style={{display:"flex",justifyContent:"center",alignItems:"center",boder:"2px black solid"}}>
//       <form onSubmit={handlesubmit} >
//         <label htmlFor="name">
//           Name:
//           <input type="text" id='name' onChange={handleInput} value={form.name} name='name' />
//         </label><br />
//         <label htmlFor="email" >
//           Email:
//           <input type="email" id='email'onChange={handleInput}  value={form.email} name='email'/>
//         </label><br />
//         <label htmlFor="password">
//           password:
//           <input type="password" id='password'onChange={handleInput} value={form.password} name='password' />
//         </label><br />
//         <label htmlFor="gender" >
//           Gender:
//           <span>Male</span>
//           <input type="radio" name='gender' value={"male"} checked={form.gender==="male"} onChange={handleInput}/>
//           <span>Female</span>
//           <input type="radio" name='gender' value={"female"} checked={form.gender==="female"} onChange={handleInput} /><br />
//             <select name="city" id="" onChange={handleInput}> 
//             <option value={"bhubaneswar"}>Bhubaneswar</option>
//             <option value={"noida"}>Noida</option>
//             <option value={"banglore"}>Banglore</option>
//           </select><br />
//           <button type='submit'>Submit</button>
//         </label><br />


//       </form>
//       </div>
//       <div >
//         <div  >
//           {form.name}<br />
//           {form.email}<br />
//           {form.password}<br />
//           {form.city}<br />
//           {form.gender}<br />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact

import React, { useState } from 'react'

const Contact = () => {

  const [form,setForm]=useState({
    name:"",
    email:"",
    password:"",
    gender:"",
    city:"hyderabad"
  })
  const handleForm=(e)=>{
    const {name,value,type,checked}=e.target;
    setForm({
      ...form,[name]:type==="radio"?(checked?value:""):value
    })
  }
  const submitForm=(e)=>{
    e.preventDefault();
    console.log(form);
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">
          Name:
          <input type="text" value={form.name} name='name' onChange={handleForm}  />
        </label><br />
        <label htmlFor="email" >
          Email:
          <input type="email" value={form.email} name='email' onChange={handleForm} />
        </label><br />
        <label htmlFor="password">
          Password:
          <input type="password"  value={form.password} name='password' onChange={handleForm}/>
        </label><br />
        <label htmlFor="gender">
          Gender:
          <span>Male:</span>
          <input type="radio" name='gender' onChange={handleForm} checked={form.gender==="male"} />
          <span>Female:</span>
          <input type="radio"  name="gender" onChange={handleForm} checked={form.gender==="female"} />
        </label><br />
        <label htmlFor="City">
          City:
          <select name="city" id="" onChange={handleForm}>
            <option >Bhubaneswar</option>
            <option >Banglore</option>
            <option>Hyderabad</option>
          </select>
        </label><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
