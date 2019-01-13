import React, { Component } from "react";
import DataRow from "./dataRow";

class DataTable extends Component {
  calculatePages() {
    const pageCount = Math.ceil(
      this.props.allMovies.length / this.props.pageSize
    );
    console.log("Page Count: ", this.props.currentPage, pageCount);

    const start =
      this.props.currentPage === 1
        ? this.props.currentPage
        : (this.props.currentPage - 1) * this.props.pageSize + 1;
    const end =
      this.props.currentPage === pageCount
        ? this.props.allMovies.length
        : this.props.currentPage * this.props.pageSize;

    return this.props.movies.length === 1
      ? this.props.allMovies.length
      : " " + start + " - " + end;
  }

  render() {
    return (
      <React.Fragment>
        <p>
          There are currently {this.props.allMovies.length} movies in the
          database.
        </p>
        <p>Displaying movies: {this.calculatePages()}</p>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col">Like</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.movies.map((movie, index) => (
                <DataRow
                  index={index}
                  movie={movie}
                  key={movie._id}
                  currentPage={this.props.currentPage}
                  pageSize={this.props.pageSize}
                  onClick={() => this.props.onClick(movie)}
                  onLike={() => this.props.onLike(movie)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }

  onDelete(arg) {
    console.log("Delete", arg);
  }
}

export default DataTable;
