import axios from "axios";
import { ACTION_TYPES } from "../../utils/constant";

export async function addToCart(booksDataDispatch, token, product) {
  try {
    const response = await axios.post(
      "api/user/cart",
      { product },
      { headers: { authorization: token } }
    );
    booksDataDispatch({
      type: ACTION_TYPES.ADD_TO_CART,
      payload: response.data.cart,
    });
  } catch (err) {
    console.log("Error From Add to Cart:", err.message);
  }
}

export async function removeFromCart(booksDataDispatch, id, token) {
  try {
    const response = await axios.delete(`api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    booksDataDispatch({
      type: ACTION_TYPES.REMOVE_FRM_CART,
      payload: response.data.cart,
    });
  } catch (err) {
    console.log("Error from remove from cart", err);
  }
}

export async function updateQtyInCart(
  booksDataDispatch,
  id,
  token,
  actionType
) {
  try {
    const response = await axios.post(
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
    booksDataDispatch({
      type: ACTION_TYPES.UPDATE_QTY_CART,
      payload: response.data.cart,
    });
  } catch (error) {
    console.log("Error from updateQtyInCart", error);
  }
}
