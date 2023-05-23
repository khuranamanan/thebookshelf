import { NavLink } from "react-router-dom";
import NavSearchBox from "./NavSearchBox";

function NavLinks({ isMobileNavLinks = false, mobileNavLinkClickHandler }) {
  return (
    <div
      className={
        isMobileNavLinks
          ? "navbar-links flex-center flex-dir-co mobile-nav-links-box"
          : "navbar-links flex-center desktop-nav-links-box"
      }
    >
      <span className="mobile-search-bar">
        <NavSearchBox />
      </span>
      <NavLink
        className="navbar-link"
        to="/"
        onClick={isMobileNavLinks && mobileNavLinkClickHandler}
      >
        Home
      </NavLink>
      <NavLink
        className="navbar-link"
        to="/products"
        onClick={isMobileNavLinks && mobileNavLinkClickHandler}
      >
        Explore
      </NavLink>
      <NavLink
        className="navbar-link"
        to="/categories"
        onClick={isMobileNavLinks && mobileNavLinkClickHandler}
      >
        Categories
      </NavLink>
      <NavLink
        className="navbar-link"
        to="/wishlist"
        onClick={isMobileNavLinks && mobileNavLinkClickHandler}
      >
        Wishlist
      </NavLink>
    </div>
  );
}

export default NavLinks;
