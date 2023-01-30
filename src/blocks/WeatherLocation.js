import React from "react";

const WeatherLocation = (props) => {
  return (
    <div className="grid-item item-c">
      <h2>Location</h2>
      <h1 className="city-name">{props.city}</h1>
      <p>
        {props.state}, {props.country}
      </p>
      <button
        className="submit-button"
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
    </div>
  );
};

export default WeatherLocation;
