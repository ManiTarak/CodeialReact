import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import { fetchPosts } from "../actions/posts";
import PostsList, { NavBar, Home, NotFound } from "./index.js";
// function Home(props) {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }
function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
function SignUp() {
  return (
    <div>
      <h1>SignUp</h1>
    </div>
  );
}

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
