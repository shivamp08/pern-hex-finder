import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Content from "./components/Content";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

toast.configure();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setAuth = (bool) => {
    setIsLoggedIn(bool);
  };

  async function isAuth() {
    try {
      const res = await fetch("auth/verify", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true ? setIsLoggedIn(true) : setIsLoggedIn(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <Fragment>
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Link to="/login">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        backgroundColor: "rgba(0,0,0,0.65)",
                        border: "0",
                      }}
                    >
                      <i className="fas fa-sign-in-alt"></i> Login
                    </button>
                  </Link>
                  <Content initColors={[]} />
                </div>
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) =>
                !isLoggedIn ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={(props) =>
                !isLoggedIn ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/dashboard"
              render={(props) =>
                isLoggedIn ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
