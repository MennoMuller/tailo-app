import React from "react";

const ClicksSquare = (props) => {
  return (
    <a
      className="mx-2 flex h-24 w-24 shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md dark:bg-black"
      href={
        props.url.includes("http")
          ? props.url
          : "http://" + props.url
      }
      onClick={() => {
        props.onClick(props.index);
      }}
      target="_blank"
    >
      <div className="shrink-0 p-1 dark:rounded-md dark:bg-white dark:bg-opacity-30">
        <img
          className="h-10 w-10 object-cover"
          src={
            props.icon
              ? props.icon
              : props.iconGetter(props.url)
          }
        />
      </div>
      <span className="text-lg font-bold">
        {props.clicks}
      </span>
    </a>
  );
};

export default ClicksSquare;
