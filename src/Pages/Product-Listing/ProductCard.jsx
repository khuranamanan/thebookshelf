import calculateDiscount from "../../utils/calculateDiscount";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

function ProductCard({ product }) {
  const { img, title, author, price, originalPrice, isBestSeller, rating } =
    product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={img} alt={title} />
        {isBestSeller && <span className="best-seller">Bestseller</span>}
      </div>
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-author">{author}</p>
        <div className="price-container">
          <span className="current-price">Rs. {price}</span>
          {originalPrice && (
            <>
              <span className="original-price">Rs. {originalPrice}</span>
              <span className="discont-given">
                {calculateDiscount(originalPrice, price)}% off
              </span>
            </>
          )}
        </div>
        <div className="product-rating">
          <span className="rating">{rating}</span>
          <span className="star">
            <AiFillStar />
          </span>
        </div>
      </div>
      <div className="product-actions">
        <button className="wishlist-button">
          <span className="heart-icon">
            <AiFillHeart />
          </span>{" "}
          Add to Wishlist
        </button>
        <button className="cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
