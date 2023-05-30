import { useContext, useEffect } from "react";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { useNavigate } from "react-router";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./CheckoutPage.css";
import CheckoutSummary from "./CheckoutSummary";

function CheckoutPage() {
  const { cart } = useContext(BooksDataContext);
  const navigate = useNavigate();
  useDocumentTitle("Checkout | The Bookshelf");

  const checkoutSummary = cart.length !== 0 && (
    <>
      <CheckoutSummary />
    </>
  );

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/products");
    }
  }, [cart.length, navigate]);

  return (
    <div className="checkout-page">
      <div className="checkout-page-heading">
        <h1>Checkout</h1>
      </div>
      <div className="checkout-page-content">
        <div className="checkout-page-items">{/* {cartMapped} */}</div>
        {checkoutSummary}
      </div>
    </div>
  );
}

export default CheckoutPage;
