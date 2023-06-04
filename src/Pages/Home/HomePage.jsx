import { useContext } from "react";
import "./HomePage.css";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { useNavigate } from "react-router";
import { ACTION_TYPES } from "../../utils/constant";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import { BeatLoader } from "react-spinners";

function HomePage() {
  const { products, categories, booksDataDispatch, expensiveBookInCollection } =
    useContext(BooksDataContext);
  const navigate = useNavigate();
  useDocumentTitle("The Bookshelf");

  const bestsellerbooks = products?.data?.filter(
    ({ isBestSeller, stockQty }) => isBestSeller && stockQty
  );

  const popularCategoriesDisplay = categories?.data
    ?.slice(0, 3)
    .map((category) => (
      <CategoryCard
        image={category.img}
        categoryName={category.categoryName}
        description={category.description}
        key={category._id}
      />
    ));

  const bestsellarBooksDisplay = bestsellerbooks
    ?.slice(0, 4)
    ?.map((book) => <ProductCard key={book._id} product={book} />);

  function handleViewBestsellersBtn() {
    booksDataDispatch({
      type: ACTION_TYPES.VIEW_BESTSELLERS,
      payload: { priceSlider: expensiveBookInCollection },
    });
    navigate("/products");
  }

  function handleExploreBooksButtonClick() {
    booksDataDispatch({
      type: ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM,
    });
    navigate("/products");
  }

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
          <button
            className="explore-button"
            onClick={handleExploreBooksButtonClick}
          >
            Explore Books
          </button>
        </div>
      </div>
      <section className="home-page-section">
        <div className="home-page-section-heading">
          <h2>Our Bestsellers</h2>
          <button
            className="view-all-button btn-secondary"
            onClick={handleViewBestsellersBtn}
          >
            View All Bestsellers
          </button>
        </div>
        <div className="product-card-container">
          {products?.isLoading ? (
            <BeatLoader color="#ffcd3c" />
          ) : products?.isError ? (
            <p>{products.isError}</p>
          ) : (
            bestsellarBooksDisplay
          )}
        </div>
      </section>
      <section className="home-page-section">
        <div className="home-page-section-heading">
          <h2>Popular Categories</h2>
          <button
            className="view-all-button btn-secondary"
            onClick={() => navigate("/categories")}
          >
            View All Categories
          </button>
        </div>
        <div className="product-card-container">
          {categories.isLoading ? (
            <BeatLoader color="#ffcd3c" />
          ) : categories.isError ? (
            <p>{categories.isError}</p>
          ) : (
            <>{popularCategoriesDisplay}</>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
