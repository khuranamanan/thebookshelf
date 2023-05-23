import { createContext, useEffect, useReducer } from "react";
import { booksDataReducer, initialState } from "../Reducers/booksDataReducer";
import axios from "axios";
import { ACTION_TYPES } from "../utils/constant";
import filterProducts from "../utils/filterProducts";

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

  const displayData =
    state?.products?.data &&
    filterProducts(
      [...state?.products?.data],
      state.filters,
      expensiveBookInCollection
    );

  useEffect(() => {
    getProductsData();
    getCategoriesData();
  }, []);

  useEffect(() => {
    (function () {
      booksDataDispatch({
        type: ACTION_TYPES.INITIALIZE_RANGE_FILTER,
        payload: expensiveBookInCollection,
      });
    })();
  }, [booksDataDispatch, expensiveBookInCollection]);

  return (
    <BooksDataContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        filters: state.filters,
        cart: state.cart,
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
