import axios from "axios";

export function addToWishlistService(product, token) {
  return axios.post(
    "/api/user/wishlist",
    {
      product,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
}

export function removeFromWishlistService(id, token) {
  return axios.delete(`/api/user/wishlist/${id}`, {
    headers: {
      authorization: token,
    },
  });
}
