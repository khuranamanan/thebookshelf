import { Link, NavLink } from "react-router-dom";
import ColorLogo from "../assets/Colorlogo.png";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-branding">
        <Link to="/">
          <img src={ColorLogo} alt="TheBookshelfLogo" />
        </Link>
      </div>
      <div className="navbar-links">
        <NavLink className="navbar-link" to="/">
          Home
        </NavLink>
        <NavLink className="navbar-link" to="/categories">
          Categories
        </NavLink>
        <NavLink className="navbar-link" to="/wishlist">
          Wishlist
        </NavLink>
        <NavLink className="navbar-link" to="/aboutus">
          About Us
        </NavLink>
      </div>
      <div className="navbar-addons">
        <input type="text" className="search-box" placeholder="Search Books" />
        <div className="navbar-addons-btns">
          <button className="shopping-bag-button">
            <i className="fas fa-shopping-bag"></i>
          </button>
          <button className="sign-in-button">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
