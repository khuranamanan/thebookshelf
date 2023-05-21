import { useNavigate } from "react-router";
import calculateDiscount from "../../utils/calculateDiscount";
import ProductActions from "./ProductActions";
import "./ProductDetailsCard.css";
import { AiOutlineArrowLeft, AiFillStar } from "react-icons/ai";

function ProductDetailsCard({ book }) {
  const navigate = useNavigate();

  const outOfStockMessage = !book?.stockQty && (
    <p className="product-details-card-unavailable-message">
      Currently Unavailable
    </p>
  );

  return (
    <div className="product-details-card">
      <button className="go-back-btn flex-center" onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft size={20} /> Go Back
      </button>

      <div className="product-details-card-content">
        <div className="image-box">
          <img src={book?.img} alt={book?.title} />
        </div>
        <div className="book-card-details">
          <div className="book-heading">
            <h2 className="book-title">{book?.title}</h2>
            <p className="book-author">{book?.author}</p>
          </div>
          <div className="book-rating">
            <span className="rating">{book?.rating}</span>
            <span className="star">
              <AiFillStar />
            </span>
          </div>
          <div className="book-price-container">
            <span className="book-current-price">Rs. {book?.price}</span>
            {book?.originalPrice && (
              <>
                <span className="book-original-price">
                  Rs. {book?.originalPrice}
                </span>
                <span className="book-discount-given">
                  {calculateDiscount(book?.originalPrice, book?.price)}% off
                </span>
              </>
            )}
          </div>

          <p className="book-category">
            Category: {book?.category?.join(", ")}
          </p>
          <p className="book-pages">Pages: {book?.pages}</p>
          <p className="release-date">Release Date: {book?.releaseDate}</p>
          {outOfStockMessage}
        </div>
        <div className="book-actions">
          <ProductActions stockQty={book?.stockQty} />
        </div>
        <div className="book-about-details">
          <div className="about-book-box">
            <h4>About Book:</h4>
            <p className="about-book">{book?.aboutBook}</p>
          </div>
          <div className="about-author-box">
            <h4>About Author</h4>
            <p className="about-author">{book?.aboutAuthor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
