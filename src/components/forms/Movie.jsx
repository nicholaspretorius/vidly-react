import React from "react";
import Joi from "joi-browser";

import Form from "./../common/Form";
import { saveMovie, getMovie } from "./../../services/fakeMovieService";
import { getGenres } from "./../../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      dailyRentalRate: "",
      numberInStock: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Daily Rental Rate"),
    numberInStock: Joi.number()
      .min(1)
      .min(10)
      .required()
      .label("Units in stock")
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    //if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapViewToModel(movie) });
  }

  mapViewToModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

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
          {this.renderInput("title", "Title")}
          {this.renderInput("dailyRentalRate", "Daily Rental Rate", "number")}
          {this.renderInput("numberInStock", "Units in stock", "number")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderSubmitButton("Add movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
