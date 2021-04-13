import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Services from "./Services.jsx";
import ServiceChoose from "./ServiceChoose.jsx";

export default function Home() {
  return (
    <Router>
      <Redirect from="/" to="/services" />
      <Switch>
        <Route path="/services/:id" component={ServiceChoose} />
        <Route path="/services" component={Services} />
      </Switch>
    </Router>
  );
}
