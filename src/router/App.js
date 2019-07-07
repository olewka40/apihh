import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";
import "../styles.css";
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/AboutVacancie/:id" component={SecondPage} />
  </Switch>
);

export default App;
