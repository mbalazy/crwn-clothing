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

export const deleteItemFromCart = (cartItems, idd) => {
  console.log(cartItems, idd);
  cartItems = cartItems.filter(item => item.id !== idd);
};
