export function isProductInWishlist(wishlist, productId) {
  return wishlist.some((product) => product._id === productId);
}
