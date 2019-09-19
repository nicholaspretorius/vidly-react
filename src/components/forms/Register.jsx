import React from "react";
import Joi from "joi-browser";
// import { toast } from "react-toastify";

import Form from "./../common/Form";
import { createUser } from "./../../services/users";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password1: "",
      // password2: "",
      terms: false
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("First name"),
    email: Joi.string()
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

  doSubmit = async () => {
    console.log("Register");
    try {
      const user = {
        name: this.state.data.name,
        email: this.state.data.email,
        password: this.state.data.password1
      };
      await createUser(user);
      //this.props.history.push("/login");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("Ex: ", ex);
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
    // toast.success("Congratulations, you have been successfully registered!");
  };

  render() {
    return (
      <div className="container">
        <h3>Register Form</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "First name")}
          {this.renderInput("email", "Email address", "email")}
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
