import { useContext, useState } from "react";
import FilterBox from "./FilterBox";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductListingPage.css";
import { BooksDataContext } from "../../Contexts/BooksDataContext";

function ProductListingPage() {
  const [showModal, setShowModal] = useState(false);
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
      <div className="product-listing-filter-bar">
        {showModal && (
          <div className="filter-modal">
            <FilterBox />
            <button className="clear-filters">Clear All Filters</button>
          </div>
        )}
        {!showModal && (
          <button
            className="show-modal-button"
            onClick={() => setShowModal(true)}
          >
            Show Filters
          </button>
        )}
      </div>
      <div className="product-listing-content">
        <div className="filter-box">
          <FilterBox />
        </div>
        <div className="product-list">{productsMapped}</div>
      </div>
    </div>
  );
}

export default ProductListingPage;
