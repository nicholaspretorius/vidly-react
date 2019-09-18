import React from "react";
import Joi from "joi-browser";

import Form from "./../common/Form";
import { saveMovie } from "./../../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      name: "",
      genre: "",
      dailyRentalRate: "",
      numberInStock: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    dailyRentalRate: Joi.number()
      .positive()
      .max(10)
      .required()
      .label("Daily Rental Rate"),
    numberInStock: Joi.number()
      .positive()
      .min(1)
      .required()
      .label("Units in stock")
  };

  doSubmit = () => {
    const res = saveMovie(this.state.data);
    console.log("Create movie", res);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div className="container">
        <h3>Create Movie Form</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Title")}
          {this.renderInput("dailyRentalRate", "Daily Rental Rate", "number")}
          {this.renderInput("numberInStock", "Units in stock", "number")}
          {this.renderSelect("genre", "Genre", ["Action", "Comedy", "Horror", "Sci-Fi/Fantasy"])}
          {this.renderSubmitButton("Add movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
