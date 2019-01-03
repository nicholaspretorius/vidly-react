import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import DataTable from "./dataTable";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: getMovies()
    };
  }

  handleDelete() {}

  render() {
    return (
      <div>
        <h3>Movie Databases</h3>
        <p>There are currently x movies in the database.</p>
        <DataTable movies={this.state.movies} />
      </div>
    );
  }
}

export default Movies;
