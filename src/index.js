import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./routes/Home";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
