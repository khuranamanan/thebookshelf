import calculateDiscount from "../../utils/calculateDiscount";
import { AiFillStar } from "react-icons/ai";
import "./ProductCard.css";
import { useNavigate } from "react-router";
import ProductActions from "./ProductActions";

function ProductCard({ product, isWishlistPage = false }) {
  const {
    _id,
    img,
    title,
    author,
    price,
    originalPrice,
    isBestSeller,
    rating,
    stockQty,
  } = product;
  const navigate = useNavigate();

  const outOfStockMessage = !stockQty && (
    <p className="product-card-unavailable-message">Currently Unavailable</p>
  );

  return (
    <div className="product-card">
      <div
        className="product-image"
        onClick={() => navigate(`/products/${_id}`)}
      >
        <img src={img} alt={title} />
        {isBestSeller && <span className="best-seller">Bestseller</span>}
      </div>
      <div
        className="product-details"
        onClick={() => navigate(`/products/${_id}`)}
      >
        <h3 className="product-title">{title}</h3>
        <p className="product-author">{author}</p>
        <div className="price-container">
          <span className="current-price">Rs. {price}</span>
          {originalPrice && (
            <>
              <span className="original-price">Rs. {originalPrice}</span>
              <span className="discount-given">
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
        {outOfStockMessage}
      </div>
      <ProductActions
        productID={_id}
        stockQty={stockQty}
        book={product}
        isWishlistPage={isWishlistPage}
      />
    </div>
  );
}

export default ProductCard;
