import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth.js";
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
    if (this.state.email && this.state.password)
      this.props.dispatch(login(this.state.email, this.state.password));
    // console.log(this.state.email);
    // console.log(this.state.password);
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
    const { error, inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
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
          {inProgress ? (
            <button className="Logging-btn" disabled={inProgress}>
              Logging In
            </button>
          ) : (
            <button onClick={this.handleLoginBtnClick}>Log In</button>
          )}
        </div>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Login);
