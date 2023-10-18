import { LOGIN_FAILED, LOGIN_STARTED, LOGIN_SUCCESS } from "../actions";

const InitialState = {
  user: {},
  isLoggedIn: false,
  inProgress: false,
  error: null,
};
export function auth(state = InitialState, action) {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };
    default:
      return state;
  }
}
