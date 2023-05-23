import {
  addToWishlistService,
  removeFromWishlistService,
} from "../../Services/Wishlist/wishlistServices";
import { ACTION_TYPES } from "../constant";

export async function addToWishlist(
  booksDataDispatch,
  product,
  token,
  setBtnDisabled
) {
  try {
    const response = await addToWishlistService(product, token);
    booksDataDispatch({
      type: ACTION_TYPES.ADD_TO_WISHLIST,
      payload: response.data.wishlist,
    });
  } catch (err) {
    console.log("Error from Add to Wishlist:", err);
  } finally {
    setBtnDisabled && setBtnDisabled(false);
  }
}

export async function removeFromWishlist(booksDataDispatch, id, token) {
  try {
    const response = await removeFromWishlistService(id, token);
    booksDataDispatch({
      type: ACTION_TYPES.REMOVE_FROM_WISHLIST,
      payload: response.data.wishlist,
    });
  } catch (err) {
    console.log("Error from remove from Wishlist", err);
  }
}
