import React, { Component } from "react";
import { getMovies, deleteMovie } from "./../services/fakeMovieService";
import DataTable from "./dataTable";
import Pagination from "./common/pagination";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: getMovies(),
      pageMovies: getMovies(),
      pageSize: 3,
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
    const index = page === 1 ? 0 : page - 1;
    // const movies = this.state.movies;
    const movies = this.state.movies.slice(
      index * this.state.pageSize,
      (index + 1) * this.state.pageSize
    );

    console.log("Page: ", page, ", Index: ", index, ", Movies: ", movies);

    this.setState({
      currentPage: page,
      pageMovies: movies
    });
  };

  render() {
    return (
      <div>
        <h3>Vidly React</h3>
        {this.state.movies.length === 0 && (
          <span>There are no currently no movies.</span>
        )}
        {this.state.movies.length > 0 && (
          <DataTable
            movies={this.state.pageMovies}
            allMovies={this.state.movies}
            onClick={movie => this.handleDelete(movie)}
            onLike={movie => this.handleLike(movie)}
          />
        )}
        <Pagination
          count={this.state.movies.length}
          pageSize={this.state.pageSize}
          current={this.state.currentPage}
          onPaginate={page => this.handlePagination(page)}
        />
      </div>
    );
  }
}

export default Movies;
