import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h3>Not Found.</h3>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
