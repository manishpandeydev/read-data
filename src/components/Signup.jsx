import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, Password);
      window.alert("Account Created Successfully!",Navigate('/login'))
    } catch (err) {
      window.alert(err)
    }
  };

  return (
    <>
      <div className="Signup-container">

        <form className="myForm"onSubmit={handleSubmit}>
        <div className="heading"><h3> Create Account</h3></div>

          <div className="myrow mb-4">
            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input placeholder="example@gmail.com"
                type="email"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
              placeholder="ex:-123456"
                type="password"
                className="form-control"
                id="inputPassword3"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

            </div>

          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>

          <br />
          <p>
            Already registered?<Link to="/Login">Login here</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Signup;
