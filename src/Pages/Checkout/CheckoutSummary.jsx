import { useContext } from "react";
import { OrderContext } from "../../Contexts/OrderConext";
import "./CheckoutSummary.css";
import { BooksDataContext } from "../../Contexts/BooksDataContext";

function CheckoutSummary() {
  const { priceDetails, orderAddress } = useContext(OrderContext);
  const { cart } = useContext(BooksDataContext);
  const { totalQuantity, totalPrice, discount, deliveryCharges, totalAmount } =
    priceDetails;

  const orderDetailsMapped = cart?.map((item) => (
    <li key={item._id}>
      <span className="checkout-page-order-details-book-title">
        {item?.title}
      </span>
      <span>{item.qty}</span>
    </li>
  ));

  const deliveryAddress =
    Object.keys(orderAddress).length !== 0 ? (
      <div>
        <p>
          Name: {orderAddress.firstName} {orderAddress.lastName}
        </p>
        <p>
          Address: {orderAddress.addressLine1}, {orderAddress.addressLine2}
        </p>
        <p>City: {orderAddress.city}</p>
        <p>State: {orderAddress.state}</p>
        <p>Zip Code: {orderAddress.zipCode}</p>
        <p>Country: {orderAddress.country}</p>
      </div>
    ) : (
      <div>
        {" "}
        <p>No Address Found. Add an Address to place Order</p>{" "}
      </div>
    );

  return (
    <div className="checkout-page-summary">
      <h2 className="checkout-page-summary-heading">Order Details</h2>
      <ul className="checkout-page-summary-list">
        <li className="checkout-page-order-details-subheading">
          <span>Item</span>
          <span>Qty</span>
        </li>
        {orderDetailsMapped}
      </ul>
      <hr />
      <h2 className="checkout-page-summary-heading">Price Details</h2>
      <ul className="checkout-page-summary-list">
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
        <li className="checkout-page-summary-total-amount">
          <span>Total Amount:</span>
          <span>Rs. {totalAmount}</span>
        </li>
      </ul>
      <hr />
      <h2 className="checkout-page-summary-heading">Delivery Address</h2>
      <ul className="checkout-page-summary-list">{deliveryAddress}</ul>
      <p className="checkout-page-summary-savings">
        You will save Rs. {discount} on this order.
      </p>
      <button
        className="checkout-page-summary-place-order-btn"
        // onClick={handleCheckout}
      >
        Place Order
      </button>
    </div>
  );
}

export default CheckoutSummary;
