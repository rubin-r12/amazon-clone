import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route path="/checkout">
            <Header />
            {/* <Home /> */}
            <h1>I'm the checkout component</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
