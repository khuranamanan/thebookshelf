import axios from "axios";

export function addToCartService(product, token) {
  return axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: token } }
  );
}

export function removeFromCartService(id, token) {
  return axios.delete(`/api/user/cart/${id}`, {
    headers: {
      authorization: token,
    },
  });
}

export function updateQtyInCartService(id, token, actionType) {
  return axios.post(
    `/api/user/cart/${id}`,
    {
      action: {
        type: actionType,
      },
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
}
