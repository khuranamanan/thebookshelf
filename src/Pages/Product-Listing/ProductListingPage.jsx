import { useContext, useState } from "react";
import FilterBox from "./FilterBox";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductListingPage.css";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { FaFilter } from "react-icons/fa";

function ProductListingPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { products } = useContext(BooksDataContext);

  const productsMapped = products?.isLoading ? (
    <p>Loading...</p>
  ) : products?.isError ? (
    <p>{products.isError}</p>
  ) : (
    products?.data?.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))
  );

  return (
    <div className="product-listing-page">
      <div className="product-listing-heading">
        <h1>Showing all Books</h1>
        {"  "}
        <p> {`(${products?.data.length} Books)`} </p>
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
    </div>
  );
}

export default ProductListingPage;
