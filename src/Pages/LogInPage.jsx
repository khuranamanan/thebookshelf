import React from "react";
import { Link } from "react-router-dom";
import "./LogInPage.css";
import logInImg from "../assets/LogInPageImg.jpg";
import logo from "../assets/Colorlogo.png";

function LogInPage() {
  return (
    <div className="login-page">
      <div className="quote-box">
        <img src={logInImg} alt="Book" className="book-image" />
        <div className="overlay"></div>
        <div className="quote">
          "There is no friend as loyal as a book." -Ernest Hemingway
        </div>
      </div>
      <div className="login-box">
        <div className="branding-logo">
          <img src={logo} alt="the-bookshelf-logo" />
        </div>
        <div className="form-fields">
          <h1 className="login-page-heading">Log In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="login-button">Login</button>
          <button className="test-login-button">
            Login with Test Credentials
          </button>
        </div>
        <div className="new-user-prompt">
          New user? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
