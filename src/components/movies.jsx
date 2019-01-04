import React, { Component } from "react";
import { getMovies, deleteMovie } from "./../services/fakeMovieService";
import DataTable from "./dataTable";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: getMovies()
    };
  }

  handleLike(movie) {
    const movies = this.state.movies.map(m => {
      if (m._id === movie._id) {
        m.liked = !movie.liked;
        return m;
      }
      return m;
    });

    this.setState({
      movies
    });
  }

  handleDelete(movie) {
    console.log("Deleting: ", movie._id);
    deleteMovie(movie._id);
    const movies = getMovies();
    // const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
      movies
    });
  }

  render() {
    return (
      <div>
        <h3>Vidly React</h3>
        {this.state.movies.length === 0 && (
          <span>There are no currently no movies.</span>
        )}
        {this.state.movies.length > 0 && (
          <DataTable
            movies={this.state.movies}
            onClick={movie => this.handleDelete(movie)}
            onLike={movie => this.handleLike(movie)}
          />
        )}
      </div>
    );
  }
}

export default Movies;
