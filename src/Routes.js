import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialLogin from "./Components/LoginComponent/SocialLogin";
import EmailLogin from "./Components/LoginComponent/EmailLogin";
import Signup from "./Components/LoginComponent/Signup";
import Hotelpage from "./Pages/Components/Hotelpage";
import Main from "./Pages/Main.js";
import Review from "./Pages/Review.js";
import Footer from "./Components/Footer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/socialLogin" component={SocialLogin} />
        <Route exact path="/emailLogin" component={EmailLogin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/hotelpage" component={Hotelpage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
