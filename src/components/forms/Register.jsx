import React, { Component } from "react";

import Input from "./../common/Input";

class RegisterForm extends Component {
  state = {
    account: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      terms: false
    }
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.account);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <h3>Register Form</h3>
        <form onSubmit={this.onSubmit}>
          <Input
            name="firstName"
            label="First name"
            onChange={this.handleChange}
            value={account.firstName}
          />
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="lastNameHelp"
              placeholder="Enter last name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              aria-describedby="emailAddressHelp"
              placeholder="Enter email address"
            />
            <small id="emailAddressHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password1">Password</label>
            <input type="password" className="form-control" id="password1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm password</label>
            <input type="password" className="form-control" id="password2" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="terms" />
            <label className="form-check-label" htmlFor="terms">
              Agree to terms and conditions
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
