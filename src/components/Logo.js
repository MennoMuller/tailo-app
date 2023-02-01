import React from "react";
import logo from "./../img/lorem-logo.png";

const Logo = () => {
  return (
    <div className="mr-5 flex flex-row items-center">
      <img
        className="h-12 w-12 object-cover"
        src={logo}
        alt="logo"
      />
      <h1 className="text-4xl font-bold">Tailo</h1>
    </div>
  );
};

export default Logo;
