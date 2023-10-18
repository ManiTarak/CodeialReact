import React from "react";

class NotFound extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "90vh",
          width: "90vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>This is 404 , Nothing is found here!!!!!</h1>
      </div>
    );
  }
}

export default NotFound;
