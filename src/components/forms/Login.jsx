import React, { Component } from "react";
import Joi from "joi-browser";

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

  schema = {
    emailAddress: Joi.string()
      .email()
      .required()
      .label("Email address"),
    password: Joi.string()
      .min(5)
      .max(24)
      .required()
      .label("Password")
  };

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
    const errors = { ...this.state.errors };
    const errorMessage = this.validateField(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validate = () => {
    const config = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, config);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  validateField = ({ value, name }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
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
          <button disabled={this.validate()} type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
