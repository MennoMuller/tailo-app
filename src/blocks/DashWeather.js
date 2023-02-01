import React from "react";
import { Link } from "react-router-dom";

const DashWeather = (props) => {
  return (
    <div
      className={
        "col-start-2 col-end-2 row-start-2 row-end-2 flex max-h-full max-w-full flex-col" +
          props.temperature >
        15
          ? " rounded-2xl bg-orange-400 p-5"
          : " rounded-2xl bg-blue-300 p-5"
      }
    >
      <div className="mb-2 flex flex-row justify-between">
        <h2 className="text-2xl font-bold">Weather</h2>
        <Link
          to="./weather"
          className="text-blue-500 hover:underline"
        >
          See all
        </Link>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 items-center justify-items-start">
        <p className="col-start-1 col-end-1 row-start-1 row-end-3 text-4xl font-bold">
          {props.temperature}°C
        </p>
        <div className="col-start-2 col-end-2 row-start-1 row-end-1 flex flex-row items-center gap-3 text-center">
          <img
            src={
              "http://openweathermap.org/img/w/" +
              props.icon +
              ".png"
            }
            alt=""
            className="h-12 w-12 rounded-full bg-white bg-opacity-50 object-cover"
          />
          <p className="shrink">{props.description}</p>
        </div>
        <div className="col-start-3 col-end-3 row-start-1 row-end-1 flex flex-row items-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-50 text-center text-sm">
            <p id="current-feels-like">
              {props.feelsLike}°C
            </p>
          </div>
          <p className="shrink">feels like</p>
        </div>
        <div className="col-start-2 col-end-2 row-start-2 row-end-2 flex flex-row items-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-50 text-center text-sm">
            <p>
              {props.wind ? props.wind : 0}
              <br />
              km/h
            </p>
          </div>
          <p className="shrink">wind</p>
        </div>
        <div className="col-start-3 col-end-3 row-start-2 row-end-2 flex flex-row items-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-50 text-center text-sm">
            <p>
              {props.rain}
              <br />
              mm
            </p>
          </div>
          <p className="shrink">rain</p>
        </div>
      </div>
    </div>
  );
};

export default DashWeather;
