import React from "react";
import Joi from "joi-browser";

import Form from "./../common/Form";

class RegisterForm extends Form {
  state = {
    data: {
      firstName: "",
      emailAddress: "",
      password1: "",
      // password2: "",
      terms: false
    },
    errors: {}
  };

  schema = {
    firstName: Joi.string()
      .required()
      .label("First name"),
    emailAddress: Joi.string()
      .email()
      .required()
      .label("Email address"),
    password1: Joi.string()
      .min(5)
      .max(24)
      .required()
      .label("Password"),
    terms: Joi.boolean()
    // password2: Joi.ref("password1")
  };

  doSubmit = () => {
    console.log("Register");
  };

  render() {
    return (
      <div className="container">
        <h3>Register Form</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "First name")}
          {this.renderInput("emailAddress", "Email address", "email")}
          {this.renderInput("password1", "Password", "password")}
          {/* {this.renderInput("password2", "Confirm password", "password")} */}

          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="terms" />
            <label className="form-check-label" htmlFor="terms">
              Agree to terms and conditions
            </label>
          </div>
          {this.renderSubmitButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
