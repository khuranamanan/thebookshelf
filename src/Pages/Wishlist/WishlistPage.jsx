import { useContext } from "react";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./WishlistPage.css";
import { useNavigate } from "react-router";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

function WishlistPage() {
  const { wishlist } = useContext(BooksDataContext);
  const navigate = useNavigate();
  useDocumentTitle("Wishlist | The Bookshelf");

  const noItemsInWishlist = wishlist.length === 0 && (
    <div className="empty-wishlist-message-box flex-center flex-dir-co">
      <p>
        Your wishlist is empty. Start exploring our books and add items to your
        wishlist!
      </p>
      <button className="btn-secondary" onClick={() => navigate("/products")}>
        Browse books
      </button>
    </div>
  );

  const wishlistItemsMapped =
    wishlist.length !== 0 &&
    wishlist.map((book) => (
      <ProductCard product={book} isWishlistPage key={book._id} />
    ));

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-heading">Wishlist</h1>
      <div className="wishlist-content">
        {noItemsInWishlist} {wishlistItemsMapped}
      </div>
    </div>
  );
}

export default WishlistPage;
