import React, { Component } from "react";
import DataRow from "./dataRow";

class DataTable extends Component {
  state = {};

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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.movies.map(movie => (
                <DataRow
                  movie={movie}
                  key={movie._id}
                  onClick={() => this.props.onClick(movie)}
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
