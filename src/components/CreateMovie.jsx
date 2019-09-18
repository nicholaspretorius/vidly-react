import React from "react";
import MovieForm from "./forms/Movie";

const CreateMoviePage = props => {
  return (
    <div className="container">
      <MovieForm {...props} />
    </div>
  );
};

export default CreateMoviePage;
