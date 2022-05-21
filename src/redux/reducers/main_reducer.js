import axios from "axios";
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
        isFetching: true,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
  }
  return state;
};

export const IsFetching = (payload) => ({
  type: IS_FETCHING,
  payload,
});

export const setProducts = (items) => ({
  type: SET_PRODUCTS,
  payload: items,
});

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: IS_FETCHING,
    payloaad: false,
  });

  axios
    .get("http://localhost:3001/products")
    .then(({ data }) => dispatch(setProducts(data)));
};

export default mainReducer;
