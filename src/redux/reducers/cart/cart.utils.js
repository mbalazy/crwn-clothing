export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  existingCartItem
    ? existingCartItem.quantity++
    : cartItems.push({ ...cartItemToAdd, quantity: 1 });
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const cartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  cartItem.quantity--;

  return cartItem.quantity !== 0
    ? cartItems
    : deleteItemFromCart(cartItems, cartItemToRemove);
};

export const deleteItemFromCart = (cartItems, itemToDelete) =>
  (cartItems = cartItems.filter(item => item.id !== itemToDelete.id));
