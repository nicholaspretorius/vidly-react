import React, { Component } from "react";

class GenreList extends Component {
  render() {
    const { onClick, currentGenre, genres } = this.props;
    console.log("Genres: ", genres);
    console.log("Current genre: ", currentGenre);

    return (
      <div className="list-group">
        {genres &&
          genres.map(genre => {
            return (
              <span
                className={
                  genre && genre.name === currentGenre.name
                    ? "list-group-item list-group-item-action clickable active"
                    : "list-group-item list-group-item-action clickable"
                }
                key={genre._id}
                onClick={() => onClick(genre)}
              >
                {genre.name}
              </span>
            );
          })}
      </div>
    );
  }
}

export default GenreList;
