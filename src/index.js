import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favoritos from "./routes/Favoritos";
import Login from "./routes/Login";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Archivo", sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #main-content {
    flex-grow: 1;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
`;

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Layout>
        <Header />
        <Main>
          <Routes>
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
        <Footer />
      </Layout>
    </Router>
  </React.StrictMode>
);
