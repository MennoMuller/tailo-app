import React from "react";

const Avatar = (props) => {
  return (
    <div className="flex flex-row items-center gap-1 sm:flex-col">
      <img
        src={props.image}
        className="h-20 w-20 rounded-full object-cover dark:border dark:border-solid dark:border-white"
      />
      <h3 className="text-lg font-bold dark:text-white">
        {props.username}
      </h3>
    </div>
  );
};

export default Avatar;
