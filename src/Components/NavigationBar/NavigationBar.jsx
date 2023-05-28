import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
//Components
import NavSearchBox from "./NavSearchBox";
import NavLinks from "./NavLinks";
import MobileNavLinks from "./MobileNavLinks";
//Assets
import ColorLogo from "../../assets/Colorlogo.png";
import { FiShoppingBag } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
//CSS
import "./NavigationBar.css";

function NavigationBar() {
  const { cart } = useContext(BooksDataContext);

  const cartQuantityBatch = cart.length !== 0 && (
    <span className="cart-quantity-batch">{cart.length}</span>
  );

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
            {cartQuantityBatch}
          </NavLink>
          <NavLink className="sign-in-button" to={"/profile"}>
            <BiUserCircle />
          </NavLink>
        </div>
      </div>
      <span className="mobile-search-bar">
        <NavSearchBox />
      </span>
    </nav>
  );
}

export default NavigationBar;
