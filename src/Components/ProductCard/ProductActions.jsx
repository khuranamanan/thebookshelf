import { AiFillHeart } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import "./ProductActions.css";

function ProductActions({ stockQty }) {
  return (
    <div className="product-actions">
      <button className="wishlist-button">
        <span className="heart-icon">
          <AiFillHeart size={15} />
        </span>
        Add to Wishlist
      </button>
      <button className="cart-button" disabled={stockQty === 0}>
        <span className="shopping-bag-icon">
          <FaShoppingBag size={15} />
        </span>
        Add to Bag
      </button>
    </div>
  );
}

export default ProductActions;