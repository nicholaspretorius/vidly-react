import React, { Component } from "react";
import LikeButton from "./like";

class DataRow extends Component {
  render() {
    const { movie, onLike, onClick } = this.props;

    return (
      <tr>
        <th scope="row">{movie.title}</th>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <LikeButton liked={movie.liked} onLike={() => onLike(movie)} />
        </td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={() => onClick(movie)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default DataRow;
