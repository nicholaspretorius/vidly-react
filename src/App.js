import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Movies from "./components/movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import CreateMoviePage from "./components/CreateMovie";
import LoginPage from "./components/Login";
import Logout from "./components/Logout";
import RegisterPage from "./components/Register";
import NotFound from "./components/NotFound";
import { getCurrentUser } from "./services/auth";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <NavBar user={user} />
        <main className="container">
          <ToastContainer />
          <Switch>
            <Route
              path="/movies/:id"
              render={props => {
                if (!user) return <Redirect to="/movies" />;
                return <CreateMoviePage {...props} />;
              }}
            />
            <Route path="/movies" render={props => <Movies {...props} />} user={user} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={Logout} />
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
