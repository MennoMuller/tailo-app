import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Websites from "./pages/Websites";
import Weather from "./pages/Weather";
import Sidebar from "./components/Sidebar";

import avatar from "./img/avatar.jpg";

const App = () => {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [websites, setWebsites] = useState([]);
  const [geo, setGeo] = useState({
    name: "",
    state: "",
    country: ""
  });
  const [current, setCurrent] = useState({
    main: { temp: "", feels_like: "" },
    weather: [{ icon: "04d", main: "" }],
    wind: { speed: "" }
  });
  const [predictions, setPredictions] = useState([]);
  const [date, setDate] = useState(new Date());

  const APIKey = "a41f22726acb8cb21959b4d538ac9093";

  const getDefaultIconUrl = (url) => {
    const firstPoint = url.indexOf(".");
    let secondPoint = url.indexOf(".", firstPoint + 1);
    if (
      url.substring(firstPoint, secondPoint).includes("/")
    ) {
      secondPoint = firstPoint;
    }
    const baseEnd = url.indexOf("/", secondPoint);
    let urlBase =
      baseEnd === -1 ? url : url.substring(0, baseEnd);
    if (!urlBase.includes("http")) {
      urlBase = "http://" + urlBase;
    }
    return urlBase + "/favicon.ico";
  };

  const compareTasks = (a, b) => {
    if (!a.deadline_date) {
      if (!b.deadline_date) {
        return 0;
      } else {
        return 1;
      }
    }
    if (!b.deadline_date) {
      return -1;
    }
    let aDeadline, bDeadline;
    if (a.deadline_time) {
      aDeadline = Date.parse(
        a.deadline_date + " " + a.deadline_time
      );
    } else {
      aDeadline = Date.parse(a.deadline_date);
    }
    if (b.deadline_time) {
      bDeadline = Date.parse(
        b.deadline_date + " " + b.deadline_time
      );
    } else {
      bDeadline = Date.parse(b.deadline_date);
    }

    if (aDeadline < bDeadline) {
      return -1;
    }
    if (aDeadline > bDeadline) {
      return 1;
    }
    return 0;
  };

  const toggleComplete = (index) => {
    let tasksList = [...tasks];
    let taskToModify = tasksList.find(
      (task) => task.id === index
    );
    taskToModify.complete = !taskToModify.complete;
    setTasks(tasksList);

    //TODO: Database update
  };

  const tick = () => {
    setDate(new Date());
  };

  const handleUser = () => {
    fetch("data/user.json")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  const handleTasks = () => {
    fetch("data/tasks.json")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  };

  const handleWebsites = () => {
    fetch("data/websites.json")
      .then((response) => response.json())
      .then((data) => setWebsites(data));
  };

  const handleWebsiteClick = (index) => {
    let websitesList = [...websites];
    websitesList.find((site) => site.id === index).clicks++;
    setWebsites(websitesList);

    //TODO: Update database with new click count
  };

  const handleModifyTask = (index, props) => {
    const tasksList = [...tasks];
    const taskToModify = tasksList.find(
      (task) => task.id === index
    );
    let taskModified = {
      ...taskToModify,
      name: props.name,
      category: props.category,
      deadline_date: props.deadline_date,
      deadline_time: props.deadline_time
    };
    tasksList[tasksList.indexOf(taskToModify)] =
      taskModified;

    setTasks(tasksList);

    //TODO: Database update
  };

  const handleDeleteTask = (index) => {
    let tasksList = [...tasks];
    tasksList = tasksList.filter(
      (task) => task.id !== index
    );
    setTasks(tasksList);

    //TODO: Database update
  };

  const getNextTaskId = () => {
    let id = 1;
    tasks.forEach((task) => {
      if (task.id === id) {
        id++;
      }
    });
    return id;
  };

  const handleAddTask = (props) => {
    tasks.push({
      id: getNextTaskId(),
      name: props.name,
      category: props.category,
      deadline_date: props.deadline_date,
      deadline_time: props.deadline_time,
      complete: false,
      user_id: user.id
    });
  };

  const handleModifyWebsite = (index, props) => {
    const sitesList = [...websites];
    const siteToModify = sitesList.find(
      (site) => site.id === index
    );
    let siteModified = {
      ...siteToModify,
      url: props.url,
      name: props.name,
      description: props.description
    };
    sitesList[sitesList.indexOf(siteToModify)] =
      siteModified;

    setWebsites(sitesList);

    //TODO: Database update
  };

  const handleDeleteWebsite = (index) => {
    let sitesList = [...websites];
    sitesList = sitesList.filter(
      (site) => site.id !== index
    );
    setWebsites(sitesList);

    //TODO: Database update
  };

  const getNextWebsiteId = () => {
    let id = 1;
    websites.forEach((site) => {
      if (site.id === id) {
        id++;
      }
    });
    return id;
  };

  const handleAddWebsite = (props) => {
    websites.push({
      id: getNextWebsiteId(),
      url: props.url,
      name: props.name,
      description: props.description,
      clicks: 0,
      user_id: user.id
    });
  };

  const handleLocationUpdate = (city) => {
    if (city === null) {
      return;
    }
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=1&appid=" +
        APIKey
    )
      .then((response) => response.json())
      .then((data) => {
        if (data[0]) {
          setGeo(data[0]);
        } else {
          handleLocationUpdate(
            prompt(
              'Error: city "' +
                city +
                "\" not recognized. Please ensure it's spelled correctly.",
              city
            )
          );
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleWeatherUpdate = () => {
    if (!geo.lat) {
      return;
    }
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        geo.lat +
        "&lon=" +
        geo.lon +
        "&units=metric&appid=" +
        APIKey
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setCurrent(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForecastUpdate = () => {
    if (!geo.lat) {
      return;
    }
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        geo.lat +
        "&lon=" +
        geo.lon +
        "&units=metric&appid=" +
        APIKey
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setPredictions(data.list);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCurrentCity = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=` +
        APIKey
    )
      .then((response) => response.json())
      .then((data) => {
        if (data[0]) {
          handleLocationUpdate(data[0].name);
        }
      });
  };

  useEffect(() => {
    handleUser();
    handleWebsites();
    handleTasks();

    navigator.geolocation.getCurrentPosition((position) => {
      getCurrentCity(
        position.coords.latitude,
        position.coords.longitude
      );
    });
  }, []);

  useEffect(() => {
    handleWeatherUpdate();
    handleForecastUpdate();
  }, [geo]);

  return (
    <>
      <div className="fixed -z-50 h-screen w-screen bg-orange-100 dark:bg-slate-900"></div>
      <Header date={date} tick={tick} />
      <div className="flex flex-col sm:flex-row">
        <Sidebar avatar={avatar} username={user.username} />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                weather={current}
                websites={websites}
                tasks={tasks}
                date={date}
                compareTasks={compareTasks}
                iconGetter={getDefaultIconUrl}
                onClick={handleWebsiteClick}
                onModify={handleModifyTask}
                onDelete={handleDeleteTask}
                toggleComplete={toggleComplete}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                toggleComplete={toggleComplete}
                date={date}
                compareTasks={compareTasks}
                onModify={handleModifyTask}
                onDelete={handleDeleteTask}
                onAdd={handleAddTask}
              />
            }
          />
          <Route
            path="/websites"
            element={
              <Websites
                websites={websites}
                iconGetter={getDefaultIconUrl}
                onClick={handleWebsiteClick}
                onModify={handleModifyWebsite}
                onDelete={handleDeleteWebsite}
                onAdd={handleAddWebsite}
              />
            }
          />
          <Route
            path="/weather"
            element={
              <Weather
                onLocationUpdate={handleLocationUpdate}
                weather={{
                  geo: geo,
                  current: current,
                  predictions: predictions
                }}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
