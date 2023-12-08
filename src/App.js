import React, { Component } from "react";
import "./App.css";
import logo from "./img/logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>
              <strong>b8ks</strong>
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
