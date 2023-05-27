/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useReducer } from "react";
import { booksDataReducer, initialState } from "../Reducers/booksDataReducer";
import axios from "axios";
import { ACTION_TYPES } from "../utils/constant";
import filterProducts from "../utils/filterProducts";
import { AuthContext } from "./AuthContext";

export const BooksDataContext = createContext();

function BooksDataProvider({ children }) {
  const [state, booksDataDispatch] = useReducer(booksDataReducer, initialState);
  const { loginData } = useContext(AuthContext);

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

  async function initialiseCart() {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: loginData.token,
        },
      });
      booksDataDispatch({
        type: ACTION_TYPES.INITIALISE_CART,
        payload: response.data.cart,
      });
    } catch (err) {
      console.log("Error from initialiseCart", err);
    }
  }

  async function initialiseWishlist() {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: loginData.token,
        },
      });
      booksDataDispatch({
        type: ACTION_TYPES.INITIALISE_WISHLIST,
        payload: response.data.wishlist,
      });
    } catch (err) {
      console.log("Error from initialiseWishlist", err);
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
    if (loginData.isLoggedIn) {
      initialiseCart();
      initialiseWishlist();
    }
  }, [loginData.isLoggedIn]);

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
        wishlist: state.wishlist,
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
