import { useContext } from "react";
import { BooksDataContext } from "../../Contexts/BooksDataContext";

function FilterBox() {
  const { categories, cheapestBookInCollection, expensiveBookInCollection } =
    useContext(BooksDataContext);

  const categoriesCheckboxesMapped = categories?.data.map((category) => (
    <label key={category._id}>
      <input type="checkbox" className="category-checkbox-filter" />
      {category.categoryName}
    </label>
  ));

  return (
    <div className="filter-box">
      <h3>Filters</h3>

      {/* Price Range Slider */}
      <div className="filter-box-content">
        <div className="price-range-filter-box flex-center flex-dir-co">
          <h4>Price</h4>
          <label>
            <span className="price-range-min-max-labels">
              <span>{cheapestBookInCollection}</span>
              <span>{expensiveBookInCollection}</span>
            </span>
            <input
              type="range"
              className="price-range-filter"
              min={cheapestBookInCollection}
              max={expensiveBookInCollection}
            />
          </label>
        </div>

        {/* Categories Filter */}
        <div className="category-checkbox-filter-box flex-center flex-dir-co">
          <h4>Categories</h4>
          {categoriesCheckboxesMapped}
        </div>

        {/* Rating Filter */}
        <div className="rating-radio-filter-box flex-center flex-dir-co">
          <h4>Rating</h4>
          <label>
            <input type="radio" className="rating-radio-filter" /> 1 Star and
            above
          </label>
          <label>
            <input type="radio" className="rating-radio-filter" /> 2 Stars and
            above
          </label>
          <label>
            <input type="radio" className="rating-radio-filter" /> 3 Stars and
            above
          </label>
          <label>
            <input type="radio" className="rating-radio-filter" /> 4 Stars and
            above
          </label>
        </div>

        {/* Sort by Price */}
        <div className="sort-price-radio-filter-box flex-center flex-dir-co">
          <h4>Sort by Price</h4>
          <label>
            <input type="radio" className="sort-price-radio-filter" /> Price:
            Low To High
          </label>
          <label>
            <input type="radio" className="sort-price-radio-filter" /> Price:
            High To Low
          </label>
        </div>

        {/* Clear All Filters */}
        <button className="clear-filters">Clear All Filters</button>
      </div>
    </div>
  );
}

export default FilterBox;
