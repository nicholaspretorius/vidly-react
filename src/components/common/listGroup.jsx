import React, { Component } from "react";

class GenreList extends Component {
  render() {
    const { onItemSelect, selectedGenre, genres } = this.props;
    console.log("Genres: ", genres);
    console.log("Current genre: ", selectedGenre);

    return (
      <div className="list-group">
        {genres &&
          genres.map(genre => {
            return (
              <span
                className={
                  genre && genre.name === selectedGenre.name
                    ? "list-group-item list-group-item-action clickable active"
                    : "list-group-item list-group-item-action clickable"
                }
                key={genre._id}
                onClick={() => onItemSelect(genre)}
              >
                {genre.name}
              </span>
            );
          })}
      </div>
    );
  }
}

GenreList.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default GenreList;
