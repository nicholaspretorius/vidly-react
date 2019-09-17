import React, { Component } from "react";
import LikeButton from "./like";

class DataRow extends Component {
  render() {
    const { item, onLike, onClick } = this.props;

    return (
      <tr>
        <th scope="row">{item.title}</th>
        <td>{item.genre.name}</td>
        <td>{item.numberInStock}</td>
        <td>{item.dailyRentalRate}</td>
        <td>
          <LikeButton liked={item.liked} onLike={() => onLike(item)} />
        </td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={() => onClick(item)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default DataRow;
