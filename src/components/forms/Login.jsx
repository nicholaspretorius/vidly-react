import React, { Component } from "react";
import Input from "./../common/Input";

class LoginForm extends Component {
  username = React.createRef("username");
  state = {
    account: {
      emailAddress: "",
      password: ""
    },
    errors: {}
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  handleSubmit = event => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log("Errors: ", errors);
    if (errors) return;

    // call server
    console.log("Login", this.state);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.emailAddress.trim() === "") {
      errors.emailAddress = "Email address is required.";
    }

    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <h3>Login Form</h3>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="emailAddress"
            label="Email address"
            type="email"
            value={account.emailAddress}
            onChange={this.handleChange}
            error={errors.emailAddress}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
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
