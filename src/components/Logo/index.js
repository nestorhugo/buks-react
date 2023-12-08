import React from "react";
import logo from "../../img/logo.svg";
import "./style.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo-img"></img>
      <p>
        <strong>b8</strong>ks
      </p>
    </div>
  );
}

export default Logo;
