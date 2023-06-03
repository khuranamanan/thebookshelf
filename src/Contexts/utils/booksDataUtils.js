import {
  getCategoriesDataService,
  getProductsDataService,
  initialiseCartService,
  initialiseWishlistService,
} from "../../Services/booksDataServices";
import { ACTION_TYPES } from "../../utils/constant";

export async function getProductsData(booksDataDispatch, setLoader) {
  booksDataDispatch({
    type: ACTION_TYPES.SET_IS_LOADING,
    payload: { propName: "products", value: true },
  });
  setLoader(true);
  try {
    const response = await getProductsDataService();

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
    setLoader(false);
  }
}

export async function getCategoriesData(booksDataDispatch, setLoader) {
  booksDataDispatch({
    type: ACTION_TYPES.SET_IS_LOADING,
    payload: { propName: "categories", value: true },
  });
  setLoader(true);
  try {
    const response = await getCategoriesDataService();

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
    setLoader(false);
  }
}

export async function initialiseCart(loginData, booksDataDispatch) {
  try {
    const response = await initialiseCartService(loginData.token);
    booksDataDispatch({
      type: ACTION_TYPES.INITIALISE_CART,
      payload: response.data.cart,
    });
  } catch (err) {
    console.log("Error from initialiseCart", err);
  }
}

export async function initialiseWishlist(loginData, booksDataDispatch) {
  try {
    const response = await initialiseWishlistService(loginData.token);
    booksDataDispatch({
      type: ACTION_TYPES.INITIALISE_WISHLIST,
      payload: response.data.wishlist,
    });
  } catch (err) {
    console.log("Error from initialiseWishlist", err);
  }
}
