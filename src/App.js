import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import Checkout from "./components/pages/checkout/Checkout";
import Login from "./components/pages/login/Login";

import { useStateValue } from "./components/stateProvider/StateProvider";
import { auth } from "./firebase";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  // useEffect < Powerful
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup operations go in here
      unsubscribe();
    };
  }, [dispatch]);

  console.log("USER IS >>", user);

  return (
    // Router has children inside (Route), giving props to them
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <React.Fragment>
              <Header />
              <Checkout />
            </React.Fragment>
          </Route>
          <Route path="/login">
            <React.Fragment>
              <Login />
            </React.Fragment>
          </Route>
          {/* This is the default route, / */}
          <Route path="/">
            <React.Fragment>
              <Header />
              <Home />
            </React.Fragment>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/* We NEED React-Router */

/* localhost.com */

/* localhost.com/checkout */

/* localhost.com/login */

export default App;
