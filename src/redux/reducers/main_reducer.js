const IS_FETCHING = "IS_FETCHING";
const SET_PRODUCTS = "SET_PRODUCTS";

const initialState = {
  items: [],
  isFetching: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
  }
  return state;
};

export const main = (payload) => ({
  type: IS_FETCHING,
  payload,
});

export const setProducts = (items) => ({
  type: SET_PRODUCTS,
  payload: items,
});

export default mainReducer;

// "server": "npx json-server --watch public/server.json --port=3001",
