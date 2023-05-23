export default function isProductInCart(cart, id) {
  return cart.some((product) => product._id === id);
}

// const isProductInWishlist = (wishlist, productId) => {
//   return wishlist.some((product) => product._id === productId);
// };
