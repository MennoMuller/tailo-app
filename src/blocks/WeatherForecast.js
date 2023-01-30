import React from "react";
import PredictionItem from "../components/PredictionItem";

const WeatherForecast = (props) => {
  return (
    <div className="grid-item item-a">
      <h2>Weather forecast</h2>
      <div className="list-wrapper">
        {props.predictions.map((prediction, index) => (
          <PredictionItem
            predictionItem={prediction}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
