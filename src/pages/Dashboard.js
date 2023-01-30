import React from "react";
import DashTasks from "../blocks/DashTasks";
import DashWeather from "../blocks/DashWeather";
import DashWebsites from "../blocks/DashWebsites";

const Dashboard = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Dashboard</h1>
      <div className="main-grid">
        <DashTasks
          tasks={props.tasks}
          date={props.date}
          compareTasks={props.compareTasks}
        />
        <DashWebsites
          websites={props.websites}
          iconGetter={props.iconGetter}
        />
        <DashWeather
          temperature={props.weather.main.temp}
          feelsLike={props.weather.main.feels_like}
          icon={props.weather.weather[0].icon}
          description={props.weather.weather[0].main}
          wind={props.weather.wind.speed}
          rain={
            props.weather.rain
              ? props.weather.rain["1h"]
              : 0
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
