import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";

import Form from "../common/Form";
import { login, getCurrentUser } from "./../../services/auth";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email address"),
    password: Joi.string()
      .min(5)
      .max(24)
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const req = {
        email: this.state.data.email,
        password: this.state.data.password
      };

      await login(req.email, req.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("Ex: ", ex);
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="container">
        <h3>Login Form</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email address", "email")}
          {this.renderInput("password", "Password", "password")}

          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          {this.renderSubmitButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
