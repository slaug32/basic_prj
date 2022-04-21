import { combineReducers, createStore } from "redux";
import main from "./reducers/main_reducer";
import basket from "./reducers/basket_reducer";

const reducers = combineReducers({
  main,
  basket,
});

const store = createStore(reducers);

export default store;
