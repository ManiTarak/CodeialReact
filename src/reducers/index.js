import { combineReducers } from "redux";
import postsReducer from "./posts";
import { auth } from "./auth.js";

export default combineReducers({
  posts: postsReducer,
  auth: auth,
});
