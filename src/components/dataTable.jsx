import React, { Component } from "react";
import DataRow from "./dataRow";

class DataTable extends Component {
  sort = column => {
    const sortColumn = { ...this.props.sortColumn };
    console.log("Sort: ", sortColumn);
    if (sortColumn.column === column) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.column = column;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  render() {
    const { onClick, onLike } = this.props;
    return (
      <React.Fragment>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th onClick={() => this.sort("title")} scope="col">
                  Title
                </th>
                <th onClick={() => this.sort("genre.name")} scope="col">
                  Genre
                </th>
                <th onClick={() => this.sort("numberInStock")} scope="col">
                  Stock
                </th>
                <th onClick={() => this.sort("dailyRentalRate")} scope="col">
                  Rate
                </th>
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
                  onClick={() => onClick(movie)}
                  onLike={() => onLike(movie)}
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
