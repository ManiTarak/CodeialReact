import { UPDATE_STATE_PL } from "../actions";
export default function postsReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_STATE_PL:
      return action.posts;
    default:
      return state;
  }
}
