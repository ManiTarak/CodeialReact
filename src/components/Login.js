import React from "react";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleLoginBtnClick = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
  };
  handleEmailInput = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordInput = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            onChange={this.handleEmailInput}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordInput}
            required
          />
        </div>
        <div className="field">
          <button onClick={this.handleLoginBtnClick}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
