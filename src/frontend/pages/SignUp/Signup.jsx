import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassWord] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const{token, signUpHandler} = useAuth();
  const navigate = useNavigate();

  function signup(userDetails){
      const {fname,lname,email,password,confPassword} = userDetails;

      if(password === confPassword)signUpHandler(email,password,fname,lname);
      else console.error("Password not matching");
  }
  
  useEffect(()=>{
      if(token){
          setTimeout(()=>navigate("/home"),1000)
      }
  },[token])

  return (
    <div className="login-container">
      <form
        className="login-form signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          signup(userDetails);
        }}
      >
        <h1>Signup</h1>
        <div className="login-item">
          <label>First Name</label>
          <input
            type="text"
            placeholder="John"
            value={userDetails.fname}
            onChange={(e) =>
              setUserDetails({ ...userDetails, fname: e.target.value })
            }
            required
          />
        </div>
        <div className="login-item">
          <label>Last Name*</label>
          <input
            type="text"
            placeholder="Doe"
            value={userDetails.lname}
            onChange={(e) =>
              setUserDetails({ ...userDetails, lname: e.target.value })
            }
            required
          />
        </div>
        <div className="login-item">
          <label>Email*</label>
          <input
            type="text"
            placeholder="johndoe@gmail.com"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            required
          />
        </div>
        <div className="login-item">
          <label>Password</label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              required
            />
            <i
              className={
                showPassword ? `bi bi-eye-fill` : `bi bi-eye-slash-fill`
              }
              onClick={() => setShowPassWord(!showPassword)}
            ></i>
          </div>
        </div>
        <div className="login-item">
          <label>Confirm Password</label>
          <div>
            <input
              type={confirmPassword ? "text" : "password"}
              value={userDetails.confPassword}
              onChange={(e) =>
                setUserDetails({ ...userDetails, confPassword: e.target.value })
              }
              required
            />
            <i
              className={
                confirmPassword ? `bi bi-eye-fill` : `bi bi-eye-slash-fill`
              }
              onClick={() => setConfirmPassword(!confirmPassword)}
            ></i>
          </div>
        </div>
        <div className="form-footer">
          <button type="submit" className="btn btn-primary login-btn">
            Sign Up
          </button>
        </div>
        <div className="form-footer">
          <p>
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
