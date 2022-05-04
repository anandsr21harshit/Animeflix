import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./Login.css";

function Login() {

    const {loginHandler, token} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  function testCredHandler (){
      setUserDetails({
          email: "adarshbalika@gmail.com",
          password: "adarshBalika123"
      })
  }

  function formHandler(e){
      e.preventDefault();
        loginHandler(userDetails.email,userDetails.password);
  }

  useEffect(()=>{
    if(token){
        setTimeout(()=>{
            navigate(location.state?.from?.pathname || "/home",{replace:true})
        },1000);
    }
  },[token,navigate])

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={formHandler}>
        <h1>Login</h1>
        <div className="login-item">
          <label>Email</label>
          <input
            type="text"
            value={userDetails.email}
            placeholder="johndoe@gmail.com"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            required
          />
        </div>
        <div className="login-item">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            required
          />
        </div>
        <div className="form-footer">
          <button type="submit" className="btn btn-primary login-btn">Login</button>
          <button className="btn btn-primary test-btn" onClick={testCredHandler}>
            Use Test Credential
          </button>
        </div>
        <div className="form-footer">
          <p>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export {Login};
