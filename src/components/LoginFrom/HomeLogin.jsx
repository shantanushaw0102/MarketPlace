import React, { useState } from "react";
import "./loginStyle.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

 function HomeLogin() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
   
     <div className="HomeLogin">
      <h2 className="form-heading"><span>User Login</span></h2>
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="login-h1">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ls-button"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="login-h1">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                 className="ls-button"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
export default HomeLogin;