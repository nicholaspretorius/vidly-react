import React, { Component } from "react";

class GenreList extends Component {
  render() {
    console.log("Genres: ", this.props.genres, this.props.currentGenre.name);
    return (
      <div className="list-group">
        {this.props.genres.map(genre => {
          return (
            <a
              className={
                genre.name === this.props.currentGenre.name
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
              }
              key={genre._id}
              onClick={() => this.props.onClick(genre)}
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
