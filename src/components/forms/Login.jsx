import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";

class LoginForm extends Form {
  state = {
    data: {
      emailAddress: "",
      password: ""
    },
    errors: {}
  };

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

  doSubmit = () => {
    // call server
    console.log("Login", this.state);
  };

  render() {
    return (
      <div className="container">
        <h3>Login Form</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("emailAddress", "Email address", "email")}
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
