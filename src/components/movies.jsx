import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
// import { getMovies, deleteMovie } from "./../services/fakeMovieService";
import { getMovies, deleteMovie } from "./../services/movies";
// import { getGenres } from "./../services/fakeGenreService";
import { getGenres } from "./../services/genres";
import DataTable from "./common/dataTable";
import paginate from "./../utils/paginate";
import Pagination from "./common/pagination";
import GenreList from "./common/listGroup";
import SearchForm from "./forms/Search";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      genres: [],
      currentGenre: { _id: "0", name: "All" }, //this.setupGenres()[0],
      sortColumn: { column: "title", order: "asc" },
      pageSize: 3,
      currentPage: 1
    };
  }

  async componentDidMount() {
    this.setState({
      movies: await getMovies(),
      genres: await this.setupGenres()
    });
  }

  async setupGenres() {
    const genres = await getGenres();
    const all = [{ _id: "0", name: "All" }, ...genres];
    // return [all, ...genres];
    return all;
  }

  handleGenreSelection = async genre => {
    console.log("Genre selection: ", genre);
    const movies = await getMovies();
    const filtered = movies.filter(movie => {
      console.log("Movie: ", movie);
      if (genre.name === "All") {
        return movie;
      } else {
        console.log(
          "Genre: ",
          genre.name,
          " ",
          genre.name === movie.genre.name,
          " Movie: ",
          movie.genre.name
        );
        return genre.name === movie.genre.name;
      }
    });

    this.setState({
      movies: filtered,
      currentGenre: genre,
      currentPage: 1
    });
  };

  handleLike = movie => {
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
  };

  handleDelete = async movie => {
    await deleteMovie(movie._id);
    const movies = await getMovies();
    // const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
      movies
    });
  };

  handlePagination = page => {
    this.setState({
      currentPage: page
    });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const length = this.state.movies.length;
    const { movies, currentPage, pageSize, genres, currentGenre, sortColumn } = this.state;
    const sorted = _.orderBy(movies, [sortColumn.column], [sortColumn.order]);
    const allMovies = paginate(sorted, currentPage, pageSize);
    console.log("Genres component: ", genres);

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <GenreList
              genres={genres}
              currentGenre={currentGenre}
              onClick={this.handleGenreSelection}
            />
          </div>
          <div className="col">
            <Link to="/movies/new" className="btn btn-primary" style={{ marginBottom: 20 }}>
              Add movie
            </Link>
            <SearchForm />
            {length === 0 && <span>There are no currently no movies.</span>}
            {<p>There are currently {length} movies in the database.</p>}
            {length > 0 && (
              <React.Fragment>
                <DataTable
                  data={allMovies}
                  onClick={this.handleDelete}
                  onLike={this.handleLike}
                  onSort={this.handleSort}
                  sortColumn={sortColumn}
                />
                <Pagination
                  count={length}
                  pageSize={pageSize}
                  current={currentPage}
                  onPaginate={this.handlePagination}
                />
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
