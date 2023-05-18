import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogInPage.css";
import logInImg from "../assets/LogInPageImg.jpg";
import logo from "../assets/Colorlogo.png";
import { AuthContext } from "../Contexts/AuthContext";

function LogInPage() {
  const [logInFormData, setLogInFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { logInUser, loginData } = useContext(AuthContext);
  const [formInputError, setFormInputError] = useState();

  function handleLogInFormSubmit(event) {
    event.preventDefault();
    if (!logInFormData.email.trim() || !logInFormData.password.trim()) {
      setFormInputError(
        "Error: Incomplete Form Submission. Please fill in all required fields."
      );
      return;
    }
    logInUser(logInFormData.email.trim(), logInFormData.password.trim());
  }

  const loginErrorHandler = loginData.isError && (
    <p className="login-error"> {loginData.isError} </p>
  );

  const formInputErrorDisplay = formInputError && (
    <p className="login-error"> {formInputError} </p>
  );

  useEffect(() => {
    if (loginData.isLoggedIn) {
      setTimeout(() => navigate("/"), 1000);
    }
  }, [loginData.isLoggedIn, navigate]);

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
        <form className="form-fields" onSubmit={handleLogInFormSubmit}>
          <h1 className="login-page-heading">Log In</h1>
          <input
            type="email"
            placeholder="Email"
            value={logInFormData.email}
            onChange={(e) =>
              setLogInFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLogInFormData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            value={logInFormData.password}
          />
          <button className="login-button" type="submit">
            Login
          </button>
          <button
            className="test-login-button"
            type="submit"
            onClick={() =>
              setLogInFormData({
                email: "adarshbalika@gmail.com",
                password: "adarshbalika",
              })
            }
          >
            Login with Test Credentials
          </button>
        </form>
        {loginErrorHandler}
        {formInputErrorDisplay}
        <div className="new-user-prompt">
          New user? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
