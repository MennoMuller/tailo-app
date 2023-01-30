import React from "react";

const ClicksSquare = (props) => {
  return (
    <a
      className="square"
      href={
        props.url.includes("http")
          ? props.url
          : "http://" + props.url
      }
      onClick={() => {
        console.log(props.index + " was clicked");
      }}
      target="_blank"
    >
      <img
        className="square-icon"
        src={
          props.icon
            ? props.icon
            : props.iconGetter(props.url)
        }
      />
      <span className="square-number">{props.clicks}</span>
    </a>
  );
};

export default ClicksSquare;
