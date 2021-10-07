let store = [];

export function getCartStore() {
  return store;
}

export function addCartItem(product) {
  product.quantity = 1;
  store.push(product);
}

export function removeCartItem(product) {
  product.quantity = 0;
  const cleanedCart = store.filter(p => p.name !== product.name);
  store = cleanedCart;
}