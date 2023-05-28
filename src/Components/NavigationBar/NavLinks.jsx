import { NavLink } from "react-router-dom";

function NavLinks({ isMobileNavLinks = false, mobileNavLinkClickHandler }) {
  return (
    <div className={"navbar-links flex-center desktop-nav-links-box"}>
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
