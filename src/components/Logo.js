import React from "react";
import logo from "./../img/lorem-logo.png";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="logo" />
      <h1 className="lorem-text">Tailo</h1>
    </div>
  );
};

export default Logo;
