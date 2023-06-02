import { useContext, useEffect } from "react";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { useNavigate } from "react-router";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./CheckoutPage.css";
import CheckoutSummary from "./CheckoutSummary";
import { AuthContext } from "../../Contexts/AuthContext";
import { OrderContext } from "../../Contexts/OrderConext";
import { ACTION_TYPES } from "../../utils/constant";

function CheckoutPage() {
  const { loginData } = useContext(AuthContext);
  const { cart } = useContext(BooksDataContext);
  const { orderAddress, orderDispatch } = useContext(OrderContext);
  const navigate = useNavigate();
  useDocumentTitle("Checkout | The Bookshelf");

  function handleAddressSelection(addressSelected) {
    orderDispatch({
      type: ACTION_TYPES.SET_ORDER_ADDRESS,
      payload: { ...addressSelected },
    });
  }

  const addressOptionMapped =
    loginData?.user?.userAddresses.length !== 0 ? (
      loginData?.user?.userAddresses.map((address) => (
        <div key={address.id} className="address-option">
          <label>
            <input
              type="radio"
              name="address"
              value={address.id}
              checked={orderAddress.id === address.id}
              onChange={() => handleAddressSelection(address)}
            />
            <span>
              {address.firstName} {address.lastName}
              <br />
              {address.addressLine1}, {address.addressLine2}
              <br />
              {address.city}, {address.state}, {address.zipCode}
              <br />
              {address.country}
            </span>
          </label>
        </div>
      ))
    ) : (
      <p>No Addresses Added</p>
    );

  const checkoutSummary = cart.length !== 0 && (
    <>
      <CheckoutSummary />
    </>
  );

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/products");
    }
    if (cart.length !== 0) {
      orderDispatch({
        type: ACTION_TYPES.SET_ORDER_ADDRESS,
        payload: loginData?.user?.userAddresses[0],
      });
    }
  }, [cart.length, loginData?.user?.userAddresses, navigate, orderDispatch]);

  return (
    <div className="checkout-page">
      <div className="checkout-page-heading">
        <h1>Checkout</h1>
      </div>
      <div className="checkout-page-content">
        <div className="checkout-page-items">
          <h2>Select Address</h2>
          <div className="address-options">{addressOptionMapped}</div>
          <button
            className="add-address-btn btn-secondary"
            onClick={() => navigate("/profile/addresses")}
          >
            Add/Edit Address
          </button>
        </div>
        {checkoutSummary}
      </div>
    </div>
  );
}

export default CheckoutPage;
