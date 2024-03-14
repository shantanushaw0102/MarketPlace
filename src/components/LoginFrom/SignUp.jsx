import React from "react";
import {Link } from "react-router-dom";
import "./Login.css"; // Import your CSS file

const SignUp = () => {
  return (
    <div className="login-container">
      <h1 className="login-heading">Register</h1>
      <form action="/register" method="POST">
        <div className="form-group">
          <label htmlFor="UserName">Username:</label>
          <input type="email" id="UserName" name="userName" required />
        </div>
       
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn-login">
          Register
        </button>
        <Link to="/login">
          <h4 className="signin-page">Already Registered (sign in)</h4>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
