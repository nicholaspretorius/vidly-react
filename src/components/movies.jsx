import React, { Component } from "react";
import { getMovies, deleteMovie } from "./../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import DataTable from "./dataTable";
import paginate from "./../utils/paginate";
import GenreList from "./common/listGroup";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      genres: [],
      currentGenre: this.setupGenres()[0],
      pageSize: 3,
      currentPage: 1
    };
  }

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: this.setupGenres()
    });
  }

  setupGenres() {
    const genres = getGenres();
    const all = { _id: "0", name: "All" };
    return [all, ...genres];
  }

  handleGenreSelection = genre => {
    const movies = getMovies().filter(movie => {
      if (genre.name === "All") {
        return movie;
      } else {
        return genre.name === movie.genre.name;
      }
    });

    this.setState({
      movies,
      currentGenre: genre
    });
  };

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
    deleteMovie(movie._id);
    const movies = getMovies();
    // const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
      movies
    });
  }

  handlePagination = page => {
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
          <div className="row">
            <div className="col-3">
              <GenreList
                genres={this.state.genres}
                currentGenre={this.state.currentGenre}
                onClick={this.handleGenreSelection}
              />
            </div>
            <div className="col">
              <DataTable
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                allMovies={this.state.movies}
                movies={movies}
                onClick={movie => this.handleDelete(movie)}
                onLike={movie => this.handleLike(movie)}
                onPaginate={page => this.handlePagination(page)}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Movies;
