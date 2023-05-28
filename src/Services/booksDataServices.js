import axios from "axios";

export function getProductsDataService() {
  return axios.get("/api/products");
}

export function getCategoriesDataService() {
  return axios.get("/api/categories");
}

export function initialiseCartService(token) {
  return axios.get("/api/user/cart", {
    headers: {
      authorization: token,
    },
  });
}

export function initialiseWishlistService(token) {
  return axios.get("/api/user/wishlist", {
    headers: {
      authorization: token,
    },
  });
}
