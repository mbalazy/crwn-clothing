export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cartItems.push({ ...cartItemToAdd, quantity: 1 });
  }
};
