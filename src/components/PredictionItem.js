import React from "react";

const PredictionItem = (props) => {
  return (
    <div className="prediction-item">
      <p className="prediction-time">
        {props.predictionItem.dt_txt.slice(0, -3)}
      </p>
      <p className="prediction-temp">
        {props.predictionItem.main.temp}°
      </p>
      <div className="prediction-icon">
        <img
          src={
            "http://openweathermap.org/img/w/" +
            props.predictionItem.weather[0].icon +
            ".png"
          }
          alt={props.predictionItem.weather[0].main}
        />
      </div>
      <p className="prediction-desc">
        {props.predictionItem.weather[0].main}
      </p>
      <div className="prediction-icon">
        <p>
          {props.predictionItem.rain
            ? props.predictionItem.rain["3h"]
            : 0}
        </p>
      </div>
      <p className="prediction-label">mm rain</p>
    </div>
  );
};

export default PredictionItem;
