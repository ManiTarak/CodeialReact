import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/index";
export default function configuration() {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  return store;
}
