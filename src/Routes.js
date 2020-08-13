import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialLogin from "./Components/LoginComponent/SocialLogin";
import EmailLogin from "./Components/LoginComponent/EmailLogin";
import Signup from "./Components/LoginComponent/Signup";
import Hotelpage from "./Pages/Components/Hotelpage";
import Main from "./Pages/Main";
import Review from "./Pages/Review";
import PostReview from "./Pages/PostReview";
import Footer from "./Components/Footer";
import DetailListPage from "./Pages/DetailListPage";
import GoogleMap from "./Components/DetailComponents/GoogleMap";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/socialLogin" component={SocialLogin} />
        <Route exact path="/emailLogin" component={EmailLogin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/hotelpage" component={Hotelpage} />
        <Route exact path="/postreview" component={PostReview} />
        <Route exact path="/list" component={DetailListPage} />
        <Route exact path="/map" component={GoogleMap} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
