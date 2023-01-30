import React, { useEffect } from "react";

const Header = (props) => {
  let timerID;

  useEffect(() => {
    timerID = setInterval(() => props.tick(), 500);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const getDate = (date) => {
    return (
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear()
    );
  };

  const getTime = (date) => {
    return (
      date.getHours() +
      ":" +
      (date.getMinutes() >= 10
        ? date.getMinutes()
        : "0" + date.getMinutes()) +
      ":" +
      (date.getSeconds() >= 10
        ? date.getSeconds()
        : "0" + date.getSeconds())
    );
  };

  return (
    <header className="colorful-background flex h-20 w-screen flex-row items-center justify-between gap-4 px-4 text-white sm:justify-end">
      <span>{getDate(props.date)}</span>
      <span className="text-xl font-bold">
        {getTime(props.date)}
      </span>
    </header>
  );
};

export default Header;
