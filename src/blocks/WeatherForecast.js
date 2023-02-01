import React from "react";
import PredictionItem from "../components/PredictionItem";

const WeatherForecast = (props) => {
  return (
    <div className="col-start-1 col-end-1 row-start-1 row-end-3 flex max-w-full flex-col rounded-2xl bg-white p-5 sm:max-h-full">
      <h2 className="text-2xl font-bold">
        Weather forecast
      </h2>
      <div className="flex shrink grow flex-col gap-1 overflow-y-auto overflow-x-hidden">
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
