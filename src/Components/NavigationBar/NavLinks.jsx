import { NavLink } from "react-router-dom";

function NavLinks({ isMobileNavLinks = false, mobileNavLinkClickHandler }) {
  return (
    <div
      className={
        isMobileNavLinks
          ? "navbar-links flex-center flex-dir-co mobile-nav-links-box"
          : "navbar-links flex-center desktop-nav-links-box"
      }
    >
      <NavLink
        className="navbar-link"
        to="/"
        onClick={mobileNavLinkClickHandler}
      >
        Home
      </NavLink>
      <NavLink
        className="navbar-link"
        to="/categories"
        onClick={mobileNavLinkClickHandler}
      >
        Categories
      </NavLink>
      <NavLink
        className="navbar-link"
        to="/wishlist"
        onClick={mobileNavLinkClickHandler}
      >
        Wishlist
      </NavLink>
      <NavLink
        className="navbar-link"
        to="/aboutus"
        onClick={mobileNavLinkClickHandler}
      >
        About Us
      </NavLink>
    </div>
  );
}

export default NavLinks;
