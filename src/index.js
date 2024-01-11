import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: "Archivo", sans-serif;
  }
  
  li {
    list-style: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/favoritos">
          <p>Oi!</p>
        </Route>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
