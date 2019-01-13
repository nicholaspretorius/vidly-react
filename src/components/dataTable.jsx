import React, { Component } from "react";
import DataRow from "./dataRow";
import Pagination from "./common/pagination";

class DataTable extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
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
                  onClick={() => this.props.onClick(movie)}
                  onLike={() => this.props.onLike(movie)}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            count={this.props.allMovies.length}
            pageSize={this.props.pageSize}
            current={this.props.currentPage}
            onPaginate={page => this.props.onPaginate(page)}
          />
        </div>
      </React.Fragment>
    );
  }

  onDelete(arg) {
    console.log("Delete", arg);
  }
}

export default DataTable;
