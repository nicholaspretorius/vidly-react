import React, { Component } from "react";
import DataRow from "./dataRow";

class DataTable extends Component {
  render() {
    const { onClick, onLike, onSort } = this.props;
    return (
      <React.Fragment>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th onClick={() => onSort("title")} scope="col">
                  Title
                </th>
                <th onClick={() => onSort("genre.name")} scope="col">
                  Genre
                </th>
                <th onClick={() => onSort("numberInStock")} scope="col">
                  Stock
                </th>
                <th onClick={() => onSort("dailyRentalRate")} scope="col">
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
