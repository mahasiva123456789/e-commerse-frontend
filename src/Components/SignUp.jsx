import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignUp.css'

const SignUp = () => {
   const[formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
  })

  const handleuser=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }

  const handlesubmit=async(e)=>{
    e.preventDefault();
 
  try{
    const response=await fetch('http://localhost:3000/users',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',  
      },
      body:JSON.stringify({
        name:formData.name,
        email:formData.email,
        password:formData.password
      })
    })
    const data=await response.json()
    console.log('user created the account sucessfully');
    console.log(data);

  }


  catch(err)
  {
    console.log('error occured while creating account',err);
  }
}
  
  return (

    <div className="login-signup-container">
        
      <div className="login-signup-box login-signup-left">
        <h2 className="login-signup-h2">Create Account</h2>
        <form onSubmit={handlesubmit}>

          <div className="login-signup-input-container">
            <label htmlFor="username" className="login-signup-label">Username</label>
            <input
              type="text"
              id="name"
              placeholder="Username"
              required
              value={formData.name}
              onChange={handleuser}
              className="login-signup-input"
            />
          </div>

          <div className="login-signup-input-container">
            <label htmlFor="email" className="login-signup-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleuser}
              required
              className="login-signup-input"
            />
          </div>

          <div className="login-signup-input-container">
            <label htmlFor="password" className="login-signup-label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleuser}
              className="login-signup-input"
            />
          </div>
           <button type="submit" className="login-signup-button">Sign Up</button>
        </form>
      </div>

      <div className="login-signup-box login-signup-right">
        <h2 className="login-signup-h2">Welcome to SignUp</h2>
        <p className="login-signup-p">Already have an account?</p>
        <Link to="/login">
          <button className="login-signup-button">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;