import { useContext } from "react";
import "./CartSummary.css";
import { OrderContext } from "../../Contexts/OrderConext";
import { ACTION_TYPES } from "../../utils/constant";
import { useNavigate } from "react-router";

function CartSummary({ cart }) {
  const { orderDispatch } = useContext(OrderContext);
  const navigate = useNavigate();

  const totalQuantity = cart?.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart?.reduce(
    (total, item) => total + item.originalPrice * item.qty,
    0
  );
  const discount =
    totalPrice - cart.reduce((total, item) => total + item.price * item.qty, 0);
  const deliveryCharges = 100;
  const totalAmount = totalPrice - discount + deliveryCharges;

  function handleCheckout() {
    // totalQuantity, totalPrice, discount, deliveryCharges, totalAmount
    orderDispatch({
      type: ACTION_TYPES.SET_ORDER_DETAILS,
      payload: {
        totalQuantity,
        totalPrice,
        discount,
        deliveryCharges,
        totalAmount,
      },
    });
    navigate("/checkout");
  }

  return (
    <div className="cart-page-summary">
      <h2 className="cart-page-summary-heading">Price Details</h2>
      <ul className="cart-page-summary-list">
        <li>
          <span>Price:</span>
          <span>({totalQuantity} items)</span>
          <span>Rs. {totalPrice}</span>
        </li>
        <li>
          <span>Discount:</span>
          <span>Rs. {discount}</span>
        </li>
        <li>
          <span>Delivery Charges:</span>
          <span>Rs. {deliveryCharges}</span>
        </li>
        <li className="cart-page-summary-total-amount">
          <span>Total Amount:</span>
          <span>Rs. {totalAmount}</span>
        </li>
      </ul>
      <p className="cart-page-summary-savings">
        You will save Rs. {discount} on this order.
      </p>
      <button
        className="cart-page-summary-checkout-btn"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;
