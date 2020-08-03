import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes.js";
import GlobalStyles from "./Styles/GlobalStyles.js";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Routes />
  </>,
  document.getElementById("root")
);
