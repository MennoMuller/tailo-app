import React from "react";
import DashTasks from "../blocks/DashTasks";
import DashWeather from "../blocks/DashWeather";
import DashWebsites from "../blocks/DashWebsites";

const Dashboard = (props) => {
  return (
    <div className="main-height flex flex-col gap-3 p-2">
      <h1 className="text-4xl font-bold dark:text-white">
        Dashboard
      </h1>
      <div className="flex min-h-0 min-w-0 max-w-full grow grid-cols-2 grid-rows-2 flex-col gap-5 sm:grid">
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
