import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { ACTION_TYPES } from "../../utils/constant";

function NavLinks({ isMobileNavLinks = false, mobileNavLinkClickHandler }) {
  const { booksDataDispatch } = useContext(BooksDataContext);

  function handleExploreBtnClick() {
    if (isMobileNavLinks) {
      mobileNavLinkClickHandler();
    }
    booksDataDispatch({ type: ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM });
  }

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
        onClick={isMobileNavLinks && mobileNavLinkClickHandler}
      >
        Home
      </NavLink>
      <NavLink
        className="navbar-link"
        to="/products"
        onClick={handleExploreBtnClick}
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
