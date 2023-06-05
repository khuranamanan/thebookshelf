import {
  addToWishlistService,
  removeFromWishlistService,
} from "../../Services/Wishlist/wishlistServices";
import { ACTION_TYPES } from "../constant";
import { toast } from "react-toastify";

export async function addToWishlist(booksDataDispatch, product, token) {
  try {
    const response = await addToWishlistService(product, token);
    booksDataDispatch({
      type: ACTION_TYPES.ADD_TO_WISHLIST,
      payload: response.data.wishlist,
    });
    toast.success(`"${product.title}" successfully added to Wishlist`);
  } catch (err) {
    console.log("Error from Add to Wishlist:", err);
    toast.error(`Failed to Add "${product.title}" to Wishlist`);
  }
}

export async function removeFromWishlist(booksDataDispatch, id, token) {
  try {
    const response = await removeFromWishlistService(id, token);
    booksDataDispatch({
      type: ACTION_TYPES.REMOVE_FROM_WISHLIST,
      payload: response.data.wishlist,
    });
    toast.success(`Successfully removed an item from the Wishlist`);
  } catch (err) {
    console.log("Error from remove from Wishlist", err);
    toast.error(`Failed to remove an item from the Wishlist`);
  }
}
