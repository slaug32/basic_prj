import axios from "axios";
const IS_FETCHING = "IS_FETCHING";
const SET_ITEMS = "SET_ITEMS";

const initialState = {
  items: [],
  isFetching: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
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

export const setItems = (items) => ({
  type: SET_ITEMS,
  payload: items,
});

export const fetchItems = () => (dispatch) => {
  dispatch({
    type: IS_FETCHING,
    payloaad: false,
  });

  axios.get("/items").then(({ data }) => dispatch(setItems(data)));
};

export default mainReducer;
