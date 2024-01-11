import React from "react";
import ReactDOM from "react-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favoritos from "./routes/Favoritos";

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
      <Header />
      <Switch>
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
