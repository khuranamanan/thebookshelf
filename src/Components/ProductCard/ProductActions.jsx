import { AiFillHeart } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import "./ProductActions.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { useNavigate } from "react-router";
import isProductInCart from "../../utils/Cart/isProductInCart";
import { addToCart } from "../../utils/Cart/cart";
import { isProductInWishlist } from "../../utils/Wishlist/isProductInWishlist";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../utils/Wishlist/wishlist";
import debounce from "lodash/debounce";

function ProductActions({ productID, stockQty, book, isWishlistPage }) {
  const { loginData } = useContext(AuthContext);
  const { cart, wishlist, booksDataDispatch } = useContext(BooksDataContext);
  const navigate = useNavigate();

  const isInCart = isProductInCart(cart, productID);
  const isInWishlist = isProductInWishlist(wishlist, productID);

  const debouncedAddToCart = debounce((book) => {
    addToCart(booksDataDispatch, loginData.token, book);
  }, 300);

  const debouncedAddToWishlist = debounce((book) => {
    addToWishlist(booksDataDispatch, book, loginData.token);
  }, 300);

  const debouncedRemoveFromWishlist = debounce(() => {
    removeFromWishlist(booksDataDispatch, productID, loginData.token);
  }, 300);

  function handleAddToWishlistBtnClick() {
    if (loginData.isLoggedIn) {
      if (isWishlistPage && isInWishlist) {
        debouncedRemoveFromWishlist();
      } else if (isInWishlist) {
        navigate("/wishlist");
      } else {
        debouncedAddToWishlist(book);
      }
    } else {
      navigate("/login");
    }
  }

  function handleAddToCartBtnClick() {
    if (loginData.isLoggedIn) {
      if (isInCart) {
        navigate("/cart");
      } else {
        debouncedAddToCart(book);
      }
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="product-actions">
      <button
        className={`wishlist-button ${
          isInWishlist && "go-to-wishlist-button"
        } ${isWishlistPage && "remove-from-wishlist-button"}`}
        onClick={handleAddToWishlistBtnClick}
      >
        <span className="heart-icon">
          <AiFillHeart size={15} />
        </span>
        {isWishlistPage
          ? "Remove From Wishlist"
          : isInWishlist
          ? "Go to Wishlist"
          : "Add to Wishlist"}
      </button>
      <button
        className={`cart-button ${isInCart && "go-to-cart-button"}`}
        disabled={stockQty === 0}
        onClick={handleAddToCartBtnClick}
      >
        <span className="shopping-bag-icon">
          <FaShoppingBag size={15} />
        </span>
        {isInCart ? "Go to Bag" : "Add to Bag"}
      </button>
    </div>
  );
}

export default ProductActions;
