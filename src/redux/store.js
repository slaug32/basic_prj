import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import main from "./reducers/main_reducer";
import basket from "./reducers/basket_reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  main,
  basket,
});

const composeReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeReduxDevTools(applyMiddleware(thunk))
);

export default store;
