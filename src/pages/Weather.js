import React from "react";
import WeatherForecast from "../blocks/WeatherForecast";
import WeatherLocation from "../blocks/WeatherLocation";
import WeatherNow from "../blocks/WeatherNow";
//import "./Weather.css";

const Weather = (props) => {
  return (
    <div className="main-height flex flex-col gap-3 p-2">
      <h1 className="text-4xl font-bold">Weather</h1>
      <div className="flex min-h-0 min-w-0 max-w-full grow grid-cols-2 grid-rows-2 gap-5 sm:grid">
        <WeatherForecast
          predictions={props.weather.predictions}
        />
        <WeatherNow
          temperature={props.weather.current.main.temp}
          feelsLike={props.weather.current.main.feels_like}
          icon={props.weather.current.weather[0].icon}
          description={
            props.weather.current.weather[0].main
          }
          wind={props.weather.current.wind.speed}
          rain={
            props.weather.current.rain
              ? props.weather.current.rain["1h"]
              : 0
          }
        />
        <WeatherLocation
          city={props.weather.geo.name}
          state={props.weather.geo.state}
          country={props.weather.geo.country}
          onLocationUpdate={props.onLocationUpdate}
        />
      </div>
    </div>
  );
};

export default Weather;
