import React, { Component } from "react";
import LikeButton from "./like";

class DataRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.index + 1}.</td>
        <th scope="row">{this.props.movie.title}</th>
        <td>{this.props.movie.genre.name}</td>
        <td>{this.props.movie.numberInStock}</td>
        <td>{this.props.movie.dailyRentalRate}</td>
        <td>
          <LikeButton
            liked={this.props.movie.liked}
            onLike={() => this.props.onLike(this.props.movie)}
          />
        </td>
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
