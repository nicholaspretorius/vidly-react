import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { toast } from "react-toastify";

import { getMovies, deleteMovie } from "./../services/movies";
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
      currentPage: 1,
      pageSize: 3,
      searchQuery: "",
      selectedGenre: { _id: "", name: "All Genres" },
      sortColumn: { column: "title", order: "asc" }
    };
  }

  async componentDidMount() {
    const data = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];

    const movies = await getMovies();
    this.setState({ movies, genres });
  }

  handleGenreSelection = async genre => {
    this.setState({
      searchQuery: "",
      selectedGenre: genre,
      currentPage: 1
    });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: "All Genres", currentPage: 1 });
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
    const backup = this.state.movies;
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This post has already been deleted.");
      }
      this.setState({ movies: backup });
    }
  };

  handlePagination = page => {
    this.setState({
      currentPage: page
    });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.column], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length } = this.state.movies;
    const { currentPage, pageSize, searchQuery, sortColumn, selectedGenre, genres } = this.state;
    const { user } = this.props;

    const { totalCount, data: movies } = this.getPagedData();

    if (length === 0) return <p>There are no movies in the database.</p>;

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <GenreList
              genres={genres}
              selectedGenre={selectedGenre}
              onItemSelect={this.handleGenreSelection}
            />
          </div>
          <div className="col">
            {user && (
              <Link to="/movies/new" className="btn btn-primary" style={{ marginBottom: 20 }}>
                Add movie
              </Link>
            )}
            <SearchForm value={searchQuery} onChange={this.handleSearch} />
            {totalCount === 0 && <span>There are no currently no movies.</span>}
            {<p>There are currently {totalCount} movies in the database.</p>}
            {totalCount > 0 && (
              <React.Fragment>
                <DataTable
                  data={movies}
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
