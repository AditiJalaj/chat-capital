import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


import firebase from '../firebase';
import { auth } from "../firebase";

const Login = () => {


  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

    const history=useHistory()
    
 const handleLogin=(e)=>{
   e.preventDefault()
   auth.signInWithEmailAndPassword(email,password)
   .then((u)=>{
     console.log(u)
   })
   .catch((err)=>{
     alert(err.message)
   })
 }


const handleSignUp=(e)=>{
e.preventDefault()
auth.createUserWithEmailAndPassword(email,password)
.then((u)=>{
  console.log(u)
  
}).catch((err)=>{
  alert(err.message)
})



 }
    return ( 
        <div>
        <form id="signup-form">

        <div className="sign-in">
        <label htmlFor='signup-email'>Email address</label>
        <input
         type="email"
          id='signup-email'
          required
           value={email}
           onChange={(e)=>{
            setEmail(e.target.value)
           }}></input>
        </div>
       
        
        <br></br>
        <div className="sign-in">
        <label htmlFor='signup-password'>Password</label>
        <input required type="password"
         id="signup-password" value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}></input>
        
       
        </div>
       <button onClick={handleLogin}>Login</button>
       <button onClick={handleSignUp}>SignUp</button>
        </form>
       
        </div> );
}
 
export default Login;
