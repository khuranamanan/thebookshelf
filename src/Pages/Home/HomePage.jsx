import { useContext } from "react";
import "./HomePage.css";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { getRandomBooks } from "../../utils/getRandomBooks";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

function HomePage() {
  const { products } = useContext(BooksDataContext);
  useDocumentTitle("The Bookshelf");

  const bestsellerbooks = products?.data?.filter(
    ({ isBestSeller, stockQty }) => isBestSeller && stockQty
  );

  console.log(products, bestsellerbooks);

  const bestsellarBooksDisplay = getRandomBooks(bestsellerbooks, 5)?.map(
    (book) => <ProductCard key={book._id} product={book} />
  );

  return (
    <div className="home-page">
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
          alt="Hero"
        />
        <div className="hero-content">
          <h1>Welcome to The Bookshelf</h1>
          <p>
            Discover a world of books and embark on an incredible reading
            journey.
          </p>
          <button className="explore-button">Explore Books</button>
        </div>
      </div>
      <section className="bestsellers-section">
        <div className="bestseller-heading">
          <h2>Our Bestsellers</h2>
          <button className="view-all-button btn-secondary">View All</button>
        </div>
        <div className="product-card-container">{bestsellarBooksDisplay}</div>
      </section>
    </div>
  );
}

export default HomePage;
