export default function isProductInCart(cart, id) {
  return cart.some((product) => product._id === id);
}
