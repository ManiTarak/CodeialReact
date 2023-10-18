import React from "react";
import PostsList from "./";
class Home extends React.Component {
  render() {
    const { posts } = this.props;
    return <PostsList posts={posts}></PostsList>;
  }
}

export default Home;
