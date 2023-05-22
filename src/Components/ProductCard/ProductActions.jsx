import { AiFillHeart } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import "./ProductActions.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { useNavigate } from "react-router";
import isProductInCart from "../../utils/isProductInCart";
import { addToCart } from "../../Services/Cart/cartServices";

function ProductActions({ productID, stockQty, book }) {
  const { loginData } = useContext(AuthContext);
  const { cart, booksDataDispatch } = useContext(BooksDataContext);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate();

  const isInCart = isProductInCart(cart, productID);

  function handleAddToCartBtnClick() {
    setBtnDisabled(true);
    if (loginData.isLoggedIn) {
      if (isInCart) {
        navigate("/cart");
      } else {
        addToCart(booksDataDispatch, loginData.token, book, setBtnDisabled);
      }
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="product-actions">
      <button className="wishlist-button">
        <span className="heart-icon">
          <AiFillHeart size={15} />
        </span>
        Add to Wishlist
      </button>
      <button
        className={`cart-button ${isInCart && "go-to-cart-button"}`}
        disabled={stockQty === 0 || btnDisabled}
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
