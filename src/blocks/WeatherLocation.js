import React from "react";

const WeatherLocation = (props) => {
  return (
    <div className="col-start-2 col-end-2 row-start-2 row-end-2 flex max-w-full flex-col rounded-2xl bg-white p-5 sm:max-h-full">
      <h2 className="text-2xl font-bold">Location</h2>
      <p className="text-4xl font-bold">{props.city}</p>
      <p>
        {props.state}, {props.country}
      </p>
      <button
        className="colorful-background self-end rounded-3xl px-3 py-2 text-white"
        onClick={() =>
          props.onLocationUpdate(
            prompt(
              "Enter the name of your city",
              props.city
            )
          )
        }
      >
        Edit Location
      </button>
      <div className="w-screen"></div>
    </div>
  );
};

export default WeatherLocation;
