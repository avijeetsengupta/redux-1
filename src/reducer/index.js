import counterReducer from "./Counter";
import isLoggedReducer from "./isLogIn";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
});

export default rootReducer;
