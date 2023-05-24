import { ACTION_TYPES } from "../../utils/constant";
import {
  addToCartService,
  removeFromCartService,
  updateQtyInCartService,
} from "../../Services/Cart/cartServices";

export async function addToCart(
  booksDataDispatch,
  token,
  product,
  setBtnDisabled
) {
  try {
    const response = await addToCartService(product, token);
    booksDataDispatch({
      type: ACTION_TYPES.ADD_TO_CART,
      payload: response.data.cart,
    });
  } catch (err) {
    console.log("Error From Add to Cart:", err.message);
  } finally {
    setBtnDisabled(false);
  }
}

export async function removeFromCart(booksDataDispatch, id, token) {
  try {
    const response = await removeFromCartService(id, token);
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
    const response = await updateQtyInCartService(id, token, actionType);
    booksDataDispatch({
      type: ACTION_TYPES.UPDATE_QTY_CART,
      payload: response.data.cart,
    });
  } catch (error) {
    console.log("Error from updateQtyInCart", error);
  }
}
