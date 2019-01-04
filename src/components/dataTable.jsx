import React, { Component } from "react";
import DataRow from "./dataRow";
import Pagination from "./common/pagination";

class DataTable extends Component {
  state = {
    pageSize: 2,
    currentPage: 1
  };

  handlePagination = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    return (
      <React.Fragment>
        <p>
          There are currently {this.props.movies.length} movies in the database.
        </p>
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
              {this.props.movies.map(movie => (
                <DataRow
                  movie={movie}
                  key={movie._id}
                  onClick={() => this.props.onClick(movie)}
                  onLike={() => this.props.onLike(movie)}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            count={this.props.movies.length}
            pageSize={this.state.pageSize}
            current={this.state.currentPage}
            onPaginate={this.handlePagination}
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
