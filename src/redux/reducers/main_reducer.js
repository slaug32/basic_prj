const IS_FETCHING = "IS_FETCHING";
const SET_PRODUCTS = "SET_PRODUCTS";

const initialState = {
  products: [
    {
      id: 1,
      image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19689.png",
      name: "name",
      price: 12000,
    },
    {
      id: 2,
      image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19689.png",
      name: "name",
      price: 12000,
    },
    {
      id: 3,
      image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19689.png",
      name: "name",
      price: 12000,
    },
    {
      id: 4,
      image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19689.png",
      name: "name",
      price: 12000,
    },
    {
      id: 5,
      image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19689.png",
      name: "name",
      price: 12000,
    },
    {
      id: 6,
      image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19689.png",
      name: "name",
      price: 12000,
    },
  ],
  isFetching: false,
  full: "fghjk",
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
