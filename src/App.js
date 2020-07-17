import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import Checkout from "./components/pages/checkout/Checkout";
import Login from "./components/pages/login/Login";

function App() {
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
