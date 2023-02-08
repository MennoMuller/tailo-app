import React from "react";

const PredictionItem = (props) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg bg-slate-300 p-2 text-sm dark:bg-slate-700">
      <p className="w-24 text-center font-bold">
        {props.predictionItem.dt_txt.slice(0, -3)}
      </p>
      <p className="mr-3 w-12 text-center text-base">
        {props.predictionItem.main.temp}°C
      </p>

      <img
        src={
          "https://openweathermap.org/img/w/" +
          props.predictionItem.weather[0].icon +
          ".png"
        }
        alt={props.predictionItem.weather[0].main}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-400 object-cover text-center dark:bg-slate-900"
      />

      <p className="ml-1 w-12 text-left">
        {props.predictionItem.weather[0].main}
      </p>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-400 object-cover text-center font-bold dark:bg-slate-900">
        <p>
          {props.predictionItem.rain
            ? props.predictionItem.rain["3h"]
            : 0}
        </p>
      </div>
      <p className="ml-2 text-left">mm rain</p>
    </div>
  );
};

export default PredictionItem;
