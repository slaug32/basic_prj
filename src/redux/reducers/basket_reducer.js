const ADD_PRODUCT_BASKET = "ADD_PRODUCT_BASKET";
const CLEAR_BASKET = "CLEAR_BASKET";
const REMOVE_BASKET_PRODUCT = "REMOVE_BASKET_PRODUCT";

const initialState = {
  items: {},
  totalPrice: 0,
  totalAmount: 0,
};

const setTotalPrice = (array) => array.reduce((sum, obj) => obj.price + sum, 0);

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET: {
      const curentProductId = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newProduct = {
        ...state.items,
        [action.payload.id]: {
          items: curentProductId,
          totalPrice: setTotalPrice(curentProductId),
        },
      };

      const items = Object.values(newProduct).map((obj) => obj.items);
      const allProduct = [].concat.apply([], items);
      const totalPrice = setTotalPrice(allProduct);

      return {
        ...state,
        items: newProduct,
        totalAmount: allProduct.length,
        totalPrice,
      };
    }
    case CLEAR_BASKET:
      return {
        totalPrice: 0,
        totalAmount: 0,
        items: {},
      };

    case REMOVE_BASKET_PRODUCT:
      const newDelete = {
        ...state.items,
      };
      const currentTotalPrice = newDelete[action.payload].totalPrice;
      const currentTotalAmount = newDelete[action.payload].items.length;
      delete newDelete[action.payload];
      return {
        ...state,
        items: newDelete,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalAmount: state.totalAmount - currentTotalAmount,
      };
  }

  return state;
};

export const addProductBasket = (productObj) => ({
  type: ADD_PRODUCT_BASKET,
  payload: productObj,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});

export const removeBasketProduct = (id) => ({
  type: REMOVE_BASKET_PRODUCT,
  payload: id,
});

export default basketReducer;
