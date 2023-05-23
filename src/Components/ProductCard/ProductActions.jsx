import { AiFillHeart } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import "./ProductActions.css";
import { useContext, useState } from "react";
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

function ProductActions({ productID, stockQty, book, isWishlistPage }) {
  const { loginData } = useContext(AuthContext);
  const { cart, wishlist, booksDataDispatch } = useContext(BooksDataContext);
  const [cartBtnDisabled, setCartBtnDisabled] = useState(false);
  const [wishlistBtnDisabled, setWishlistBtnDisabled] = useState(false);
  const navigate = useNavigate();

  const isInCart = isProductInCart(cart, productID);
  const isInWishList = isProductInWishlist(wishlist, productID);

  function handleAddToWishlistBtnClick() {
    setWishlistBtnDisabled(true);
    if (loginData.isLoggedIn) {
      if (isWishlistPage && isInWishList) {
        removeFromWishlist(booksDataDispatch, productID, loginData.token);
      } else if (isInWishList) {
        setWishlistBtnDisabled(false);
        navigate("/wishlist");
      } else {
        addToWishlist(
          booksDataDispatch,
          book,
          loginData.token,
          setWishlistBtnDisabled
        );
      }
    } else {
      setWishlistBtnDisabled(false);
      navigate("/login");
    }
  }

  function handleAddToCartBtnClick() {
    setCartBtnDisabled(true);
    if (loginData.isLoggedIn) {
      if (isInCart) {
        setCartBtnDisabled(false);
        navigate("/cart");
      } else {
        addToCart(booksDataDispatch, loginData.token, book, setCartBtnDisabled);
      }
    } else {
      setCartBtnDisabled(false);
      navigate("/login");
    }
  }

  return (
    <div className="product-actions">
      <button
        className={`wishlist-button ${
          isInWishList && "go-to-wishlist-button"
        } ${isWishlistPage && "remove-from-wishlist-button"}`}
        onClick={handleAddToWishlistBtnClick}
        disabled={wishlistBtnDisabled}
      >
        <span className="heart-icon">
          <AiFillHeart size={15} />
        </span>
        {isWishlistPage
          ? "Remove From Wishlist"
          : isInWishList
          ? "Go to Wishlist"
          : "Add to Wishlist"}
      </button>
      <button
        className={`cart-button ${isInCart && "go-to-cart-button"}`}
        disabled={stockQty === 0 || cartBtnDisabled}
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
