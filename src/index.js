import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Startpage from "./Startpage"
import { Route, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={Startpage} />
      <Route path="/bridgeresponse" component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);