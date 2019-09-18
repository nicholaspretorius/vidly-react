import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    emailAddress: "",
    password: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log("Login", this.state);
  };

  onHandleEmailChange = ({ target }) => {
    this.setState({ emailAddress: target.value });
  };

  onHandlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  render() {
    return (
      <div className="container">
        <h3>Login Form</h3>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.onHandleEmailChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.onHandlePasswordChange}
            />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
