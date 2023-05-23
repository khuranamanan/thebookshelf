import { Link, NavLink, useNavigate } from "react-router-dom";
//Components
import NavSearchBox from "./NavSearchBox";
import NavLinks from "./NavLinks";
//Assets
import ColorLogo from "../../assets/Colorlogo.png";
import { FiShoppingBag } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
//CSS
import "./NavigationBar.css";
import MobileNavLinks from "./MobileNavLinks";

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar flex-center">
      <MobileNavLinks />
      <div className="navbar-branding">
        <Link to="/">
          <img src={ColorLogo} alt="TheBookshelfLogo" />
        </Link>
      </div>
      <NavLinks />
      <div className="navbar-addons flex-center">
        <span className="desktop-search-bar">
          <NavSearchBox />
        </span>
        <div className="navbar-addons-btns flex-center">
          <NavLink className="shopping-bag-button" to={"/cart"}>
            <FiShoppingBag />
          </NavLink>
          <NavLink className="sign-in-button" to={"/profile"}>
            <BiUserCircle />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
