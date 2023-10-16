import { UPDATE_STATE_PL } from "./index";
export function fetchPosts() {
  return (dispatch) => {
    const url =
      "https://codeial.codingninjas.com:8000/api/v2/posts?page=1&limit=5";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch(updateStateForPostList(response.data.posts));
      });
  };
}
function updateStateForPostList(posts) {
  return {
    type: UPDATE_STATE_PL,
    posts: posts,
  };
}
