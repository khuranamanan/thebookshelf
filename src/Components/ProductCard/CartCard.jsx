import { useContext } from "react";
import "./CartCard.css";
import { AuthContext } from "../../Contexts/AuthContext";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import {
  removeFromCart,
  updateQtyInCart,
} from "../../Services/Cart/cartServices";

function CartCard({ data }) {
  const { loginData } = useContext(AuthContext);
  const { booksDataDispatch } = useContext(BooksDataContext);
  const { _id, img, title, author, price, originalPrice, qty } = data;

  function handleIncreaseQtyBtn(productID, action) {
    updateQtyInCart(booksDataDispatch, productID, loginData.token, action);
  }

  function handleDecreaseQtyBtn(quantity, productID, action) {
    if (quantity === 1) {
      removeFromCart(booksDataDispatch, productID, loginData.token);
    } else {
      updateQtyInCart(booksDataDispatch, productID, loginData.token, action);
    }
  }

  function handleRemoveFromCartBtnClick(productID) {
    removeFromCart(booksDataDispatch, productID, loginData.token);
  }

  return (
    <div className="cart-card">
      <div className="cart-card-image-box">
        <img className="cart-card-image" src={img} alt="Book Cover" />
      </div>
      <div className="cart-card-details">
        <h2 className="cart-card-title">{title}</h2>
        <p className="cart-card-author">{author}</p>
        <div className="cart-card-price">
          <span className="cart-card-current-price">Rs.{price}</span>
          <span className="cart-card-original-price">Rs.{originalPrice}</span>
        </div>
        <div className="cart-card-quantity">
          <button
            className="cart-card-btn"
            onClick={() => handleDecreaseQtyBtn(qty, _id, "decrement")}
          >
            -
          </button>
          <span className="cart-card-qty">{qty}</span>
          <button
            className="cart-card-btn"
            onClick={() => handleIncreaseQtyBtn(_id, "increment")}
          >
            +
          </button>
        </div>
        <div className="cart-card-buttons">
          <button
            className="cart-card-remove-btn"
            onClick={() => handleRemoveFromCartBtnClick(_id)}
          >
            Remove From Cart
          </button>
          <button className="cart-card-wishlist-btn">Move to Wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
