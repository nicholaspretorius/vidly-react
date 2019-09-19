import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import Form from "./../common/Form";
import { saveMovie, getMovie } from "./../../services/movies";
import { getGenres } from "./../../services/genres";

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
      .max(10)
      .required()
      .label("Units in stock")
  };

  async populateGenres() {
    const genres = await getGenres();
    this.setState({ genres });
  }

  async populateMovies() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;
      const movie = await getMovie(movieId);
      this.setState({ data: this.mapViewToModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This movie does not exit.");
        this.props.history.replace("/not-found");
      }
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovies();
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

  doSubmit = async () => {
    try {
      const res = await saveMovie(this.state.data);
      console.log("Create movie", res);
      this.props.history.push("/movies");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("Something went wrong.");
      }
    }
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
