import { LOGIN_FAILED, LOGIN_STARTED, LOGIN_SUCCESS } from ".";
import { getFormBody } from "../helpers/utils.js";

export function startLogin() {
  return {
    type: LOGIN_STARTED,
  };
}
export function loginsucess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
export function loginFailed(errormessage) {
  return {
    type: LOGIN_FAILED,
    error: errormessage,
  };
}
export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = "https://codeial.codingninjas.com:8000/api/v2/users/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(loginsucess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}
