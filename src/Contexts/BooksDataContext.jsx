import { createContext, useEffect, useReducer } from "react";
import { booksDataReducer, initialState } from "../Reducers/booksDataReducer";
import axios from "axios";
import { ACTION_TYPES } from "../utils/constant";

export const BooksDataContext = createContext();

function BooksDataProvider({ children }) {
  const [state, booksDataDispatch] = useReducer(booksDataReducer, initialState);

  async function getProductsData() {
    booksDataDispatch({
      type: ACTION_TYPES.SET_IS_LOADING,
      payload: { propName: "products", value: true },
    });
    try {
      const response = await axios.get("/api/products");

      booksDataDispatch({
        type: ACTION_TYPES.INITIALISE_PRODUCTS,
        payload: response.data.products,
      });
    } catch (err) {
      booksDataDispatch({
        type: ACTION_TYPES.SET_IS_ERROR,
        payload: { propName: "products", value: err.message },
      });
    } finally {
      booksDataDispatch({
        type: ACTION_TYPES.SET_IS_LOADING,
        payload: { propName: "products", value: false },
      });
    }
  }

  async function getCategoriesData() {
    booksDataDispatch({
      type: ACTION_TYPES.SET_IS_LOADING,
      payload: { propName: "categories", value: true },
    });
    try {
      const response = await axios.get("/api/categories");

      booksDataDispatch({
        type: ACTION_TYPES.INITIALISE_CATEGORIES,
        payload: response.data.categories,
      });
    } catch (err) {
      booksDataDispatch({
        type: ACTION_TYPES.SET_IS_ERROR,
        payload: { propName: "categories", value: err.message },
      });
    } finally {
      booksDataDispatch({
        type: ACTION_TYPES.SET_IS_LOADING,
        payload: { propName: "categories", value: false },
      });
    }
  }

  const cheapestBookInCollection = state?.products?.data?.reduce(
    (result, book) => (result > book.price ? book.price : result),
    state?.products?.data[0]?.price
  );

  const expensiveBookInCollection = state?.products?.data?.reduce(
    (result, book) => (result < book.price ? book.price : result),
    0
  );

  // Filter Logic
  function filterData(data, filters) {
    const filterByPriceRange =
      filters.priceSlider !== expensiveBookInCollection
        ? data.filter(
            ({ price }) => Number(price) <= Number(filters.priceSlider)
          )
        : data;

    const filterByCategories =
      filters.selectedCategories.length !== 0
        ? filterByPriceRange.filter(({ category }) =>
            // filters.selectedCategories.some((filterCategory) =>
            //   category.includes(filterCategory)
            // )
            category.some((checkCategory) =>
              filters.selectedCategories.includes(checkCategory)
            )
          )
        : filterByPriceRange;

    const filterByRating =
      filters.ratingFilter === "All"
        ? filterByCategories
        : filterByCategories.filter(
            ({ rating }) => rating >= filters.ratingFilter
          );

    let sortedResult;

    switch (filters.sortFilter) {
      case "POPULARITY":
        sortedResult = filterByRating;
        break;

      case "BESTSELLER_FIRST":
        sortedResult = filterByRating.sort((a, b) => {
          if (a.isBestSeller && !b.isBestSeller) {
            return -1;
          } else if (!a.isBestSeller && b.isBestSeller) {
            return 1;
          } else {
            return 0;
          }
        });
        break;

      case "LOW_TO_HIGH":
        sortedResult = filterByRating.sort((a, b) => a.price - b.price);
        break;

      case "HIGH_TO_LOW":
        sortedResult = filterByRating.sort((a, b) => b.price - a.price);
        break;

      default:
        sortedResult = filterByRating;
        break;
    }

    return sortedResult;
  }

  const displayData =
    state?.products?.data &&
    filterData([...state?.products?.data], state.filters);

  useEffect(() => {
    getProductsData();
    getCategoriesData();
  }, []);

  return (
    <BooksDataContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        filters: state.filters,
        displayData,
        booksDataDispatch,
        cheapestBookInCollection,
        expensiveBookInCollection,
      }}
    >
      {children}
    </BooksDataContext.Provider>
  );
}

export default BooksDataProvider;
