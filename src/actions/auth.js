import { LOGIN_STARTED } from ".";
import { getFormBody } from "../helpers/utils.js";

export function startLogin() {
  return {
    type: LOGIN_STARTED,
  };
}
export function login(email, password) {
  return (dispatch) => {
    const url = "https://codeial.codingninjas.com:8000/api/v2/users/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    });
  };
}
