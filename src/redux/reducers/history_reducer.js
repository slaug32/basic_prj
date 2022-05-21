const SET_ISFECHING = "SET_ISFECHING";

const initialState = {
  items: [
    {
      id: 1,
      image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19689.png",
      name: "IPhone",
      price: 67000,
    },
    {
      id: 2,
      image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19689.png",
      name: "IPhone",
      price: 67000,
    },
    {
      id: 3,
      image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19689.png",
      name: "IPhone",
      price: 67000,
    },
    {
      id: 4,
      image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19689.png",
      name: "IPhone",
      price: 67000,
    },
  ],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISFECHING: {
      return {
        ...state,
        items: action.payload,
      };
    }
  }
  return state;
};

export let add = (payload) => ({ type: SET_ISFECHING, payload });

export default historyReducer;
