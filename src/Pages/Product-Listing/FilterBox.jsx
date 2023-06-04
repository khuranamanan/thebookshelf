import { useContext } from "react";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { ACTION_TYPES } from "../../utils/constant";

function FilterBox() {
  const {
    categories,
    booksDataDispatch,
    cheapestBookInCollection,
    expensiveBookInCollection,
    filters,
  } = useContext(BooksDataContext);

  function handleCategoryFilterChange(event) {
    booksDataDispatch({
      type: ACTION_TYPES.SELECTED_CATEGORIES_CHANGE,
      payload: event.target.value,
    });
    booksDataDispatch({ type: ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM });
  }

  const categoriesCheckboxesMapped = categories?.data.map((category) => (
    <label key={category._id}>
      <input
        type="checkbox"
        className="category-checkbox-filter"
        checked={filters.selectedCategories.includes(category.categoryName)}
        value={category.categoryName}
        onChange={handleCategoryFilterChange}
      />
      {category.categoryName}
    </label>
  ));

  function handlePriceRangeFilterChange(event) {
    booksDataDispatch({
      type: ACTION_TYPES.RANGE_FILTER_CHANGE,
      payload: event.target.value,
    });
    booksDataDispatch({ type: ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM });
  }

  function handleRatingFilterChange(event) {
    booksDataDispatch({
      type: ACTION_TYPES.RATING_FILTER_CHANGE,
      payload: event.target.value,
    });
    booksDataDispatch({ type: ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM });
  }

  function handleSortFilterChange(event) {
    booksDataDispatch({
      type: ACTION_TYPES.SORT_FILTER_CHANGE,
      payload: event.target.value,
    });
    booksDataDispatch({ type: ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM });
  }

  function handleClearFiltersBtnClick() {
    booksDataDispatch({
      type: ACTION_TYPES.CLEAR_ALL_FILTERS,
      payload: { rangeInitialValue: expensiveBookInCollection },
    });
    booksDataDispatch({ type: ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM });
  }

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
              value={filters.priceSlider}
              onChange={handlePriceRangeFilterChange}
            />
            {filters.priceSlider}
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
            <input
              type="radio"
              className="rating-radio-filter"
              value="4"
              checked={filters.ratingFilter === "4"}
              onChange={handleRatingFilterChange}
            />{" "}
            4 Star and above
          </label>
          <label>
            <input
              type="radio"
              className="rating-radio-filter"
              value="3"
              checked={filters.ratingFilter === "3"}
              onChange={handleRatingFilterChange}
            />{" "}
            3 Stars and above
          </label>
          <label>
            <input
              type="radio"
              className="rating-radio-filter"
              value="2"
              checked={filters.ratingFilter === "2"}
              onChange={handleRatingFilterChange}
            />{" "}
            2 Stars and above
          </label>
          <label>
            <input
              type="radio"
              className="rating-radio-filter"
              value="1"
              checked={filters.ratingFilter === "1"}
              onChange={handleRatingFilterChange}
            />{" "}
            1 Star and above
          </label>
        </div>

        {/* Sort by Price */}
        <div className="sort-price-radio-filter-box flex-center flex-dir-co">
          <h4>Sort</h4>
          <label>
            <input
              type="radio"
              className="sort-price-radio-filter"
              checked={filters.sortFilter === "POPULARITY"}
              value="POPULARITY"
              onChange={handleSortFilterChange}
            />{" "}
            Popularity
          </label>
          <label>
            <input
              type="radio"
              className="sort-price-radio-filter"
              checked={filters.sortFilter === "BESTSELLER_FIRST"}
              value="BESTSELLER_FIRST"
              onChange={handleSortFilterChange}
            />{" "}
            Bestseller First
          </label>
          <label>
            <input
              type="radio"
              className="sort-price-radio-filter"
              checked={filters.sortFilter === "LOW_TO_HIGH"}
              value="LOW_TO_HIGH"
              onChange={handleSortFilterChange}
            />{" "}
            Price: Low To High
          </label>
          <label>
            <input
              type="radio"
              className="sort-price-radio-filter"
              checked={filters.sortFilter === "HIGH_TO_LOW"}
              value="HIGH_TO_LOW"
              onChange={handleSortFilterChange}
            />{" "}
            Price: High To Low
          </label>
        </div>

        {/* Clear All Filters */}
        <button className="clear-filters" onClick={handleClearFiltersBtnClick}>
          Clear All Filters
        </button>
      </div>
    </div>
  );
}

export default FilterBox;
