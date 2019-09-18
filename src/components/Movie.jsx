import React, { Component } from "react";

class Movie extends Component {
  saveHandler = () => {
    console.log("Save");
    this.props.history.push("/movies");
  };
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h3>Title ID: {params.id}</h3>
        <button type="button" onClick={this.saveHandler}>
          Save
        </button>
      </div>
    );
  }
}

export default Movie;
