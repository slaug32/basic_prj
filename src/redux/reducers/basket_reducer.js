const ADD_PRODUCT_BASKET = "ADD_PRODUCT_BASKET";

const initialState = {
  items: {},
  totalPrice: 0,
  totalAmount: 0,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      const newState = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allProduct = [].concat.apply([], Object.values(newState));
      const totalPrice = allProduct.reduce((sum, obj) => obj.cort + sum, 0);

      return {
        ...state,
        items: newState,
        totalAmount: allProduct.length,
        totalPrice,
      };
  }

  return state;
};

export const addProductBasket = (productObj) => ({
  type: ADD_PRODUCT_BASKET,
  payload: productObj,
});

export default basketReducer;
