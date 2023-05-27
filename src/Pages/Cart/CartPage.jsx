import { useContext } from "react";
import "./CartPage.css";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { useNavigate } from "react-router";
import CartCard from "../../Components/ProductCard/CartCard";
import CartSummary from "./CartSummary";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

function CartPage() {
  const { cart } = useContext(BooksDataContext);
  const navigate = useNavigate();
  useDocumentTitle("Cart | The Bookshelf");

  const emptyCart = cart.length === 0 && (
    <div className="empty-cart">
      <h2>Your Cart is Empty</h2>
      <p>Start shopping and add some books to your cart!</p>
      <button className="empty-cart-btn" onClick={() => navigate("/products")}>
        Browse Books
      </button>
    </div>
  );

  const cartMapped = cart.length !== 0 && (
    <>
      {cart?.map((book) => (
        <CartCard data={book} key={book?._id} />
      ))}
    </>
  );

  const cartSummary = cart.length !== 0 && (
    <>
      <CartSummary cart={cart} />
    </>
  );

  return (
    <div className="cart-page">
      <div className="cart-page-heading">
        <h1>Cart</h1>
      </div>
      <div className="cart-page-content">
        <div className="cart-page-items">
          {emptyCart}
          {cartMapped}
        </div>
        {cartSummary}
      </div>
    </div>
  );
}

export default CartPage;
