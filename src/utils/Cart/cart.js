import { ACTION_TYPES } from "../../utils/constant";
import {
  addToCartService,
  removeFromCartService,
  updateQtyInCartService,
} from "../../Services/Cart/cartServices";
import { toast } from "react-toastify";

export async function addToCart(booksDataDispatch, token, product) {
  try {
    const response = await addToCartService(product, token);
    booksDataDispatch({
      type: ACTION_TYPES.ADD_TO_CART,
      payload: response.data.cart,
    });
    toast.success(`"${product.title}" successfully added to Bag`);
  } catch (err) {
    console.log("Error From Add to Cart:", err.message);
    toast.error(`Failed to Add "${product.title}" to Bag`);
  }
}

export async function removeFromCart(booksDataDispatch, id, token) {
  try {
    const response = await removeFromCartService(id, token);
    booksDataDispatch({
      type: ACTION_TYPES.REMOVE_FRM_CART,
      payload: response.data.cart,
    });
    toast.success(`Successfully removed an item from the Bag`);
  } catch (err) {
    console.log("Error from remove from cart", err);
    toast.error(`Failed to remove an item from the Bag`);
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
    toast.error(`Failed to update quantity of an item in the Bag`);
  }
}
