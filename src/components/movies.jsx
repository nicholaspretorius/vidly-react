import React, { Component } from "react";
import { getMovies, deleteMovie } from "./../services/fakeMovieService";
import DataTable from "./dataTable";
import paginate from "./../utils/paginate";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: getMovies(),
      pageSize: 2,
      currentPage: 1
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

  handlePagination = page => {
    console.log("Page: ", page);
    this.setState({
      currentPage: page
    });
  };

  render() {
    const movies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div>
        <h3>Vidly React</h3>
        {this.state.movies.length === 0 && (
          <span>There are no currently no movies.</span>
        )}
        {
          <p>
            There are currently {this.state.movies.length} movies in the
            database.
          </p>
        }
        {this.state.movies.length > 0 && (
          <DataTable
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            allMovies={this.state.movies}
            movies={movies}
            onClick={movie => this.handleDelete(movie)}
            onLike={movie => this.handleLike(movie)}
            onPaginate={page => this.handlePagination(page)}
          />
        )}
      </div>
    );
  }
}

export default Movies;
