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

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingItem.reserve_day === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, reserve_day: cartItem.reserve_day - 1 }
      : cartItem
  );
};

export const updateReserveDay = (cartItems, cartItemToUpdate, day) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToUpdate.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToUpdate.id
        ? { ...cartItem, reserve_day: day }
        : cartItem
    );
  }
};
