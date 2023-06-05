/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { booksDataReducer, initialState } from "../Reducers/booksDataReducer";
import { ACTION_TYPES } from "../utils/constant";
import filterProducts from "../utils/filterProducts";
import { AuthContext } from "./AuthContext";
import {
  getCategoriesData,
  getProductsData,
  initialiseCart,
  initialiseWishlist,
} from "./utils/booksDataUtils";

export const BooksDataContext = createContext();

function BooksDataProvider({ children }) {
  const [state, booksDataDispatch] = useReducer(booksDataReducer, initialState);
  const { loginData } = useContext(AuthContext);
  const [loader, setLoader] = useState(false);

  const cheapestBookInCollection = state?.products?.data?.reduce(
    (result, book) => (result > book.price ? book.price : result),
    state?.products?.data[0]?.price
  );

  const expensiveBookInCollection = state?.products?.data?.reduce(
    (result, book) => (result < book.price ? book.price : result),
    0
  );

  const displayData = filterProducts(
    [...state?.products?.data],
    state.filters,
    expensiveBookInCollection
  );

  useEffect(() => {
    getProductsData(booksDataDispatch, setLoader);
    getCategoriesData(booksDataDispatch, setLoader);
    if (loginData.isLoggedIn) {
      initialiseCart(loginData, booksDataDispatch);
      initialiseWishlist(loginData, booksDataDispatch);
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
        currentPage: state.paginationPage,
        displayData,
        booksDataDispatch,
        cheapestBookInCollection,
        expensiveBookInCollection,
        loader,
        setLoader,
      }}
    >
      {children}
    </BooksDataContext.Provider>
  );
}

export default BooksDataProvider;
