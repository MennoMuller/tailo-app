import React from "react";

const WeatherNow = (props) => {
  return (
    <div
      className={
        props.temperature > 15
          ? "grid-item item-b orange"
          : "grid-item item-b skyblue"
      }
    >
      <h2>Weather now</h2>

      <div className="current-grid">
        <h1 id="current-temperature">
          {props.temperature}°C
        </h1>
        <div
          className="current-data"
          id="curr-icon-box"
        >
          <div
            className="current-icon"
            id="current-icon"
          >
            <img
              src={
                "http://openweathermap.org/img/w/" +
                props.icon +
                ".png"
              }
            />
          </div>
          <p id="current-desc">{props.description}</p>
        </div>
        <div
          className="current-data"
          id="curr-feels-box"
        >
          <div className="current-icon">
            <p id="current-feels-like">
              {props.feelsLike}°C
            </p>
          </div>
          <p>feels like</p>
        </div>
        <div
          className="current-data"
          id="curr-wind-box"
        >
          <div className="current-icon">
            <p id="current-wind">
              {props.wind}
              <br />
              km/h
            </p>
          </div>
          <p>wind</p>
        </div>
        <div
          className="current-data"
          id="curr-rain-box"
        >
          <div className="current-icon">
            <p id="current-rain">
              {props.rain}
              <br />
              mm
            </p>
          </div>
          <p>rain</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherNow;
