import React, { Component } from "react";

class DataRow extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.movie.title}</th>
        <td>{this.props.movie.genre.name}</td>
        <td>{this.props.movie.numberInStock}</td>
        <td>{this.props.movie.dailyRentalRate}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onClick(this.props.movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default DataRow;
