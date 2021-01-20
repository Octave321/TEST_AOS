import axios from 'axios'
import React, { useState } from 'react'
// import { Provider } from 'react-redux'

export default function Register() {

  function postData(){
    const data = {
      email:"",
      password:""
    }
    axios.post("http://localhost:3002/register", {data}).then(res=>{
      console.log(res.data)
    })
  }

    let [ email, setEmail ] = useState('')
    let [ password, setPassword ] = useState('')
    

  return (
    
    <div className="Registration">
        <h2>Register</h2>; 
        <label>Email</label> 
        <input type="email" id="email" value={email} onChange={(event)=> {setEmail(event.target.value)}}/>

        <label>Password</label>
        <input type="password" id="password" value={password} onChange={(event)=> {setPassword(event.target.value)}}/>

        <button id="btnRegister" onClick={postData}>Register</button>

    </div>
    
  )
} 