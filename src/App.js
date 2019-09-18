import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Movies from "./components/movies.jsx";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import Movie from "./components/Movie";
import CreateMoviePage from "./components/CreateMovie";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/create" exact component={CreateMoviePage} />
            <Route path="/movies/:id" component={Movie} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Redirect from="/" to="/movies" exact />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
