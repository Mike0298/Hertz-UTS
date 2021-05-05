export const addItem = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, reserve_day: cartItem.reserve_day + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, reserve_day: 1 }];
};

export const updateReserveDay = (cartItems, cartItemToUpdate) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToUpdate.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToUpdate.id
        ? { ...cartItem, reserve_day: cartItemToUpdate.reserve_day }
        : cartItem
    );
  }
};
