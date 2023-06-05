import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import signUpImg from "../../assets/SignUpPageImg.jpg";
import logo from "../../assets/Colorlogo.png";
import { AuthContext } from "../../Contexts/AuthContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

function SignUpPage() {
  const { signUpUser, loginData } = useContext(AuthContext);
  const [signUpFormData, setSignUpFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formInputError, setFormInputError] = useState();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const navigate = useNavigate();
  const location = useLocation();
  useDocumentTitle("Sign Up | The Bookshelf");

  function handleSignUpFormSubmit(e) {
    e.preventDefault();
    if (
      !signUpFormData.firstName.trim() ||
      !signUpFormData.lastName.trim() ||
      !signUpFormData.email.trim() ||
      !signUpFormData.password.trim() ||
      !signUpFormData.confirmPassword.trim()
    ) {
      setFormInputError(
        "Error: Incomplete Form Submission. Please fill in all required fields."
      );
      return;
    } else if (signUpFormData.password !== signUpFormData.confirmPassword) {
      setFormInputError(
        "Error: Passwords do not match. Please ensure that the password and confirm password fields are the same."
      );
      return;
    }
    signUpUser(
      signUpFormData.email.trim(),
      signUpFormData.password.trim(),
      signUpFormData.firstName.trim(),
      signUpFormData.lastName.trim()
    );
  }

  const formInputErrorDisplay = formInputError && (
    <p className="form-input-error"> {formInputError} </p>
  );

  const apiErrorDisplay = loginData.isError && (
    <p className="form-input-error"> {loginData.isError} </p>
  );

  const showPasswordIcon = showPassword.password ? (
    <AiFillEyeInvisible
      onClick={() => setShowPassword({ ...showPassword, password: false })}
    />
  ) : (
    <AiFillEye
      onClick={() => setShowPassword({ ...showPassword, password: true })}
    />
  );

  const showConfirmPasswordIcon = showPassword.confirmPassword ? (
    <AiFillEyeInvisible
      onClick={() =>
        setShowPassword({ ...showPassword, confirmPassword: false })
      }
    />
  ) : (
    <AiFillEye
      onClick={() =>
        setShowPassword({ ...showPassword, confirmPassword: true })
      }
    />
  );

  useEffect(() => {
    if (loginData.isLoggedIn) {
      navigate(location?.state?.from || "/", { replace: true });
    }
  }, [location?.state?.from, loginData.isLoggedIn, navigate]);

  return (
    <div className="signup-page">
      <div className="content-box">
        <div className="branding-logo">
          <img src={logo} alt="the-bookshelf-logo" />
        </div>
        <form className="form-fields" onSubmit={handleSignUpFormSubmit}>
          <h1 className="signup-page-heading">Sign Up</h1>
          <div className="input-name-fields">
            <input
              type="text"
              className="input-name-field"
              placeholder="First Name"
              onChange={(e) =>
                setSignUpFormData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
              required
            />
            <input
              type="text"
              className="input-name-field"
              placeholder="Last Name"
              onChange={(e) =>
                setSignUpFormData((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
              required
            />
          </div>

          <input
            type="email"
            className="input-email-field"
            placeholder="Email"
            onChange={(e) =>
              setSignUpFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            required
          />
          <div className="password-input-box flex-center">
            <input
              type={showPassword.password ? "text" : "password"}
              className="password-input-field"
              placeholder="Create Password"
              onChange={(e) =>
                setSignUpFormData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              required
            />
            <div className="show-password-icon flex-center">
              {showPasswordIcon}
            </div>
          </div>
          <div className="password-input-box flex-center">
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              className="password-input-field"
              placeholder="Confirm Password"
              onChange={(e) =>
                setSignUpFormData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              required
            />
            <div className="show-password-icon flex-center">
              {showConfirmPasswordIcon}
            </div>
          </div>
          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </form>
        {formInputErrorDisplay}
        {apiErrorDisplay}
        <div className="existing-user-prompt">
          Existing user?{" "}
          <button
            onClick={() =>
              navigate("/login", {
                state: { from: location?.state?.from || "/" },
              })
            }
            className="log-in-link-button"
          >
            Log In
          </button>
        </div>
      </div>
      <div className="quote-box">
        <img src={signUpImg} alt="Book" className="book-image" />
        <div className="overlay"></div>
        <div className="quote">
          "It is our choices, Harry, that show what we truly are, far more than
          our abilities." - Albus Dumbledore
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
