import React, { useEffect, useState } from "react";
import  "./login.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import {auth} from './firebase';
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Home from './Home'

 const Login = () => {
const navigate = useNavigate()


const [email, setEmail] = useState();
const [Password, setPassword] = useState();




const handleSubmit =async(e) =>{
  e.preventDefault();

  await signInWithEmailAndPassword(auth, email,Password).then((userCredential)=>{
    const user = userCredential.user;

   navigate('/home',user)

  }).catch((error) => {
    window.alert(error);
  });









}
  return (
    <>
      <div className="Login-container">
      <form onSubmit={handleSubmit} className="Login-Form">
      <div className="Login-heading"><h3> Login Account</h3></div>
      <div className="row mb-4">

        <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" onChange={(e)=>{ setEmail(e.target.value)}}/>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword3" onChange={(e)=>{ setPassword(e.target.value)}}/>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">LogIn</button>
<br/>
      <p>Dont have account?<Link to="/Signup">Register here</Link ></p>
    </form>
      </div>
    </>
  );
};
export default Login;
