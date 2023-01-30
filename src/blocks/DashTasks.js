import React from "react";
import { Link } from "react-router-dom";
import TaskItem from "../components/TaskItem";

const DashTasks = (props) => {
  return (
    <div className="grid-item item-a">
      <div className="dash-header-box">
        <h2>My tasks</h2>
        <Link to="./tasks">See all</Link>
      </div>
      <div className="list-wrapper">
        {props.tasks
          .filter((task) => !task.complete)
          .sort(props.compareTasks)
          .slice(0, 3)
          .map((task) => (
            <TaskItem
              key={task.id}
              name={task.name}
              category={task.category}
              complete={task.complete}
              index={task.id}
              toggleComplete={props.toggleComplete}
              deadline_date={task.deadline_date}
              deadline_time={task.deadline_time}
              date={props.date}
            />
          ))}
      </div>
    </div>
  );
};

export default DashTasks;
