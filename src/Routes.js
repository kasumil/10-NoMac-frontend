import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main.js";
import Review from "./Pages/Review.js";
import Footer from "./Components/Footer.js";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/review" component={Review} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
