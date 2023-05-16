import { Link } from "react-router-dom";
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
        <NavSearchBox />
        <div className="navbar-addons-btns flex-center">
          <button className="shopping-bag-button">
            <FiShoppingBag />
          </button>
          <button className="sign-in-button">
            <BiUserCircle />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
