import { useContext, useState } from "react";
import FilterBox from "./FilterBox";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductListingPage.css";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { FaFilter } from "react-icons/fa";
import Pagination from "../../Components/Pagination/Pagination";

function ProductListingPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { products, displayData } = useContext(BooksDataContext);
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 12;
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = displayData?.slice(indexOfFirstBook, indexOfLastBook);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const productsMapped = products?.isLoading ? (
    <p>Loading...</p>
  ) : products?.isError ? (
    <p>{products.isError}</p>
  ) : (
    currentBooks.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))
  );

  return (
    <div className="product-listing-page">
      <div className="product-listing-heading">
        <h1>Showing all Books</h1>
        {"  "}
        <p> {`(${displayData.length} Books)`} </p>
      </div>
      <div className="product-listing-content">
        <div className="mobile-filter-box">
          <button
            className="show-filter-btn"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <FaFilter /> {showMobileFilters ? "Hide Filters" : "Show Filters"}
          </button>
          {showMobileFilters && <FilterBox />}
        </div>
        <div className="desktop-filter-box">
          <FilterBox />
        </div>
        <div className="product-list">{productsMapped}</div>
      </div>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={displayData.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ProductListingPage;
