import React, { Component } from "react";

class MovieForm extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h3>Create Movie Form</h3>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="titleHelp"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select className="form-control" id="genre">
              <option>Action</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Horror</option>
              <option>Sci-fi/Fantasy</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              className="form-control"
              id="rating"
              aria-describedby="ratingHelp"
              placeholder="Enter rating"
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Units in Stock</label>
            <input
              type="number"
              className="form-control"
              id="stock"
              aria-describedby="stockHelp"
              placeholder="Enter number of units in stock"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Movie
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
