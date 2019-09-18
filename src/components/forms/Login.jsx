import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef("username");
  state = {
    account: {
      emailAddress: "",
      password: ""
    }
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  onFormSubmit = event => {
    event.preventDefault();
    console.log("Login", this.state);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  //   onHandleEmailChange = ({ target }) => {
  //     const account = { ...this.state.account };
  //     account.emailAddress = target.value;
  //     this.setState({ account });
  //   };

  //   onHandlePasswordChange = ({ target }) => {
  //     const account = { ...this.state.account };
  //     account.password = target.value;
  //     this.setState({ account });
  //   };

  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <h3>Login Form</h3>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="emailAddress">Email address</label>
            <input
              autoFocus
              type="email"
              className="form-control"
              id="emailAddress"
              name="emailAddress"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              ref={this.username}
              value={account.emailAddress}
              onChange={this.handleChange}
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
              value={account.password}
              name="password"
              onChange={this.handleChange}
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
