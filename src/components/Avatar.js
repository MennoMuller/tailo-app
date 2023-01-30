import React from "react";
import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className="avatar-wrapper">
      <img
        src={props.image}
        className="avatar-img"
      />
      <h3>{props.username}</h3>
    </div>
  );
};

export default Avatar;
