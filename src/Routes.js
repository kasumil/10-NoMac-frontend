import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./Pages/test.js";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={Test} />
      </Switch>
    </Router>
  );
}

export default Routes;
