import React from "react";
import {Link } from "react-router-dom";
import SignUp from "./SignUp";
import "./Login.css"; 

const SignIn = () => {
  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form action="/login" method="POST">
        <div className="form-group">
          <label htmlFor="UserName">Username:</label>
          <input type="email" id="UserName" name="userName" required />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input type="password" id="Password" name="password" required />
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
        <Link to="/register">
          <h4 className="signin-page">Not Registered </h4>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
