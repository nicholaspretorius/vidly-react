import React, { Component } from "react";

class GenreList extends Component {
  render() {
    const { onClick, currentGenre, genres } = this.props;

    return (
      <div className="list-group">
        {genres.map(genre => {
          return (
            <a
              className={
                genre.name === currentGenre.name
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
              }
              key={genre._id}
              onClick={() => onClick(genre)}
            >
              {genre.name}
            </a>
          );
        })}
      </div>
    );
  }
}

export default GenreList;
