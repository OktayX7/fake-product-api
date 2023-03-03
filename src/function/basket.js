export const basketItemIncrement = ({product}, state, setState) => {
  const productInBasket = state.find((item) => item.id === product.id);
  if (productInBasket) {
    productInBasket.quantity++;
    setState([...state]);
  } else {
    setState([...state, {...product, quantity: 1}]);
  }
};

export const basketItemDecrement = ({product}, state, setState) => {
  const productInBasket = state.find((item) => item.id === product.id);
  if (productInBasket.quantity > 1) {
    productInBasket.quantity--;
    setState([...state]);
  } else {
    setState(state.filter((item) => item.id !== product.id));
  }
};

export const clearBasket = (setState) => {
  setState([]);
};

export const getTotalBasket = (basket) => {
  return basket?.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

export const getTotalBasketCount = (basket) => {
  return basket?.reduce((acc, item) => acc + item.quantity, 0);
};

export const addToBasket = (product, state, setState) => {
  setState([...state, product]);
};
