import React from "react";
//import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className="flex flex-row items-center gap-1 sm:flex-col">
      <img
        src={props.image}
        className="h-20 w-20 rounded-full object-cover"
      />
      <h3 className="text-lg font-bold">
        {props.username}
      </h3>
    </div>
  );
};

export default Avatar;
